import { ref } from 'vue';

const isDarkMode = ref(window.matchMedia('(prefers-color-scheme: dark)').matches);

// Fonction pour mettre à jour le favicon
const updateFavicon = (isDark) => {
  const favicon = document.getElementById('favicon');
  if (favicon) {
    favicon.href = isDark ? '/favicon-dark.png' : '/favicon-light.png';
  }
};

// Initialiser le favicon au chargement
updateFavicon(isDarkMode.value);

window.matchMedia('(prefers-color-scheme: dark)').addListener((e) => {
  isDarkMode.value = e.matches;
  updateFavicon(e.matches);
});

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  updateFavicon(isDarkMode.value);
};

export { isDarkMode, toggleTheme };
