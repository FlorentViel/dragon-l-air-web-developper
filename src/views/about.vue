<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'À propos - Dragon\'s Lair Web Developer',
  meta: [
    {
      name: 'description',
      content: 'Découvrez mon parcours professionnel, mes compétences en développement web et ma passion pour la création de solutions web innovantes.'
    },
    {
      name: 'keywords',
      content: 'développeur web, parcours professionnel, compétences techniques, Vue.js, développement frontend, développement backend'
    },
    {
      property: 'og:title',
      content: 'À propos - Dragon\'s Lair Web Developer'
    },
    {
      property: 'og:description',
      content: 'Découvrez mon parcours professionnel, mes compétences en développement web et ma passion pour la création de solutions web innovantes.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:url',
      content: 'https://www.thedragonslairwebdeveloper.com/about'
    }
  ]
})
</script> 