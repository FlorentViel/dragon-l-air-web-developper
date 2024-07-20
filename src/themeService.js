import { ref } from 'vue';

const isDarkMode = ref(window.matchMedia('(prefers-color-scheme: dark)').matches);

window.matchMedia('(prefers-color-scheme: dark)').addListener((e) => {
  isDarkMode.value = e.matches;
});

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
};

export { isDarkMode, toggleTheme };
