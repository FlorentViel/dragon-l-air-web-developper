<template>
  <section id="service" key="service" class="service-container">
    <h1 :class="theme.isDarkMode ? 'h1-dark' : 'h1-light'" class="service-title">Mes services</h1>
    <div class="service-content" :class="theme.isDarkMode ? 'main-bloc-dark' : 'main-bloc-light'">
      <p :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'" class="service-description">
        En tant que développeur web passionné, je propose une gamme complète de services pour répondre à vos besoins numériques. De la conception de sites vitrines élégants à la création de boutiques en ligne performantes, je m'engage à fournir des solutions sur mesure qui reflètent votre vision et atteignent vos objectifs commerciaux.
      </p>
      <div class="service-cards">
        <div class="service-card" :class="theme.isDarkMode ? 'card-style-dark' : 'card-style-light'">
          <img :class="theme.isDarkMode ? 'img-size-dark' : 'img-size-light'" src="./../assets/images/pictures/site_vitrine.png" class="card-image" alt="Site internet">
          <div class="card-body">
            <h3 :class="theme.isDarkMode ? 'h2-dark' : 'h2-light'" class="card-title">Création de site internet</h3>
            <p :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'" class="card-text">Je conçois des sites web modernes, responsives et optimisés pour tous les appareils, en mettant l'accent sur l'expérience utilisateur et le design attractif.</p>
          </div>                
        </div>
        <div class="service-card" :class="theme.isDarkMode ? 'card-style-dark' : 'card-style-light'">
          <img :class="theme.isDarkMode ? 'img-size-dark' : 'img-size-light'" src="./../assets/images/logos/logo-site/technologie.png" class="card-image" alt="Site E-commerce">
          <div class="card-body">
            <h3 :class="theme.isDarkMode ? 'h2-dark' : 'h2-light'" class="card-title">Site E-commerce</h3>
            <p :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'" class="card-text">Je développe des boutiques en ligne sécurisées et intuitives, intégrant des fonctionnalités avancées pour une expérience d'achat fluide et agréable.</p>
          </div>                
        </div>
        <div class="service-card" :class="theme.isDarkMode ? 'card-style-dark' : 'card-style-light'">
          <img :class="theme.isDarkMode ? 'img-size-dark' : 'img-size-light'" src="./../assets/images/logos/logo-site/technologie.png" class="card-image" alt="Maintenance et support">
          <div class="card-body">
            <h3 :class="theme.isDarkMode ? 'h2-dark' : 'h2-light'" class="card-title">Maintenance et support</h3>
            <p :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'" class="card-text">J'offre des services de maintenance continue et de support technique pour garantir la performance et la sécurité de votre site web à long terme.</p>
          </div>                
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps(['theme', 'changeSection']);
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_utils.scss';

.service-container {
  @include flex-center;
  flex-direction: column;
  @include padding-x(rem(32));
}

.service-title {
  @include margin-y(rem(24));
}

.service-content {
  @include flex-center;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.service-description {
  text-align: center;
  max-width: 800px;
  @include margin-y(rem(24));
}

.service-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: rem(24);
}

.service-card {
  flex: 1 1 calc(33.333% - rem(24));
  min-width: 250px;
  max-width: 350px;
  @include border-radius($border-radius);
  @include box-shadow();
  padding: rem(16);
  transition: transform $transition-duration ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
}

.card-image {
  width: 100%;
  height: auto;
  @include border-radius($border-radius);
}

.card-body {
  padding: rem(16);
}

.card-title {
  @include margin-y(rem(16));
}

.card-text {
  @include margin-y(rem(8));
}

@include media-breakpoint('down', 'md') {
  .service-card {
    flex: 1 1 calc(50% - rem(24));
  }
}

@include media-breakpoint('down', 'sm') {
  .service-card {
    flex: 1 1 100%;
  }
}
</style>