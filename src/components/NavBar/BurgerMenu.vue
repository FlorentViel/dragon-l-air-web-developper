<template>
  <button :class="['burger-menu', { 'burger-menu-vertical': isVertical }]" @click="toggleMenu">
    <span class="burger-menu-span" :class="theme.isDarkMode ? 'burger-dark' : 'burger-light'"></span>
    <span class="burger-menu-span" :class="theme.isDarkMode ? 'burger-dark' : 'burger-light'"></span>
    <span class="burger-menu-span" :class="theme.isDarkMode ? 'burger-dark' : 'burger-light'"></span>
  </button>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps(['theme', 'isVertical']);
const emit = defineEmits(['toggle-menu']);

const toggleMenu = () => {
  emit('toggle-menu');
};
</script>

<style lang="scss" scoped>
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

.burger-menu-vertical {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 15px;
  height: auto;
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
}

.toggle-button {
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: inherit;
  padding: 0.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
}

</style>