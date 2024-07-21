<template>
  <nav id="navBar" :class="theme.isDarkMode ? 'dark-mode' : 'light-mode'">
    <div class="navBar-content">
      <!-- Profil-picture -->
      <img id="profil_picture" :class="theme.isDarkMode ? 'photo-dark' : 'photo-light'"
           class="logo"
           :src="theme.isDarkMode ? images.nightLogo : images.lightLogo"
           alt="Photo de profil"/>
      <div class="navBar-links" :class="theme.isDarkMode ? 'navBar-links-dark' : 'navBar-links-light'">
        <router-link 
          class="navBar-item" 
          v-for="(navItem, index) in navBar" 
          :key="index" 
          :to="{ name: navItem.route }"
          :class="[
            theme.isDarkMode ? 'link-section-dark' : 'link-section-light', 
            { 
              'navItem-active-dark': theme.isDarkMode && $route.name === navItem.route,
              'navItem-active-light': !theme.isDarkMode && $route.name === navItem.route
            }
          ]">
          {{ navItem.title }}
          <span :class="theme.isDarkMode ? 'dark-mode' : 'light-mode'" class="close-navItem">x</span>
        </router-link>
      </div>  
    </div>

    <div class="theme-toggle">
      <span class="theme-toggle-text" :class="theme.isDarkMode ? 'text-white' : 'text-dark'">
        {{ theme.isDarkMode ? 'Mode jour' : 'Mode nuit' }}
      </span>
      <input type="checkbox" class="checkbox" id="checkbox" v-model="theme.isDarkMode" @click="toggleThemeAndEmit">
      <label for="checkbox" class="checkbox-label" :class="theme.isDarkMode ? 'checkbox-label-dark' : 'checkbox-label-light'">
        <i class="fas fa-moon"></i>
        <i class="fas fa-sun"></i>
        <span class="ball"></span>
      </label>
    </div>
  </nav>
</template>

<script>
import { images } from '@/config/images';

export default {
  data() {
    return {
      activenavItem: 0,
      navBar: [
        { title: 'Florent VIEVILLE', route: 'home' },
        { title: '\u00C0 propos', route: 'aboutMe' },
        { title: 'Mes service', route: 'service' },
        { title: 'Mes projets', route: 'projet' },
        { title: 'Contact', route: 'contact' },
      ],
    };
  },
  props: ['theme'],
  methods: {
    toggleThemeAndEmit() {
      this.theme.toggleTheme();
      this.$emit('toggle-theme-request');
    },
    changeTitle(title, toRoute) {
      const fromRoute = this.$route.name;
      this.transitionName = this.getTransitionName(fromRoute, toRoute);
      this.$store.commit('setTitle', title);
    },
  },
};
</script>

<script setup>
import { ref } from 'vue';

const selectedSection = ref('Accueil');

function changeTitle(newSectionName) {
  const baseTitle = 'Portfolio Florent VIEVILLE';
  const newTitle = newSectionName === 'Accueil' ? baseTitle : `${baseTitle} - ${newSectionName}`;
  document.title = newTitle;
  selectedSection.value = newSectionName;
}
</script>

<style lang="scss" scoped>
@import '@/assets/_variables.scss';

#navBar {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: end;
  margin: 0;


  &.dark-mode {
    background-color: $bgDarkNav;
    border-bottom: 1px solid $borderDark;
    a {
      box-shadow: 0 8px 32px 0 $shadow;
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      transition: all 1s ease-in-out;
    }
  }
  &.light-mode {

    background-color: $bgLightNav;
    border-bottom: 1px solid $borderLight;

    a {
      box-shadow: 0 8px 32px 0 $shadow;
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      transition: all 1s ease-in-out;
    }
  }

  @media (max-width: 985px) {
    flex-direction: column;
  }
}

.navBar-content {
  display: flex;
  align-items: center;
  width: 100%;
}

.logo {
  width: 45px;
  height: 45px;
  padding: 5px;
  transition: all 0.3s ease-in-out;
}

.navBar-links {
  display: flex;
  align-items: center;
  flex-grow: 1;
  flex-wrap: wrap;
  width: 80%;
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
      background-color: $bgDark1;
      transition: background-color 0.3s ease-in-out;
    }
  }
  &.link-section-light {
    background-color: rgb(230, 238, 239);
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: $bgLight1;
      transition: background-color 0.3s ease-in-out;
    }
  }
  &.navItem-active-dark {
    background: rgba(0, 36, 41);
    border: 1px solid $borderDark;
    margin-bottom: -1px;
    border-bottom: 2px solid $bgDark1;
    border-radius: 5px 5px 0 0;
    transition: border-bottom 1s ease-in-out;
  }
  &.navItem-active-light {
    background: rgba(255, 255, 255, 0.8);
    border: 1px solid $borderLight;
    border-bottom: 2px solid $bgLight1;
    border-radius: 5px 5px 0 0;
    transition: border-bottom 0.3s ease-in-out;
    margin-bottom: -1px;
  }
}

.theme-toggle {
  display: flex;
  align-items: end;
  gap: 10px;
  width: 250px;
  margin: auto;
  .text-white {
    color: white;
  }
  .text-dark {
    color: black;
  }
}

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
  align-items: center;
  &.checkbox-label-light {
    background: linear-gradient(90deg, $StartLightGradient 0%, $StartLightGradient 75%);
  }
  &.checkbox-label-dark {
    background: linear-gradient(90deg, $StartDarkGradient 0%, $StartDarkGradient 75%);
  }
}

.fa-moon {
  color: #fffdf7;
}

.fa-sun {
  color: #fffb00;
}

.checkbox-label .ball {
  width: 22px;
  height: 22px;
  position: absolute;
  left: 2px;
  top: 2px;
  border-radius: 50%;
  transition: transform 0.2s linear;
  &.checkbox-label-dark {
    background-image: linear-gradient(to right, var(--StartDarkGradient), var(--EndDarkGradient));
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  }
  &.checkbox-label-light {
    background-image: linear-gradient(to right, var(--StartLightGradient), var(--EndLightGradient));
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  }
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
    color: var(--textSecondaryDark);
  }
  &.light-mode {
    color: var(--textSecondaryLight);
  }
}

@media (max-width: 984px) {
  #navBar a {
    width: 100%;
  }
}
</style>