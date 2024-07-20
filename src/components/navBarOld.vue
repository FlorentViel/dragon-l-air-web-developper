<template>
  <nav id="navBar" :class="theme.isDarkMode ? 'nav-dark navbar-dark' : 'nav-Light navbar-light'" class="navbar  navBarStyle navbar-expand-md  pe-3 py-2">
    <div class="container">
      <router-link :to="{ name: 'home' }" :class="['navbar-brand pb-sm-3 mt-sm-3', theme.isDarkMode ? 'navHomeDark' : 'navHomeLight']" @click="changeTitle('Présentation')">
        Portfolio Florent VIEVILLE
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto column-gap-3">
          <li class="nav-item text-center">
            <router-link :to="{ name: 'aboutMe' }" :class="['nav-link', theme.isDarkMode ? 'navTextDark' : 'navTextLight']" @click="changeTitle('&Agrave; propos de moi')">&Agrave; propos de moi
              <span :class="theme.isDarkMode ? 'menu-separator-dark' : 'menu-separator-light'"  class="menu-separator d-md-none d-sm-block mt-3"></span>
            </router-link>
          </li>
          <li class="nav-item text-center">
            <router-link :to="{ name: 'service' }" :class="['nav-link', theme.isDarkMode ? 'navTextDark' : 'navTextLight']" @click="changeTitle('Mes services')">Mes services
              <span :class="theme.isDarkMode ? 'menu-separator-dark' : 'menu-separator-light'"  class="menu-separator d-md-none d-sm-block mt-3"></span>
            </router-link>
          </li>
          <li class="nav-item text-center">
            <router-link :to="{ name: 'projet' }" :class="['nav-link', theme.isDarkMode ? 'navTextDark' : 'navTextLight']" @click="changeTitle('Mes projets')">Mes projets
              <span :class="theme.isDarkMode ? 'menu-separator-dark' : 'menu-separator-light'"  class="menu-separator d-md-none d-sm-block mt-3"></span>
            </router-link>
          </li>
          <li class="nav-item text-center">
            <router-link :to="{ name: 'contact' }" :class="['nav-link', theme.isDarkMode ? 'navTextDark' : 'navTextLight']" @click="changeTitle('Me contacter')">Me contacter</router-link>
          </li>
        </ul>
      </div>
      <div class="d-flex text-center justify-content-center flex-column align-items-center py-sm-4">
        <span class="" :class="theme.isDarkMode ? 'text-white' : 'text-dark'">Mode sombre</span>
        <input type="checkbox" class="checkbox" :class="theme.isDarkMode ? 'btn-dark' : 'btn-light'" id="checkbox" @click="toggleThemeAndEmit">
        <label for="checkbox" class="checkbox-label" :class="theme.isDarkMode ? 'checkbox-label-dark' : 'checkbox-label-light'">
          <i class="fas fa-moon"></i>
          <i class="fas fa-sun"></i>
          <span class="ball"></span>
        </label>
      </div>
    </div>
  </nav>
</template>



<script>

export default {
  data() {
    return {
      transitionName: 'slide-left',
      transitionName: 'slide-right',
    };
  },
  
  props: ['theme'],
  computed: {
  },
  methods: {
    toggleThemeAndEmit() {
      this.theme.toggleTheme(); // Appel de la fonction pour basculer le thème
      this.$emit('toggleTheme'); // Émettez l'événement pour demander le changement de thème
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
  background-color: #dcfffc;
  transition: background-color 0.5s ease-in-out;


}

.checkbox-label-dark {
  background-color: #1f1f23 ;
  transition: background-color 0.5s ease-in-out;
}



.fa-moon {color: #f1c40f;}

.fa-sun {color: #f39c12;}


.checkbox-label .ball {
  background-color: var(--white);
  width: 22px;
  height: 22px;
  position: absolute;
  left: 2px;
  top: 2px;
  border-radius: 50%;
  transition: transform 0.2s linear;
}

.checkbox:checked + .checkbox-label .ball {
  transform: translateX(24px);
}

/* séparator */

.menu-separator {
  height: 1px;
  width: auto;
  margin: 5px 0; /* Espacement vertical de la ligne de séparation */

}

.menu-separator-light {
  background-color: rgba(0, 0, 0, 0.5); /* Couleur de la ligne de séparation */
  transition: background-color 0.5s ease-in-out;


}

.menu-separator-dark {
  background-color: rgba(255, 255, 255, 0.5); /* Couleur de la ligne de séparation */
  transition: background-color 0.5s ease-in-out;


}




</style>
