<template>
  <section id="service" key="service" class="container-md py-5">

    <!-- Title-->

    <h1 :class="theme.isDarkMode ? 'h1-dark' : 'h1-light'" class=" text-center pb-5 h1">Mes services</h1>


    <div class="py-2"  :class="theme.isDarkMode ? 'main-bloc-dark' : 'main-bloc-light'">

      <p :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Quisque interdum dui ac nisl congue vestibulum. Aliquam metus diam, 
      </p>


      <!-- Card container -->

      <div class="container-md">

        <!-- card-group -->

        <div class="card-group">

          <!-- Card -->
          <div class="card card-style" 
            :class="theme.isDarkMode ? 'card-style-dark' : 'card-style-light'">
            <!--<TwicImg class="card-img-top" 
              src="avocado.jpg"
              ratio="3/4"
              placeholder="preview"
              focus="auto"
              alt="Avocado"
            />
            -->
            <img :class="theme.isDarkMode? 'img-size-dark' : 'img-size-light'" src="./../assets/images/pictures/site_vitrine.png" class="card-img-top img-size" alt="Site internet">
              <div class="card-body">
                <h3 :class="theme.isDarkMode ? 'h2-dark' : 'h2-light'" class="card-title py-4">Création de site internet</h3>
                <p :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light '" class="card-text">Conception complète de site vitrine, boutique en ligne.</p>
              </div>                
          </div>

          <div class="card card-style" 
            :class="theme.isDarkMode ? 'card-style-dark' : 'card-style-light'">
            <!--<TwicImg class="card-img-top" 
              src="avocado.jpg"
              ratio="3/4"
              placeholder="preview"
              focus="auto"
              alt="Avocado"
            />
            -->
            <img :class="theme.isDarkMode? 'img-size-dark' : 'img-size-light'" src="./../assets/images/logos/logo-site/technologie.png" class="card-img-top img-size" alt="...">
              <div class="card-body">
                <h3 class="card-title py-4">Site E-commerce</h3>
                <p :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light '" class="card-text">Lorem ipsumue interdum dui acam metus diam,</p>
              </div>                
          </div>

          <div class="card card-style" 
            :class="theme.isDarkMode ? 'card-style-dark' : 'card-style-light'">
            <!--<TwicImg class="card-img-top" 
              src="avocado.jpg"
              ratio="3/4"
              placeholder="preview"
              focus="auto"
              alt="Avocado"
            />
            -->
            <img :class="theme.isDarkMode? 'img-size-dark' : 'img-size-light'" src="./../assets/images/logos/logo-site/technologie.png" class="card-img-top img-size" alt="...">
              <div class="card-body">
                <h3 :class="theme.isDarkMode ? 'h2-dark' : 'h2-light'" class="card-title card-title py-4">Site vitrine</h3>
                <p :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light '" class="card-text">Lorem ipsumue interdum dui acam metus diam,</p>
              </div>                
          </div>



          
        </div>
      </div>
    </div>
  </section>







</template>

<script>


export default {

    components: {
    
  },

  props: ['theme', 'changeSection'],




mounted() {
    // Listen to window resize events to detect screen size changes
    window.addEventListener('resize', this.handleResize);
  },

  methods: {
   
    toggleThemeAndEmit() {
      this.theme.toggleTheme(); // Appel de la fonction pour basculer le thème
      this.$emit('toggleTheme'); // Émettez l'événement pour demander le changement de thème
    },

      
    },


    
};
</script>

<style scoped>

/************************************************* Service css ***************************************************/


/* card css */


/* card group */

.card-group {
  justify-content: center
}



.card {
  border-radius: 0;
  transition: all 0.5s;
  cursor: pointer;
  min-height: 100%;
  margin: 0;
  padding: 8px;

}

.card-title {
  font-size: 2rem;
  font-weight: bold;
}

.card-text {
  font-size: 1rem;
} 

.card-style img {

  width: 100%;
  height: 250px;
  

}

.card-style-light img{
  background-color: white;
  border: 1px solid var(--EndLightGradient);
}

.card-style-dark img{
  background-color: var(--bg-dark-2);
  border: 1px solid var(--EndDarkGradient);
}

.card-body {
  padding: 10px;
  text-align: center;
}

.card:hover {
  transform: scale(1.1);
}

.card-style::before {
  animation: rotBGimg 3s linear infinite;
  transition: all 0.2s linear ;
  left: 22%;
  top: -17%;
  width: 50%;
  height: 130%;
  z-index: 0;
  content: '';
  position: absolute;
} 


.card-style-dark::before {

  background-image: linear-gradient(180deg, var(--StartDarkGradient), var(--EndDarkGradient));


}


.card-style-light::before {

background-image: linear-gradient(180deg, var(--StartLightGradient), var(--EndLightGradient));

}

.card-style, .card-style p, .card-style h3, .card-style h2, .card-style h1 , .card-style img{
  position: relative;
  z-index: 1;
  text-align: center;
  overflow: hidden;
}

.card-style-light , .card-style-light p, .card-style-light h3, .card-style-light h2, .card-style-light h1{
background-color: var(--bg-light-1);
color: #15151A;

}


.card-style-dark , .card-style-dark p, .card-style-dark h3, .card-style-dark h2, .card-style-dark h1{
  background: var(--bg-dark-1);
  color: #fbffff;

}


.card-style::after {
  content: '';
  position: absolute;
  inset: 3px;
}

.card-style-light::after {
  background: var(--bg-light-1);

}

.card-style-dark::after {
  background: var(--bg-dark-1);
}
/* animation keyframe */

@keyframes rotBGimg {
            from {
                transform: rotate(0deg);
            }

            to {
                transform: rotate(360deg);
            }
            
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



@media (min-width: 576px) {
  .card {
    flex: 0 0 33.33%;
    max-width: 33.33%;
  }

  .card-title {
    font-size: 1.5rem;
  }

  .card-text {
    font-size: 1rem;
  }

  .card-style img {
    height: 200px;
  }
}

@media (max-width: 575px) {
  
  .card {
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .card-title {
    font-size: 1.2rem;
  }

  .card-text {
    font-size: 0.9rem;
  }

  .card-style img {
    height: auto;
  }
}

</style>