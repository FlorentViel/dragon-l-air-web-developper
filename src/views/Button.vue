<template>
  <component
    :is="isExternal ? 'a' : 'router-link'"
    v-bind="isExternal ? { href: to } : { to: to }"
    class="btn"
    :class="theme.isDarkMode ? 'btn-dark-mode' : 'btn-light-mode'"
    :target="isExternal ? '_blank' : null"
    rel="noopener noreferrer"
  >
    <slot></slot>
  </component>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  to: {
    type: [String, Object],
    required: true
  },
  isExternal: {
    type: Boolean,
    default: false
  },
  theme: {
    type: Object,
    required: true
  }
});
</script>

<style lang="scss" scoped>
/* btn css */
.btn-dark-mode {
  background: $borderDarkGardient;
  color: $white;
  border: 1px solid $borderDark;
  transition: .5s ease;
  border-radius: 8px;
  padding: 10px 20px;
} 

.btn-light-mode {
  background: $borderLightGardient;
  color: $white;
  border: 1px solid $StartLightGradient;
  transition: .5s ease;
  border-radius: 8px;
  padding: 10px 20px;
}

.btn-dark-mode:hover,
.btn-dark-mode:focus {
  background-color: #4827FE55;
  text-shadow: 0 0 5px $StartLightGradient,
               0 0 10px $StartLightGradient,
               0 0 15px $EndLightGradient;
  box-shadow: 0 0 5px $StartLightGradient,
              0 0 10px $StartLightGradient,
              0 0 15px $EndLightGradient,
} 


.btn-light-mode:hover,
.btn-light-mode:focus {
  color: $white;
  text-shadow: 0 0 5px $StartLightGradient,
               0 0 10px $StartLightGradient,
               0 0 15px $EndLightGradient;
  box-shadow: 0 0 5px $StartLightGradient,
              0 0 10px $StartLightGradient,
  0 0 15px $EndLightGradient;
} 
</style>