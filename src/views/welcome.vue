<template>
  <section id="welcome" class="section container">
    <div class="welcome-content">
      <div
        id="content"
        class="content-body"
        :class="theme.isDarkMode ? 'main-bloc-dark' : 'main-bloc-light'"
        @mousemove="handlecontentEffect"
        @mouseleave="resetcontentEffect"
        ref="content"
      >
        <div class="content-header">
          <h1
            :class="theme.isDarkMode ? 'h1-dark' : 'h1-light'"
            class="content-title animate-text title"
            :style="{ '--delay': '0.3s' }"
          >
            Dragon's Lair
          </h1>
          <h2
            :class="theme.isDarkMode ? 'h2-dark' : 'h2-light'"
            class="content-subtitle animate-text"
            :style="{ '--delay': '0.5s' }"
          >
            Web Developer
          </h2>
        </div>

        <div class="profile-picture-container animate-text" :style="{ '--delay': '0.6s' }">
          <div class="profile-picture-wrapper">
            <img
              id="profil_picture"
              :class="theme.isDarkMode ? 'photo-dark' : 'photo-light'"
              class="profile-picture"
              :src="theme.isDarkMode ? images.nightLogo : images.lightLogo"
              alt="Photo de profil Florent VIEVILLE"
            />
            <div class="profile-picture-glow"></div>
          </div>
        </div>
        
        <p
          :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'"
          class="animate-text text-style"
          :style="{ '--delay': '0.7s' }"
        >
          Passionné par le web avec une expertise en
          <strong class="highlight">front-end</strong> et
          <strong class="highlight">back-end</strong>.
        </p>

        <p
          :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'"
          class="animate-text text-description"
          :style="{ '--delay': '0.8s' }"
        >
          Je crée des expériences web modernes et performantes, en combinant créativité et technologies de pointe pour donner vie à vos projets digitaux.
        </p>

        <div class="quote-container animate-text" :style="{ '--delay': '0.9s' }">
          <blockquote class="quote">
            "Le code est la poésie de la logique, et chaque ligne raconte une histoire."
          </blockquote>
        </div>
        
        <div class="button-container">
          <div class="animate-text" :style="{ '--delay': '1.0s' }">
            <Button :to="{ name: 'aboutMe' }" :theme="theme" size="lg" variant="primary">
              À propos de moi
            </Button>
          </div>
          <div class="animate-text" :style="{ '--delay': '1.1s' }">
            <Button :to="{ name: 'service' }" :theme="theme" size="lg" variant="outline">
              Mes services
            </Button>
          </div>
          <div class="animate-text" :style="{ '--delay': '1.2s' }">
            <Button :to="{ name: 'contact' }" :theme="theme" size="lg" variant="secondary">
              Me contacter
            </Button>
          </div>
        </div>

        <div class="social-links animate-text" :style="{ '--delay': '1.3s' }">
          <h3 class="social-title">Retrouvez-moi sur</h3>
          <div class="social-icons">
            <a href="https://github.com/votre-username" target="_blank" rel="noopener" class="social-link">
              <i class="fab fa-github"></i>
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/votre-profil" target="_blank" rel="noopener" class="social-link">
              <i class="fab fa-linkedin"></i>
              <span>LinkedIn</span>
            </a>
            <a href="mailto:florent.vieville03@gmail.com" class="social-link">
              <i class="fas fa-envelope"></i>
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useHead } from '@vueuse/head';
import { images } from '@/config/images';
import Button from '@/components/Button.vue';

const props = defineProps(['theme', 'selectedSection']);
const content = ref(null);

// Configuration SEO avec useHead
useHead({
  title: "Dragon's Lair Web Developer - Portfolio Florent VIEVILLE",
  meta: [
    {
      name: 'description',
      content: 'Développeur web freelance spécialisé dans la création de sites web sur mesure, e-commerce et référencement naturel. Expert Vue.js basé en France.'
    },
    {
      name: 'keywords',
      content: 'développeur web, freelance, création site internet, e-commerce, SEO, Vue.js, développement web'
    },
    {
      property: 'og:title',
      content: "Dragon's Lair Web Developer - Portfolio Florent VIEVILLE"
    },
    {
      property: 'og:description',
      content: 'Développeur web freelance spécialisé dans la création de sites web sur mesure, e-commerce et référencement naturel.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:url',
      content: 'https://www.thedragonslairwebdeveloper.com'
    }
  ]
});

const handlecontentEffect = (event) => {
  if (!content.value) return;
  
  const rect = content.value.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  
  const rotateX = (y - centerY) / 60;
  const rotateY = (centerX - x) / 60;
  
  content.value.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
};

const resetcontentEffect = () => {
  if (content.value) {
    content.value.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
  }
};

onMounted(() => {
  if (content.value) {
    content.value.addEventListener("mousemove", handlecontentEffect);
    content.value.addEventListener("mouseleave", resetcontentEffect);
  }
});
</script>

<style lang="scss" scoped>
/* Animations */
.animate-text {
  opacity: 0;
  animation: slideInFromBottom 1s ease-out forwards;
  animation-delay: var(--delay);
}

@keyframes slideInFromBottom {
  0% {
    transform: translateY(30px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Welcome section */
#welcome {
  padding: $spacing-xl 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: $breakpoint-lg) {
    padding: $spacing-lg 0;
    min-height: auto;
  }

  @media (max-width: $breakpoint-md) {
    padding: $spacing-md 0;
  }
}

.welcome-content {
  @include flex-center;
  margin: 0 auto;
  padding: 0 $spacing-2xl;
  width: 100%;
  max-width: 1600px;
  position: relative;
  z-index: 2;

  @media (max-width: $breakpoint-xl) {
    max-width: 80vw;
    padding: 0 $spacing-xl;
  }

  @media (max-width: $breakpoint-lg) {
    max-width: 80vw;
    padding: 0 $spacing-lg;
  }

  @media (max-width: $breakpoint-md) {
    max-width: 80vw;
    padding: 0 $spacing-md;
  }
}

/* Profile picture */
.profile-picture-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 3;
  margin: $spacing-xl 0;
}

.profile-picture-wrapper {
  position: relative;
  border-radius: 50%;
  padding: 8px;
  background: $gradientLightPrimary;
  box-shadow: $shadowGlow;
  transition: all $transition-duration ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: $shadowGlow, 0 20px 40px rgba(116, 108, 247, 0.3);
  }
  
  .dark-mode & {
    background: $gradientDarkPrimary;
    box-shadow: $shadowGlowDark;
    
    &:hover {
      box-shadow: $shadowGlowDark, 0 20px 40px rgba(53, 64, 253, 0.4);
    }
  }
}

.profile-picture {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
  transition: transform $transition-duration ease;
  
  &:hover {
    transform: scale(1.02);
  }
  
  @media (max-width: $breakpoint-xl) {
    width: 180px;
    height: 180px;
  }
  
  @media (max-width: $breakpoint-lg) {
    width: 160px;
    height: 160px;
  }
  
  @media (max-width: $breakpoint-md) {
    width: 140px;
    height: 140px;
  }
}

.profile-picture-glow {
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  border-radius: 50%;
  background: $gradientLightPrimary;
  opacity: 0.15;
  filter: blur(30px);
  z-index: -1;
  animation: pulse 4s ease-in-out infinite;
  
  .dark-mode & {
    background: $gradientDarkPrimary;
    opacity: 0.25;
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.15;
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(1.15);
  }
}

/* Content body */
.content-body {
  width: 100%;
  min-width: 1200px;
  max-width: 80vw;
  gap: $spacing-2xl;
  @include flex-column;
  @include flex-center;
  padding: $spacing-3xl;
  border-radius: $border-radius-xl;
  transition: all $transition-duration ease;
  backdrop-filter: blur(25px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
  box-shadow: $shadowHeavy;
  text-align: center;
  
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
    opacity: 0.5;
    transition: opacity $transition-duration ease;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: $shadowHeavy, 0 25px 50px rgba(116, 108, 247, 0.2);
    
    &::before {
      opacity: 0.8;
    }
  }
  
  .main-bloc-light & {
    background: rgba(255, 255, 255, 0.95);
    box-shadow: $shadowHeavy;
    &::before {
      background: $gradientLightPrimary;
    }
  }
  
  .dark-mode & {
    background: rgba(30, 41, 59, 0.95);
    box-shadow: $shadowHeavy;
    border-color: rgba(255, 255, 255, 0.1);
    
    &:hover {
      box-shadow: $shadowHeavy, 0 25px 50px rgba(53, 64, 253, 0.3);
    }
    
    &::before {
      background: $gradientDarkPrimary;
    }
  }
  
  @media (max-width: $breakpoint-xl) {
    min-width: auto;
    max-width: 80vw;
    padding: $spacing-2xl;
  }
  
  @media (max-width: $breakpoint-lg) {
    min-width: auto;
    max-width: 80vw;
    padding: $spacing-2xl;
    text-align: center;
  }
  
  @media (max-width: $breakpoint-md) {
    padding: $spacing-xl;
    gap: $spacing-xl;
  }
}

.content-header {
  margin-bottom: $spacing-xl;
}

.content-title {
  font-size: clamp(2.75rem, 7vw, 5rem);
  font-weight: 900;
  margin-bottom: $spacing-md;
  background: $gradientLightPrimary;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
  letter-spacing: -0.02em;
  
  .dark-mode & {
    background: $gradientDarkPrimary;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
}

.content-subtitle {
  font-size: clamp(1.75rem, 4.5vw, 3rem);
  font-weight: 600;
  color: $textSecondaryLight;
  margin-bottom: $spacing-lg;
  line-height: 1.2;
  
  .dark-mode & {
    color: $textSecondaryDark;
  }
}

.text-style {
  font-size: 1.25rem;
  line-height: 1.8;
  color: $textSecondaryLight;
  max-width: 100%;
  margin-bottom: $spacing-xl;
  
  .dark-mode & {
    color: $textSecondaryDark;
  }
  
  @media (max-width: $breakpoint-md) {
    font-size: 1.125rem;
    line-height: 1.7;
  }
}

.text-description {
  font-size: 1.125rem;
  line-height: 1.7;
  color: $textSecondaryLight;
  max-width: 100%;
  margin-bottom: $spacing-lg;
  
  .dark-mode & {
    color: $textSecondaryDark;
  }
}

.quote-container {
  margin: $spacing-lg 0 $spacing-xl 0;
  padding: $spacing-lg;
  border-left: 4px solid $StartLightGradient;
  background: rgba(116, 108, 247, 0.05);
  border-radius: $border-radius;
  transition: all $transition-duration ease;
  
  .dark-mode & {
    border-left: 4px solid $StartDarkGradient;
    background: rgba(53, 64, 253, 0.1);
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: $shadowLight;
  }
}

.quote {
  font-style: italic;
  font-size: 1.125rem;
  color: $textSecondaryLight;
  line-height: 1.6;
  margin: 0;
  
  .dark-mode & {
    color: $textSecondaryDark;
  }
}

.highlight {
  color: $StartLightGradient;
  font-weight: 700;
  
  .dark-mode & {
    color: $StartDarkGradient;
  }
}

/* Button container */
.button-container {
  display: flex;
  gap: $spacing-lg;
  flex-wrap: wrap;
  
  @media (max-width: $breakpoint-md) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
}

/* Social links */
.social-links {
  margin-top: $spacing-xl;
  text-align: center;
}

.social-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: $textSecondaryLight;
  margin-bottom: $spacing-md;
  
  .dark-mode & {
    color: $textSecondaryDark;
  }
}

.social-icons {
  display: flex;
  gap: $spacing-lg;
  justify-content: center;
  flex-wrap: wrap;
}

.social-link {
  display: flex;
  align-items: center;
  gap: $spacing-sm;
  padding: $spacing-sm $spacing-md;
  color: $textSecondaryLight;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  border-radius: $border-radius;
  transition: all $transition-duration ease;
  background: rgba(116, 108, 247, 0.05);
  border: 1px solid rgba(116, 108, 247, 0.1);
  
  &:hover {
    color: $StartLightGradient;
    background: rgba(116, 108, 247, 0.1);
    transform: translateY(-2px);
    box-shadow: $shadowLight;
  }
  
  .dark-mode & {
    color: $textSecondaryDark;
    background: rgba(53, 64, 253, 0.05);
    border-color: rgba(53, 64, 253, 0.2);
    
    &:hover {
      color: $StartDarkGradient;
      background: rgba(53, 64, 253, 0.1);
    }
  }
}

.social-link i {
  font-size: 1.25rem;
}

/* Responsive adjustments */
@media (max-width: $breakpoint-lg) {
  #welcome {
    padding: $spacing-xl 0;
  }
}

@media (max-width: $breakpoint-md) {
  #welcome {
    padding: $spacing-lg 0;
  }
  
  .button-container {
    width: 100%;
  }
}
</style>