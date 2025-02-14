<template>
  <div v-if="isBlocked" class="analytics-notice">
    <p>Pour nous aider à améliorer notre site, merci de désactiver votre bloqueur de publicités.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isBlocked: false
    }
  },
  mounted() {
    // Détecte si GA est bloqué
    setTimeout(() => {
      this.isBlocked = !window.gtag
    }, 1000)
  }
}
</script> 