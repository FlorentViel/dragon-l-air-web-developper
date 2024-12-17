<template>
  <div v-show="isVisible" ref="rightMenu" class="right-menu" :class="{ 'open': isRightMenuOpen, 'dark-mode': theme.isDarkMode, 'light-mode': !theme.isDarkMode, 'closing': isClosing }">
    <button @click="toggleRightMenu" class="toggle-button" :class="theme.isDarkMode ? 'dark' : 'light'">
      <font-awesome-icon :icon="['fas', 'arrow-right']" :class="theme.isDarkMode ? 'icon-dark' : 'icon-light'" />
    </button>
    <ToggleDarkMode :theme="theme" @toggle-theme-request="toggleThemeAndEmit" />
    <div class="background-carousel">
      <div v-for="(image, index) in backgroundImages" :key="index" class="carousel-item">
        <img :src="image" @click="changeBackground(image)" :class="{ 'selected': selectedBackground === image }" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { defineProps, defineEmits } from 'vue';
import ToggleDarkMode from './ToggleDarkMode.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

library.add(faArrowLeft, faArrowRight);

const props = defineProps({
  theme: Object,
  isRightMenuOpen: Boolean,
  backgroundImages: Array,
  selectedBackground: String
});

const emit = defineEmits(['toggle-right-menu', 'toggle-theme-request', 'change-background']);

const isVisible = ref(false);
const isClosing = ref(false);

watch(() => props.isRightMenuOpen, (newVal) => {
  if (newVal) {
    isClosing.value = false;
    isVisible.value = true;
  } else {
    isClosing.value = true;
    setTimeout(() => {
      isVisible.value = false;
      isClosing.value = false;
    }, 300); // Durée de l'animation de fermeture
  }
});

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
@import '../../assets/styles/navBar.scss';
@import './../../assets/styles/flex.scss';


@keyframes slideIn {
  0% {
    transform: translateX(100%);
    display: none;
  }
  100% {
    transform: translateX(0);
    display: flex;

  }
}

@keyframes slideOut {
  0% {
    transform: translateX(0);
    display: flex;
  }
  100% {
    transform: translateX(100%);
    display: none;
  }
}

.right-menu {
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  display: none; /* Initialement caché */
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding: 20px;
  z-index: 100;
  overflow-y: auto;
  

  &.open {
    display: flex; /* Afficher lorsque ouvert */
    animation: slideIn 0.3s forwards; /* Animation d'ouverture */
  }

  &.closing {
    animation: slideOut 0.3s forwards; /* Animation de fermeture */
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