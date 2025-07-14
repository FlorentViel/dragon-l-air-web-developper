<template>
  <section class="container my-5" :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'">
    <div>
      <h1 :class="theme.isDarkMode ? 'h1-dark' : 'h1-light'" class="text-center title font-size-40 h1">Contact</h1>
    </div>
    <div id="formbg" :class="theme.isDarkMode ? 'main-bloc-dark' : 'main-bloc-light'" class="form-container">
      <div id="social" class="social-container">
        <div class="social-content">
          <div class="social-item">
            <div class="my-2 text-center">
              <p class="h6">E-mail : florent.vieville03@gmail.com</p>
            </div>
          </div>
          <div class="social-item">
            <div class="my-2">
              <p class="h6">Tel.  06 48 74 42 30</p>
            </div>
          </div>
        </div>
        <div class="social-icons">
          <div class="icon-item">
            <div class="icon-wrapper">
              <div class="contact-block"></div>          
              <svg class="icon" width="60" height="60">
                <a href="https://github.com/FlorentViel" target="_blank">
                  <image xlink:href="../assets/images/logos/logo-reseau/github-logox32.svg" width="60" height="60" />
                </a>
              </svg>  
            </div>
            <div>
              <p class="h6">FlorentViel</p>
            </div>
          </div>
          <div class="icon-item">
            <div>
              <svg width="60" height="60">
                <image xlink:href="../assets/images/logos/logo-reseau/LinkedIn_icon_circle.svg" width="60" height="60" />
              </svg>        
            </div>
            <div>
              <p class="h6 text-center">in/florent-vieville-38908728a</p>
            </div>
          </div>
        </div>
      </div>
      <form @submit="validateAndSubmit" id="contact" :class="theme.isDarkMode ? 'dark' : 'light'" class="form">
        <div class="form-row">
          <div class="form-group">
            <label for="lastName">Nom*</label>
            <input type="text" class="form-control" id="lastName" name="lastName" placeholder="Nom">
            <p v-if="errors.lastName" class="error-message">{{ errors.lastName }}</p>
          </div>
          <div class="form-group">
            <label for="firstName">Prénom</label>
            <input type="text" class="form-control" name="firstName" placeholder="Prénom">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="validationTooltipUsername">Adresse e-mail*</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
              </div>
              <input type="text" class="form-control" name="email" placeholder="Saisissez une adresse e-mail" required>
              <p v-if="errors.email" class="error-message">{{ errors.email }}</p>
            </div>
          </div>
          <div class="form-group">
            <label for="first-name">Téléphone</label>
            <input type="text" class="form-control" name="phone" placeholder="Sélectionnez votre numéro de téléphone">
          </div>
        </div>
        <div class="form-group">
          <label for="object">Objet</label>
          <input type="text" class="form-control" name="object" placeholder="Saisissez l'objet de votre message">
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea class="form-control" name="message" rows="3" placeholder="Saisissez votre message"></textarea>
        </div>
        <div class="form-group checkbox-group">
          <label class="checkbox-label">
            <input 
              type="checkbox" 
              v-model="acceptPolicy"
              required
            >
            <span :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'">
              J'accepte la <router-link to="/privacyPolicy">politique de confidentialité</router-link>
            </span>
          </label>
        </div>
        <button 
          type="submit" 
          class="submit-button container-fluid"
          :class="[
            theme.isDarkMode ? 'backgroundDark' : 'backgroundLight',
            { 'disabled': !acceptPolicy }
          ]"
          :disabled="!acceptPolicy"
        >
          Envoyer
        </button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  props: ['theme'],
  data() {
    return {
      errors: {},
      acceptPolicy: false,
      formData: {
        lastName: '',
        firstName: '',
        email: '',
        phone: '',
        object: '',
        message: ''
      }
    };
  },
  methods: {
    async validateAndSubmit(event) {
      event.preventDefault();
      
      if (!this.acceptPolicy) {
        alert("Veuillez accepter la politique de confidentialité");
        return;
      }

      // Récupération des données du formulaire
      const form = event.target;
      this.formData = {
        lastName: form.lastName.value,
        firstName: form.firstName.value,
        email: form.email.value,
        phone: form.phone.value,
        object: form.object.value,
        message: form.message.value
      };

      // Validation basique
      if (!this.formData.lastName) {
        this.errors.lastName = "Le nom est requis";
        return;
      }
      if (!this.formData.email) {
        this.errors.email = "L'email est requis";
        return;
      }

      try {
        const response = await fetch('http://localhost:3001/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.formData)
        });

        const data = await response.json(); // Récupérer la réponse JSON

        if (response.ok) {
          alert('Message envoyé avec succès!');
          form.reset();
          this.acceptPolicy = false;
          this.errors = {};
        } else {
          throw new Error(data.details || 'Erreur lors de l\'envoi');
        }
      } catch (error) {
        console.error('Erreur détaillée:', error);
        alert(`Une erreur est survenue: ${error.message}`);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  .contact-block {
    display: flex;
    border: 2px solid rgba(116, 108, 247, 0.3);
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin: auto;
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, 0.1);
    transition: all $transition-duration ease;
    
    &:hover {
      border-color: $StartLightGradient;
      background: rgba(116, 108, 247, 0.1);
    }
  }

  /* background bloc Contact */
  #formbg {
    border-radius: $border-radius-xl;
    width: 100%;
    padding: $spacing-2xl;
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    position: relative;
    overflow: hidden;
    display: flex;
    gap: $spacing-2xl;
    
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
    
    .main-bloc-light & {
      background: rgba(255, 255, 255, 0.95);
      box-shadow: $shadowMedium;
      
      &::before {
        background: $gradientLightPrimary;
      }
    }
    
    .main-bloc-dark & {
      background: rgba(30, 41, 59, 0.95);
      box-shadow: $shadowMedium;
      
      &::before {
        background: $gradientDarkPrimary;
      }
    }
    
    @media (max-width: $breakpoint-lg) {
      flex-direction: column;
      padding: $spacing-xl;
      gap: $spacing-xl;
    }
    
    @media (max-width: $breakpoint-md) {
      padding: $spacing-lg;
      gap: $spacing-lg;
    }
  }

  #contact {
    width: 60%;
    flex: 1;
    
    & input:not([type='checkbox']), & textarea, & .input-group-text {
      padding: $spacing-md;
      font-size: 1rem;
      border-radius: $border-radius;
      transition: all $transition-duration ease;
    }

    &.dark input:not([type='checkbox']), &.dark textarea, &.dark .input-group-text {
      border: 1px solid rgba(116, 108, 247, 0.3);
      color: $textPrimaryDark;
      background: rgba(51, 65, 85, 0.8);
      
      &:focus {
        border-color: $StartDarkGradient;
        box-shadow: 0 0 0 2px rgba(116, 108, 247, 0.2);
      }
    }

    &.light input:not([type='checkbox']), &.light textarea, &.light .input-group-text {
      border: 1px solid rgba(116, 108, 247, 0.3);
      color: $textPrimaryLight;
      background: rgba(255, 255, 255, 0.8);
      
      &:focus {
        border-color: $StartLightGradient;
        box-shadow: 0 0 0 2px rgba(116, 108, 247, 0.2);
      }
    }

    .form-control {
      width: 100%;
    }

    &.dark .form-control::placeholder, .input-group-text {
      color: rgba($textSecondaryDark, 0.7);
    }

    &.light .form-control::placeholder, .input-group-text {
      color: rgba($textSecondaryLight, 0.7);
    }
    
    @media (max-width: $breakpoint-lg) {
      width: 100%;
    }
  }

  #social {
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: $spacing-lg;
    
    @media (max-width: $breakpoint-lg) {
      width: 100%;
    }
  }

  .social-content {
    display: flex;
    flex-direction: column;
    gap: $spacing-md;
    
    .social-item {
      padding: $spacing-md;
      border-radius: $border-radius;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.1);
      transition: all $transition-duration ease;
      
      &:hover {
        background: rgba(255, 255, 255, 0.15);
        border-color: rgba(116, 108, 247, 0.3);
      }
      
      p {
        font-size: 1.125rem;
        font-weight: 500;
        color: $textPrimaryLight;
        
        .main-bloc-dark & {
          color: $textPrimaryDark;
        }
      }
    }
  }

  .social-icons {
    display: flex;
    flex-direction: column;
    gap: $spacing-md;
    
    .icon-item {
      display: flex;
      align-items: center;
      gap: $spacing-md;
      padding: $spacing-md;
      border-radius: $border-radius;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.1);
      transition: all $transition-duration ease;
      
      &:hover {
        background: rgba(255, 255, 255, 0.15);
        border-color: rgba(116, 108, 247, 0.3);
        transform: translateY(-2px);
      }
      
      p {
        font-size: 1rem;
        color: $textSecondaryLight;
        
        .main-bloc-dark & {
          color: $textSecondaryDark;
        }
      }
    }
  }

  .form-group {
    max-width: 100%;
    margin-bottom: $spacing-lg;
    
    label {
      display: block;
      margin-bottom: $spacing-sm;
      font-weight: 600;
      color: $textPrimaryLight;
      
      .main-bloc-dark & {
        color: $textPrimaryDark;
      }
    }
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: $spacing-lg;
    
    @media (max-width: $breakpoint-md) {
      grid-template-columns: 1fr;
      gap: $spacing-md;
    }
  }

  .input-group {
    display: flex;
    align-items: center;
    
    .input-group-text {
      border-radius: $border-radius 0 0 $border-radius;
      border-right: none;
      background: rgba(116, 108, 247, 0.1);
      color: $textSecondaryLight;
      
      .main-bloc-dark & {
        color: $textSecondaryDark;
      }
    }
    
    .form-control {
      border-radius: 0 $border-radius $border-radius 0;
      border-left: none;
    }
  }

  .checkbox-group {
    margin-top: $spacing-lg;
    
    .checkbox-label {
      display: flex;
      align-items: center;
      gap: $spacing-sm;
      cursor: pointer;
      
      input[type="checkbox"] {
        width: 18px;
        height: 18px;
        accent-color: $StartLightGradient;
      }
      
      span {
        font-size: 0.95rem;
        line-height: 1.5;
        
        a {
          color: $StartLightGradient;
          text-decoration: none;
          
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  .submit-button {
    width: 100%;
    padding: $spacing-md $spacing-lg;
    border: none;
    border-radius: $border-radius;
    font-size: 1.125rem;
    font-weight: 600;
    cursor: pointer;
    transition: all $transition-duration ease;
    margin-top: $spacing-lg;
    
    &.backgroundLight {
      background: $gradientLightPrimary;
      color: $white;
      
      &:hover:not(.disabled) {
        transform: translateY(-2px);
        box-shadow: $shadowMedium;
      }
    }
    
    &.backgroundDark {
      background: $gradientDarkPrimary;
      color: $white;
      
      &:hover:not(.disabled) {
        transform: translateY(-2px);
        box-shadow: $shadowMedium;
      }
    }
    
    &.disabled {
      opacity: 0.5;
      cursor: not-allowed;
      transform: none;
    }
  }

  .error-message {
    color: $error;
    font-size: 0.875rem;
    margin-top: $spacing-xs;
  }

  .container {
    padding: $spacing-2xl $spacing-xl;
    width: 90vw;
    margin: 0 auto;
    
    @media (max-width: $breakpoint-lg) {
      width: 95vw;
      padding: $spacing-xl $spacing-lg;
    }
    
    @media (max-width: $breakpoint-md) {
      width: 98vw;
      padding: $spacing-lg $spacing-md;
    }
  }

  .title {
    font-size: clamp(2rem, 5vw, 3rem);
    text-align: center;
    font-weight: 700;
    margin-bottom: $spacing-xl;
    color: $textPrimaryLight;
    
    .main-bloc-dark & {
      color: $textPrimaryDark;
    }
  }

  .form-container {
    display: flex;
    @include margin-y(rem(38));
    @include flex-center;

    @include media-breakpoint(down, md) {
      @include flex-column;
    }
  }

  .social-container {
    @include flex-column;
    @include margin-y(rem(38));
    @include flex-center;
  }

  .social-content {
    @include flex-column;
    @include flex-center;
    gap: rem(24);
  }

  .social-item {
    @include flex-column;
    @include flex-center;
    gap: rem(24);
  }

  .social-icons {
    @include flex-center;
    @include flex-column;
    gap: rem(24);
  }

  .icon-item {
    @include flex-column;
    @include flex-center;
    gap: rem(24);
  }

  .icon-wrapper {
    position: relative;
    @include margin-x(rem(24));
  }

  .icon {
    position: relative;
    z-index: 1;
  }

  .form {
    @include padding-y(rem(38));
    @include margin-x(auto);
    @include flex-column;
    gap: rem(12);
  }

  .form-row {
    display: flex;
    justify-content: space-between;
    gap: rem(12);
  }

  .form-group {
    @include flex-column;
    width: 100%;
    @include margin-y(rem(24));
  }

  .input-group {
    @include flex-center;
  }

  .input-group-prepend {
    @include flex-center;
  }

  .input-group-text {
    @include padding-x(rem(16));
  }

  .checkbox-group {
    margin: rem(16) 0;
  }

  .checkbox-label {
    display: flex;
    align-items: center;
    gap: rem(8);
    cursor: pointer;

    input[type="checkbox"] {
      width: rem(20);
      height: rem(20);
    }

    a {
      color: inherit;
      text-decoration: underline;
    }
  }

  .submit-button {
    width: 100%;
    max-width: rem(200);
    padding: rem(12) rem(24);
    font-size: rem(16);
    border: none;
    font-family: $font-family;
    border-radius: $border-radius;
    cursor: pointer;
    transition: all $transition-duration ease;
    margin: rem(16) auto;
    display: block;

    &.backgroundLight {
      color: $black;
      border: 1px solid $EndLightGradient;

      &:hover:not(:disabled) {
        background: $StartLightGradient;
        color: $white;
      }
    }

    &.backgroundDark {
      color: $white;
      border: 1px solid $StartDarkGradient;

      &:hover:not(:disabled) {
        background: $StartDarkGradient;
      }
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  .social-item p.h6 {
    color: $textPrimaryLight;
    .main-bloc-dark & {
      color: $textPrimaryDark;
    }
  }

  .social-item span {
    color: $textPrimaryLight;
    .main-bloc-dark & {
      color: $textPrimaryDark;
    }
  }

  .icon-item .fa-phone + span {
    color: $textPrimaryLight;
    .main-bloc-dark & {
      color: $textPrimaryDark;
    }
  }

  /* Focus styles for accessibility */
  *:focus {
    outline: 2px solid $StartLightGradient;
    outline-offset: 2px;
  }

  /* Selection styles */
  ::selection {
    background-color: $StartLightGradient;
    color: $white;
  }

  ::-moz-selection {
    background-color: $StartLightGradient;
    color: $white;
  }

  /* Styles pour les liens router-link */
  router-link {
    color: $textSecondaryLight;
    text-decoration: none;
    transition: all $transition-duration ease;
    border-bottom: 1px solid transparent;
    
    &:hover {
      color: $StartLightGradient;
      border-bottom-color: $StartLightGradient;
      text-decoration: none;
    }
    
    .main-bloc-dark & {
      color: $textSecondaryDark;
      
      &:hover {
        color: $StartDarkGradient;
        border-bottom-color: $StartDarkGradient;
      }
    }
  }

  /* Styles spécifiques pour le lien de la politique de confidentialité */
  .checkbox-label router-link {
    color: $StartLightGradient;
    font-weight: 500;
    text-decoration: none;
    transition: all $transition-duration ease;
    border-bottom: 1px solid transparent;
    
    &:hover {
      color: $textLinkHover;
      border-bottom-color: $textLinkHover;
      text-decoration: none;
    }
    
    .main-bloc-dark & {
      color: $StartDarkGradient;
      
      &:hover {
        color: $textLinkHoverDark;
        border-bottom-color: $textLinkHoverDark;
      }
    }
  }

  /* Styles pour les liens SVG */
  .icon-wrapper a {
    display: block;
    transition: all $transition-duration ease;
    border-radius: 50%;
    
    &:hover {
      transform: translateY(-3px) scale(1.05);
      filter: drop-shadow(0 6px 20px rgba(116, 108, 247, 0.3));
    }
    
    .main-bloc-dark & {
      &:hover {
        filter: drop-shadow(0 6px 20px rgba(53, 64, 253, 0.4));
      }
    }
  }

  /* Styles pour les icônes sociales */
  .social-icons .icon-item {
    transition: all $transition-duration ease;
    
    &:hover {
      transform: translateY(-2px);
    }
    
    .icon-wrapper {
      transition: all $transition-duration ease;
      
      &:hover {
        transform: scale(1.1);
      }
    }
  }
</style>