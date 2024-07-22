<template>
  <nav id="navBar" :class="theme.isDarkMode ? 'dark-mode' : 'light-mode'">
    <div class="navBar-content" :class="theme.isDarkMode ? 'dark-mode' : 'light-mode'">
      <Logo :theme="theme" />
      <NavBarLinks :theme="theme" :navBar="navBar" :isMenuOpen="isMenuOpen" @toggle-right-menu="toggleRightMenu" />
    </div>
    <FakeSearchBar :theme="theme" :currentRouteName="currentRouteName" @toggle-menu="toggleMenu" @toggle-right-menu="toggleRightMenu" />
  </nav>
</template>

<script>
import Logo from '@/views/NavBar/Logo.vue';  
import NavBarLinks from '@/views/NavBar/NavBarLinks.vue';
import FakeSearchBar from '@/views/NavBar/FakeSearchBar.vue';

export default {
  components: {
    Logo,
    NavBarLinks,
    FakeSearchBar
  },
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
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    toggleRightMenu() {
      this.$emit('toggle-right-menu');
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/_variables.scss';

/* navBar scss */

#navBar {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  gap: 10px;

  &.light-mode {
    background-color: $bgLight1;
  }

  &.dark-mode {
    background-color: $bgDark1;
  }

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
</style>