<template>
  <div :class="[theme.isDarkMode ? 'backgroundImageDark' : 'backgroundImageLight', $route.name === 'privacyPolicy' ? (theme.isDarkMode ? 'privacyPolicyBackgroundDark' : 'privacyPolicyBackgroundLight') : 'backgroundDefault']" class="d-flex flex-column" @toggle-theme-request="toggleTheme">
        
    <div id="#main-page" class="d-flex justify-content-center mx-md-5 mx-0">
      <div :class="theme.isDarkMode ? 'dark-mode' : 'light-mode'" class="computer">
        <div :class="theme.isDarkMode ? 'dark-mode' : 'light-mode'" class="screen">
          <NavBar :theme="theme" :selectedSection="selectedSection" @toggle-theme-request="toggleTheme" />

          <router-view :theme="theme" :changeSection="changeSection" v-slot="{ Component }">
            <transition :name="fade" mode="out-in" appear>
                <component :is="Component" />
            </transition>
          </router-view>
          <Footer :theme="theme" />
        </div>
      </div>
    </div>


  </div>
</template>



<script setup>

import NavBar from './components/navBar.vue';
import Footer from './components/footer.vue';
import { ref, readonly } from 'vue';

// Homepage

const pageTitle = ref('Portfolio Florent VIEVILLE'); 
const selectedSection = ref('A propos'); // Par défaut, afficher la section "Accueil"
const fade = 'fade';



const isDarkMode = ref(localStorage.getItem('theme') === 'dark' ? true : false);


const theme = readonly({
  isDarkMode,
  toggleTheme() {
    isDarkMode.value = !isDarkMode.value;
    localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light');
  },
});

function changeSection(newSectionName) {
  selectedSection.value = newSectionName; // Mettez à jour la section sélectionnée
  const baseTitle = 'Florent VIEVILLE - A propos de moi';
  const newTitle = newSectionName === 'A propos' ? baseTitle : `${baseTitle} - ${newSectionName}`;
  document.title = newTitle; // Mettez à jour le titre de la page
}

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


.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

<style>

/* main */

/* computer css */

.computer {
  width: 85%;
  margin: 5% auto;
  border-radius: 15px;
  padding: 20px;
  position: relative;
  height: max-content;
}

.computer.light-mode {
  background: var(--bluelight);
  background: var(--borderLightGardient);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: background-color 0.5s ease-in-out;
}

.computer.dark-mode {
  background: rgb(51,66,255); 
  background: linear-gradient(180deg, var(--StartDarkGradient) 0%, var(--EndDarkGradient) 75%);

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  transition: background-color 0.5s ease-in-out;
}

.computer::before {
  content: "";
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
}

.computer.dark-mode::before {
  border-bottom: 30px solid var(--EndDarkGradient);

}



.computer.light-mode::before {
  border-bottom: 30px solid #fff;

}

.screen {
  min-height: 500px; /* change 'height' to 'min-height' */
  border-radius: 10px;
  padding: 20px;
  background: var(--bg-light-1);
  transition: background-color 0.5s ease-in-out;
  /* autres styles de l'écran */
}

.screen.light-mode {
  background: var(--bg-light-1);
  transition: background-color 0.5s ease-in-out;

}

.screen.dark-mode {
  background: var(--bg-dark-1);
  transition: background-color 0.5s ease-in-out;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-height: 100svh;

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
