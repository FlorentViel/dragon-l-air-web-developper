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
          <svg @click="prevSlide" id="arrow-prev" :class="theme.isDarkMode ? 'arrow-dark' : 'arrow-light'" v-if="currentIndex > 0 " xmlns="http://www.w3.org/2000/svg" width="47" height="66" viewBox="0 0 47 66" fill="none">
            <!-- SVG content -->
          </svg>
        </button>
      </div>
      <div class="card-carousel" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div v-for="(card, index) in cards" :key="index" class="card" :class="theme.isDarkMode ? 'cardDark' : 'cardLight'">
          <img :src="card.image" class="card-img-top" :alt="card.title">
          <div class="card-body">
            <h5 class="card-title">{{ card.title }}</h5>
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
            <!-- SVG content -->
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
    image: 'front-end/src/assets/images/pictures/projets/placeholder-2.png',
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

<style scoped>
.carousel {
  display: flex;
  overflow: hidden;
  width: 100%;
  gap: 10px;
}

.card-carousel {
  width: 100%;
  transition: transform 0.5s;
}

.card-img-top {
  max-width: auto;
  max-height: 244px;
}

.cardDark {
  background-color: var(--bg-dark-2)
}

/* arrow css */
.arrow-btn {
  position: absolute;
  top: 50%;
  z-index: 1;
  opacity: 1;
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.arrow-light {
  fill: var(--StartLightGradient); 
  stroke : var(--EndLightGradient);
  transform: all 2s;
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
}

.arrow-dark {
  fill: var(--EndDarkGradient); 
  stroke : var(--StartDarkGradient);
  transform: all 2s;
}

.arrow-dark:hover path {
  fill: var(--StartDarkGradient); 
  stroke: var(--EndDarkGradient);
  transform: all 2s;
}

.arrow-light:hover path {
  fill: var(--EndLightGradient);
  stroke:var(--StartLightGradient);
  transform: all 2s;
}

/* disabel arrow */
.arrow-disabled-light {
  fill: var(--StartLightGradient);
  stroke: var(--EndLightGradient);
  opacity: 0.5;
}

.arrow-disabled-dark {
  fill: var(--EndDarkGradient);
  stroke: var(--StartDarkGradient);
  opacity: 0.5;
}
</style>