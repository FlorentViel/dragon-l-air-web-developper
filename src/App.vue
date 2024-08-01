<template>
  <div id="#main-page" class="main-bloc">
    <div :class="theme.isDarkMode ? 'dark-mode' : 'light-mode'" class="computer">
      <div :class="theme.isDarkMode ? 'dark-mode' : 'light-mode'" class="screen">
        <NavBar :theme="theme" :selectedSection="selectedSection" @toggle-theme-request="toggleTheme" @toggle-right-menu="toggleRightMenu" />
        <main>
          <router-view :theme="theme" :changeSection="changeSection" v-slot="{ Component }">
            <transition :name="fade" mode="out-in" appear>
              <component :is="Component" />
            </transition>
          </router-view>
        </main>
        <Footer :theme="theme" />
        <RightMenu :theme="theme" :isRightMenuOpen="isRightMenuOpen" :backgroundImages="backgroundImages" :selectedBackground="selectedBackground" @toggle-right-menu="toggleRightMenu" @toggle-theme-request="toggleThemeAndEmit" @change-background="changeBackground" />
      </div> 
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import NavBar from '@/components/navBar.vue';
import Footer from '@/components/footer.vue';
import RightMenu from '@/views/NavBar/RightMenu.vue';
import { images } from '@/config/images';

// Homepage

const pageTitle = ref('Portfolio Florent VIEVILLE'); 
const selectedSection = ref('A propos'); // Par défaut, afficher la section "Accueil"
const fade = 'fade';

const isDarkMode = ref(localStorage.getItem('theme') === 'dark' ? true : false);

const theme = reactive({
  isDarkMode,
  toggleTheme() {
    isDarkMode.value = !isDarkMode.value;
    localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light');
  },
});

const tabs = [
  { title: 'Accueil', route: 'home' },
  { title: 'A propos de moi', route: 'aboutMe' },
  { title: 'Mes services', route: 'service' },
  { title: 'Mes projets', route: 'projet' },
  { title: 'Contact', route: 'contact' },
  // Ajoutez autant d'onglets que vous le souhaitez
];

const isRightMenuOpen = ref(false);
const backgroundImages = ref([
  images.nightBackground,
  images.dayBackground,
]);
const selectedBackground = ref(images.dayBackground);

function changeSection(newSectionName) {
  selectedSection.value = newSectionName; // Mettez à jour la section sélectionnée
  const baseTitle = 'Dragon\'s l\'Air Web Developper ';
  const newTitle = newSectionName === 'A propos' ? baseTitle : `${baseTitle} - ${newSectionName}`;
  document.title = newTitle; // Mettez à jour le titre de la page
}

function toggleTheme() {
  theme.toggleTheme();
}

function toggleRightMenu() {
  isRightMenuOpen.value = !isRightMenuOpen.value;
}

function changeBackground(image) {
  selectedBackground.value = image;
  localStorage.setItem('selectedBackground', image);
  document.body.style.backgroundImage = `url(${image})`;
}

function toggleThemeAndEmit() {
  toggleTheme();
  // Any additional logic if needed
}

const route = useRoute();

watch(route, (newRoute) => {
  const tab = tabs.find(tab => tab.route === newRoute.name);
  if (tab) {
    changeSection(tab.title);
  }
});

watch(() => theme.isDarkMode, (newVal) => {
  localStorage.setItem('theme', newVal ? 'dark' : 'light');
});

watch(selectedBackground, (newImage) => {
  document.body.style.backgroundImage = `url(${newImage})`;
});

onMounted(() => {
  const storedBackground = localStorage.getItem('selectedBackground');
  if (storedBackground) {
    selectedBackground.value = storedBackground;
  } else {
    selectedBackground.value = images.dayBackground;
  }
  document.body.style.backgroundImage = `url(${selectedBackground.value})`;
});
</script>

<style lang="scss" scoped>
.main-bloc {
  display: flex;
  justify-content: center;
  width: 100vw;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

/* main */
/* computer css */

.computer {
  margin: 0 auto;
  height: 90%;
  border-radius: 15px;
  padding: rem(16);
  position: relative;
  height: max-content;
  @include responsive-container-max-widths;
  @include responsive-container-min-widths;
}

.computer.light-mode {
  background: $bluelight ;
  background: $borderLightGardient;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: background-color 1s ease-in-out;
}

.computer.dark-mode {
  background: rgb(51,66,255); 
  background: $borderDarkGardient;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  transition: background-color 1s ease-in-out;
}

.computer::before {
  content: "";
  position: absolute;
  top: -30px;
  left: 50%;
  max-height: 600px;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
}

.computer.dark-mode::before {
  border-bottom: 30px solid $EndDarkGradient;
}

.computer.light-mode::before {
  border-bottom: 30px solid #fff;
}

.screen {
  height: max-content;
  border-radius: 10px;
  transition: background-color 1s ease-in-out;
  max-height: 600px;
  overflow-y: scroll;
  scroll-behavior: smooth;
  position: relative; /* Ajouté pour contenir le menu de droite */

  /* Styles pour rendre la barre de défilement invisible */
  scrollbar-width: none; /* Pour Firefox */
  -ms-overflow-style: none;  /* Pour Internet Explorer et Edge */

  .screen::-webkit-scrollbar {
    display: none; /* Pour Chrome, Safari et Opera */
  }

  /* autres styles de l'écran */
}

.screen.light-mode {
  background: $bgLight1;
  transition: background-color 1s ease-in-out;
}

.screen.dark-mode {
  background: $bgDark1;
  transition: background-color 1s ease-in-out;
}

#app {
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  max-width: 100%;
}

footer {
  flex-shrink: 0;
}

/* background css */

/* background sptich text */

.blocPresentation {
  border-radius: 1.5rem;
  position: relative;
  height: max-content;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}  

/*aboutme blocbackground */

.bloc-presentation-light {
  background-color: rgb(255, 255, 255);
  border: 1px solid rgba(69, 144, 255, 0.833);
}

.bloc-presentation-dark {
  background: rgb(40, 38, 38);
  border: 1px solid rgba(29, 29, 30, 0.833);
}

/*@include media-breakpoint-down(lg) {
  #main-page {
    margin-left: 0 !important;
    margin-right: 0 !important;
    width: 100vw!important;
  }
  .computer {
    width: 100%;
    margin: 0 auto;
  }

  .computer-light::before {
    border-bottom: none;
  }

  .backgroundImageLight {
    background-color: #fff;
  }
  .backgroundImageDark {
    background-color: #121212;
  }
} */
</style>