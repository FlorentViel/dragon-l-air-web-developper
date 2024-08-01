<template>
  <div class="right-menu" :class="{ 'open': isRightMenuOpen, 'dark-mode': theme.isDarkMode, 'light-mode': !theme.isDarkMode }">
    <BurgerMenu :theme="theme" :isVertical="true" @toggle-menu="toggleRightMenu" />
    <ToggleDarkMode :theme="theme" @toggle-theme-request="toggleThemeAndEmit" />
    <div class="background-carousel">
      <div v-for="(image, index) in backgroundImages" :key="index" class="carousel-item">
        <img :src="image" @click="changeBackground(image)" :class="{ 'selected': selectedBackground === image }" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import ToggleDarkMode from './ToggleDarkMode.vue';
import BurgerMenu from './BurgerMenu.vue';

const props = defineProps({
  theme: Object,
  isRightMenuOpen: Boolean,
  backgroundImages: Array,
  selectedBackground: String
});

const emit = defineEmits(['toggle-right-menu', 'toggle-theme-request', 'change-background']);

function toggleRightMenu() {
  emit('toggle-right-menu');
}

function toggleThemeAndEmit() {
  props.theme.toggleTheme();
  emit('toggle-theme-request');
}

function changeBackground(image) {
  emit('change-background', image);
}
</script>

<style lang="scss" scoped>

.right-menu {
  position: absolute; /* Change from fixed to absolute */
  top: 0;
  right: 0;
  width: 300px;
  height: 100%; /* Change to 100% to ensure it takes the full height of the parent */
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding: 20px;
  z-index: 100;
  overflow-y: auto; /* Ajouté pour permettre le défilement vertical */

  &.open {
    transform: translateX(0);
  }

  &.dark-mode {
    background-color: $bgDarkNav;
    color: $textPrimaryDark;
  }

  &.light-mode {
    background-color: $bgLightNav;
    color: $textPrimaryLight;
  }

  .background-carousel {
    display: flex;
    align-items: center;
    overflow-x: auto;

    .carousel-item {
      margin-bottom: 10px;

      img {
        width: 50px;
        height: 50px;
        cursor: pointer;
        border: 2px solid transparent;
        border-radius: 5px;

        &.selected {
          border-color: $StartDarkGradient;
        }
      }
    }
  }
}
</style>