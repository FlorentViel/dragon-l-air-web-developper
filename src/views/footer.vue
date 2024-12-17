<template>
  <footer id="footerBar" :class="theme.isDarkMode ? 'nav-dark' : 'nav-light'">
    <div class="centered">
      <span class="style-text">
        <router-link :class="theme.isDarkMode ? 'footerTextDark' : 'footerTextLight'" to="/privacyPolicy">Politique de confidentialité</router-link>
      </span>
    </div>
    <div class="text-end centered">
      <span class="style-text" :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'">
        &copy; Florent Vieville
      </span>
      <span class="style-text" :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'">2023</span>
      <br>
      <span class="style-text" :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'">Tous droits réservés</span>
    </div>
  </footer>
</template>

<script>
export default {
  props: ['theme'],
  methods: {
    toggleThemeAndEmit() {
      this.theme.toggleTheme();
      this.$emit('toggleTheme');
    },
  },
};
</script>

<style lang="scss" scoped>

#footerBar {
  width: 100%;
  height: auto;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  bottom: 0;
  background-size: 100vw;
  position: relative;
  padding: rem(16);
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  transition: background-color 0.3s ease;

  &.nav-dark {
    background-color: $bgDark1;
  }

  &.nav-light {
    background-color: $bgLight1;
  }
}




</style>