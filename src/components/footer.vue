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
@import '@/assets/_variables.scss';

#footerBar {
  width: 100%;
  height: auto;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  bottom: 0;
  background-size: 100vw;
  position: relative;
  padding: dynamic-padding(1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}


</style>