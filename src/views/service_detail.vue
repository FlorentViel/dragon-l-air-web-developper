<template>
  <section id="service-detail" :class="theme.isDarkMode ? 'dark-mode' : 'light-mode'">
    <div class="container">
      <!-- Bouton retour -->
      <button class="back-button" @click="$router.go(-1)">
        <font-awesome-icon icon="arrow-left" /> Retour
      </button>

      <div class="service-detail">
        <h1 :class="theme.isDarkMode ? 'h1-dark' : 'h1-light'">{{ service.title }}</h1>
        <div class="service-content">
          <img :src="service.image" :alt="service.title" class="service-image">
          <div class="service-description">
            <p :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'">{{ service.description }}</p>
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
    const serviceId = this.$route.params.id
    this.service = serviceData.find(s => s.id === serviceId) || {
      title: 'Service non trouvé',
      description: 'Ce service n\'existe pas.'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_utils.scss';

.service-detail {
  padding: rem(32);
  
  h1 {
    margin-bottom: rem(24);
    text-align: center;
    @include font-size-responsive(2rem, 3rem);
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
  width: 500px;
  height: 300px;
  object-fit: contain;
  border: 1px solid rgba(60, 56, 56, 0.348);
  padding: rem(16);
  border-radius: $border-radius;
  background-color: white;
  
  @include media-breakpoint(down, md) {
    width: 100%;
    max-width: 400px;
    height: 250px;
    margin: 0 auto;
  }
}

.service-description {
  flex: 1;
  
  p {
    margin-bottom: rem(16);
    @include font-size-responsive(0.7rem, 1rem);
  }
  
  ul {
    list-style-type: none;
    padding-left: rem(16);
    
    li {
      margin-bottom: rem(8);
      @include font-size-responsive(0.7rem, 1rem);
      &:before {
        content: "•";
        margin-right: rem(8);
        font-weight: bold;
      }
    }
  }
}

// Styles pour le mode sombre
.dark-mode {
  background: $bgDark2;
  color: $white;

  .back-button {
    background: $StartDarkGradient;
    color: $white;
    &:hover {
      background: $EndDarkGradient;
    }
  }

  .service-description ul li:before {
    color: $StartDarkGradient; // Utilise la couleur du thème sombre
  }
}

// Styles pour le mode clair
.light-mode {
  background: $bgLight2;
  color: $black;

  .back-button {
    background: $StartLightGradient;
    color: $white;
    &:hover {
      background: $EndLightGradient;
    }
  }

  .service-description ul li:before {
    color: $EndLightGradient; // Utilise la couleur du thème clair
  }
}
</style> 