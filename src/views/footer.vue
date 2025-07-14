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
  width: 100vw;
  height: auto;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  bottom: 0;
  background-size: 100vw;
  position: relative;
  padding: $spacing-lg $spacing-xl;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  transition: background-color 0.3s ease;
  margin: 0 auto;
  
  @media (max-width: $breakpoint-lg) {
    padding: $spacing-md $spacing-lg;
  }
  
  @media (max-width: $breakpoint-md) {
    padding: $spacing-sm $spacing-md;
    flex-direction: column;
    gap: $spacing-md;
  }

  &.nav-dark {
    background-color: $bgDark1;
  }

  &.nav-light {
    background-color: $bgLight1;
  }
}

.footerTextLight {
  color: $textSecondaryLight;
  text-decoration: none;
  transition: color $transition-duration ease;
  
  &:hover {
    color: $textLinkHover;
  }
}

.footerTextDark {
  color: $textSecondaryDark;
  text-decoration: none;
  transition: color $transition-duration ease;
  
  &:hover {
    color: $textLinkHoverDark;
  }
}

.text-color-light {
  color: $textPrimaryLight;
}

.text-color-dark {
  color: $textPrimaryDark;
}

.centered {
  display: flex;
  align-items: center;
  justify-content: center;
}

.text-end {
  text-align: right;
}

.style-text {
  font-size: 0.875rem;
  font-weight: 500;
}

</style>