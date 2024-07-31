<template>
  <section id="about" class="container d-grid py-2">
    <div>
      <div id="card" class="gy-2 mb-3 col-12" @mousemove="handleCardEffect" @mouseleave="resetCardEffect">
        <div>
          <h1 :class="theme.isDarkMode ? 'h1-dark' : 'h1-light'" class="m-3 py-4 h1 m-auto text-center">&Agrave; propos de moi</h1>
        </div>
        <div :class="theme.isDarkMode ? 'main-bloc-dark' : 'main-bloc-light'" class="blocPresentation text-style">
          <div>
            <h1 :class="theme.isDarkMode ? 'h2-dark' : 'h2-light'" class="py-5 animate-text title h1 font-weight-bold text-center">Florent Vieville</h1>
            <div class="w-sm-25 float-sm-start">
              <img src="./../assets/images/pictures/photo-profil-removebg.png" class="img-fluid photo-profil" alt="Photo de profil"/>
            </div>
            <p :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'" class="paragraphe text-justify pb-4">
              Bonjour ! Je m'appelle Florent, développeur web et webmobile freelance qui commence son activité. 
              J'étais été formé auprès de différent centre de formation comme Webforce 3 et AFCI 
              j'ai développé les outils nécessaires pour évoluer à mon compte et de continuer à développer mes compétences. 
              Je suis d'un naturel calme, à l'écoute et curieux et je m'oriente vers le développement de site pour les entreprises , 
              entrepreneurs ou indépendants qui aurait besoins de mettre en avant ses activités , produits et/ou services.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['theme'],
  methods: {
    toggleThemeAndEmit() {
      this.theme.toggleTheme();
      this.$emit('toggleTheme');
    },
    handleCardEffect(event) {
      const card = document.getElementById("card");
      const containerWidth = card.parentElement.offsetWidth;
      const cardWidth = (58.333333 / 100) * containerWidth;
      const degIncrement = 4;

      const getRotateDeg = (input) => {
        if (input < cardWidth * 0.33) {
          return `-${degIncrement * 3}deg`;
        } else if (input >= cardWidth * 0.33 && input < cardWidth * 0.66) {
          return `-${degIncrement}deg`;
        } else if (input >= cardWidth * 0.66 && input < cardWidth * 0.5) {
          return "0deg";
        } else if (input >= cardWidth * 0.5 && input < cardWidth * 0.33) {
          return `${degIncrement}deg`;
        } else {
          return `${degIncrement * 3}deg`;
        }
      };

      const onMouseMove = (event) => {
        const rotateX = getRotateDeg(event.clientY - card.getBoundingClientRect().top);
        const rotateY = getRotateDeg(event.clientX - card.getBoundingClientRect().left);
        card.style.transform = `rotateX(${rotateX}) rotateY(${rotateY})`;
      };

      const onMouseLeave = () => {
        card.style.transform = `none`;
      };

      card.addEventListener("mousemove", onMouseMove);
      card.addEventListener("mouseleave", onMouseLeave);
    },
    resetCardEffect() {
      const card = document.getElementById("card");
      card.style.transform = `none`;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/_variables.scss';

.container {
  @include flex-center;
  flex-direction: column;
  padding: 2rem;
}

.blocPresentation {
  @include border-radius($border-radius);
  @include box-shadow();
  padding: 1rem 2rem;
  transition: transform $transition-duration ease-in-out;
}

.photo-profil {
  width: 100%;
  max-width: 150px;
  margin: 0 auto;
}

.paragraphe {
  text-align: justify;
  padding-bottom: 1rem;
}
</style>