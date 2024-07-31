<template>
  <section id="service" key="service" class="container-md py-5">
    <h1 :class="theme.isDarkMode ? 'h1-dark' : 'h1-light'" class="text-center pb-5 h1">Mes services</h1>
    <div class="py-2" :class="theme.isDarkMode ? 'main-bloc-dark' : 'main-bloc-light'">
      <p :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Quisque interdum dui ac nisl congue vestibulum. Aliquam metus diam, 
      </p>
      <div class="container-md">
        <div class="card-group">
          <div class="card card-style" :class="theme.isDarkMode ? 'card-style-dark' : 'card-style-light'">
            <img :class="theme.isDarkMode ? 'img-size-dark' : 'img-size-light'" src="./../assets/images/pictures/site_vitrine.png" class="card-img-top img-size" alt="Site internet">
            <div class="card-body">
              <h3 :class="theme.isDarkMode ? 'h2-dark' : 'h2-light'" class="card-title py-4">Création de site internet</h3>
              <p :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'" class="card-text">Conception complète de site vitrine, boutique en ligne.</p>
            </div>                
          </div>
          <div class="card card-style" :class="theme.isDarkMode ? 'card-style-dark' : 'card-style-light'">
            <img :class="theme.isDarkMode ? 'img-size-dark' : 'img-size-light'" src="./../assets/images/logos/logo-site/technologie.png" class="card-img-top img-size" alt="...">
            <div class="card-body">
              <h3 class="card-title py-4">Site E-commerce</h3>
              <p :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'" class="card-text">Lorem ipsumue interdum dui acam metus diam,</p>
            </div>                
          </div>
          <div class="card card-style" :class="theme.isDarkMode ? 'card-style-dark' : 'card-style-light'">
            <img :class="theme.isDarkMode ? 'img-size-dark' : 'img-size-light'" src="./../assets/images/logos/logo-site/technologie.png" class="card-img-top img-size" alt="...">
            <div class="card-body">
              <h3 :class="theme.isDarkMode ? 'h2-dark' : 'h2-light'" class="card-title card-title py-4">Site vitrine</h3>
              <p :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'" class="card-text">Lorem ipsumue interdum dui acam metus diam,</p>
            </div>                
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['theme', 'changeSection']
};
</script>

<style lang="scss" scoped>
@import '@/assets/_variables.scss';

.container-md {
  @include flex-center;
  flex-direction: column;
  padding: 2rem;
}



.card-style {
  @include border-radius($border-radius);
  @include box-shadow();
  padding: 1rem;
  transition: transform $transition-duration ease-in-out;
}

.card-style-dark {
  background-color: $bgDark2;
  color: $white;
}

.card-style-light {
  background-color: $bgLight2;
  color: $black;
}

.card-img-top {
  width: 100%;
  height: auto;
}
</style>