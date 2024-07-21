<template>
  <div :class="[theme.isDarkMode ? 'backgroundImageDark' : 'backgroundImageLight', $route.name === 'privacyPolicy' ? (theme.isDarkMode ? 'privacyPolicyBackgroundDark' : 'privacyPolicyBackgroundLight') : 'backgroundDefault']" class="d-flex flex-column" @toggle-theme-request="toggleTheme">
        
    <div id="#main-page">
      <div :class="theme.isDarkMode ? 'dark-mode' : 'light-mode'" class="computer">
        <div :class="theme.isDarkMode ? 'dark-mode' : 'light-mode'" class="screen">
          <NavBar :theme="theme" :selectedSection="selectedSection" @toggle-theme-request="toggleTheme" />
          <main>
              <router-view :theme="theme" :changeSection="changeSection" v-slot="{ Component }">
              <transition :name="fade" mode="out-in" appear>
                  <component :is="Component" />
              </transition>
            </router-view>
          </main>

          <Footer :theme="theme" />
        </div>
      </div>
    </div>


  </div>
</template>



<script setup>

import NavBar from '@/components/navBar.vue';
import Footer from '@/components/footer.vue';
import { ref, reactive, watch } from 'vue';
import { useRoute } from 'vue-router';

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

function changeSection(newSectionName) {
  selectedSection.value = newSectionName; // Mettez à jour la section sélectionnée
  const baseTitle = 'Dragon\'s l\'Air Web Developper ';
  const newTitle = newSectionName === 'A propos' ? baseTitle : `${baseTitle} - ${newSectionName}`;
  document.title = newTitle; // Mettez à jour le titre de la page
}

function toggleTheme() {
  theme.toggleTheme();
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

</script>

<script>

export default {

  components: {
    NavBar
  },

  data() {
    return {
      activeTab: 0,
      tabs: [
        { title: 'Accueil', route: 'home', },
        { title: 'A propos de moi', route: 'aboutMe'},
        { title: 'Mes service', route: 'service'},
        { title: 'Mes projets', route: 'projet'},
        { title: 'Contact', route: 'contact'},
        // Ajoutez autant d'onglets que vous le souhaitez
      ],
      theme: {
        isDarkMode: JSON.parse(localStorage.getItem('isDarkMode')) || window.matchMedia('(prefers-color-scheme: dark)').matches,
      },

    };
  },
  created() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.theme.isDarkMode = savedTheme === 'dark';
    }
  },
  watch: {
    activeTab(newActiveTab) {
      this.changeSection(this.tabs[newActiveTab].title)
    },
    'theme.isDarkMode'(newVal) {
      localStorage.setItem('theme', newVal ? 'dark' : 'light');
    }
  },
  mounted() {
    // Ajoutez un écouteur pour détecter les changements de préférences de thème
    window.matchMedia('(prefers-color-scheme: dark)').addListener(this.handleThemeChange);
  },
  setup() {
    return {
      theme
    };
  },
  methods: {
    changeTitle(title) {
      document.title = title;
},
    toggleTheme() {
      this.theme.isDarkMode = !this.theme.isDarkMode;
      localStorage.setItem('isDarkMode', JSON.stringify(this.theme.isDarkMode));
    },
    handleThemeChange(e) {
    // Ne changez le thème que si l'utilisateur n'a pas choisi de thème
    if (!localStorage.getItem('theme')) {
      this.theme.isDarkMode = e.matches;
    }
  }

  },
};



</script>


<style lang="scss" scoped>

@import './assets/_variables.scss';


#main-page {
display: contents
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
  width: 85%;
  max-width: 1200px;
  border-radius: 15px;
  padding: 20px;
  position: relative;
  height: max-content;
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

.bloc-presentation-light{
  background-color: rgb(255, 255, 255);
  border: 1px solid rgba(69, 144, 255, 0.833);

}

.bloc-presentation-dark {
  background: rgb(40, 38, 38);
  border: 1px solid rgba(29, 29, 30, 0.833);
}




@media screen and (max-width: 985px) {
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
  border-bottom: none
}

.backgroundImageLight {
  background-color: #fff;
}
.backgroundImageDark {
  background-color: #121212;
}
}


</style>