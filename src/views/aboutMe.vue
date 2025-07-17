<template>
  <section id="about" class="container">
    <div>
      <div id="card">
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
                      Passionné par le développement web depuis plusieurs années, je suis Florent Vieville, un développeur freelance basé en France. Mon parcours m'a amené à découvrir ma passion pour la création d'expériences web exceptionnelles.

                    D'un naturel curieux et toujours en quête d'apprentissage, je combine créativité et rigueur technique pour donner vie à vos projets digitaux. Mon approche se caractérise par une écoute attentive de vos besoins et une communication transparente tout au long du processus de développement.

                    Je crois fermement que chaque projet web raconte une histoire unique, et je m'engage à créer des solutions sur mesure qui reflètent parfaitement votre vision et vos objectifs.
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
                    Mon parcours dans le développement web a débuté par une formation solide, suivie d'expériences pratiques dans divers projets. Actuellement en création d'entreprise en tant que développeur web freelance.
                  </p>
                  <p :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'" class="paragraphe">
                    <strong>Formation :</strong><br>
                    • Formation SEO : LIVEMENTOR Paris (septembre 2024)<br>
                    • Management et entreprenariat : EME-BGE Beauvais (juin 2024)<br>
                    • Titre pro développeur web et web mobile : AFCI Saint-Quentin (2021-2022)<br>
                    • Certificat développeur et intégrateur web : WEBFORCE 3 Lille (2018)
                  </p>
                  <p :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'" class="paragraphe">
                    <strong>Expériences professionnelles :</strong><br>
                    • Développeur web et web mobile : SOS-CONSOLES (2022) - Conception de sites web<br>
                    • Développeur web : Rose & Piment Saint-Quentin (2021) - Refonte graphique de site web<br>
                    • Agent logistique : Gedimat Saint-Quentin (2020) - Stockage et chargement<br>
                    • Apprenti Agent logistique : GKN Ribemont (2013-2015) - Réception, préparation de commandes, expédition
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
                    Je maîtrise un ensemble de technologies et de compétences pour créer des solutions web complètes et performantes :
                  </p>
                  <p :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'" class="paragraphe">
                    <strong>Langages de programmation :</strong><br>
                    • HTML 5, CSS 3, JavaScript<br>
                    • PHP, SQL<br>
                    • Vue 3.js, Symfony<br>
                    • Node.js, Bootstrap, Sass
                  </p>
                  <p :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'" class="paragraphe">
                    <strong>Outils et logiciels :</strong><br>
                    • Cursor (éditeur de code)<br>
                    • Looping, Figma<br>
                    • GitHub, Pack Office<br>
                    • Méthodes de développement web
                  </p>
                  <p :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'" class="paragraphe">
                    <strong>Compétences générales :</strong><br>
                    • À l'écoute des besoins clients<br>
                    • Élaboration du cahier des charges<br>
                    • Création de maquettes<br>
                    • Conception de sites web<br>
                    • Modélisation de bases de données<br>
                    • Implémentation de fonctionnalités<br>
                    • Analyse et correction de bugs
                  </p>
                </div>
              </article>

              <article class="accordion-item" @click="toggleAccordion(3)" :class="{ active: activeIndex === 3 }">
                <h3 :class="theme.isDarkMode ? 'h3-dark' : 'h3-light'" class="accordion-header">
                  Ma philosophie de travail
                  <font-awesome-icon 
                    :icon="['fas', 'arrow-down']" 
                    :class="[
                      theme.isDarkMode ? 'icon-dark' : 'icon-light',
                      { 'rotate': activeIndex === 3 }
                    ]" 
                    class="accordion-icon"
                  />
                </h3>
                <div class="accordion-content" :style="accordionStyle(3)">
                  <p :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'" class="paragraphe">
                    Je privilégie une approche collaborative basée sur la transparence et la communication. Chaque projet commence par une phase de découverte approfondie pour comprendre vos objectifs, votre audience et vos contraintes.
                  </p>
                  <p :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'" class="paragraphe">
                    <strong>Mes valeurs :</strong><br>
                    • Qualité et excellence technique<br>
                    • Communication transparente<br>
                    • Respect des délais<br>
                    • Support post-livraison<br>
                    • Évolutivité des solutions
                  </p>
                </div>
              </article>

              <article class="accordion-item" @click="toggleAccordion(4)" :class="{ active: activeIndex === 4 }">
                <h3 :class="theme.isDarkMode ? 'h3-dark' : 'h3-light'" class="accordion-header">
                  Pourquoi me choisir ?
                  <font-awesome-icon 
                    :icon="['fas', 'arrow-down']" 
                    :class="[
                      theme.isDarkMode ? 'icon-dark' : 'icon-light',
                      { 'rotate': activeIndex === 4 }
                    ]" 
                    class="accordion-icon"
                  />
                </h3>
                <div class="accordion-content" :style="accordionStyle(4)">
                  <p :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'" class="paragraphe">
                    En tant que développeur freelance débutant, je vous offre :
                  </p>
                  <p :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'" class="paragraphe">
                    • Une relation directe et personnalisée<br>
                    • Une flexibilité totale dans la gestion de votre projet<br>
                    • Des tarifs compétitifs sans intermédiaires<br>
                    • Un suivi personnalisé et une maintenance continue<br>
                    • Une expertise technique pointue et à jour
                  </p>
                  <p :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'" class="paragraphe">
                    Mon statut de débutant me permet d'être particulièrement attentif à vos besoins et de consacrer tout le temps nécessaire à la réussite de votre projet.
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
    pointer-events: none !important;
    z-index: -1;
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
  pointer-events: auto !important;
  z-index: 10;
  position: relative;
  
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