<template>
  <section id="projet" key="projet" class="container mt-5">
    <h1 :class="theme.isDarkMode ? 'h1-dark' : 'h1-light'" class="text-center title h1">Mes réalisations</h1>
    <div class="carousel">
      <div class="arrow-btn">
        <button class="btn prev-button" :disabled="isPrevDisabled" @click="prevSlide">
          <svg v-if="isPrevDisabled" xmlns="http://www.w3.org/2000/svg" width="47" height="66" viewBox="0 0 47 66" fill="none">
            <path d="M36.3622 1.99355C36.7338 1.6622 37.113 1.33101 37.5 1L36.3622 1.99355C10.3479 25.1943 22.0435 49.14 33.7649 61.0805L37.5 64.5C36.2859 63.5095 35.0252 62.3644 33.7649 61.0805L2 32L36.3622 1.99355Z" fill="#8E8E8E"/>
            <path d="M37.5 1C7.1 27 24.8333 54.1667 37.5 64.5L2 32L37.5 1Z" stroke="#FCFCFC" stroke-width="2"/>
          </svg>
          <svg v-else id="arrow-prev" :class="theme.isDarkMode ? 'arrow-dark' : 'arrow-light'" xmlns="http://www.w3.org/2000/svg" width="47" height="66" viewBox="0 0 47 66" fill="none">
            <path d="M36.3622 1.99355C36.7338 1.6622 37.113 1.33101 37.5 1L36.3622 1.99355C10.3479 25.1943 22.0435 49.14 33.7649 61.0805L37.5 64.5C36.2859 63.5095 35.0252 62.3644 33.7649 61.0805L2 32L36.3622 1.99355Z" fill="black"/>
            <path d="M37.5 1C7.1 27 24.8333 54.1667 37.5 64.5L2 32L37.5 1Z" stroke-width="2"/>
          </svg>
        </button>
      </div>
      <div class="card-carousel">
        <div v-for="(card, index) in cards" :key="index" 
             class="card" 
             :class="[theme.isDarkMode ? 'cardDark' : 'cardLight', { 'active': index === currentIndex }]"
             :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
          <div class="card-title"><h2>{{ card.title }}</h2></div>
          <img :src="card.image" class="card-img-top" :alt="card.title">
          <div class="card-body">
            <p class="card-text" :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'">{{ card.text }}</p>
            <a target="_blank" :href="card.link" class="btn" :class="theme.isDarkMode ? 'btn-dark-mode' : 'btn-light-mode navTextLight'">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="arrow-btn">
        <button class="btn next-button" :disabled="isNextDisabled" @click="nextSlide">
          <svg v-if="isNextDisabled" xmlns="http://www.w3.org/2000/svg" width="47" height="66" viewBox="0 0 47 66" fill="none">
            <path d="M10.6378 1.99355C10.2662 1.6622 9.88704 1.33101 9.5 1L10.6378 1.99355C36.6521 25.1943 24.9565 49.14 13.2351 61.0805L9.5 64.5C10.7141 63.5095 11.9748 62.3644 13.2351 61.0805L45 32L10.6378 1.99355Z" fill="#8E8E8E"/>
            <path d="M9.5 1C39.9 27 22.1667 54.1667 9.5 64.5L45 32L9.5 1Z" stroke="#FCFCFC" stroke-width="2"/>
          </svg>
          <svg v-else id="arrow-next" :class="theme.isDarkMode ? 'arrow-dark' : 'arrow-light'" xmlns="http://www.w3.org/2000/svg" width="47" height="66" viewBox="0 0 47 66" fill="none">
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
    text: 'Projet personnel de création d\'une page d\'accueil personnalisé avec heure intégré.',
    link: 'link-lien',
  },
  // Ajoutez d'autres cartes ici...
]);

const maxIndex = computed(() => cards.value.length - 1);
const isNextDisabled = computed(() => currentIndex.value >= maxIndex.value);
const isPrevDisabled = computed(() => currentIndex.value === 0);

const nextSlide = () => {
  if (currentIndex.value < maxIndex.value) {
    currentIndex.value++;
  }
};

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';

#projet {
  padding: $spacing-2xl $spacing-xl;
  width: 90vw;
  margin: 0 auto;
  
  @media (max-width: $breakpoint-lg) {
    width: 95vw;
    padding: $spacing-xl $spacing-lg;
  }
  
  @media (max-width: $breakpoint-md) {
    width: 98vw;
    padding: $spacing-lg $spacing-md;
  }
}

.title {
  font-size: clamp(2rem, 5vw, 3rem);
  text-align: center;
  font-weight: 700;
  margin-bottom: $spacing-xl;
  color: $textPrimaryLight;
  
  .main-bloc-dark & {
    color: $textPrimaryDark;
  }
}

.carousel {
  display: flex;
  width: 100%;
  position: relative;
  margin-top: $spacing-lg;
  border-radius: $border-radius-xl;
  overflow: hidden;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.95);
  box-shadow: $shadowMedium;
  
  .main-bloc-dark & {
    background: rgba(30, 41, 59, 0.95);
    border-color: rgba(255, 255, 255, 0.1);
  }
}

.card-carousel {
  display: flex;
  width: 100%;
  overflow: hidden;
  transition: transform 0.5s ease-in-out;
  padding: $spacing-xl;
  
  @media (max-width: $breakpoint-lg) {
    padding: $spacing-lg;
  }
  
  @media (max-width: $breakpoint-md) {
    padding: $spacing-md;
  }
}

.card {
  flex: 0 0 100%;
  transition: all 0.5s ease-in-out;
  opacity: 0;
  visibility: hidden;
  border-radius: $border-radius-lg;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: $shadowLight;
  
  .main-bloc-dark & {
    background: rgba(51, 65, 85, 0.9);
    border-color: rgba(255, 255, 255, 0.1);
  }

  &.active {
    opacity: 1;
    visibility: visible;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: $shadowMedium;
  }
}

.card-title {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: $spacing-lg;
  
  h2 {
    font-size: 1.75rem;
    font-weight: 600;
    color: $textPrimaryLight;
    text-align: center;
    
    .main-bloc-dark & {
      color: $textPrimaryDark;
    }
    
    @media (max-width: $breakpoint-md) {
      font-size: 1.5rem;
    }
  }
}

.card-body {
  display: flex;
  flex-direction: column;
  padding: $spacing-xl;
  gap: $spacing-lg;

  & .btn {
    margin: 0 auto;
    width: auto;
    text-align: center;
    padding: $spacing-md $spacing-lg;
    border-radius: $border-radius;
    font-weight: 600;
    transition: all $transition-duration ease;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: $shadowLight;
    }
  }
  
  @media (max-width: $breakpoint-lg) {
    padding: $spacing-lg;
  }
  
  @media (max-width: $breakpoint-md) {
    padding: $spacing-md;
    gap: $spacing-md;
  }
}

.card-img-top {
  max-width: 100%;
  max-height: 300px;
  object-fit: contain;
  display: block;
  margin: 0 auto;
  border-radius: $border-radius;
  padding: $spacing-md;
  
  @media (max-width: $breakpoint-md) {
    max-height: 250px;
  }
}

.card-text {
  text-align: center;
  line-height: 1.6;
  color: $textSecondaryLight;
  font-size: 1.125rem;
  
  .main-bloc-dark & {
    color: $textSecondaryDark;
  }
  
  @media (max-width: $breakpoint-md) {
    font-size: 1rem;
  }
}

.cardDark {
  background-color: rgba(51, 65, 85, 0.9);
}

/* arrow css */
.arrow-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: auto $spacing-md;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: $breakpoint-md) {
    margin: auto $spacing-sm;
  }
}

.prev-button {
  left: $spacing-md;
}

.next-button {
  right: $spacing-md;
}

.prev-button, .next-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: $spacing-sm;
  border-radius: $border-radius;
  transition: all $transition-duration ease;
  
  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.1);
    transform: scale(1.1);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

.arrow-light, .arrow-dark {
  width: 40px;
  height: 56px;
  transition: all $transition-duration ease;
  
  @media (max-width: $breakpoint-md) {
    width: 32px;
    height: 45px;
  }
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
</style>
