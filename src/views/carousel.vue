<template>
  <section class="carousel-container">
    <h1 :class="theme.isDarkMode ? 'h1-dark' : 'h1-light'" class="carousel-title">Mes Services</h1>
    <div class="carousel">
      <button @click="prevSlide" class="carousel-button prev" :class="theme.isDarkMode ? 'button-dark' : 'button-light'">
        <svg :class="theme.isDarkMode ? 'arrow-dark' : 'arrow-light'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
        </svg>
      </button>
      <div class="carousel-content">
        <transition-group name="slide" tag="div">
          <div v-for="(slide, index) in slides" :key="index" v-show="index === currentSlide" class="slide">
            <img :src="slide.image" :alt="slide.title" class="slide-image">
            <div class="slide-text">
              <h2>{{ slide.title }}</h2>
              <p>{{ slide.description }}</p>
            </div>
          </div>
        </transition-group>
      </div>
      <button @click="nextSlide" class="carousel-button next" :class="theme.isDarkMode ? 'button-dark' : 'button-light'">
        <svg :class="theme.isDarkMode ? 'arrow-dark' : 'arrow-light'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
        </svg>
      </button>
    </div>
    <div class="carousel-indicators">
      <span v-for="(slide, index) in slides" :key="index" 
            @click="goToSlide(index)"
            :class="{ active: index === currentSlide, 'indicator-dark': theme.isDarkMode, 'indicator-light': !theme.isDarkMode }">
      </span>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps(['theme']);

const currentSlide = ref(0);
const slides = ref([
  { 
    title: 'Développement Web', 
    description: 'Création de sites web modernes et responsives', 
    image: 'https://archeosub71.freeboxos.fr/wp-content/plugins/gutenverse/assets/img/img-placeholder.jpg'
  },
  { 
    title: 'Design UX/UI', 
    description: 'Conception d\'interfaces utilisateur intuitives', 
    image: '/path/to/ux-ui-image.jpg'
  },
  { 
    title: 'SEO', 
    description: 'Optimisation pour les moteurs de recherche', 
    image: '/path/to/seo-image.jpg'
  }
]);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length;
};

const goToSlide = (index) => {
  currentSlide.value = index;
};

let autoSlideInterval;

onMounted(() => {
  autoSlideInterval = setInterval(nextSlide, 5000);
});

onUnmounted(() => {
  clearInterval(autoSlideInterval);
});
</script>

<style lang="scss" scoped>
.carousel-container {
  @include flex-center;
  flex-direction: column;
  width: 90vw;
  margin: 0 auto;
  
  @media (max-width: $breakpoint-lg) {
    width: 95vw;
  }
  
  @media (max-width: $breakpoint-md) {
    width: 98vw;
  }
}

.carousel-title {
  margin-bottom: 1rem;
}

.carousel {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  @include border-radius(10px);
  @include box-shadow();
  display: flex;
}

.carousel-content {
  height: 100%;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slide-text {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 10;
  padding: 0.5rem;

  &.prev { left: 0.5rem; }
  &.next { right: 0.5rem; }

  svg {
    width: 2rem;
    height: 2rem;
  }
}

.arrow-light {
  fill: var(--StartLightGradient);
}

.arrow-dark {
  fill: var(--EndDarkGradient);
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  margin-top: 1rem;

  span {
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
    margin: 0 0.25rem;
    cursor: pointer;

    &.active {
      background-color: var(--StartDarkGradient);
    }
  }
}
</style>