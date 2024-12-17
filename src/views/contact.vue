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
      </form>
    </div>
  </section>
</template>

<script>
export default {
  props: ['theme'],
  data() {
    return {
      errors: {}
    };
  },
  methods: {
    validateAndSubmit(event) {
      event.preventDefault();
      // Validation logic here
    }
  }
};
</script>

<style lang="scss" scoped>
  .contact-block {
    display: flex;
    border: rgb(2, 25, 57) solid 3px;
    justify-content: center;
    align-items: center;
    border-radius: 360px;
    margin: auto;
    width: 60px;
    height: 60px;
    background: lightgray 50% / cover no-repeat;
  }

  /* background bloc Contact */
  #formbg {
    border-radius: 60px;
    width: 95%;
    padding: rem(16);
  }

  #contact {
    width: 50%;
    flex: 1;
    & input:not([type='checkbox']), & textarea, & .input-group-text {
      padding: rem(10);
      font-size: rem(16);
    }

    &.dark input:not([type='checkbox']), &.dark textarea, &.dark .input-group-text {
      border: 1px solid $StartDarkGradient;
      color: $white;
    }

    &.light input:not([type='checkbox']), &.light textarea, &.light .input-group-text {
      border: 1px solid $StartLightGradient;
      color: $black;
    }

    .form-control {
      width: 100%;
    }

    &.dark .form-control::placeholder, .input-group-text {
      color: $StartDarkGradient;
    }

    &.light .form-control::placeholder, .input-group-text {
      color: $StartLightGradient;
    }
  }

  #social {
    width: 45%;
  }

  .form-group {
    max-width: 100%;
  }

  .control {
    font-family: arial;
    display: block;
    position: relative;
    padding-left: 30px;
    margin-bottom: 5px;
    padding-top: 3px;
    cursor: pointer;
   

    input {
      position: absolute;
      z-index: -1;
      opacity: 0;
    }

    .control_indicator {
      position: absolute;
      top: 15px;
      left: -35px;
      height: 20px;
      width: 20px;
      border-radius: 0px;

      &:after {
        box-sizing: unset;
        content: '';
        position: absolute;
        display: none;
      }

      &.light {
        background: #e6e6e6;
        border: 0px solid $black;

        &:hover,
        input:focus & {
          background: #cccccc;
        }

        input:checked & {
          background: rgb(116, 108, 247);
        }

        &:hover input:not([disabled]):checked &,
        input:checked:focus & {
          background: var(--StartLightGradient);
        }

        input:disabled & {
          background: #e6e6e6;
          opacity: 0.6;
        }
      }

      &.dark {
        background: #9BAAFF;
        border: 0px solid $white;

        &:hover,
        input:focus & {
          background: $borderDark;
        }

        input:checked & {
          background: rgb(116, 108, 247);
        }

        &:hover input:not([disabled]):checked &,
        input:checked:focus & {
          background: $StartLightGradient;
        }

        input:disabled & {
          background: #e6e6e6;
          opacity: 0.6;
        }
      }
    }

    &:hover input ~ .control_indicator,
    input:focus ~ .control_indicator {
      background: #cccccc;
    }

    input:checked ~ .control_indicator {
      background: rgb(116, 108, 247);
    }

    &:hover input:not([disabled]):checked ~ .control_indicator,
    input:checked:focus ~ .control_indicator {
      background: $StartLightGradient;
    }

    input:disabled ~ .control_indicator {
      background: #e6e6e6;
      opacity: 0.6;
      pointer-events: none;
    }

    input:checked ~ .control_indicator:after {
      display: block;
    }

    .control-checkbox {
      .control_indicator:after {
        left: 8px;
        top: 4px;
        width: 3px;
        height: 8px;
        border: solid $white;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
      }

      input:disabled ~ .control_indicator:after {
        border-color: #7b7b7b;
      }

      .control_indicator::before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 4.5rem;
        height: 4.5rem;
        margin-left: -1.3rem;
        margin-top: -1.3rem;
        background: #2aa1c0;
        border-radius: 3rem;
        opacity: 0.6;
        z-index: 99999;
        transform: scale(0);
      }

      input + .control_indicator::before {
        animation: s-ripple 250ms ease-out;
      }

      input:checked + .control_indicator::before {
        animation-name: s-ripple-dup;
      }
    }
  }

  @keyframes s-ripple {
    0% {
      transform: scale(0);
    }
    20% {
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(1);
    }
  }

  @keyframes s-ripple-dup {
    0% {
      transform: scale(0);
    }
    30% {
      transform: scale(1);
    }
    60% {
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(1);
    }
  }

  /* error input message style */
  .error-message {
    @include media-breakpoint('up', 'md') {
      position: absolute;
      color: $black;
      font-size: rem(0.875);
      right: 0;
      bottom: rem(20);
      background-color: red;
      padding: 0.5rem;
      border-radius: 10px;
    }
  }

  .container {
    @include margin-y(rem(38));
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
</style>