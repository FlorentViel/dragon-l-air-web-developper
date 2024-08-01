<template>
  <div class="fake-search-bar" :class="theme.isDarkMode ? 'fake-search-bar-dark' : 'fake-search-bar-light'">
    <div class="fake-search-bar-left">
      <div class="cadenas-icon" :class="theme.isDarkMode ? 'cadenas-icon-dark' : 'cadenas-icon-light'">
        <svg v-if="theme.isDarkMode" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z" fill="white"/>
      </svg>
      <svg v-if="!theme.isDarkMode" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z"/>
        </svg>
      </div>
      <div class="fake-search-bar-text-block">
        <span v-if="currentRouteName !== 'home'">https://www.thedragonslairwebdeveloper.com/{{ currentRouteName }}</span>
        <span v-else>https://www.thedragonslairwebdeveloper.com</span>
      </div>
    </div>

    <BurgerMenu :theme="theme" @toggle-menu="toggleMenu" />
  </div>
</template>

<script>
import BurgerMenu from '@/views/NavBar/BurgerMenu.vue';

export default {
  components: {
    BurgerMenu
  },
  props: ['theme', 'currentRouteName', 'isRightMenuOpen'],
  methods: {
    toggleMenu() {
      this.$emit('toggle-menu');
    },
  }
};
</script>

<style lang="scss" scoped>

.fake-search-bar {

  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: rem(10) rem(10);

  @include media-breakpoint(down, lg) {
    justify-content: space-between;
  }

  .fake-search-bar-left {
    display: flex;
    align-items: center;
    gap: rem(10);
  }

  .cadenas-icon {
    display: flex;
    align-items: center;
    margin-right: dynamic-padding(1.5);
    margin-left: dynamic-padding(1);
    width: 20px;
    height: 20px;

    @include media-breakpoint(down, md) {
      width: 15px;
      height: 15px;
    }

    @include media-breakpoint(down, sm) {
      width: 13px;
      height: 13px;
    }
  }

  .fake-search-bar-text-block {
    display: flex;
    align-items: center;
  }

  &.fake-search-bar-light {
    background-color: $bgLight1;
    color: $linkLight;
    @include font-size-responsive(0.8rem, 1.2rem);


    &:hover {
    background-color: $StartLightGradient-50;
  }
  }

  &.fake-search-bar-dark {
    background-color: $bgDark1;
    color: $linkdark;

    &:hover {
      background-color: $StartDarkGradient-50;

    }
  }
  
}</style>