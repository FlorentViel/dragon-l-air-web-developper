// Google Analytics
export default {
  install(app) {
    // Injecte le script Google Analytics
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-QP7PJNQXQS'
    document.head.appendChild(script)

    // Configuration de base
    window.dataLayer = window.dataLayer || []
    function gtag() {
      dataLayer.push(arguments)
    }
    gtag('js', new Date())
    gtag('config', 'G-QP7PJNQXQS')

    // Rend gtag disponible globalement
    window.gtag = gtag

    // Ajoute un guard de navigation pour tracker les pages vues
    app.config.globalProperties.$router.afterEach((to) => {
      gtag('event', 'page_view', {
        page_title: to.name,
        page_path: to.path,
        page_location: window.location.href
      })
    })
  }
} 