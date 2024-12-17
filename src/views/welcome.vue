<template>
  <section id="welcome" class="section container">
    <div class="welcome-content">
      <div class="profile-picture-container">
        <!-- Profil-picture -->
        <img
          id="profil_picture"
          :class="theme.isDarkMode ? 'photo-dark' : 'photo-light'"
          class="img-fluid"
          :src="theme.isDarkMode ? images.nightLogo : images.lightLogo"
          alt="Photo de profil"
        />
      </div>
      <!-- main-bloc -->
      <div
        id="content"
        class="content-body"
        :class="theme.isDarkMode ? 'main-bloc-dark' : 'main-bloc-light'"
        @mousemove="handlecontentEffect"
        @mouseleave="resetcontentEffect"
        ref="content"
      >
        <h1
          :class="theme.isDarkMode ? 'h1-dark' : 'h1-light'"
          class="content-title animate-text title"
          :style="{ '--delay': '0.5s' }"
        >
          Dragon's Lair
        </h1>
        <h1
          :class="theme.isDarkMode ? 'h2-dark' : 'h2-light'"
          class="content-title animate-text"
          :style="{ '--delay': '0.7s' }"
        >
          Web Developper
        </h1>
        <p
          :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'"
          class="animate-text text-style"
          :style="{ '--delay': '0.9s' }"
        >
          Passionné par le web avec une expértise en
          <strong class="text-style">front-end</strong> et
          <strong class="text-style">back-end</strong>.
        </p>
        <div class="button-container">
          <div class="animate-text" :style="{ '--delay': '0.13s' }">
            <Button :to="{ name: 'aboutMe' }" :theme="theme">
              À propos de moi
            </Button>
          </div>
          <div class="animate-text" :style="{ '--delay': '0.13s' }">
            <Button :to="{ name: 'service' }" :theme="theme">
              Mes services
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { images } from '@/config/images';
import Button from '@/components/Button.vue';

const props = defineProps(['theme', 'selectedSection']);
const content = ref(null);

const handlecontentEffect = (event) => {
  const contentWidth = content.value.offsetWidth;
  const degIncrement = 4;

  const getRotateDeg = (input) => {
    if (input < contentWidth * 0.33) {
      return `-${degIncrement * 3}deg`;
    } else if (input >= contentWidth * 0.33 && input < contentWidth * 0.66) {
      return `-${degIncrement}deg`;
    } else if (input >= contentWidth * 0.66 && input < contentWidth * 0.5) {
      return "0deg";
    } else if (input >= contentWidth * 0.5 && input < contentWidth * 0.33) {
      return `${degIncrement}deg`;
    } else {
      return `${degIncrement * 3}deg`;
    }
  };

  const rotateX = getRotateDeg(event.clientY - content.value.getBoundingClientRect().top);
  const rotateY = getRotateDeg(event.clientX - content.value.getBoundingClientRect().left);
  content.value.style.transform = `rotateX(${rotateX}) rotateY(${rotateY})`;
};

const resetcontentEffect = () => {
  content.value.style.transform = `none`;
};

onMounted(() => {
  content.value.addEventListener("mousemove", handlecontentEffect);
  content.value.addEventListener("mouseleave", resetcontentEffect);
});
</script>

<style lang="scss" scoped>
/* Animation css */
.animate-text {
  opacity: 0; /* Set initial opacity to 0 */
  animation: slideInFromRight 1.6s ease-out forwards; /* Add 'forwards' to keep the end state of the animation */
  animation-delay: var(--delay);
}

/* Animate router btn */
.animate-text .btn {
  opacity: 0; /* Set initial opacity to 0 */
  animation: slideInFromRight 1s ease-out forwards; /* Add 'forwards' to keep the end state of the animation */
  animation-delay: var(--delay);
  animation-delay: 1.31s;
}

@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Welcome bloc css */
#welcome {
  padding: rem(16); // 1rem
  overflow-x: hidden;
}

.welcome-content {
  @include flex-row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: rem(32); // 2rem
}

.content-body {
  gap: rem(19);
  @include flex-column;
}

.profile-picture-container {
  flex: 1 1 10%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#profil_picture {
  border-radius: 50%;
  @media (max-width: 768px) {
    width: 250px;
    margin-bottom: rem(32); // 2rem
  }
}

#content {
  flex: 1 1 60%;
  padding: rem(32);
  border-radius: 1.5rem;
  transition: 0.5s;
  position: relative;
  height: max-content;

  @media (max-width: 768px) {
    width: 100%;
    flex: 1 1 100%;
  }
}

.content-title {
  text-align: center;
}

.text-style {
  font-weight: bold;
  text-align: center;
}

.button-container {
  display: flex;
  justify-content: space-evenly;
  padding-top: rem(16); // 1rem
}
</style>