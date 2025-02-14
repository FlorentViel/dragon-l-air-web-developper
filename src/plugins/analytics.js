// Analytics personnalisé
export default {
  install(app) {
    const trackPageView = async (page) => {
      try {
        await fetch('/api/analytics', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            page,
            timestamp: new Date().toISOString(),
            // autres données utiles
          })
        })
      } catch (e) {
        console.warn('Failed to track page view:', e)
      }
    }

    app.config.globalProperties.$router.afterEach((to) => {
      trackPageView(to.path)
    })
  }
} 