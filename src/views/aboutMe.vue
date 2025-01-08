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
  padding: rem(32) ;
}

.about-me-content {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: rem(16);
}

.h1-dark, .h1-light {
  padding-bottom: rem(16) ;
}

.blocPresentation {
  @include border-radius($border-radius);
  @include box-shadow();
  padding: rem(16) rem(32);
  transition: transform $transition-duration ease-in-out;
  width: 100%;
}

.float-start {
  float: left;
}

.title {
  padding-bottom: rem(32);
}

.photo-profil {
  width: 100%;
  max-width: rem(150);
  margin: 0 auto;
}

.paragraphe {
  text-align: justify;
  padding-top: rem(16);
  padding-bottom: rem(16);
  line-height: rem(32);
  width: 100%;
}

.accordion-item {
  cursor: pointer;
  margin-bottom: rem(16);
  width: 100%;
}

.accordion-header {
  padding: rem(8) rem(16);
  position: relative;
  transition: all $transition-duration ease-in-out;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: rgba($StartLightGradient, 0.1);
  }
}

.accordion-content {
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  max-height: 0;
  opacity: 0;
  transform: translateX(-100%);
  width: 100%;
}

.accordion-item.active {
  .accordion-header {
    background-color: rgba($StartLightGradient, 0.1);
  }

  .accordion-content {
    max-height: 1000px;
    opacity: 1;
    transform: translateX(0);
  }
}

.accordion-icon {
  transition: transform 0.3s ease;
}

.rotate {
  transform: rotate(180deg);
}
</style>