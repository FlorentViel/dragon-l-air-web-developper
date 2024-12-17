<template>
  <nav id="navBar" :class="theme.isDarkMode ? 'dark-mode' : 'light-mode'">
    <div class="navBar-content" :class="theme.isDarkMode ? 'dark-mode' : 'light-mode'">
      <Logo :theme="theme" />
      <NavBarLinks :theme="theme" :navBar="navBar" :isMenuOpen="isMenuOpen" @toggle-right-menu="toggleRightMenu" />
    </div>
    <FakeSearchBar :theme="theme" :currentRouteName="currentRouteName" @toggle-menu="toggleMenu" @toggle-right-menu="toggleRightMenu" />
  </nav>
</template>

<script setup>
import { ref, computed, defineProps, defineEmits } from 'vue';
import { useRoute } from 'vue-router';
import { Logo, NavBarLinks, FakeSearchBar } from '@/config/components.js';

const props = defineProps(['theme']);
const emit = defineEmits(['toggle-right-menu']);

const activenavItem = ref(0);
const navBar = ref([
  { title: 'Accueil', route: 'home' },
  { title: '\u00C0 propos', route: 'aboutMe' },
  { title: 'Mes service', route: 'service' },
  { title: 'Mes projets', route: 'projet' },
  { title: 'Contact', route: 'contact' },
]);
const isMenuOpen = ref(false);

const route = useRoute();
const currentRouteName = computed(() => route.name);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const toggleRightMenu = () => {
  emit('toggle-right-menu');
};
</script>

<style lang="scss" scoped>

/* navBar scss */

#navBar {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;

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