<template>
    <section id="service-detail" :class="theme.isDarkMode ? 'dark-mode' : 'light-mode'">
      <div class="container">
        <!-- Bouton retour -->
        <button class="back-button" @click="$router.go(-1)">
          <font-awesome-icon icon="arrow-left" /> Retour
        </button>
  
        <div class="service-detail">
          <h1>{{ service.title }}</h1>
          <div class="service-content">
            <img :src="service.image" :alt="service.title" class="service-image">
            <div class="service-description">
              <p>{{ service.description }}</p>
              <ul v-if="service.features">
                <li v-for="(feature, index) in service.features" :key="index">
                  {{ feature }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { serviceData } from '@/data/services'
  
  export default {
    name: 'ServiceDetail',
    props: ['theme'],
    data() {
      return {
        service: {}
      }
    },
    created() {
      // Récupère l'ID depuis l'URL et trouve le service correspondant
      const serviceId = this.$route.params.id
      this.service = serviceData.find(s => s.id === serviceId) || {
        title: 'Service non trouvé',
        description: 'Ce service n\'existe pas.'
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  @import '@/assets/styles/_variables.scss';
  @import '@/assets/styles/_functions.scss';
  @import '@/assets/styles/_media-queries.scss';
  
  #service-detail {
    padding: $spacing-2xl 0;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .container {
    width: 90vw;
    margin: 0 auto;
    padding: $spacing-2xl $spacing-xl;
    
    @media (max-width: $breakpoint-lg) {
      width: 95vw;
      padding: $spacing-xl $spacing-lg;
    }
    
    @media (max-width: $breakpoint-md) {
      width: 98vw;
      padding: $spacing-lg $spacing-md;
    }
  }
  
  .service-detail {
    padding: $spacing-3xl;
    border-radius: $border-radius-xl;
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.95);
    box-shadow: $shadowMedium;
    position: relative;
    overflow: hidden;
    
    /* Effet de bordure lumineuse */
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: $border-radius-xl;
      padding: 2px;
      background: $gradientLightPrimary;
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      mask-composite: exclude;
      opacity: 0.3;
      transition: opacity $transition-duration ease;
    }
    
    &:hover::before {
      opacity: 0.6;
    }
    
    .dark-mode & {
      background: rgba(30, 41, 59, 0.95);
      
      &::before {
        background: $gradientDarkPrimary;
      }
    }
    
    h1 {
      margin-bottom: $spacing-xl;
      font-size: clamp(2rem, 5vw, 3rem);
      text-align: center;
      font-weight: 700;
      color: $textPrimaryLight;
      
      .dark-mode & {
        color: $textPrimaryDark;
      }
    }
    
    @media (max-width: $breakpoint-lg) {
      padding: $spacing-xl;
    }
    
    @media (max-width: $breakpoint-md) {
      padding: $spacing-lg;
    }
  }
  
  .back-button {
    margin: $spacing-lg 0;
    padding: $spacing-md $spacing-lg;
    border: none;
    border-radius: $border-radius;
    cursor: pointer;
    transition: all $transition-duration ease;
    background: $gradientLightPrimary;
    color: $white;
    font-weight: 600;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: $shadowMedium;
    }
    
    .dark-mode & {
      background: $gradientDarkPrimary;
    }
  }
  
  .service-content {
    display: flex;
    gap: $spacing-2xl;
    margin-top: $spacing-xl;
    
    @media (max-width: $breakpoint-lg) {
      flex-direction: column;
      gap: $spacing-xl;
    }
    
    @media (max-width: $breakpoint-md) {
      gap: $spacing-lg;
    }
  }
  
  .service-image {
    max-width: 50%;
    height: auto;
    border-radius: $border-radius-lg;
    box-shadow: $shadowLight;
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all $transition-duration ease;
    
    &:hover {
      transform: scale(1.02);
      box-shadow: $shadowMedium;
    }
    
    @media (max-width: $breakpoint-lg) {
      max-width: 100%;
    }
  }
  
  .service-description {
    flex: 1;
    
    p {
      margin-bottom: $spacing-lg;
      font-size: 1.125rem;
      line-height: 1.7;
      color: $textSecondaryLight;
      
      .dark-mode & {
        color: $textSecondaryDark;
      }
      
      @media (max-width: $breakpoint-md) {
        font-size: 1rem;
        line-height: 1.6;
      }
    }
    
    ul {
      list-style-type: none;
      padding-left: $spacing-lg;
      
      li {
        margin-bottom: $spacing-md;
        font-size: 1.125rem;
        line-height: 1.6;
        color: $textSecondaryLight;
        
        .dark-mode & {
          color: $textSecondaryDark;
        }
        
        &:before {
          content: "•";
          color: $StartLightGradient;
          font-weight: bold;
          margin-right: $spacing-sm;
        }
        
        .dark-mode &:before {
          color: $StartDarkGradient;
        }
        
        @media (max-width: $breakpoint-md) {
          font-size: 1rem;
        }
      }
    }
  }
  </style>