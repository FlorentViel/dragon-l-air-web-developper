<template>
  <div class="navBar-links" :class="['navBar-links', theme.isDarkMode ? 'navBar-links-dark' : 'navBar-links-light', { 'open': isMenuOpen }]">
    <div class="links-container">
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

    <ToggleDarkMode :theme="theme" @toggle-theme-request="toggleThemeAndEmit" />
  </div>
  
</template>

<script>
import BurgerMenu from './BurgerMenu.vue';
import ToggleDarkMode from './ToggleDarkMode.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

library.add(faArrowLeft, faArrowRight);

export default {
  components: {
    BurgerMenu,
    ToggleDarkMode,
    FontAwesomeIcon
  },
  props: ['theme', 'navBar', 'isMenuOpen'],
  methods: {
    toggleThemeAndEmit() {
      this.$emit('toggle-theme-request');
    }
  }
};
</script>

<style lang="scss" scoped>

@import '../../assets/styles/navBar.scss';


.burger-menu {    
  align-self: center;
  margin-right: 10px;
}

.navBar-links {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  flex-wrap: wrap;
  transition: max-height 0.3s ease-in-out;

  .links-container {
    display: flex;
    align-items: center;
  }

  @media (max-width: 985px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    max-height: 0;
    overflow: hidden;
    width: 100%;

    a{
      width: 100%;
    }

    &.open {
      max-height: 300px; // Ajustez cette valeur selon la hauteur de votre menu
    }
  }
}

/* Styles pour le bouton de basculement dans la navbar */
.navBar-links .theme-toggle {
  display: flex;
  align-items: center;
  gap: $spacing-sm;
  padding: $spacing-sm $spacing-md;
  background: rgba(116, 108, 247, 0.1);
  border-radius: $border-radius;
  transition: all $transition-duration ease;
  margin-left: auto;
  
  &:hover {
    background: rgba(116, 108, 247, 0.2);
    transform: translateY(-1px);
  }
  
  .dark-mode & {
    background: rgba(53, 64, 253, 0.1);
    
    &:hover {
      background: rgba(53, 64, 253, 0.2);
    }
  }
  
  .theme-toggle-text {
    font-size: 0.875rem;
    font-weight: 500;
    white-space: nowrap;
    
    &.text-white {
      color: $textPrimaryDark;
    }
    
    &.text-dark {
      color: $textPrimaryLight;
    }
  }
  
  @media (max-width: 985px) {
    margin-left: 0;
    margin-top: $spacing-md;
    align-self: flex-end;
  }
  
  @media (max-width: $breakpoint-md) {
    .theme-toggle-text {
      display: none;
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

.toggle-button {
  margin-left: auto;
  margin-right: rem(32);

}
</style>