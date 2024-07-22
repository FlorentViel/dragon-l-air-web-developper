<template>
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
    <BurgerMenu :theme="theme" :isVertical="true" @toggle-menu="toggleRightMenu" v-if="!isMenuOpen" /> 
  </div>
  
</template>

<script>
import BurgerMenu from './BurgerMenu.vue';


export default {
  components: {
    BurgerMenu
  },
  props: ['theme', 'navBar', 'isMenuOpen', 'isRightMenuOpen'],
  methods: {
    toggleRightMenu() {
      this.$emit('toggle-right-menu');
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/_variables.scss';

.burger-menu {    
  align-self: center;
  margin-right: 10px;
}

.navBar-links {
  display: flex;
  align-items: center;
  width: 80%;
  flex-wrap: wrap;
  transition: max-height 0.3s ease-in-out;

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
</style>