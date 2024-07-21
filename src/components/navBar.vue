<template>
  <nav id="navBar" :class="theme.isDarkMode ? 'dark-mode' : 'light-mode'">
    <div class="navBar-content" :class="theme.isDarkMode ? 'dark-mode' : 'light-mode'">
      <!-- Profil-picture -->
      <img id="profil_picture" :class="theme.isDarkMode ? 'photo-dark' : 'photo-light'"
           class="logo"
           :src="theme.isDarkMode ? images.nightLogo : images.lightLogo"
           alt="Photo de profil"/>
      <div class="navBar-links" :class="['navBar-links', theme.isDarkMode ? 'navBar-links-dark' : 'navBar-links-light', { 'open': isMenuOpen }]">
        <router-link 
          class="navBar-item" 
          v-for="(navItem, index) in navBar" 
          :key="index" 
          :to="{ name: navItem.route }"
          :class="[ 
            theme.isDarkMode ? 'link-section-dark' : 'link-section-light', 
            { 
              'navItem-active-dark': theme.isDarkMode && $route.name === navItem.route,
              'navItem-active-light': !theme.isDarkMode && $route.name === navItem.route
            }
          ]">
          {{ navItem.title }}
          <span :class="theme.isDarkMode ? 'dark-mode' : 'light-mode'" class="close-navItem">x</span>
        </router-link>
      </div>  
  
    </div>
    <div class="fake-search-bar" :class="theme.isDarkMode ? 'fake-search-bar-dark' : 'fake-search-bar-light'">
      <div class="cadenas-icon" :class="theme.isDarkMode ? 'cadenas-icon-dark' : 'cadenas-icon-light'">
        <svg v-if="theme.isDarkMode" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.!-->
          <path d="M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z" fill="white"/>
        </svg>
        <svg v-if="!theme.isDarkMode" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.!-->
          <path d="M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z"/>
        </svg>
      </div>
      <span>https://www.thedragonslairwebdeveloper.com/{{ currentRouteName }}</span>
      <button class="burger-menu" @click="toggleMenu">
        <span class="burger-menu-span" :class="theme.isDarkMode ? 'burger-dark' : 'burger-light'"></span>
        <span class="burger-menu-span" :class="theme.isDarkMode ? 'burger-dark' : 'burger-light'"></span>
        <span class="burger-menu-span" :class="theme.isDarkMode ? 'burger-dark' : 'burger-light'"></span>
      </button>
      <div class="theme-toggle">
        <span class="theme-toggle-text" :class="theme.isDarkMode ? 'text-white' : 'text-dark'">
          {{ theme.isDarkMode ? 'Mode jour' : 'Mode nuit' }}
        </span>
        <input type="checkbox" class="checkbox" id="checkbox" v-model="theme.isDarkMode" @click="toggleThemeAndEmit">
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
import { images } from '@/config/images';

export default {
  data() {
    return {
      activenavItem: 0,
      navBar: [
        { title: 'Accueil', route: 'home' },
        { title: '\u00C0 propos', route: 'aboutMe' },
        { title: 'Mes service', route: 'service' },
        { title: 'Mes projets', route: 'projet' },
        { title: 'Contact', route: 'contact' },
      ],
      images, // Ajoutez les images à l'état local
      isMenuOpen: false, // État pour le menu burger
    };
  },
  props: ['theme'],
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  },
  methods: {
    toggleThemeAndEmit() {
      this.theme.toggleTheme();
      this.$emit('toggle-theme-request');
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
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

const selectedSection = ref('Accueil');

function changeTitle(newSectionName) {
  const baseTitle = 'Portfolio Florent VIEVILLE';
  const newTitle = newSectionName === 'Accueil' ? baseTitle : `${baseTitle} - ${newSectionName}`;
  document.title = newTitle;
  selectedSection.value = newSectionName;
}
</script>

<style lang="scss" scoped>
@import '@/assets/_variables.scss';

#navBar {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;


  @media (max-width: 985px) {
    flex-direction: column;
  }
}

.navBar-content {
  display: flex;
  align-items: end;
  width: 100%;

  @media (max-width: 985px) {
    flex-direction: column;
    align-items: center;
  }

  &.light-mode {
    background-color: $bgLightNav;
    border-bottom: 1px solid $borderLight;
  }

  &.dark-mode {
    background-color: $bgDarkNav;
    border-bottom: 1px solid $borderDark;
  }
}

.fake-search-bar {

  &.fake-search-bar-light {
    background-color: $bgLight1;
    color: $linkLight;
  }

  &.fake-search-bar-dark {
    background-color: $bgDark1;
    color: $linkdark;
  }

  .cadenas-icon {
    margin-right: dynamic-padding(1.5);
    margin-left: dynamic-padding(1);
    width: 20px;
    height: 20px;
  }

}



.logo {
  width: 45px;
  height: 45px;
  padding: 5px;
  transition: all 0.3s ease-in-out;

  @media (max-width: 985px) {
    width: 85px;
    height: 85px;
  }
}

.navBar-links {
  display: flex;
  align-items: center;
  flex-grow: 1;
  flex-wrap: wrap;
  width: 80%;
  transition: max-height 0.3s ease-in-out;

  @media (max-width: 985px) {
    flex-direction: column;
    align-items: flex-start;
    max-height: 0;
    overflow: hidden;
    width: 100%;

    &.open {
      max-height: 300px; // Ajustez cette valeur selon la hauteur de votre menu
    }
  }
}

.navBar-item {
  text-align: center;
  padding: 10px;
  cursor: pointer;
  text-decoration: none;
  &.link-section-dark {
    background-color: $bgDarkNav;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: $StartDarkGradient-50;
      transition: background-color 0.3s ease-in-out;
    }
  }
  &.link-section-light {
    background-color: $bgLightNav;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: $StartLightGradient-50;
      transition: background-color 0.3s ease-in-out;
    }
  }
  &.navItem-active-dark {
    background: $bgDark1;
    border: 1px solid $borderDark;
    margin-bottom: -1px;
    border-bottom: 2px solid $bgDark1;
    border-radius: 5px 5px 0 0;
    transition: border-bottom 1s ease-in-out;
  }
  &.navItem-active-light {
    background: $bgLight1;
    border: 1px solid $borderLight;
    border-bottom: 2px solid $bgLight1;
    border-radius: 5px 5px 0 0;
    transition: border-bottom 0.3s ease-in-out;
    margin-bottom: -1px;
  }
}

.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 2px;
  flex: 1 1 auto;
  margin: auto;
  .text-white {
    color: white;
  }
  .text-dark {
    color: black;
  }
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
  gap: 5px;
  align-items: center;
}

.checkbox-label-light {
  background: linear-gradient(90deg, $StartLightGradient 0%, $EndLightGradient  75%);


}

.checkbox-label-dark {

  background: linear-gradient(90deg, $StartDarkGradient 0%, $EndDarkGradient  75%);
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
  background-image: linear-gradient(to right, $StartDarkGradient, $EndDarkGradient);
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
}

.checkbox-label-light .ball {
  background-image: linear-gradient(to right, $StartLightGradient, $EndLightGradient);
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
  &.dark-mode {
    color: $textSecondaryDark;
  }
  &.light-mode {
    color: $textSecondaryLight;
  }
}

.fake-search-bar {
  display: flex;
  align-items: center;
  padding: 10px 10px;
  border-radius: 5px;
  width: 100%;
  transition: background-color 0.3s ease-in-out;

  i {
    margin-right: 5px;
  }
}

.fake-search-bar-light {
  background-color: #f0f0f0;
  color: #333;
  

  &:hover {
    background-color: $StartLightGradient-50;
  }
}

.fake-search-bar-dark {
  background-color: #333;
  color: #f0f0f0;

  &:hover {
    background-color: $StartDarkGradient-50;
  }
}

@media (max-width: 984px) {
  #navBar a {
    width: 100%;
  }
}

.burger-menu {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  margin: 0 dynamic-padding(1);
  

  .burger-menu-span {
    width: 100%;
    height: 3px;
    border-radius: 10px;
    transition: all 0.3s linear;
    &.burger-dark {
      background-color: $textPrimaryDark;
  }

  &.burger-light {
      background-color: $textPrimaryLight;
    
  }
  }



  @media (max-width: 985px) {
    display: flex;
  }
}
</style>