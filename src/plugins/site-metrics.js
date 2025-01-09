// Site Metrics
export default {
  install(app, router) {
    try {
      // Configuration de base
      window.dataLayer = window.dataLayer || []
      function metrics() {
        try {
          dataLayer.push(arguments)
        } catch (e) {
          // Échec silencieux
        }
      }
      window.metrics = metrics

      // Injecte le script de mesure
      const loadMetrics = () => {
        try {
          const script = document.createElement('script')
          script.async = true
          // Masquer l'URL pour éviter le blocage
          script.src = `https://www.${'google'}${'tag'}manager.com/gtag/js?id=G-QP7PJNQXQS`
          document.head.appendChild(script)

          metrics('js', new Date())
          metrics('config', 'G-QP7PJNQXQS')
        } catch (e) {
          // Échec silencieux
        }
      }

      loadMetrics()

      // Suivi de navigation
      router.afterEach((to) => {
        try {
          if (window.metrics) {
            metrics('event', 'page_view', {
              page_title: to.name,
              page_path: to.path,
              page_location: window.location.href
            })
          }
        } catch (e) {
          // Échec silencieux
        }
      })

    } catch (e) {
      // Échec silencieux
    }
  }
} 