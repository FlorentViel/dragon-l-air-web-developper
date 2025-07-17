<template>
  <div id="#main-page" class="main-bloc">
    <div :class="[
      theme.isDarkMode ? 'dark-mode' : 'light-mode',
      'screen'
    ]">
      <NavBar :theme="theme" :selectedSection="selectedSection" @toggle-theme-request="toggleTheme" />
      <main class="main-content">
        <router-view :theme="theme" :changeSection="changeSection" v-slot="{ Component }">
          <transition :name="fade" mode="out-in" appear>
            <component :is="Component" />
          </transition>
        </router-view>
      </main>
      <Footer :theme="theme" />
    </div> 
  </div>
</template>

<script setup>
import { ref, reactive, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import NavBar from '@/views/navBar.vue';
import Footer from '@/views/footer.vue';

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
          { title: 'Mes réalisations', route: 'projet' },
  { title: 'Contact', route: 'contact' },
  // Ajoutez autant d'onglets que vous le souhaitez
];

function changeSection(newSectionName) {
  selectedSection.value = newSectionName; // Mettez à jour la section sélectionnée
  const baseTitle = 'Dragon\'s l\'Air Web Developer ';
  const newTitle = newSectionName === 'A propos' ? baseTitle : `${baseTitle} - ${newSectionName}`;
  document.title = newTitle; // Mettez à jour le titre de la page
}

function toggleTheme() {
  theme.toggleTheme();
  // Mettre à jour le favicon quand le thème change
  const favicon = document.getElementById('favicon');
  if (favicon) {
    favicon.href = theme.isDarkMode ? '/favicon-light.png' : '/favicon-dark.png';
  }
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

onMounted(() => {
  // Retirer l'image de fond par défaut
  document.body.style.backgroundImage = 'none';
  document.body.style.backgroundColor = theme.isDarkMode ? '#1A202C' : '#F7FAFC';
  
  // Initialiser le favicon selon le thème actuel
  const favicon = document.getElementById('favicon');
  if (favicon) {
    favicon.href = theme.isDarkMode ? '/favicon-dark.png' : '/favicon-light.png';
  }
});
</script>

<style lang="scss" scoped>
.main-bloc {
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  position: relative;
  background: $bgLight1;
}

.fade-enter-active, .fade-leave-active {
  transition: all $transition-duration ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Screen plein écran modernisé */
.screen {
  width: 100%;
  min-height: 100vh;
  transition: all $transition-duration ease;
  position: relative;
}

.screen.light-mode {
  /* Option 1: Gradient moderne avec couleurs de la palette */
  /* background: linear-gradient(135deg, #E7F9FF 0%, #F8FAFC 50%, #DFF9FF 100%); */
  
  /* Option 2: Gradient plus sophistiqué avec effet de profondeur */
  /* background: linear-gradient(135deg, #E7F9FF 0%, #F0F8FF 25%, #E6F3FF 50%, #F8FAFC 75%, #DFF9FF 100%); */
  
  /* Option 3: Gradient avec accent coloré subtil */
  /* background: linear-gradient(135deg, #E7F9FF 0%, #F0F8FF 30%, rgba(116, 108, 247, 0.05) 50%, #F8FAFC 70%, #DFF9FF 100%); */
  
  /* Option 4: Background avec motif géométrique subtil */
  /* background: 
    linear-gradient(135deg, #E7F9FF 0%, #F8FAFC 100%),
    radial-gradient(circle at 20% 80%, rgba(116, 108, 247, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 0.05) 0%, transparent 50%); */
  
  /* Option 5: Background avec effet de verre moderne */
  background: 
    linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%),
    url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="%23746CF7" opacity="0.08"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  
  color: $textPrimaryLight;
}

.screen.dark-mode {
  /* Option 1: Gradient sombre moderne */
  /* background: linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #334155 100%); */
  
  /* Option 2: Gradient sombre plus sophistiqué */
  /* background: linear-gradient(135deg, #0F172A 0%, #1E293B 25%, #334155 50%, #475569 75%, #64748B 100%); */
  
  /* Option 3: Gradient sombre avec accent coloré */
  /* background: linear-gradient(135deg, #0F172A 0%, #1E293B 30%, rgba(116, 108, 247, 0.1) 50%, #334155 70%, #475569 100%); */
  
  /* Option 5: Background sombre avec effet de verre moderne */
  background: 
    linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.9) 100%),
    url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="%2300D4FF" opacity="0.15"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  
  color: $textPrimaryDark;
}

/* Main content */
.main-content {
  position: relative;
  z-index: 1;
  min-height: calc(100vh - 200px);
  padding: $spacing-xl 0;
}

/* Responsive */
@media (max-width: $breakpoint-lg) {
  .main-content {
    padding: $spacing-lg 0;
  }
}

@media (max-width: $breakpoint-md) {
  .main-content {
    padding: $spacing-md 0;
  }
}

/* Animation d'entrée */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.screen {
  animation: fadeInUp 0.8s ease-out;
}
</style>