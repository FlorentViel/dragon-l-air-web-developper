<template>
  <img id="profil_picture" :class="theme.isDarkMode ? 'photo-dark' : 'photo-light'"
       class="logo"
       :src="theme.isDarkMode ? images.nightLogo : images.lightLogo"
       alt="Photo de profil"/>
</template>

<script>
import { images } from '@/config/images';

export default {
  props: ['theme'],
  data() {
    return {
      images
    };
  }
};
</script>

<style lang="scss" scoped>


.logo {
  width: 45px;
  height: 45px;
  padding: 5px;
  transition: all 0.3s ease-in-out;

  @media (max-width: 985px) {
    width: 85px;
    height: 85px;
  }
}
</style>