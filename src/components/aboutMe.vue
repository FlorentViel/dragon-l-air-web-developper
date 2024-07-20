<template>
    <section id="about" class="container d-grid py-2">
     <div class="">
  
      <div id="card" class="gy-2 mb-3 col-12" @mousemove="handleCardEffect" @mouseleave="resetCardEffect">
        <!-- main-bloc -->
        <div>
          <h1 :class="theme.isDarkMode ? 'h1-dark' : 'h1-light'" class="m-3 py-4 h1 m-auto text-center">&Agrave; propos de moi</h1>
        </div>
        <div :class="theme.isDarkMode ? 'main-bloc-dark' : 'main-bloc-light'" class="blocPresentation text-style">
          <div class="">
            <h1 :class="theme.isDarkMode ? 'h2-dark' : 'h2-light'" class="py-5 animate-text title h1 font-weight-bold text-center" >Florent Vieville</h1>
            <div class="w-sm-25 float-sm-start">
              <img src="./../assets/images/pictures/photo-profil-removebg.png" class="img-fluid photo-profil" alt="Photo de profil"/>
            </div>
            <p :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'" class="paragraphe text-justify pb-4" >
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
  
  /* welcom bloc css */
  
  #about {
      margin-top: auto;
      margin-bottom: auto;
      position: relative;
  
  }

  .paragraphe {
    text-indent: 50px;
    line-height: 2.5; /* Ajustez cette valeur selon vos besoins */
    min-height: 250px;
    width: 92%;
    margin: auto;
  }

  
  
  #card {
    transition: 0.5s;
  }
  
  .btn-dark {
    background-color: #4d6ae9;
    color: #1b172c!important;
    border: 1px solid #000000;
    transition: .5s ease;
    border-radius: 8px;
    padding: 10px 20px;
  } 
  
  .btn-light {
    background-color: #01ABD63E;
    border: 1px solid #91ebf9;
    transition: .5s ease;
    border-radius: 8px;
    padding: 10px 20px;
  } 
  

  
  .btn-light:hover {
    background-color: #37A1EE ;
    border: 1px solid #1a1a1a;
    text-shadow: 0 0 5px #c5d9fa,
                 0 0 10px #c5d9fa,
                 0 0 15px #c5d9fa,
                 0 0 20px #c5d9fa;
    box-shadow: 0 0 5px #e7edff ,
                0 0 10px #e7edff ,
                0 0 15px #e7edff ,
                0 0 20px #e7edff ;
    
  } 

  @media (max-width: 577px) {

    div > .photo-profil{
      width: 50%!important;
      float: none!important;
      display: block!important;
      margin: auto!important;
    }

    .paragraphe {
      text-indent: 25px;
      line-height: 2.5; /* Ajustez cette valeur selon vos besoins */
      min-height: 250px;
      width: 60vw;
      font-size: 0.78rem;
      padding-top: 25px;
      margin: auto;
    }


  }




  @media (min-width: 450px) and (max-width: 577px) {

.photo-profil {
  width: 100%;
  min-width: 100px;
}

.paragraphe {
  text-indent: 50px;
  line-height: 2.5; /* Ajustez cette valeur selon vos besoins */
  min-height: 250px;
  width: 60vw;
  margin: auto;
  font-size: 0.9rem;
}

}

  @media (min-width: 577px) and (max-width: 991px) {

    .photo-profil {
      width: 100%;
      min-width: 150px;
    }

  }

  </style>
  
  
  