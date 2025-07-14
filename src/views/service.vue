<template>
  <section id="service" key="service" class="service-container">
    <div class="service-content" :class="theme.isDarkMode ? 'main-bloc-dark' : 'main-bloc-light'">

      <h1 :class="theme.isDarkMode ? 'h1-dark' : 'h1-light'" class="service-title">Mes services</h1>


      <p :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'" class="service-description">
        En tant que développeur web passionné, je propose une gamme complète de services pour répondre à vos besoins numériques. De la conception de sites vitrines élégants à la création de boutiques en ligne performantes, je m'engage à fournir des solutions sur mesure qui reflètent votre vision et atteignent vos objectifs commerciaux.
      </p>
      <div class="service-cards">
        <router-link :to="{ name: 'ServiceDetail', params: { id: 'site-vitrine' }}" class="service-card" :class="theme.isDarkMode ? 'card-style-dark' : 'card-style-light'">
          <img :class="theme.isDarkMode ? 'img-size-dark' : 'img-size-light'" src="./../assets/images/pictures/site_vitrine.png" class="card-image" alt="Site internet">
          <div class="card-body">
            <h3 :class="theme.isDarkMode ? 'h2-dark' : 'h2-light'" class="card-title">Création de site internet</h3>
            <p :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'" class="card-text">Je conçois des sites web modernes, responsives et optimisés pour tous les appareils, en mettant l'accent sur l'expérience utilisateur et le design attractif.</p>
          </div>                
        </router-link>

        <router-link :to="{ name: 'ServiceDetail', params: { id: 'e-commerce' }}" class="service-card" :class="theme.isDarkMode ? 'card-style-dark' : 'card-style-light'">
          <img :class="theme.isDarkMode ? 'img-size-dark' : 'img-size-light'" src="./../assets/images/logos/logo-site/technologie.png" class="card-image" alt="Site E-commerce">
          <div class="card-body">
            <h3 :class="theme.isDarkMode ? 'h2-dark' : 'h2-light'" class="card-title">Site E-commerce</h3>
            <p :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'" class="card-text">Je développe des boutiques en ligne sécurisées et intuitives, intégrant des fonctionnalités avancées pour une expérience d'achat fluide et agréable.</p>
          </div>                
        </router-link>

        <router-link :to="{ name: 'ServiceDetail', params: { id: 'referencement' }}" class="service-card">
          <img :class="theme.isDarkMode ? 'img-size-dark' : 'img-size-light'" src="./../assets/images/logos/logo-site/technologie.png" class="card-image" alt="Maintenance et support">
          <div class="card-body">
            <h3 :class="theme.isDarkMode ? 'h2-dark' : 'h2-light'" class="card-title">Référencement naturel</h3>
            <p :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'" class="card-text">Je optimise vos sites web pour les moteurs de recherche, en utilisant des techniques de référencement naturel (SEO) avancées, pour augmenter leur visibilité et leur trafic organique.</p>
          </div>                
        </router-link>

        <router-link :to="{ name: 'ServiceDetail', params: { id: 'maintenance' }}" class="service-card" :class="theme.isDarkMode ? 'card-style-dark' : 'card-style-light'">
          <img :class="theme.isDarkMode ? 'img-size-dark' : 'img-size-light'" src="./../assets/images/logos/logo-site/technologie.png" class="card-image" alt="Maintenance et support">
          <div class="card-body">
            <h3 :class="theme.isDarkMode ? 'h2-dark' : 'h2-light'" class="card-title">Maintenance et support</h3>
            <p :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'" class="card-text">J'offre des services de maintenance continue et de support technique pour garantir la performance et la sécurité de votre site web à long terme.</p>
          </div>                
        </router-link>
      </div>

      <div><h2>Ma façon de travailler</h2></div>

    </div>
  </section>
</template>

<script setup>
defineProps(['theme', 'changeSection']);
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_utils.scss';
@import '@/assets/styles/_functions.scss';
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_global-text.scss';
@import '@/assets/styles/_media-queries.scss';

#service {
  margin-bottom: $spacing-3xl;
  margin-top: $spacing-lg;
}

.service-container {
  @include flex-center;
  @include flex-direction(column);
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

.service-title {
  margin: $spacing-xl 0;
  font-size: clamp(2rem, 5vw, 3rem);
  text-align: center;
  font-weight: 700;
}

.service-content {
  @include flex-center;
  @include flex-direction(column);
  width: 100%;
  margin: 0 auto;
  padding: $spacing-2xl;
  backdrop-filter: blur(20px);
  border-radius: $border-radius-xl;
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
    border-radius: $border-radius-xl;
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
  }
  
  @media (max-width: $breakpoint-md) {
    padding: $spacing-lg;
  }
}

.service-description {
  text-align: center;
  width: 100%;
  margin: $spacing-lg 0 $spacing-xl 0;
  font-size: 1.125rem;
  line-height: 1.7;
  color: $textSecondaryLight;
  
  .main-bloc-dark & {
    color: $textSecondaryDark;
  }
  
  @media (max-width: $breakpoint-md) {
    font-size: 1rem;
    line-height: 1.6;
  }
}

.service-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: $spacing-xl;
  padding: $spacing-xl 0;
  width: 100%;
  
  @media (max-width: $breakpoint-lg) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: $spacing-lg;
  }
  
  @media (max-width: $breakpoint-md) {
    grid-template-columns: 1fr;
    gap: $spacing-md;
  }
}

.service-card {
  @include border-radius($border-radius-lg);
  padding: $spacing-xl;
  transition: all $transition-duration ease-in-out;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  text-decoration: none;
  display: block;
  
  /* Effet de bordure lumineuse */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: $border-radius-lg;
    padding: 1px;
    background: $gradientLightSecondary;
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    opacity: 0.2;
    transition: opacity $transition-duration ease;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: $shadowHeavy;
    
    &::before {
      opacity: 0.5;
    }
  }
  
  .card-style-light & {
    background: rgba(255, 255, 255, 0.9);
    box-shadow: $shadowLight;
    
    &::before {
      background: $gradientLightSecondary;
    }
  }
  
  .card-style-dark & {
    background: rgba(51, 65, 85, 0.9);
    box-shadow: $shadowLight;
    
    &::before {
      background: $gradientDarkSecondary;
    }
  }
}

.card-image {
  width: 100%;
  height: 180px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: $spacing-md;
  object-fit: cover;
  @include border-radius($border-radius);
  margin-bottom: $spacing-lg;
  transition: all $transition-duration ease;
  
  &:hover {
    border-color: rgba(116, 108, 247, 0.4);
    transform: scale(1.02);
  }
}

.card-body {
  padding: 0;
}

.card-title {
  margin: $spacing-md 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: $textPrimaryLight;
  
  .main-bloc-dark & {
    color: $textPrimaryDark;
  }
  
  @media (max-width: $breakpoint-md) {
    font-size: 1.25rem;
  }
}

.card-text {
  margin: $spacing-sm 0;
  line-height: 1.6;
  color: $textParagraph;
  
  .main-bloc-dark & {
    color: $textParagraphDark;
  }
  
  @media (max-width: $breakpoint-md) {
    font-size: 0.95rem;
  }
}
</style>