<template>
  <nav id="navBar" :class="theme.isDarkMode ? 'dark-mode' : 'light-mode'">
    <div class="navBar-content" :class="theme.isDarkMode ? 'dark-mode' : 'light-mode'">
      <Logo :theme="theme" />
      <NavBarLinks :theme="theme" :navBar="navBar" :isMenuOpen="isMenuOpen" />
    </div>
    <FakeSearchBar :theme="theme" :currentRouteName="currentRouteName" :isRightMenuOpen="isRightMenuOpen" @toggle-menu="toggleMenu" @toggle-right-menu="toggleRightMenu" />
    <RightMenu :theme="theme" :isRightMenuOpen="isRightMenuOpen" :backgroundImages="backgroundImages" :selectedBackground="selectedBackground" @toggle-right-menu="toggleRightMenu" @toggle-theme-request="toggleThemeAndEmit" @change-background="changeBackground" />
  </nav>
</template>

<script>
import Logo from '@/views/Logo.vue';  
import NavBarLinks from '@/views/NavBarLinks.vue';
import BurgerMenu from '@/views/BurgerMenu.vue';
import RightMenu from '@/views/RightMenu.vue';
import FakeSearchBar from '@/views/FakeSearchBar.vue';
import { images } from '@/config/images';

export default {
  components: {
    Logo,
    NavBarLinks,
    BurgerMenu,
    RightMenu,
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
      images, // Ajoutez les images à l'état local
      isMenuOpen: false, // État pour le menu burger
      isRightMenuOpen: false, // État pour le menu de droite
      backgroundImages: [
        images.nightBackground,
        images.dayBackground,
      ],
      selectedBackground: '',
      lightModeBackground: images.dayBackground, // Remplacez par le chemin de l'image par défaut pour le mode clair
    };
  },
  props: ['theme'],
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  },
  methods: {
    toggleThemeAndEmit() {
      this.theme.toggleTheme();
      this.$emit('toggle-theme-request');
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    toggleRightMenu() {
      this.isRightMenuOpen = !this.isRightMenuOpen;
    },
    changeBackground(image) {
      this.selectedBackground = image;
      localStorage.setItem('selectedBackground', image);
      document.body.style.backgroundImage = `url(${image})`;
    },
  },
  watch: {
    selectedBackground(newImage) {
      document.body.style.backgroundImage = `url(${newImage})`;
    }
  },
  mounted() {
    const storedBackground = localStorage.getItem('selectedBackground');
    if (storedBackground) {
      this.selectedBackground = storedBackground;
    } else {
      this.selectedBackground = this.lightModeBackground;
    }
    document.body.style.backgroundImage = `url(${this.selectedBackground})`;
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




.navBar-links {
  display: flex;
  align-items: center;
  flex-grow: 1;
  flex-wrap: wrap;
  width: 80%;
  transition: max-height 0.3s ease-in-out;

  @media (max-width: 985px) {
    flex-direction: column;
    align-items: flex-start;
    max-height: 0;
    overflow: hidden;
    width: 100%;

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

.theme-toggle {
  display: flex;
  align-items: center;
  gap: 2px;
  .text-white {
    color: white;
  }
  .text-dark {
    color: black;
  }
}

/* toggle bouton */ 

.checkbox {
  opacity: 0;
  position: absolute;
}

.checkbox-label {
  width: 50px;
  height: 26px;
  border-radius: 50px;
  position: relative;
  padding: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  gap: 5px;
  align-items: center;
}

.checkbox-label-light {
  background: linear-gradient(90deg, $StartLightGradient 0%, $EndLightGradient  75%);
}

.checkbox-label-dark {
  background: linear-gradient(90deg, $StartDarkGradient 0%, $EndDarkGradient  75%);
}

.fa-moon {color: #fffdf7;}

.fa-sun {color: #fffb00;}

.checkbox-label .ball {
  width: 22px;
  height: 22px;
  position: absolute;
  left: 2px;
  top: 2px;
  border-radius: 50%;
  transition: transform 0.2s linear;
}

.checkbox-label-dark .ball {
  background-image: linear-gradient(to right, $StartDarkGradient, $EndDarkGradient);
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
}

.checkbox-label-light .ball {
  background-image: linear-gradient(to right, $StartLightGradient, $EndLightGradient);
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
}

.checkbox:checked + .checkbox-label .ball {
  transform: translateX(24px);
}

.close-navItem {
  display: inline-block;
  padding: 1px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  &.dark-mode {
    color: $textSecondaryDark;
  }
  &.light-mode {
    color: $textSecondaryLight;
  }
}

.fake-search-bar {
  display: flex;
  align-items: center;
  padding: 10px 10px;
  border-radius: 5px;
  width: 100%;
  transition: background-color 0.3s ease-in-out;

  i {
    margin-right: 5px;
  }
}

.fake-search-bar-light {
  background-color: #f0f0f0;
  color: #333;

  &:hover {
    background-color: $StartLightGradient-50;
  }
}

.fake-search-bar-dark {
  background-color: #333;
  color: #f0f0f0;

  &:hover {
    background-color: $StartDarkGradient-50;
  }
}

@media (max-width: 984px) {
  #navBar a {
    width: 100%;
  }
}

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
  gap: 10px;
  width: 30px;
  height: auto;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  margin: 0 dynamic-padding(1);
  transform: rotate(90deg);

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

.right-menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background-color: $bgDarkNav;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  @include flex-column;
  gap: 10px;
  align-items: center;
  padding: 20px;
  z-index: 100;

  &.open {
    transform: translateX(0);
  }

  .theme-toggle {
    margin-bottom: 20px;
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