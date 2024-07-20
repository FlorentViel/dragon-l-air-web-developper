<template class=" ">

    <footer id="footerBar" :class="theme.isDarkMode ? 'nav-dark' : 'nav-Light'" class="footer d-flex flex-wrap justify-content-between text-center px-5 align-items-center navBarStyle  text-center">
    <div class="align-self-center" style="text-align: center;">
      <span class="style-text" >
        <router-link :class="theme.isDarkMode ? 'footerTextDark' : 'footerTextLight'" to="/privacyPolicy">Politique de confidentialité</router-link>
      </span> 
    </div> 
    <div class="text-end align-self-center">
      <span class="style-text" :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'">
        &copy; Florent Vieville 
      </span>
      <span class="style-text" :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'">2023</span>
      <br>
      <span class="style-text" :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'">Tous droits réservés</span>
    </div>

  </footer>

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
  
  <script setup>
  
  </script>
  
  <style scoped>
  

  #footerBar  {
    width: 100% ;
    height: auto;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    bottom: 0;
    background-size: 100vw;
    position: relative;

}
  </style>
  