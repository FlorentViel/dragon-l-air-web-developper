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
  margin-bottom: rem(100);
  margin-top: rem(10);
}

.service-container {
  @include flex-center;
  @include flex-direction(column);
  @include padding-x(rem(32));
}

.service-title {
  @include margin-y(rem(24));
  @include font-size-responsive(2rem, 3rem);
  text-align: center;
}

.service-content {
  @include flex-center;
  @include flex-direction(column);
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: rem(32);
}

.service-description {
  text-align: center;
  max-width: 800px;
  @include margin-y(rem(24));
  @include font-size-responsive(0.7rem, 1rem);
}

.service-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: rem(32);
  padding: rem(32);
}

.service-card {
  flex: 1 1 calc(33.333% - rem(32));
  min-width: 250px;
  max-width: 350px;
  @include border-radius($border-radius);
  @include box-shadow();
  padding: rem(24);
  transition: transform $transition-duration ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
}

.card-image {
  width: 100%;
  height: 200px;
  border: 1px solid rgba(60, 56, 56, 0.348);
  padding: rem(16);
  object-fit: cover;
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