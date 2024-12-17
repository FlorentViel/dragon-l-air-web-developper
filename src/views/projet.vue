<template>
  <section id="projet" key="projet" class="container mt-5">
    <h1 :class="theme.isDarkMode ? 'h1-dark' : 'h1-light'" class="text-center title h1">Projet</h1>
    <div class="carousel">
      <div class="arrow-btn">
        <button class="btn prev-button">
          <svg v-if="currentIndex === 0" :disabled="isPrevDisabled" xmlns="http://www.w3.org/2000/svg" width="47" height="66" viewBox="0 0 47 66" fill="none">
            <path d="M36.3622 1.99355C36.7338 1.6622 37.113 1.33101 37.5 1L36.3622 1.99355C10.3479 25.1943 22.0435 49.14 33.7649 61.0805L37.5 64.5C36.2859 63.5095 35.0252 62.3644 33.7649 61.0805L2 32L36.3622 1.99355Z" fill="#8E8E8E"/>
            <path d="M37.5 1C7.1 27 24.8333 54.1667 37.5 64.5L2 32L37.5 1Z" stroke="#FCFCFC" stroke-width="2"/>
          </svg>
          <svg  @click="prevSlide" id="arrow-prev" :class="theme.isDarkMode ? 'arrow-dark' : 'arrow-light'" v-if="currentIndex > 0 " xmlns="http://www.w3.org/2000/svg" width="47" height="66" viewBox="0 0 47 66" fill="none">
            <path d="M36.3622 1.99355C36.7338 1.6622 37.113 1.33101 37.5 1L36.3622 1.99355C10.3479 25.1943 22.0435 49.14 33.7649 61.0805L37.5 64.5C36.2859 63.5095 35.0252 62.3644 33.7649 61.0805L2 32L36.3622 1.99355Z" fill="black"/>
            <path d="M37.5 1C7.1 27 24.8333 54.1667 37.5 64.5L2 32L37.5 1Z" stroke-width="2"/>
          </svg>
        </button>
      </div>
      <div class="card-carousel" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div v-for="(card, index) in cards" :key="index" 
             class="card" 
             :class="[
               theme.isDarkMode ? 'cardDark' : 'cardLight',
               { 'active': index === currentIndex }
             ]">
          <div class="card-title"><h2>{{ card.title }}</h2></div>
          <img :src="card.image" class="card-img-top" :alt="card.title">
          <div class="card-body">
            <p class="card-text" :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'">{{ card.text }}</p>
            <a target="_blank" :href="card.link" class="btn" :class="theme.isDarkMode ? 'btn-dark-mode' : 'btn-light-mode navTextLight'">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="arrow-btn">
        <button class="btn next-button">
          <svg v-if="currentIndex === maxIndex" :disabled="isNextDisabled" xmlns="http://www.w3.org/2000/svg" width="47" height="66" viewBox="0 0 47 66" fill="none">
            <path d="M10.6378 1.99355C10.2662 1.6622 9.88704 1.33101 9.5 1L10.6378 1.99355C36.6521 25.1943 24.9565 49.14 13.2351 61.0805L9.5 64.5C10.7141 63.5095 11.9748 62.3644 13.2351 61.0805L45 32L10.6378 1.99355Z" fill="#8E8E8E"/>
            <path d="M9.5 1C39.9 27 22.1667 54.1667 9.5 64.5L45 32L9.5 1Z" stroke="#FCFCFC" stroke-width="2"/>
          </svg>
          <svg @click="nextSlide" id="arrow-next" :class="theme.isDarkMode ? 'arrow-dark' : 'arrow-light'" v-if="currentIndex < maxIndex" xmlns="http://www.w3.org/2000/svg" width="47" height="66" viewBox="0 0 47 66" fill="none">
            <path d="M2.13777 63.5065C1.76624 63.8378 1.38702 64.169 1 64.5L2.13777 63.5065C28.1521 40.3057 16.4565 16.36 4.73512 4.41948L1 1C2.21411 1.99046 3.47476 3.13556 4.73512 4.41948L36.5 33.5L2.13777 63.5065Z" fill="#8E8E8E"/>
            <path d="M1 64.5C31.4 38.5 13.6667 11.3333 1 1L36.5 33.5L1 64.5Z" stroke="#FCFCFC" stroke-width="2" />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps(['theme']);
const currentIndex = ref(0);
const cards = ref([
  {
    image: 'https://archeosub71.freeboxos.fr/wp-content/plugins/gutenverse/assets/img/img-placeholder.jpg',
    title: 'Page d\'accueil personnalisé?',
    text: 'Projet personnel de création d\'une page d\'accueil personnalisé avec heure intégré.',
    link: 'link-lien',
  },
  {
    image: 'front-end/src/assets/images/pictures/projets/placeholder-2.png',
    title: 'Wesh alors',
    text: 'Projet personnel de création d\'une page d\'accueil personnalisé avec heure intégré.'
  },
  // Ajoutez d'autres cartes ici...
]);

const maxIndex = computed(() => cards.value.length - 1);
const isNextDisabled = computed(() => currentIndex.value >= maxIndex.value);
const isPrevDisabled = computed(() => currentIndex.value === 0);

const nextSlide = () => {
  if (currentIndex.value < maxIndex.value) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0;
  }
};

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = maxIndex.value;
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';

.carousel {
  display: flex;
  width: 100%;
  position: relative;
}

.card-carousel {
  display: flex;
  width: 100%;
  overflow: hidden;
}


.card {
  flex: 0 0 100%;
  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
  opacity: 0;
  visibility: hidden;

  &.active {
    opacity: 1;
    visibility: visible;
  }
}


.card-title {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.card-body {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  gap: 1rem;

  & .btn {
    margin: 0 auto;
    width: auto;
    text-align: center;
  }
}

.card-img-top {
  max-width: 100%;
  max-height: 244px;
  display: flex;
  margin: 0 auto;
  object-fit: contain;
  justify-content: center;
  align-items: center;
}

.cardDark {
  background-color: $bgDark2;
}

/* arrow css */
.arrow-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: auto rem(10) ;
}

.prev-button {
  left: 10px;
}

.next-button {
  right: 10px;
}

.prev-button, .next-button {
  background: none;
  border: none;
  cursor: pointer;
}

.arrow-light, .arrow-dark {
  width: 47px;
  height: 66px;
}

.arrow-light {
  fill: $StartLightGradient; 
  stroke: $EndLightGradient;
}

.arrow-dark {
  fill: $EndDarkGradient; 
  stroke: $StartDarkGradient;
}

.arrow-dark:hover path, .arrow-light:hover path {
  transition: all 0.3s;
}

.arrow-dark:hover path {
  fill: $StartDarkGradient; 
  stroke: $EndDarkGradient;
}

.arrow-light:hover path {
  fill: $EndLightGradient;
  stroke: $StartLightGradient;
}

/* disabled arrow */
.arrow-disabled-light, .arrow-disabled-dark {
  opacity: 0.5;
  cursor: default;
}
</style>
