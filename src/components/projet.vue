<template>
    <section id="projet" key="projet" class="container mt-5">
      <h1 :class="theme.isDarkMode ? 'h1-dark' : 'h1-light'" class="text-center title h1">Projet</h1>
  
      <div class="carousel">

        <div class="arrow-btn">
        <button class="btn prev-button" >
          <svg v-if="currentIndex === 0" :disabled="isPrevDisabled" xmlns="http://www.w3.org/2000/svg" width="47" height="66" viewBox="0 0 47 66" fill="none">
            <path d="M36.3622 1.99355C36.7338 1.6622 37.113 1.33101 37.5 1L36.3622 1.99355C10.3479 25.1943 22.0435 49.14 33.7649 61.0805L37.5 64.5C36.2859 63.5095 35.0252 62.3644 33.7649 61.0805L2 32L36.3622 1.99355Z" fill="#8E8E8E"/>
            <path d="M37.5 1C7.1 27 24.8333 54.1667 37.5 64.5L2 32L37.5 1Z" stroke="#FCFCFC" stroke-width="2"/>
          </svg>
          <svg  @click="prevSlide" id="arrow-prev" :class="theme.isDarkMode ? 'arrow-dark' : 'arrow-light'" v-if="currentIndex > 0 " xmlns="http://www.w3.org/2000/svg" width="47" height="66" viewBox="0 0 47 66" fill="none">
            <path d="M36.3622 1.99355C36.7338 1.6622 37.113 1.33101 37.5 1L36.3622 1.99355C10.3479 25.1943 22.0435 49.14 33.7649 61.0805L37.5 64.5C36.2859 63.5095 35.0252 62.3644 33.7649 61.0805L2 32L36.3622 1.99355Z" fill="black"/>
            <path d="M37.5 1C7.1 27 24.8333 54.1667 37.5 64.5L2 32L37.5 1Z" stroke-width="2"/>
          </svg>
        </button>      

        <button class="btn next-button">
          <svg @click="nextSlide" :disabled="isNextDisabled" id="arrow-next" :class="{'d-block d-lg-none': currentIndex >= maxIndex, 'arrow-light' : theme.isDarkMode == false, 'arrow-dark' : theme.isDarkMode == true }" 
            v-if=" currentIndex < 3" xmlns="http://www.w3.org/2000/svg" width="39" height="66" viewBox="0 0 39 66" fill="none">
            <path d="M2.13777 63.5065C1.76624 63.8378 1.38702 64.169 1 64.5L2.13777 63.5065C28.1521 40.3057 16.4565 16.36 4.73512 4.41948L1 1C2.21411 1.99046 3.47476 3.13556 4.73512 4.41948L36.5 33.5L2.13777 63.5065Z" fill="black"/>
            <path d="M1 64.5C31.4 38.5 13.6667 11.3333 1 1L36.5 33.5L1 64.5Z" stroke-width="2" />
          </svg>
          <svg :class="{' d-none d-lg-block': currentIndex < maxIndex, 'arrow-disabled-light' : theme.isDarkMode == false, 'arrow-disabled-dark' : theme.isDarkMode == true }" v-if=" currentIndex >= maxIndex" xmlns="http://www.w3.org/2000/svg"  width="39" height="66" viewBox="0 0 39 66" fill="none">
            <path d="M2.13777 63.5065C1.76624 63.8378 1.38702 64.169 1 64.5L2.13777 63.5065C28.1521 40.3057 16.4565 16.36 4.73512 4.41948L1 1C2.21411 1.99046 3.47476 3.13556 4.73512 4.41948L36.5 33.5L2.13777 63.5065Z" fill="#8E8E8E"/>
            <path d="M1 64.5C31.4 38.5 13.6667 11.3333 1 1L36.5 33.5L1 64.5Z" stroke="#FCFCFC" stroke-width="2" />
          </svg>
        </button>
      </div>

        <div class="card card-carousel my-5" v-for="(card, index) in cards" 
        :key="index" :class="[theme.isDarkMode ? 'cardDark' : 'cardLight', { active: index === currentIndex
          || index === currentIndex + 1 }]" 
        :style="{transform: `translateX(${currentIndex * -100}%)`}">
          <img :src="card.image" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ card.title }}</h5>
            <p class="card-text" :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'">{{ card.text }}</p>
            <a target="_blank" :href="card.title" class="btn"  :class="theme.isDarkMode ? 'btn-dark-mode' : 'btn-light-mode navTextLight'">Go somewhere</a>
          </div>
        </div>
      </div>



  

    </section>
  </template>
  
  <script>
  export default {
    props: ['theme'],
    data() {
      return {
        currentIndex: 0,
        cards: [
          {
            image: 'front-end/src/assets/images/pictures/projets/placeholder-2.png',
            title: 'Page d\'accueil personnalisé?',
            text: 'Projet personnel de création d\'une page d\'accueil personnalisé avec heure intégré.',
            link: 'link-lien',
          },
          {
          image: 'front-end/src/assets/images/pictures/projets/placeholder-2.png',
          title: 'Wesh alors',
          text: 'Projet personnel de création d\'une page d\'accueil personnalisé avec heure intégré.'
        },
        // Ajoutez d'autres cartes ici...
        {
          image: 'front-end/src/assets/images/pictures/projets/placeholder-2.png',
          title: 'Titre de la nouvelle carte3',
          text: 'Texte de la nouvelle carte.'
        },
        {
          image: 'front-end/src/assets/images/pictures/projets/placeholder-2.png',
          title: 'Titre d\'une autre nouvelle carte4',
          text: 'Texte d\'une autre nouvelle carte.'
        },       
        ]
      }
    },


    computed: {
      maxIndex() {
        return this.cards.length - 1;
      },
    isNextDisabled() {
      return this.currentIndex >= this.maxIndex;
    },
    isPrevDisabled() {
      return this.currentIndex === 0;
    }
    },
    methods: {
      toggleThemeAndEmit() {
        this.theme.toggleTheme();
        this.$emit('toggleTheme');
      },
      nextSlide() {
    if (this.currentIndex < this.maxIndex) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  },
  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.maxIndex;
    }
    }
  },
  };
  </script>
  
  <style scoped>
  .carousel {
    display: flex;
    overflow: hidden;
    width: 100%;
    gap: 10px;

  }

  .card-carousel {
    width: 100%;
    transition: transform 0.5s;
  }

  .card-img-top {
    max-width: auto;
    max-height: 244px;
  }

  .cardDark {
    background-color: var(--bg-dark-2)
  }


  /* arrow css */

  .arrow-btn {
    position: absolute;
    top: 50%;
    z-index: 1;
    opacity: 1;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }


.arrow-light {
  fill: var(--StartLightGradient); 
  stroke : var(--EndLightGradient);
  transform: all 2s;
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
}

.arrow-dark {
  fill: var(--EndDarkGradient); 
  stroke : var(--StartDarkGradient);
  transform: all 2s;
}

.arrow-dark:hover path {
  fill: var(--StartDarkGradient); 
  stroke: var(--EndDarkGradient);
  transform: all 2s;
}


.arrow-light:hover path {
  fill: var(--EndLightGradient);
  stroke:var(--StartLightGradient);
  transform: all 2s;
}

/* disabel arrow */

.arrow-disabled-light {
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));

}

.arrow-disabled-dark {
  filter: drop-shadow(3px 3px 2px var(--EndDarkGradient));
  fill: rgb(51,66,255);
  stroke: rgb(88,41,145);

}
 
  </style>
  