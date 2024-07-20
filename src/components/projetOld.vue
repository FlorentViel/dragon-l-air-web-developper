<template>
    <section id="projet" key="projet" class="container mt-5">
      <h1 :class="theme.isDarkMode ? 'h1-dark' : 'h1-light'" class="text-center title font-size-40 h1">Projet</h1>

      <div class="card-group gap-4 pb-5 m-5 flex-nowrap ">
        <div class="card" :class="theme.isDarkMode ? 'cardDark' : 'cardLight'" style="min-width: 28rem;">
        <img src="../assets/images/pictures/image-Page-Accueil.webp" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Page d'accueil personnalisé</h5>
          <p class="card-text" :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'">Projet personnel de création d'une page d'accueil personnalisé avec heure intégré.</p>
          <a href="#" class="btn"  :class="theme.isDarkMode ? 'btn-dark-mode navTextDark' : 'btn-light-mode navTextLight'">Go somewhere</a>
        </div>
      </div>
      <div class="card" :class="theme.isDarkMode ? 'cardDark' : 'cardLight'" style="min-width: 28rem;">
        <img src="../assets/images/pictures/image-Page-Accueil.webp" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title text-center">Card title</h5>
          <p class="card-text" :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn"  :class="theme.isDarkMode ? 'btn-dark-mode navTextDark' : 'btn-light-mode navTextLight'">Go somewhere</a>
        </div>
      </div>
      <div class="card" :class="theme.isDarkMode ? 'cardDark' : 'cardLight'" style="min-width: 28rem;">
        <img src="../assets/images/pictures/image-Page-Accueil.webp" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text" :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn" :class="theme.isDarkMode ? 'btn-dark-mode navTextDark' : 'btn-light-mode navTextLight'">Go somewhere</a>
        </div>
      </div>
      <div class="card" :class="theme.isDarkMode ? 'cardDark' : 'cardLight'" style="min-width: 28rem;">
        <img src="../assets/images/pictures/image-Page-Accueil.webp" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text" :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn"  :class="theme.isDarkMode ? 'btn-dark-mode navTextDark' : 'btn-light-mode navTextLight'"  >Go somewhere</a>
        </div>
      </div>
      <div class="card" :class="theme.isDarkMode ? 'cardDark' : 'cardLight'" style="min-width: 28rem;">
        <img src="../assets/images/pictures/image-Page-Accueil.webp" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text" :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn"  :class="theme.isDarkMode ? 'btn-dark-mode navTextDark' : 'btn-light-mode navTextLight'">Go somewhere</a>
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
        this.theme.toggleTheme(); // Appel de la fonction pour basculer le thème
        this.$emit('toggleTheme'); // Émettez l'événement pour demander le changement de thème
      },
    },
  };
  </script>
  
  <style scoped>

  .card-group{
    overflow-x: scroll;
    display: flex;
    flex-flow: nowrap!important;
  /* Firefox */
  scrollbar-color: #c0dceb rgb(96, 140, 253); /* Barre de défilement principale en bleu et poignée en rouge */

  /* Personnalisation de la piste (track) */
  scrollbar-track-color: grey;

  /* Personnalisation de la taille de la poignée (thumb) */
  scrollbar-width: thin;

  }

  .card {
    overflow: hidden;
  }

  .card-body {
    padding: 1.5rem;
    text-align: center;
  }

/* Personnalisation de la barre de défilement principale (en général) */
::-webkit-scrollbar {
  width: 12px; /* Largeur de la barre de défilement */
}

/* Personnalisation de la poignée (thumb) */
::-webkit-scrollbar-thumb {
  background-color: #c0dceb; /* Couleur de la poignée */
  border-radius: 6px; /* Coins arrondis de la poignée */
}

::-webkit-scrollbar-thumb:hover {
  background-color: #e1e9ee; /* Couleur de la poignée */
}

/* Personnalisation de la piste (track) */
::-webkit-scrollbar-track {
  background-color: rgb(96, 140, 253); /* Couleur de la piste */
}







  .card{
    position: relative; /* Position relative pour positionner correctement l'image agrandie */
}

  .card-img-top{
    transition: transform 0.3s; /* Animation de la transformation sur 0.3s */
}

  .card-img-top:hover{
    transform: scale(1.2); /* Agrandir l'image de 20% */
    cursor: zoom-in; /* Changement de curseur au survol */
}



  

  .cardDark {
    background-color: #80787834!important;
    color: white!important;
  }

  .cardLight {
    background-color: #80787834!important;
    color: white!important;
  }

  .card-img-top{
    transition: .5s;
  }



  </style>
  