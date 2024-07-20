

<template>
  <section id="service" key="service" class="container mt-5">


    <!-- Title-->

    <div class="py-2">
      <h1 :class="theme.isDarkMode ? 'h1-dark' : 'h1-light'" class="text-center title font-size-40 h1">Mes services</h1>
    </div>

    <!-- Carousel bloc-->

<div id="slider" class="container carousel d-flex justify-content-center mt-5">

  <!-- Arrow prev -->

  <button class="btn prev-button" >
    <svg v-if="currentIndex === 0" xmlns="http://www.w3.org/2000/svg" width="47" height="66" viewBox="0 0 47 66" fill="none">
      <path d="M36.3622 1.99355C36.7338 1.6622 37.113 1.33101 37.5 1L36.3622 1.99355C10.3479 25.1943 22.0435 49.14 33.7649 61.0805L37.5 64.5C36.2859 63.5095 35.0252 62.3644 33.7649 61.0805L2 32L36.3622 1.99355Z" fill="#8E8E8E"/>
      <path d="M37.5 1C7.1 27 24.8333 54.1667 37.5 64.5L2 32L37.5 1Z" stroke="#FCFCFC" stroke-width="2"/>
    </svg>
    <svg  @click="prevSlide" id="arrow-prev" :class="theme.isDarkMode ? 'arrow-dark' : 'arrow-light'" v-if="currentIndex > 0 " xmlns="http://www.w3.org/2000/svg" width="47" height="66" viewBox="0 0 47 66" fill="none">
      <path d="M36.3622 1.99355C36.7338 1.6622 37.113 1.33101 37.5 1L36.3622 1.99355C10.3479 25.1943 22.0435 49.14 33.7649 61.0805L37.5 64.5C36.2859 63.5095 35.0252 62.3644 33.7649 61.0805L2 32L36.3622 1.99355Z" fill="black"/>
      <path d="M37.5 1C7.1 27 24.8333 54.1667 37.5 64.5L2 32L37.5 1Z" stroke="#5D11FF" stroke-width="2"/>
    </svg>
  </button>


    <!-- Slide with transition group-->

        
      <transition-group   @before-enter="onBeforeEnter" @enter="onEnter" @after-enter="afterEnter"
      @before-leave="beforeLeave" @leave="onLeave"  @after-leave="afterLeave" name="slide" tag="div" 
      class="d-flex w-75 flex-row m-1 p-1 justify-content-center align-items-center container">

        <div class="slide col-md-12 col-lg-6 mx-1 p-3 mx-1 p-3 text-center 
        d-flex flex-column justify-content-center my-auto"
        :key="1"  id="slide1" :class="{ 'd-none': currentIndex !== 0,
          'slide-dark': theme.isDarkMode, 
          'slide-light' : !theme.isDarkMode}">
        <h3 :class="theme.isDarkMode ? 'h2-dark' : 'h2-light'">Site vitrine</h3>
        <p :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light '">Creation de site vitrine dynamique et interative permettant de mettre en avant vos produits, savoir faire ou votre entreprise.</p>
        <h3 :class="theme.isDarkMode ? 'h2-dark' : 'h2-light'">Maquettage web</h3>
        <p :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light '">Création de maquette interactive et dynamique pour votre site internet</p>
        <h3 :class="theme.isDarkMode ? 'h2-dark' : 'h2-light'">Base de données</h3>
        <p :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light '">Conception de base de données , utilisation d’outils SQL et gestion de données.</p>
        <h3 :class="theme.isDarkMode ? 'h2-dark' : 'h2-light'">Fonctionnalité web</h3>
        <p :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light '">Ajout de fonctionnalité comme espace contact, espace connexion, espace administrateur. Création de fichier pdf.
        </p>
      </div>
    
      <div class="slide col-md-12 col-lg-6 mx-1 p-3 text-center" id="slide2" :key="1"  :class="{ 'd-none ': currentIndex !== 1 && currentIndex !== 0,
        'd-none d-lg-block':  currentIndex == 0 ,
        'slide-dark': theme.isDarkMode, 
        'slide-light' : !theme.isDarkMode }" >
        <div class="my-auto">
          <h3 :class="theme.isDarkMode ? 'h2-dark' : 'h2-light'" class="text-center">Langages et outils</h3>
          <h3 :class="theme.isDarkMode ? 'h2-dark' : 'h2-light'" class="text-center">Frontend</h3>
        </div>

        <div class="my-auto">
          <div class="d-flex align-items-center">
            <svg width="70" height="70">
              <image xlink:href="@/assets/images/logos/logo-langage/HTML-5-logo.svg" width="70" height="70" />
            </svg>
              <p class="m-auto" :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light '" >HTML</p>
          </div>
          <div class="d-flex align-items-center">
            <svg width="70" height="70">
              <image xlink:href="@/assets/images/logos/logo-langage/css-logo.svg" width="70" height="70" />
            </svg>
        <p class="m-auto" :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light '">CSS</p>
      </div>
      <div class="d-flex align-items-center">
        <svg width="70" height="70">
          <image xlink:href="@/assets/images/logos/logo-langage/wordpress-logo.svg" width="70" height="70" />
        </svg>
        <p class="m-auto" :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light '">WordPress</p>
      </div>
      <div class="d-flex align-items-center">
        <svg width="70" height="70">
          <image xlink:href="@/assets/images/logos/logo-langage/javascript-logo.svg" width="70" height="70" />
        </svg>
        <p class="m-auto" :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light '">Javascript / Jquery</p>
      </div>
      <div class="d-flex align-items-center">
        <svg width="70" height="70">
          <image xlink:href="@/assets/images/logos/logo-langage/logo.svg" width="70" height="70" />
        </svg>
        <p class="m-auto" :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light '">Vue.js</p>
      </div>
        </div>


  </div>
  
  <div :key="2"  class="slide col-md-12 col-lg-6 mx-1 p-3 text-center" id="slide3" :class="{ 'd-none ': currentIndex !== 1 && currentIndex !== 2,
      'd-none d-lg-block':  currentIndex == 1 ,
    'slide-dark': theme.isDarkMode, 
    'slide-light' : !theme.isDarkMode  }">
    <div class="my-auto">
      <h3 :class="theme.isDarkMode ? 'h2-dark' : 'h2-light'" class="text-center">Langages et outils</h3>
      <h3 :class="theme.isDarkMode ? 'h2-dark' : 'h2-light'" class="text-center">Backend et base de donnée</h3>
    </div>

    <div class="my-auto">
      <div class="d-flex align-items-center">
      <svg width="70" height="70">
        <image xlink:href="@/assets/images/logos/logo-langage/php.svg" width="70" height="70" />
      </svg>
      <p class="m-auto" :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light '" >PHP</p>
    </div>
    <div class="d-flex align-items-center">
      <svg width="70" height="70">
        <image xlink:href="@/assets/images/logos/logo-langage/symfony_black_03.svg" width="70" height="70" />
      </svg>
      <p class="m-auto" :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light '">Symfony</p>
    </div>
    <div class="d-flex align-items-center">
      <svg width="70" height="70">
        <image xlink:href="@/assets/images/logos/logo-langage/mysqlworkbench_93532.svg" width="70" height="70" />
      </svg>
      <p class="m-auto" :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light '">MySql</p>
    </div>
    <div class="d-flex align-items-center">
      <svg width="70" height="70">
        <image xlink:href="@/assets/images/logos/logo-langage/sql-database-generic.svg" width="70" height="70" />
      </svg>
      <p class="m-auto" :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light '">SQL serveur</p>
    </div>
      
    </div>


  </div>
  <div :key="3"  class="slide col-md-12 col-lg-6 mx-1 p-3 text-center" id="slide4" :class="{ 'd-none': currentIndex !== 2 && currentIndex !== 3, 
    'd-none d-lg-block': currentIndex == 2 ,
    'slide-dark': theme.isDarkMode, 
    'slide-light' : !theme.isDarkMode  }" >
    <div class="my-auto">
        <h3 :class="theme.isDarkMode ? 'h2-dark' : 'h2-light'" class="text-center">Langages et outils</h3>
        <h3 :class="theme.isDarkMode ? 'h2-dark' : 'h2-light'" class="text-center">Autres</h3>
    </div>
    <div class="my-auto">
      <div class="d-flex align-items-center">
      <svg width="70" height="70">
        <image xlink:href="@/assets/images/logos/logo-langage/figma-logo.svg" width="70" height="70" />
      </svg>
      <p class="m-auto" :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light '" >Figma</p>
      </div>
      <div class="d-flex align-items-center">
      <svg width="70" height="70">
        <image xlink:href="@/assets/images/logos/logo-langage/looping-logo.svg" width="70" height="70" />
      </svg>
      <p class="m-auto" :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light '">Looping</p>
      </div>
      <div class="d-flex align-items-center">
      <svg width="70" height="70">
        <image xlink:href="@/assets/images/logos/logo-langage/github-logox70.svg" width="70" height="70" />
      </svg>
      <p class="m-auto" :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light '">Github</p>
      </div>
      <div class="d-flex align-items-center">
      <svg width="70" height="70">
        <image xlink:href="@/assets/images/logos/logo-langage/office-365-logo.svg" width="70" height="70" />
      </svg>
      <p class="m-auto" :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light '">Bureautique : Traitement de texte , tableur</p>
      </div>
      <div class="d-flex align-items-center">
      <svg width="70" height="70">
        <image xlink:href="@/assets/images/logos/logo-langage/bootstrap-logo.svg" width="70" height="70" />
      </svg>
      <p class="m-auto" :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light '">Bootstrap</p>
      </div>
    </div>
  
  </div>


  </transition-group>


  <!-- Next button -->


  <button class="btn next-button" >
    <svg @click="nextSlide" id="arrow-next" :class="
       { 'd-block d-lg-none': currentIndex >= 2, 'arrow-light' : theme.isDarkMode == false, 'arrow-dark' : theme.isDarkMode == true }" v-if=" currentIndex < 3" xmlns="http://www.w3.org/2000/svg" width="39" height="66" viewBox="0 0 39 66" fill="none">
        <path d="M2.13777 63.5065C1.76624 63.8378 1.38702 64.169 1 64.5L2.13777 63.5065C28.1521 40.3057 16.4565 16.36 4.73512 4.41948L1 1C2.21411 1.99046 3.47476 3.13556 4.73512 4.41948L36.5 33.5L2.13777 63.5065Z" fill="black"/>
        <path d="M1 64.5C31.4 38.5 13.6667 11.3333 1 1L36.5 33.5L1 64.5Z" stroke="#5D11FF" stroke-width="2" />
    </svg>
    <svg :class="{' d-none d-lg-block': currentIndex < 3 }" v-if=" currentIndex >= 2" xmlns="http://www.w3.org/2000/svg" width="39" height="66" viewBox="0 0 39 66" fill="none">
    <path d="M2.13777 63.5065C1.76624 63.8378 1.38702 64.169 1 64.5L2.13777 63.5065C28.1521 40.3057 16.4565 16.36 4.73512 4.41948L1 1C2.21411 1.99046 3.47476 3.13556 4.73512 4.41948L36.5 33.5L2.13777 63.5065Z" fill="#8E8E8E"/>
    <path d="M1 64.5C31.4 38.5 13.6667 11.3333 1 1L36.5 33.5L1 64.5Z" stroke="#FCFCFC" stroke-width="2" />
  </svg>
  </button>

</div>


<!-- Indicator slide -->

<div class="m-auto py-4 my-3">
  <ul class="d-flex justify-content-center list-unstyled m-1">
  <li class="mx-2">
    <svg class="circle" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="10" :class="{ 'active-circle-dark': currentIndex === 0 && theme.isDarkMode, 
      'active-circle-light': currentIndex === 0 && !theme.isDarkMode, 
      'circle-light' : !theme.isDarkMode }" fill="#15151A30"/>
    </svg>
  </li>
  <li class="mx-2">
    <svg class="circle" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="10" :class="{ 'active-circle-dark': currentIndex === 1 && theme.isDarkMode, 
      'active-circle-light': currentIndex === 1 && !theme.isDarkMode,
      'circle-light' : !theme.isDarkMode }" fill="#15151A30"/>
    </svg>
  </li>
  <li class="mx-2">
    <svg class="circle" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="10" :class="{'active-circle-dark': currentIndex === 2 && theme.isDarkMode, 
      'active-circle-light': currentIndex === 2 && !theme.isDarkMode,
      'circle-light' : !theme.isDarkMode }" fill="#15151A30"/>
    </svg>
  </li>
  <li class="mx-2 d-lg-none d-md-block" >
    <svg class="circle" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="10" :class="{ 'active-circle-dark': currentIndex === 3 && theme.isDarkMode, 
      'active-circle-light': currentIndex === 3 && !theme.isDarkMode, 
      'circle-light' : !theme.isDarkMode }" fill="#15151A30"/>
    </svg>
  </li>  
</ul>
</div>



  </section>







</template>

<script>

export default {

  props: ['theme', 'changeSection'],


  data() {
  return {
    currentIndex: 0, // initial value
    slides: [ {
      id:"slide1",
      section : []

  
  },
      
    ]
  };
},

mounted() {
    // Listen to window resize events to detect screen size changes
    window.addEventListener('resize', this.handleResize);
  },

  methods: {

    onBeforeEnter(el) {
      // Personnalisez les styles avant l'entrée
      el.style.transform = 'translateX(-100%)'; // Animation de translation depuis la gauche
    },
    onEnter(el, done) {
      // Personnalisez l'animation d'entrée
      el.style.transition = 'transform 0.5s'; // Animation de translation pendant 0.5 seconde
      el.style.transform = 'translateX(0)'; // Déplacez la diapositive vers la position finale
      el.addEventListener('transitionend', done);
    },
    onLeave(el, done) {
      // Personnalisez l'animation de sortie
      el.style.transition = 'transform 0.5s'; // Animation de translation pendant 0.5 seconde
      el.style.transform = 'translateX(100%)'; // Déplacez la diapositive vers la droite pour la faire sortir
      el.addEventListener('transitionend', done);
    },

    afterEnter(el) {
    // Cette fonction est appelée après l'animation d'entrée
    // Vous pouvez ajouter ici le code à exécuter après l'entrée
  },
  beforeLeave(el) {
    // Cette fonction est appelée avant l'animation de sortie
    // Vous pouvez ajouter ici le code à exécuter avant la sortie
    el.style.transform = 'translateX(0)'; // Réinitialisez la position de la diapositive
  },
  afterLeave(el) {
    // Cette fonction est appelée après l'animation de sortie
    // Vous pouvez ajouter ici le code à exécuter après la sortie
    el.style.transform = 'translateX(-100%)'; // Réinitialisez la position de la diapositive
  },

    handleResize() {
      // Get the window width in pixels
      const windowWidth = window.innerWidth;
      // Check if the width is below a specific value (e.g., 992px for "md" Bootstrap)
      if (windowWidth < 992 && this.currentIndex === 3) {
        // Descease -1 currentIndex
        this.currentIndex -= 1;
      }
    },

    beforeDestroy() {
    // Make sure to remove the event listener when the component is destroyed
    window.removeEventListener('resize', this.handleResize);
    },


  prevSlide() {



      if(this.currentIndex >  0){
        this.currentIndex -= 1;

        console.log(this.currentIndex);

      }


    },
  nextSlide() {



      if(this.currentIndex <3) {

        this.currentIndex += 1;
        console.log(this.currentIndex);


      }
      
    },

    toggleThemeAndEmit() {
      this.theme.toggleTheme(); // Appel de la fonction pour basculer le thème
      this.$emit('toggleTheme'); // Émettez l'événement pour demander le changement de thème
    },

    
},

};
</script>

<style scoped>

/************************************************* Service css ***************************************************/

/* slide css */

.slide {
    padding: 5px;
    min-height: max-content;
    transition: transform 0.5s ease-in, background-color 0.5s;
    cursor: default!important;
    height: 100%;

}

.slide p {
  cursor: default;

}



.slide div {
    padding-top: 5px;
    padding-bottom: 5px;
    position: relative;
}

.slide-enter-active, .slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter-from, .slide-leave-to {
  transform: translateX(100%);
}

.slide-enter-to, .slide-leave-from {
  transform: translateX(0);
}

/* slide dark mode */

.slide-dark {
  background: #80787834;
}


.slide-dark:hover {
    background: #1e1b1b83;
   
}

/* slide light mode */

.slide-light {
  background: #0099ff34;
}

.slide-light:hover {
  background: #0099ff83;
}

/* animation slide */

/* Transition */

.hide-slide {
  display: none;
}




/* circle active  */
.circle-light {
  fill : #c8eef330; ;
}

.active-circle-dark {
  fill: #15151A; 
  
}


.active-circle-light {
  fill: #c8eef3; 
}


/* arrow css */

.arrow-light {
  fill: rgb(255, 255, 255); 
  stroke:rgb(39, 51, 52);
}

.arrow-dark:hover path {
  fill: rgb(5, 15, 198); 
  stroke:rgb(231, 232, 255);
  transform: fill 2s;
}


.arrow-light:hover path {
  fill: rgb(27, 177, 223);
  stroke:rgb(206, 206, 207);
  transform: fill 2s;
}


</style>