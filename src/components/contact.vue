<template>
    <section class="container my-5" :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'">


      <!-- Title contact -->

      <div class="">
          <h1 :class="theme.isDarkMode ? 'h1-dark' : 'h1-light'" class="text-center title font-size-40 h1">Contact</h1>
      </div>

      <!-- Bloc contact-->

      <div id="formbg" :class="theme.isDarkMode ? 'main-bloc-dark' : 'main-bloc-light'" class="d-flex justify-content-lg-around my-5 flex-column flex-md-row">

        <!-- social bloc : Left bloc -->
        
        <div id="social" class=" d-flex flex-column justify-content-around h-auto my-5 mx-auto">
          <div class=" d-flex justify-content-around align-items-center flex-column gap-3">
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
            <div class="">
              <p class="h6">FlorentViel</p>
            </div>
          </div>
          <div class="d-flex flex-column justify-content-around align-items-center">
            <div class="">
              <svg class="" width="60" height="60">
                <image xlink:href="../assets/images/logos/logo-reseau/LinkedIn_icon_circle.svg" width="60" height="60" />
              </svg>        
            </div>
            <div class="">
              <p class="h6 text-center">in/florent-vieville-38908728a</p>
            </div>
          </div>
          <div class="d-flex flex-column justify-content-around align-items-center gap-2">
            <div class="">
              <div class="contact-block"></div>
            </div>
            <div class="">
              <p class="h6">Nom</p>
            </div>
        </div>
          </div>


        </div>

        <!-- Form bloc : Right bloc -->
        <form  @submit="validateAndSubmit" id="contact" :class="theme.isDarkMode ? 'dark' : 'light'" class="py-5 mx-auto col-10 row gy-3">
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
    <div class="col-lg-5 col-12 ">
      <label for="validationTooltipUsername">Adresse e-mail*</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
        </div>
        <input type="text" class="form-control" name="email" placeholder="Saisissez une adresse e-mail" required >
        <p v-if="errors.email" class="error-message">{{ errors.email }}</p>
      </div>
    </div>
    <div class="col-lg-5 col-12 ">
      <label for="first-name">Téléphone</label>
      <input type="text" class="form-control" name="phone" placeholder="Sélectionnez votre numéro de téléphone">
    </div>
  </div>
  <div class="form-row">
    <div class="col-lg-11 col-12 mx-auto">
      <label for="object-input">Objet*</label>
      <input type="text" class="form-control" id="object-input"  name="object" placeholder="Objet" required>
      <p v-if="errors.object" class="error-message">{{ errors.lastName }}</p>
    </div>
  </div>
  <div class="form-row">
    <div class="col-lg-11 col-12 mx-auto">
      <label for="MessageArea">Message *</label>
      <textarea class="form-control" id="MessageArea" name="message" rows="6" required></textarea>
      <p class="text-contact">Champs obligatoires *</p>
    </div>
  </div>

  <div class="form-check form-row col mx-auto">
  <label class="control control-checkbox" :class="theme.isDarkMode ? 'dark' : 'light'">
            <input type="checkbox" name="agree" value="yes" id="flexCheckDefault" required/>
        <div class="control_indicator" :class="theme.isDarkMode ? 'dark' : 'light'"></div>
    </label>
  <p class="form-check-label text-contact">En soumettant ce formulaire, j'accepte que mes données personnelles soient utilisées pour me recontacter.
    Aucun autre traitement ne sera effectué avec mes informations. Pour connaître et exercer vos droits, veuillez consultez la
    <router-link :class="theme.isDarkMode ? 'footerTextDark' : 'footerTextLight'" to="/privacyPolicy">Politique de confidentialité.</router-link>
  </p>
  </div>

  <div class="form-row d-flex justify-content-center align-items-center">
    <button :class="theme.isDarkMode ? 'btn-dark-mode' : 'btn-light-mode'" class="btn" type="submit">Envoyez</button>
  </div>

</form>

          


      </div>
  


    </section>
  </template>
  
  <script>

  import axios from 'axios';


export default {

  data() {
    return {
      // Initialisez messages comme un tableau vide
      messages: [],
          // Initialisez errors comme un objet vide
      errors: {},
    };
  },


  props: ['theme'],
  methods: {
    toggleThemeAndEmit() {
      this.theme.toggleTheme(); // Appel de la fonction pour basculer le thème
      this.$emit('toggleTheme'); // Émettez l'événement pour demander le changement de thème
    },



    validateAndSubmit(event) {
  //event.preventDefault(); // Empêche la soumission par défaut du formulaire

  // Récupérez les données du formulaire en créant une nouvelle instance de FormData
  const formData = new FormData(event.target);

  // Ajoutez le message envoyé au tableau
  this.messages.push({
    sender: formData.get('email'), // Expéditeur
    subject: formData.get('object'), // Objet
    message: formData.get('message'), // Message
  });

  // Affichez les messages dans la console
  console.log('Messages envoyés :', this.messages);
  alert('Message envoyés ! ');

  // Validez les champs du formulaire en utilisant la fonction validateForm
  if (this.validateForm(formData)) {
    // Si la validation réussit, envoyez les données au serveur

    axios.post('http://localhost:3000', formData, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        // Gérez la réponse du serveur ici
        console.log('Formulaire envoyé');
      })
      .catch(error => {
        console.log('Erreur');
      });
  }
},


    validateForm(formData) {

      // Réinitialisez les erreurs

      this.errors = {};


      // Implémentez la logique de validation ici
      // Vérifiez les champs requis
      const requiredFields = ['lastName', 'email', 'phone', 'object', 'message', 'agree']; // Ajoutez tous les champs requis ici

      for (const field of requiredFields) {
        const value = formData.get(field);
        if (!value || value.trim() === '') {
          // Champ obligatoire manquant, affichez un message d'erreur ou effectuez d'autres actions

          console.log(`Le champ "${field}" est requis.`);
          console.log(`Field: ${field}, Value: ${value}`);


          this.errors[field] = `Le champ "${field}" est requis.`;
        }
      }

      // Vérifiez si l'e-mail est une adresse e-mail valide
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const email = formData.get('email');
      if (!emailRegex.test(email)) {
        console.log(`L'adresse e-mail "${email}" n'est pas valide.`);
        this.errors.email = `L'adresse e-mail "${email}" n'est pas valide.`;
      }


      // Vérifiez s'il y a des erreurs
      if (Object.keys(this.errors).length > 0) {
        // Il y a des erreurs, la validation échoue
        return false;
      }

      // Toutes les validations passées, le formulaire est valide

      return true;
    }

  },
};
  </script>
  
  <style scoped>

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


  /* background bloc Contact*/

  #formbg {
    border-radius: 60px;
  }

  /* Contact input block :notcheckbox */

  #contact.dark input:not([type='checkbox']), #contact.dark textarea, #contact.dark .input-group-text {
    background:var(--bg-dark-1);
    border: 1px solid var(--StartDarkGradient);
    color: var(--white);
  }

  #contact.light input:not([type='checkbox']),  #contact.light textarea, #contact.light .input-group-text {
    background:var(--bgtlight3);
    border: 1px solid var(--StartLightGradient);
    color: var(--black);
  }

  #contact.dark .form-control::placeholder, .input-group-text {
    color: var(--StartDarkGradient);
  }
  #contact.light .form-control::placeholder, .input-group-text {
    color: var(--StartLightGradient);
  }
  
  #social {
    width: auto;
  }

  #contact {
    width: 60%;
  }  

  /* input checkbox */

/* checkbox */

.control {
    font-family: arial;
    display: block;
    position: relative;
    padding-left: 30px;
    margin-bottom: 5px;
    padding-top: 3px;
    cursor: pointer;
    font-size: 16px;
}
    .control input {
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
}
.control:hover input ~ .control_indicator,
.control input:focus ~ .control_indicator {
    background: #cccccc;
}

.control input:checked ~ .control_indicator {
    background: rgb(116, 108, 247);
}
.control:hover input:not([disabled]):checked ~ .control_indicator,
.control input:checked:focus ~ .control_indicator {
    background: var(--StartLightGradient);
}
.control input:disabled ~ .control_indicator {
    background: #e6e6e6;
    opacity: 0.6;
    pointer-events: none;
}
.control_indicator:after {
    box-sizing: unset;
    content: '';
    position: absolute;
    display: none;
}
.control input:checked ~ .control_indicator:after {
    display: block;
}
.control-checkbox .control_indicator:after {
    left: 8px;
    top: 4px;
    width: 3px;
    height: 8px;
    border: solid #ffffff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
}
.control-checkbox input:disabled ~ .control_indicator:after {
    border-color: #7b7b7b;
}
.control-checkbox .control_indicator::before {
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
.control-checkbox input + .control_indicator::before {
    animation: s-ripple 250ms ease-out;
}
.control-checkbox input:checked + .control_indicator::before {
    animation-name: s-ripple-dup;
}

/* checkbox light */

.control_indicator.light {
    background: #e6e6e6;
    border: 0px solid #000000;
}
.control.light:hover input ~ .control_indicator.light,
.control.light input:focus ~ .control_indicator.light {
    background: #cccccc;
}

.control.light input:checked ~ .control_indicator.light {
    background: rgb(116, 108, 247);
}
.control.light:hover input:not([disabled]):checked ~ .control_indicator.light,
.control.light input:checked:focus ~ .control_indicator.light {
    background: var(--StartLightGradient);
}
.control.light input:disabled ~ .control_indicator.light {
    background: #e6e6e6;
    opacity: 0.6;
}

/* checkbox dark */

.control_indicator.dark {
    background: #9BAAFF;
    border: 0px solid #ffffff;
}
.control.dark:hover input ~ .control_indicator.dark,
.control.dark input:focus ~ .control_indicator.dark {
    background: var(--borderDark);
}

.control.dark input:checked ~ .control_indicator.dark {
    background: rgb(116, 108, 247);
}
.control.dark:hover input:not([disabled]):checked ~ .control_indicator.dark,
.control.dark input:checked:focus ~ .control_indicator.dark {
    background: var(--StartLightGradient);
}
.control.light input:disabled ~ .control_indicator.light {
    background: #e6e6e6;
    opacity: 0.6;
}


  /*error input message style */

  .error-message {
    position: absolute;
    color: rgb(255, 255, 255);
    font-size: 13px;
    right: 0px;
    bottom: 20px;
    background-color: red;
    padding: 0.5rem;
    border-radius: 15px!important;

  }

  </style>
  