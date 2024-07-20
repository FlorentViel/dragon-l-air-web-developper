<template>
  <section id="welcome" class="section container py-3">
   <div class="d-flex row align-content-center position-relative justify-content-between flex-wrap my-auto position-relative">
    <div class="col-6 col-md-3 mr-md-5 align-self-center">
      <!-- Profil-picture -->
      <img id="profil_picture" :class="theme.isDarkMode ? 'photo-dark' : 'photo-light'" class="img-fluid" :src="theme.isDarkMode ? '/front-end/src/assets/images/logos/logo-site/logo-dragonslair-night.png' : '/front-end/src/assets/images/logos/logo-site/logo-dragonslair.png'" alt="Photo de profil" />
    </div>




      <!-- main-bloc -->

    <div id="card" class="col-12 col-md-5 text-center card-body p-5" :class="theme.isDarkMode ? 'main-bloc-dark' : 'main-bloc-light'" @mousemove="handleCardEffect" @mouseleave="resetCardEffect">
      <h1 :class="theme.isDarkMode ? 'h1-dark' : 'h1-light'" class="card-title py-2 animate-text title h1 font-weight-bold" :style="{ '--delay': '0.5s' }">Dragon's lair</h1>
      <h1 :class="theme.isDarkMode ? 'h2-dark' : 'h2-light'" class="card-title py-2 animate-text  font-weight-bold" :style="{ '--delay': '0.7s' }">Développeur web et web</h1>
      
      <p :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'" class=" animate-text text-warpcard-text text-style py-3 " :style="{ '--delay': '0.9s' }" >
        Passionné par le web avec une expértise en <strong class="text-style ">front-end</strong> et <strong class="text-style">back-end</strong>. 
      </p>
      <div class="d-flex justify-content-evenly py-4">
  <div class="animate-text" :style="{ '--delay': '0.13s' }">
    <router-link :to="{ name: 'aboutMe' }" :class="theme.isDarkMode ? '' : ''">
      <button type="button" :class="theme.isDarkMode ? 'btn-dark-mode' : 'btn-light-mode'" class="btn" >À propos de moi</button>
    </router-link>
  </div>
  <div class="animate-text" :style="{ '--delay': '0.13s' }">
    <router-link :to="{ name: 'service' }" :class="theme.isDarkMode ? '' : ''">
      <button type="button" :class="theme.isDarkMode ? 'btn-dark-mode' : 'btn-light-mode'" class="btn" >Mes services</button>
    </router-link>
  </div>
</div>
    </div>
  </div>
  
  </section>
</template>





<script>


export default {
  props: ['theme', 'selectedSection'],
  methods: {
    toggleThemeAndEmit() {
      this.theme.toggleTheme(); // Appel de la fonction pour basculer le thème
      this.$emit('toggleTheme'); // Émettez l'événement pour demander le changement de thème
    },
    // Nouvelle méthode pour gérer l'effet de la carte
    handleCardEffect(event) {

      const card = document.getElementById("card");

      // Calcul de la largeur en pourcentage en fonction de col-7 (58.333333%)
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

      // Écoutez l'événement de la souris
      card.addEventListener("mousemove", onMouseMove);
    },

    resetCardEffect() {
      const card = document.getElementById("card");
      card.style.transform = 'none';
    },
  },
  // Utilisez le hook `mounted` pour ajouter l'écouteur d'événement une fois que le composant est monté.
  mounted() {
    const card = document.getElementById("card");
    card.addEventListener("mousemove", this.handleCardEffect);
    card.addEventListener("mouseleave", this.handleCardEffect);
  },
};

</script>

<script setup>
</script>
<style scoped>

/* Animation css */

.animate-text {
  opacity: 0; /* Set initial opacity to 0 */
  animation: slideInFromRight 1s ease-out forwards; /* Add 'forwards' to keep the end state of the animation */
  animation-delay: var(--delay);
}

/* Animate router btn */

.animate-text .btn {
  opacity: 0; /* Set initial opacity to 0 */
  animation: slideInFromRight 1s ease-out forwards; /* Add 'forwards' to keep the end state of the animation */
  animation-delay: var(--delay);
  animation-delay: 1.31s;
}


@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}




/* welcom bloc css */



/* profil picture */

#profil_picture {
  width: 100%;


}

#card {
  transition: 0.5s;
  border-radius: 1.5rem;
      position: relative;
      height: max-content;
}

</style>


