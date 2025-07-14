<template>
  <nav id="navBar" :class="theme.isDarkMode ? 'dark-mode' : 'light-mode'">
    <div class="navBar-content" :class="theme.isDarkMode ? 'dark-mode' : 'light-mode'">
      <div class="nav-top-section">
        <Logo :theme="theme" />
        <div class="contact-info">
          <div class="contact-item">
            <font-awesome-icon :icon="['fas', 'phone']" />
            <span>06 48 74 42 30</span>
          </div>
          <div class="contact-item">
            <font-awesome-icon :icon="['fas', 'envelope']" />
            <a href="mailto:florent.vieville03@gmail.com">florent.vieville03@gmail.com</a>
          </div>
        </div>
        <div class="social-links">
          <a href="#" class="social-link">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="#" class="social-link">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="#" class="social-link">
            <i class="fa-brands fa-facebook"></i>
          </a>
        </div>
      </div>
      <NavBarLinks :theme="theme" :navBar="navBar" :isMenuOpen="isMenuOpen" @toggle-theme-request="toggleThemeAndEmit" />
    </div>
    <FakeSearchBar :theme="theme" :currentRouteName="currentRouteName" @toggle-menu="toggleMenu" />
  </nav>
</template>

<script setup>
import { ref, computed, defineProps, defineEmits } from 'vue';
import { useRoute } from 'vue-router';
import { Logo, NavBarLinks, FakeSearchBar } from '@/config/components.js';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(faPhone, faEnvelope);

const props = defineProps(['theme']);
const emit = defineEmits(['toggle-theme-request']);

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

const toggleThemeAndEmit = () => {
  emit('toggle-theme-request');
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
  backdrop-filter: blur(10px);
  background: $bgLight1;
  border-bottom: 2px solid $mediumSlateBlue;
  box-shadow: 0 2px 8px rgba(116, 108, 247, 0.08);

  &.light-mode {
    background-color: rgba(255, 255, 255, 0.95);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  &.dark-mode {
    background-color: rgba(26, 32, 44, 0.95);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  @media (max-width: $breakpoint-lg) {
    flex-direction: column;
  }
}

.navBar-content {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  padding: $spacing-md $spacing-lg;
  background: $bgLight2;
  border-radius: $border-radius;
  box-shadow: 0 2px 8px rgba(116, 108, 247, 0.05);

  @media (max-width: $breakpoint-lg) {
    padding: $spacing-sm $spacing-md;
  }

  &.light-mode {
    background-color: transparent;
  }

  &.dark-mode {
    background-color: transparent;
  }
}

.nav-top-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: $spacing-md;
  flex-wrap: wrap;
  gap: $spacing-md;

  @media (max-width: $breakpoint-lg) {
    flex-direction: column;
    align-items: center;
    gap: $spacing-sm;
  }

  .contact-info, .social-links {
    a, span {
      color: $textSecondaryLight;
      font-weight: 600;
      &:hover {
        color: $textLinkHover;
      }
    }
  }
}

.contact-info {
  display: flex;
  gap: $spacing-lg;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: $breakpoint-md) {
    flex-direction: column;
    gap: $spacing-sm;
  }
}

.contact-item {
  display: flex;
  align-items: center;
  gap: $spacing-sm;
  padding: $spacing-sm $spacing-md;
  background: rgba(116, 108, 247, 0.1);
  border-radius: $border-radius;
  font-size: 0.875rem;
  transition: all $transition-duration ease;
  
  &:hover {
    background: rgba(116, 108, 247, 0.2);
    transform: translateY(-1px);
  }

  .dark-mode & {
    background: rgba(53, 64, 253, 0.1);
    
    &:hover {
      background: rgba(53, 64, 253, 0.2);
    }
  }

  a {
    color: $StartLightGradient;
    text-decoration: none;
    font-weight: 500;
    
    &:hover {
      color: $EndLightGradient;
    }

    .dark-mode & {
      color: $textSecondaryDark;
      
      &:hover {
        color: $textLinkHoverDark;
      }
    }
  }

  svg {
    color: $StartLightGradient;
    
    .dark-mode & {
      color: $StartDarkGradient;
    }
  }
}

.contact-info .contact-item span {
  color: $textSecondaryLight;
  .dark-mode & {
    color: $textSecondaryDark;
  }
}

.social-links {
  display: flex;
  gap: $spacing-md;
  align-items: center;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(116, 108, 247, 0.1);
  color: $StartLightGradient;
  text-decoration: none;
  transition: all $transition-duration ease;
  
  &:hover {
    background: rgba(116, 108, 247, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(116, 108, 247, 0.3);
  }

  .dark-mode & {
    background: rgba(53, 64, 253, 0.1);
    color: $StartDarkGradient;
    
    &:hover {
      background: rgba(53, 64, 253, 0.2);
      box-shadow: 0 4px 12px rgba(53, 64, 253, 0.3);
    }
  }

  i {
    font-size: 1.125rem;
    color: $StartLightGradient;
    transition: color $transition-duration ease;
  }
  
  &:hover i {
    color: $EndLightGradient;
  }
  
  .dark-mode & i {
    color: $StartDarkGradient;
  }
  
  .dark-mode &:hover i {
    color: $EndDarkGradient;
  }
}

/* Liens de navigation */
.navBar-item {
  color: $textSecondaryLight;
  font-weight: 600;
  border-radius: $border-radius-sm;
  transition: background $transition-duration, color $transition-duration;
  &:hover, &.navItem-active-light {
    background: $mainGradient;
    color: $white;
  }
}
</style>