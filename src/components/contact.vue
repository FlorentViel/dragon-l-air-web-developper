<template>
  <section class="container my-5" :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'">
    <div>
      <h1 :class="theme.isDarkMode ? 'h1-dark' : 'h1-light'" class="text-center title font-size-40 h1">Contact</h1>
    </div>
    <div id="formbg" :class="theme.isDarkMode ? 'main-bloc-dark' : 'main-bloc-light'" class="d-flex justify-content-lg-around my-5 flex-column flex-md-row">
      <div id="social" class="d-flex flex-column justify-content-around h-auto my-5 mx-auto">
        <div class="d-flex justify-content-around align-items-center flex-column gap-3">
          <div class="d-flex flex-column justify-content-center align-content-center gap-2">
            <div class="my-2 text-center">
              <p class="h6">E-mail : florent.vieville03@gmail.com</p>
            </div>
          </div>
          <div class="d-flex justify-content-around align-items-center gap-2">
            <div class="my-2">
              <p class="h6">Tel.  06 48 74 42 30</p>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center gap-1 gap-lg-4 gap-sm-4 flex-wrap">
          <div class="d-flex flex-column justify-content-around align-items-center">
            <div class="mx-4 mx-md-2 mx-lg-4 position-relative">
              <div class="contact-block position-absolute top-0 z-0"></div>          
              <svg class="z-1 position-relative" width="60" height="60">
                <a href="https://github.com/FlorentViel" target="_blank">
                  <image xlink:href="../assets/images/logos/logo-reseau/github-logox32.svg" width="60" height="60" />
                </a>
              </svg>  
            </div>
            <div>
              <p class="h6">FlorentViel</p>
            </div>
          </div>
          <div class="d-flex flex-column justify-content-around align-items-center">
            <div>
              <svg width="60" height="60">
                <image xlink:href="../assets/images/logos/logo-reseau/LinkedIn_icon_circle.svg" width="60" height="60" />
              </svg>        
            </div>
            <div>
              <p class="h6 text-center">in/florent-vieville-38908728a</p>
            </div>
          </div>
          <div class="d-flex flex-column justify-content-around align-items-center gap-2">
            <div class="contact-block"></div>
            <div>
              <p class="h6">Nom</p>
            </div>
          </div>
        </div>
      </div>
      <form @submit="validateAndSubmit" id="contact" :class="theme.isDarkMode ? 'dark' : 'light'" class="py-5 mx-auto col-10 row gy-3">
        <div class="form-row d-flex justify-content-lg-around flex-wrap position-relative">
          <div class="col-lg-5 col-12">
            <label for="lastName">Nom*</label>
            <input type="text" class="form-control" id="lastName" name="lastName" placeholder="Nom">
            <p v-if="errors.lastName" class="error-message">{{ errors.lastName }}</p>
          </div>
          <div class="col-lg-5 col-12">
            <label for="firstName">Prénom</label>
            <input type="text" class="form-control" name="firstName" placeholder="Prénom">
          </div>
        </div>
        <div class="form-row d-flex justify-content-lg-around flex-wrap">
          <div class="col-lg-5 col-12">
            <label for="validationTooltipUsername">Adresse e-mail*</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
              </div>
              <input type="text" class="form-control" name="email" placeholder="Saisissez une adresse e-mail" required>
              <p v-if="errors.email" class="error-message">{{ errors.email }}</p>
            </div>
          </div>
          <div class="col-lg-5 col-12">
            <label for="first-name">Téléphone</label>
            <input type="text" class="form-control" name="phone" placeholder="Sélectionnez votre numéro de téléphone">
          </div>
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
@import '@/assets/_variables.scss';

.container {
  @include flex-center;
  flex-direction: column;
  padding: 2rem;
}

.main-bloc-dark {
  background-color: $bgDark2;
  color: $white;
}

.main-bloc-light {
  background-color: $bgLight2;
  color: $black;
}

.error-message {
  position: absolute;
  color: $black;
  font-size: 13px;
  right: 0;
  bottom: 20px;
  background-color: red;
  padding: 0.5rem;
  border-radius: 10px;
}
</style>