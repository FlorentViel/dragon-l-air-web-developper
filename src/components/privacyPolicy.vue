<template>
    <section>

      <div class="my-5">
          <h1 :class="theme.isDarkMode ? 'h1-dark' : 'h1-light'" class="text-center title font-size-40 h1">Politique de condentialité</h1>
      </div>


      <div :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'" class="my-5 text-center lh-lg lh-sm p-3 w-75 m-auto">

          <p>1 - Aucune donnée ne sera recueillite à des fins commerciales ou destiner à la revente. </p>
          <p>2 - Les données stockés sont uniquement ce qui sera envoyer par le formulaire de contact. 
            En cochant la casse pour se soumettre au formulaire, vous consentez explicitement à ce que les données soient collectés et traités.</p>
          <p>3 - Vous avez le droit à l'effacement (droit à être oublié). A la demande vous pouvez me demander de supprimer l'ensemble de vos données. 
            Vous pouvez me contacter par e-mail pour faire votre demande d'effacement.</p>
          <p>4 - Les données ont pour but de pouvoir vous répondre à vos demandes et pouvoir vous recontacter aux besoins. Seul un nom et une adresse-mail 
            sont obligatoires pour recevoir une réponse. Cependant le droit à l'effacement est applicable à votre demande pour ces données également.
          </p>
          

      </div>


    </section>

    
  </template>
  
  <script>
  export default {
    props: ['theme'],
    methods: {
      toggleThemeAndEmit() {
        this.theme.toggleTheme(); // Appel de la fonction pour basculer le thème
        this.$emit('toggleTheme'); // Émettez l'événement pour demander le changement de thème
      },
    }
  }
  </script>
  
  <style scoped>



  



  

  </style>
  