<template>
  <section>
    <div class="my-5">
      <h1 :class="theme.isDarkMode ? 'h1-dark' : 'h1-light'" class="text-center title font-size-40 h1">Politique de confidentialité</h1>
    </div>
    <div :class="theme.isDarkMode ? 'text-color-dark' : 'text-color-light'" class="my-5 text-center lh-lg lh-sm p-3 w-75 m-auto">
      <p>1 - Aucune donnée ne sera recueillie à des fins commerciales ou destinée à la revente.</p>
      <p>2 - Les données stockées sont uniquement celles envoyées par le formulaire de contact. En cochant la case pour se soumettre au formulaire, vous consentez explicitement à ce que les données soient collectées et traitées.</p>
      <p>3 - Vous avez le droit à l'effacement (droit à être oublié). À la demande, vous pouvez me demander de supprimer l'ensemble de vos données. Vous pouvez me contacter par e-mail pour faire votre demande d'effacement.</p>
      <p>4 - Les données ont pour but de pouvoir vous répondre à vos demandes et pouvoir vous recontacter si besoin. Seuls un nom et une adresse e-mail sont obligatoires pour recevoir une réponse. Cependant, le droit à l'effacement est applicable à votre demande pour ces données également.</p>
    </div>
  </section>
</template>

<script>
export default {
  props: ['theme'],
  methods: {
    toggleThemeAndEmit() {
      this.theme.toggleTheme();
      this.$emit('toggleTheme');
    }
  }
}
</script>

<style lang="scss" scoped>

.my-5 {
  margin: 3rem 0;
}

.text-center {
  text-align: center;
}

.lh-lg {
  line-height: 1.5;
}

.lh-sm {
  line-height: 1.2;
}

.w-75 {
  width: 75%;
}

.p-3 {
  padding: 1rem;
}

.h1-dark {
  color: $white;
}

.h1-light {
  color: $black;
}

.text-color-dark {
  color: $white;
}

.text-color-light {
  color: $black;
}
</style>