<template>
  <section id="about" class="container">
    <div>
      <div id="card" @mousemove="handleCardEffect" @mouseleave="resetCardEffect">
        <div>
          <h1 :class="theme.isDarkMode ? 'h1-dark' : 'h1-light'">&Agrave; propos de moi</h1>
        </div>
        <div :class="theme.isDarkMode ? 'main-bloc-dark' : 'main-bloc-light'" class="blocPresentation text-style">
          <div>
            <h1 :class="theme.isDarkMode ? 'h2-dark' : 'h2-light'" class="animate-text title h1">Florent Vieville <br> Développeur web freelance</h1>
            <div class="float-start">
              <img src="./../assets/images/pictures/photo-profil-removebg.png" class="img-fluid photo-profil" alt="Photo de profil"/>
            </div>
            <p :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'" class="paragraphe">
              Je suis un développeur web freelance qui commence son activité. 
              J'ai développé les outils nécessaires pour évoluer à mon compte et de continuer à développer mes compétences. 
              Je suis d'un naturel calme, à l'écoute et curieux et je m'oriente vers le développement de site pour les entreprises , 
              entrepreneurs ou indépendants qui aurait besoins de mettre en avant ses activités , produits et/ou services. 
            </p>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps(['theme']);

</script>

<style lang="scss" scoped>

.container {
  @include flex-center;
  flex-direction: column;
  padding: rem(32) ;
}

.h1-dark, .h1-light {
  padding-bottom: rem(16) ;
}

.blocPresentation {
  @include border-radius($border-radius);
  @include box-shadow();
  padding: rem(16) rem(32);
  transition: transform $transition-duration ease-in-out;
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
}
</style>