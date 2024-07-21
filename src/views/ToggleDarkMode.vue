<template>
    <div class="theme-toggle">
      <span class="theme-toggle-text" :class="theme.isDarkMode ? 'text-white' : 'text-dark'">
        {{ theme.isDarkMode ? 'Mode jour' : 'Mode nuit' }}
      </span>
      <input type="checkbox" class="checkbox" id="checkbox-right" v-model="theme.isDarkMode" @click="toggleThemeAndEmit">
      <label for="checkbox-right" class="checkbox-label" :class="theme.isDarkMode ? 'checkbox-label-dark' : 'checkbox-label-light'">
        <i class="fas fa-moon"></i>
        <i class="fas fa-sun"></i>
        <span class="ball"></span>
      </label>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ToggleDarkMode',
    props: ['theme'],
    methods: {
      toggleThemeAndEmit() {
        this.theme.toggleTheme();
        this.$emit('toggle-theme-request');
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
  @import '@/assets/_variables.scss';
  
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
  </style>