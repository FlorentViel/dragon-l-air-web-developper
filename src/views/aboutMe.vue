<template>
  <section id="about" class="container">
    <div>
      <div id="card" @mousemove="handleCardEffect" @mouseleave="resetCardEffect">
        <div>
          <h1 :class="theme.isDarkMode ? 'h1-dark' : 'h1-light'">&Agrave; propos de moi</h1>
        </div>
        <section :class="theme.isDarkMode ? 'main-bloc-dark' : 'main-bloc-light'" class="blocPresentation text-style">
          <div>
            
            <h2 :class="theme.isDarkMode ? 'h2-dark' : 'h2-light'" class="animate-text title h1">Florent Vieville <br> Développeur web freelance</h2>
            <div class="d-flex">
              <img src="./../assets/images/pictures/photo-profil-removebg.png" class="img-fluid photo-profil" alt="Photo de profil"/>
            </div>
            <section class="about-me-content">
              <article class="accordion-item" @click="toggleAccordion(0)" :class="{ active: activeIndex === 0 }">
                <h3 :class="theme.isDarkMode ? 'h3-dark' : 'h3-light'" class="accordion-header">
                  Qui suis-je ?
                  <font-awesome-icon 
                    :icon="['fas', 'arrow-down']" 
                    :class="[
                      theme.isDarkMode ? 'icon-dark' : 'icon-light',
                      { 'rotate': activeIndex === 0 }
                    ]" 
                    class="accordion-icon"
                  />
                </h3>
                <div class="accordion-content" :style="accordionStyle(0)">
                  <p :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'" class="paragraphe">
                    Je suis un développeur web freelance qui commence son activité. 
                    J'ai développé les outils nécessaires pour évoluer à mon compte et de continuer à développer mes compétences. 
                    Je suis d'un naturel calme, à l'écoute et curieux et je m'oriente vers le développement de site pour les entreprises, 
                    entrepreneurs ou indépendants qui aurait besoins de mettre en avant ses activités, produits et/ou services. 
                  </p>
                </div>
              </article>

              <article class="accordion-item" @click="toggleAccordion(1)" :class="{ active: activeIndex === 1 }">
                <h3 :class="theme.isDarkMode ? 'h3-dark' : 'h3-light'" class="accordion-header">
                  Mon parcours professionnel
                  <font-awesome-icon 
                    :icon="['fas', 'arrow-down']" 
                    :class="[
                      theme.isDarkMode ? 'icon-dark' : 'icon-light',
                      { 'rotate': activeIndex === 1 }
                    ]" 
                    class="accordion-icon"
                  />
                </h3>
                <div class="accordion-content" :style="accordionStyle(1)">
                  <p :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'" class="paragraphe">
                    J'ai développé des sites web pour des entreprises, entrepreneurs ou indépendants qui aurait besoins de mettre en avant ses activités, produits et/ou services. 
                    Je suis d'un naturel calme, à l'écoute et curieux et je m'oriente vers le développement de site pour les entreprises,
                    entrepreneurs ou indépendants qui aurait besoins de mettre en avant ses activités, produits et/ou services. 
                    Je suis d'un naturel calme, à l'écoute et curieux et je m'oriente vers le développement de site pour les entreprises,
                    entrepreneurs ou indépendants qui aurait besoins de mettre en avant ses activités, produits et/ou services. 
                  </p>
                </div>
              </article>

              <article class="accordion-item" @click="toggleAccordion(2)" :class="{ active: activeIndex === 2 }">
                <h3 :class="theme.isDarkMode ? 'h3-dark' : 'h3-light'" class="accordion-header">
                  Mes compétences
                  <font-awesome-icon 
                    :icon="['fas', 'arrow-down']" 
                    :class="[
                      theme.isDarkMode ? 'icon-dark' : 'icon-light',
                      { 'rotate': activeIndex === 2 }
                    ]" 
                    class="accordion-icon"
                  />
                </h3>
                <div class="accordion-content" :style="accordionStyle(2)">
                  <p :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'" class="paragraphe">
                    Je suis d'un naturel calme, à l'écoute et curieux et je m'oriente vers le développement de site pour les entreprises,
                    entrepreneurs ou indépendants qui aurait besoins de mettre en avant ses activités, produits et/ou services. 
                  </p>
                </div>
              </article>
            </section>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(['theme']);
const activeIndex = ref(0);

const toggleAccordion = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};

const accordionStyle = (index) => {
  const isActive = activeIndex.value === index;
  return {
    maxHeight: isActive ? '1000px' : '0',
    opacity: isActive ? '1' : '0',
    transform: `translateX(${isActive ? '0' : '-100%'})`,
  };
};
</script>

<style lang="scss" scoped>

.container {
  @include flex-center;
  flex-direction: column;
  width: 90vw;
  margin: 0 auto;
  padding: $spacing-2xl $spacing-xl;
  
  @media (max-width: $breakpoint-lg) {
    width: 95vw;
    padding: $spacing-xl $spacing-lg;
  }
  
  @media (max-width: $breakpoint-md) {
    width: 98vw;
    padding: $spacing-lg $spacing-md;
  }
}

.about-me-content {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: $spacing-md;
}

.h1-dark, .h1-light {
  padding-bottom: $spacing-xl;
  font-size: clamp(2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: $spacing-lg;
}

.blocPresentation {
  @include border-radius($border-radius-lg);
  padding: $spacing-3xl;
  transition: all $transition-duration ease-in-out;
  width: 100%;
  margin: 0 auto;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
  
  /* Effet de bordure lumineuse */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: $border-radius-lg;
    padding: 2px;
    background: $gradientLightPrimary;
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    opacity: 0.3;
    transition: opacity $transition-duration ease;
  }
  
  &:hover::before {
    opacity: 0.6;
  }
  
  .main-bloc-light & {
    background: rgba(255, 255, 255, 0.95);
    box-shadow: $shadowMedium;
    
    &::before {
      background: $gradientLightPrimary;
    }
  }
  
  .main-bloc-dark & {
    background: rgba(30, 41, 59, 0.95);
    box-shadow: $shadowMedium;
    
    &::before {
      background: $gradientDarkPrimary;
    }
  }
  
  @media (max-width: $breakpoint-lg) {
    padding: $spacing-xl;
    max-width: 100%;
  }
  
  @media (max-width: $breakpoint-md) {
    padding: $spacing-lg;
  }
}

.float-start {
  float: left;
}

.title {
  padding-bottom: $spacing-lg;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  text-align: center;
  margin-bottom: $spacing-md;
}

.photo-profil {
  width: 100%;
  max-width: 200px;
  margin: 0 auto $spacing-lg auto;
  border-radius: $border-radius;
  box-shadow: $shadowLight;
  
  @media (max-width: $breakpoint-md) {
    max-width: 150px;
  }
}

.paragraphe {
  text-align: justify;
  padding-top: $spacing-md;
  padding-bottom: $spacing-md;
  line-height: 1.7;
  width: 100%;
  font-size: 1.125rem;
  
  @media (max-width: $breakpoint-md) {
    font-size: 1rem;
    line-height: 1.6;
  }
}

.accordion-item {
  cursor: pointer;
  margin-bottom: $spacing-md;
  width: 100%;
  border-radius: $border-radius;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all $transition-duration ease;
  
  &:hover {
    border-color: rgba(116, 108, 247, 0.3);
    box-shadow: $shadowLight;
  }
}

.accordion-header {
  padding: $spacing-lg;
  position: relative;
  transition: all $transition-duration ease-in-out;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.125rem;
  font-weight: 600;
  
  &:hover {
    background-color: rgba($StartLightGradient, 0.1);
  }
  
  @media (max-width: $breakpoint-md) {
    padding: $spacing-md;
    font-size: 1rem;
  }
}

.accordion-content {
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  max-height: 0;
  opacity: 0;
  transform: translateX(-100%);
  width: 100%;
  padding: 0 $spacing-lg;
  
  @media (max-width: $breakpoint-md) {
    padding: 0 $spacing-md;
  }
}

.accordion-item.active {
  .accordion-header {
    background-color: rgba($StartLightGradient, 0.15);
  }

  .accordion-content {
    max-height: 1000px;
    opacity: 1;
    transform: translateX(0);
    padding: $spacing-lg;
    
    @media (max-width: $breakpoint-md) {
      padding: $spacing-md;
    }
  }
}

.accordion-icon {
  transition: transform 0.3s ease;
  font-size: 1.25rem;
  
  &.rotate {
    transform: rotate(180deg);
  }
}
</style>