<template>
  <nav id="navBar"  :class="theme.isDarkMode ? 'dark-mode' : 'light-mode'"  class="navBar position-relative flex-wrap d-flex align-items-end">
            <div class="d-flex align-items-center flex-grow-1">
              <!-- Profil-picture -->
              <img id="profil_picture" :class="theme.isDarkMode ? 'photo-dark' : 'photo-light'"
               class="img-fluid logo"
               :src="theme.isDarkMode ? '/front-end/src/assets/images/logos/logo-site/logo-dragonslair-night.png' :
                 '/front-end/src/assets/images/logos/logo-site/logo-dragonslair.png'"
                  alt="Photo de profil"/>
              <div class="d-flex align-items-end flex-wrap flex-grow-1 w-80">

                <router-link 
                  class="navBar-item nav-link text-center" 
                  v-for="(navItem, index) in navBar" 
                  :key="index" 
                  :to="{ name: navItem.route }"
                  :class="[theme.isDarkMode ? 'link-section-dark' : 'link-section-light', { 'navItem-active': $route.name === navItem.route }]">
                  {{ navItem.title }}
                  <span :class="theme.isDarkMode?'dark-mode' :'light-mode'" class="close-navItem">x</span>
                </router-link>
              </div>  

            </div>


            <div class="d-flex text-center flex-column align-items-center m-auto">
                <span class="" :class="theme.isDarkMode ? 'text-white' : 'text-dark'">
                  {{ theme.isDarkMode ? 'Passez au mode jour' : 'Passez au mode nuit' }}
                </span>
                <input type="checkbox" class="checkbox" :class="theme.isDarkMode ? '' : ''" id="checkbox" v-model="theme.isDarkMode" @click="toggleThemeAndEmit">
                <label for="checkbox" class="checkbox-label" :class="theme.isDarkMode ? 'checkbox-label-dark' : 'checkbox-label-light'">
                  <i class="fas fa-moon"></i>
                  <i class="fas fa-sun"></i>
                  <span class="ball"></span>
                </label>
              </div>


  </nav>
</template>



<script>

export default {

  data() {
    return {
      activenavItem: 0,
      navBar: [
        { title: 'Florent VIEVILLE', route: 'home', },
        { title: '\u00C0 propos', route: 'aboutMe'},
        { title: 'Mes service', route: 'service'},
        { title: 'Mes projets', route: 'projet'},
        { title: 'Contact', route: 'contact'},
        // Ajoutez autant d'onglets que vous le souhaitez
      ],
    };
  },
  
  props: ['theme'],
   
  methods: {
    toggleThemeAndEmit() {
      this.theme.toggleTheme(); // Appel de la fonction pour basculer le thème
      this.$emit('toggle-theme-request'); // Émettez l'événement pour demander le changement de thème
    },
    changeTitle(title, toRoute) {
  const fromRoute = this.$route.name;
  this.transitionName = this.getTransitionName(fromRoute, toRoute);

  this.$store.commit('setTitle', title);
},
  },
};
</script>

<script setup>

import { ref } from 'vue';

const selectedSection = ref('Accueil'); // Par défaut, afficher la section "Accueil"

function changeTitle(newSectionName) {
  const baseTitle = 'Portfolio Florent VIEVILLE';
  const newTitle = newSectionName === 'Accueil' ? baseTitle : `${baseTitle} - ${newSectionName}`;
  document.title = newTitle; // Mettez à jour le titre de la page
  selectedSection.value = newSectionName; // Mettez à jour la section sélectionnée
}
</script>

<style scoped>

/* logo */

.logo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 10px;
  transition: all 0.3s ease-in-out;

}

/* navBar css */

#navBar.dark-mode a {
  box-shadow: 0 8px 32px 0 var(--shadow);
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  transition: all 0.3s ease-in-out;
}

#navBar.light-mode a {
  box-shadow: 0 8px 32px 0 var(--shadow);
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
transition: all 0.3s ease-in-out;

}

/* navBar link */


#navBar a{
 width: auto;
}



#navBar a {
  padding: 10px;
  cursor: pointer; 
  border-bottom: none;
  text-decoration: none; /* Ajouté pour supprimer le soulignement des liens */
}



#navBar.dark-mode a {
  padding: 10px;
  background-color: #001214;
  transition: background-color 0.3s ease-in-out;
}

#navBar.light-mode a {
  background-color: rgb(230,238,239);
  padding: 10px;
  transition: background-color 0.3s ease-in-out;
  
}

:is(#navBar.dark-mode .navBar-item:hover, .btn-dark-mode) {
  background-color: #11164a;
  transition: color 0.3s ease-in-out;
  color: var(--white);
}

:is(#navBar.dark-mode .navBar-item:focus){
  color: var(--white);
}

#navBar.dark-mode a{
  border-bottom: 1px solid var(--borderDark);
  transition: border-bottom 0.3s ease-in-out;
  opacity: 1;
}


#navBar.dark-mode .navItem-active {
  background: rgba(0,36,41);
  border: 1px solid var(--borderDark);
  border-bottom: none;
  border-radius: 5px 5px 0 0;
  transition: border-bottom 0.3s ease-in-out;

}

#navBar.light-mode a{
  border-bottom: 1px solid var(--StartLightGradient);
  transition: border-bottom 0.3s ease-in-out;
}

#navBar.light-mode .navBar-item:hover {
  background:var(--hoverLight);
  transition: background-color 0.3s ease-in-out;
  color: var(--black);
}

:is(#navBar.light-mode .navBar-item:focus){
  color: var(--StartLightGradient);
}

#navBar.light-mode .navItem-active {
  background-color: #fff;
  border: 1px solid var(--StartLightGradient);
  border-radius: 5px 5px 0 0;
  transition: border-bottom 0.3s ease-in-out;
  border-bottom: none;
  
}

/* toggle bouton */ 

.checkbox {
  opacity: 0;
  position: absolute;
}

.checkbox-label {
  width: 50px;
  height: 26px;
  border-radius: 50px;
  position: relative;
  padding: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.checkbox-label-light {
  background: linear-gradient(90deg, var(--StartLightGradient) 0%, var(--EndLightGradient)  75%);


}

.checkbox-label-dark {

  background: linear-gradient(90deg, var(--StartDarkGradient) 0%, var(--EndDarkGradient)  75%);
}



.fa-moon {color: #fffdf7;}

.fa-sun {color: #fffb00;}


.checkbox-label .ball {
  width: 22px;
  height: 22px;
  position: absolute;
  left: 2px;
  top: 2px;
  border-radius: 50%;
  transition: transform 0.2s linear;
}

.checkbox-label-dark .ball {
  background-image: linear-gradient(to right, var(--StartDarkGradient), var(--EndDarkGradient));
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
}

.checkbox-label-light .ball {
  background-image: linear-gradient(to right, var(--StartLightGradient), var(--EndLightGradient));
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
}

.checkbox:checked + .checkbox-label .ball {
  transform: translateX(24px);
}


.close-navItem {
  display: inline-block;
  padding: 1px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
}

.close-navItem.dark-mode{
  color: var(--textSecondaryDark) ;
}

.close-navItem.light-mode{
  color: var(--textSecondaryLight) ;
}



@media(max-width: 984px) {

  #navBar a{
    width: 100%; 
  }

}

</style>
