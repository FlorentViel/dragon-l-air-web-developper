<template>
  <component
    :is="isExternal ? 'a' : 'router-link'"
    v-bind="isExternal ? { href: to } : { to: to }"
    class="btn"
    :class="[
      theme.isDarkMode ? 'btn-dark-mode' : 'btn-light-mode',
      size ? `btn-${size}` : 'btn-md',
      variant ? `btn-${variant}` : 'btn-primary'
    ]"
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
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline', 'ghost'].includes(value)
  }
});
</script>

<style lang="scss" scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  text-decoration: none;
  border-radius: $border-radius;
  transition: all $transition-duration ease;
  cursor: pointer;
  border: none;
  outline: none;
  position: relative;
  overflow: hidden;
  font-family: inherit;
  
  /* Effet de ripple */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }
  
  &:active::before {
    width: 300px;
    height: 300px;
  }
}

/* btn css */
.btn-light-mode {
  background: $buttonBg;
  color: $buttonText;
  border: 2px solid $buttonBorder;
  transition: $transition-duration;
  border-radius: $border-radius;
  padding: 10px 20px;
  font-family: $font-family;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(116, 108, 247, 0.08);
}

.btn-light-mode:hover,
.btn-light-mode:focus {
  background: $buttonHover;
  color: $buttonTextHover;
  border-color: $buttonHover;
  box-shadow: 0 4px 16px rgba(74, 204, 234, 0.15);
}

.btn-dark-mode {
  /* Pour le mode nuit, à adapter plus tard */
}

/* Tailles */
.btn-sm {
  padding: $spacing-sm $spacing-md;
  font-size: 0.875rem;
  min-height: 36px;
}

.btn-md {
  padding: $spacing-md $spacing-lg;
  font-size: 1rem;
  min-height: 44px;
}

.btn-lg {
  padding: $spacing-lg $spacing-xl;
  font-size: 1.125rem;
  min-height: 52px;
}

/* Variantes Light Mode */
.btn-light-mode {
  &.btn-primary {
    background: $gradientLightPrimary;
    color: $white;
    box-shadow: 0 4px 14px 0 rgba(74, 144, 226, 0.4);
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px 0 rgba(74, 144, 226, 0.5);
    }
  }
  
  &.btn-secondary {
    background: $gradientLightSecondary;
    color: $white;
    box-shadow: 0 4px 14px 0 rgba(59, 130, 246, 0.4);
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px 0 rgba(59, 130, 246, 0.5);
    }
  }
  
  &.btn-outline {
    background: transparent;
    color: $StartLightGradient;
    border: 2px solid $StartLightGradient;
    
    &:hover {
      background: $StartLightGradient;
      color: $white;
      transform: translateY(-2px);
    }
  }
  
  &.btn-ghost {
    background: transparent;
    color: $textPrimaryLight;
    
    &:hover {
      background: $hoverLight;
      color: $StartLightGradient;
    }
  }
}

/* Variantes Dark Mode */
.btn-dark-mode {
  &.btn-primary {
    background: $gradientDarkPrimary;
    color: $white;
    box-shadow: 0 4px 14px 0 rgba(30, 64, 175, 0.4);
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px 0 rgba(30, 64, 175, 0.5);
    }
  }
  
  &.btn-secondary {
    background: $gradientDarkSecondary;
    color: $white;
    box-shadow: 0 4px 14px 0 rgba(55, 48, 163, 0.4);
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px 0 rgba(55, 48, 163, 0.5);
    }
  }
  
  &.btn-outline {
    background: transparent;
    color: $StartDarkGradient;
    border: 2px solid $StartDarkGradient;
    
    &:hover {
      background: $StartDarkGradient;
      color: $white;
      transform: translateY(-2px);
    }
  }
  
  &.btn-ghost {
    background: transparent;
    color: $textPrimaryDark;
    
    &:hover {
      background: $StartDarkGradient-50;
      color: $textSecondaryDark;
    }
  }
}

/* Focus styles */
.btn:focus {
  outline: 2px solid $StartLightGradient;
  outline-offset: 2px;
}

/* Disabled state */
.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none !important;
  
  &:hover {
    transform: none !important;
    box-shadow: inherit !important;
  }
}
</style>