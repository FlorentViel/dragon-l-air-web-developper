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
  

  
  .service-detail {
    padding: rem(32);
    
    h1 {
      margin-bottom: rem(24);
    }
  }
  
  .back-button {
    margin: rem(16) 0;
    padding: rem(8) rem(16);
    border: none;
    border-radius: $border-radius;
    cursor: pointer;
    transition: all $transition-duration ease;
    
    &:hover {
      opacity: 0.8;
    }
  }
  
  .service-content {
    display: flex;
    gap: rem(32);
    margin-top: rem(24);
    
    @include media-breakpoint(down, md) {
      @include flex-column;
    }
  }
  
  .service-image {
    max-width: 50%;
    height: auto;
    border-radius: $border-radius;
    
    @include media-breakpoint(down, md) {
      max-width: 100%;
    }
  }
  
  .service-description {
    flex: 1;
    
    p {
      margin-bottom: rem(16);
    }
    
    ul {
      list-style-type: none;
      padding-left: rem(16);
      
      li {
        margin-bottom: rem(8);
        &:before {
          content: "•";
          color: $primary;
          font-weight: bold;
          margin-right: rem(8);
        }
      }
    }
  }
  </style>