<template>
  <section id="service" key="service" class="container mt-5">

    <div class="carousel">
      <transition-group name="slide" tag="div">
        <div v-if="index === currentSlide" v-for="(slide, index) in slides" :key="index" class="slide">
        {{ slide }}
      </div>
    </transition-group>
    <button @click="prevSlide">Prev</button>
    <button @click="nextSlide">Next</button>
  </div>

  </section>
</template>

    
  
  <script>
  import { ref } from 'vue';
  
  export default {
    props: ['theme', 'changeSection'],

    name: 'Carousel',
    setup() {
      const currentSlide = ref(0);
      const slides = ref(['Slide 1', 'Slide 2', 'Slide 3']); // Ajoutez vos propres contenus de diapositives ici
  
      const nextSlide = () => {
        currentSlide.value = (currentSlide.value + 1) % slides.value.length;
      };
  
      const prevSlide = () => {
        currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length;
      };
  
      return {
        currentSlide,
        slides,
        nextSlide,
        prevSlide
      };
    }
  };
  </script>
  
  <style scoped>
  .carousel {
    position: relative;
    overflow: hidden;
  }
  
  .slide {
    display: inline-block;
    width: 100%;
    transition: all 0.5s;
  }
  
  .slide-enter-active, .slide-leave-active {
    transition: transform 0.5s;
  }
  
  .slide-enter, .slide-leave-to {
    transform: translateX(100%);
  }
  
  .slide-enter-to, .slide-leave {
    transform: translateX(-100%);
  }
  

  </style>
  