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
      >
        <h1
          :class="theme.isDarkMode ? 'h1-dark' : 'h1-light'"
          class="content-title animate-text title"
          :style="{ '--delay': '0.5s' }"
        >
          Dragon's lair
        </h1>
        <h1
          :class="theme.isDarkMode ? 'h2-dark' : 'h2-light'"
          class="content-title animate-text"
          :style="{ '--delay': '0.7s' }"
        >
          Développeur web et web
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
            <router-link :to="{ name: 'aboutMe' }">
              <button
                type="button"
                :class="theme.isDarkMode ? 'btn-dark-mode' : 'btn-light-mode'"
                class="btn"
              >
                À propos de moi
              </button>
            </router-link>
          </div>
          <div class="animate-text" :style="{ '--delay': '0.13s' }">
            <router-link :to="{ name: 'service' }">
              <button
                type="button"
                :class="theme.isDarkMode ? 'btn-dark-mode' : 'btn-light-mode'"
                class="btn"
              >
                Mes services
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { images } from '@/config/images';

export default {
  props: ['theme', 'selectedSection'],
  data() {
    return {
      images,
    };
  },
  methods: {
    toggleThemeAndEmit() {
      this.theme.toggleTheme();
      this.$emit('toggleTheme');
    },
    handlecontentEffect(event) {
      const content = document.getElementById("content");
      const containerWidth = content.parentElement.offsetWidth;
      const contentWidth = (58.333333 / 100) * containerWidth;
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

      const onMouseMove = (event) => {
        const rotateX = getRotateDeg(event.clientY - content.getBoundingClientRect().top);
        const rotateY = getRotateDeg(event.clientX - content.getBoundingClientRect().left);
        content.style.transform = `rotateX(${rotateX}) rotateY(${rotateY})`;
      };

      const onMouseLeave = () => {
        content.style.transform = `none`;
      };

      content.addEventListener("mousemove", onMouseMove);
    },

    resetcontentEffect() {
      const content = document.getElementById("content");
      content.style.transform = 'none';
    },
  },
  mounted() {
    const content = document.getElementById("content");
    content.addEventListener("mousemove", this.handlecontentEffect);
    content.addEventListener("mouseleave", this.handlecontentEffect);
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/_variables.scss';

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
  padding: dynamic-padding(1); // 1rem
  overflow-x: hidden;
}

.welcome-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: dynamic-padding(2); // 2rem
}

.content-body {
  gap: dynamic-padding(1.2);
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
}



#content {
  flex: 1 1 60%;
  padding: dynamic-padding(2);
  border-radius: 1.5rem;
  transition: 0.5s;
  position: relative;
  height: max-content;
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
  padding-top: dynamic-padding(1); // 1rem
}

.btn {
  padding: dynamic-padding(0.5) dynamic-padding(1); // 0.5rem 1rem
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 1.1rem;
}

.btn-dark-mode {
  background-color: $borderDarkGardient;
  color: $white;
}

.btn-light-mode {
  background-color: $borderLightGardient;
  color: $white;
}
</style>