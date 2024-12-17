<template>
  <div class="contact-top-bar" :class="theme.isDarkMode ? 'contact-top-bar-dark' : 'contact-top-bar-light'">
    <div class="reseau"><ul><li><i class="fa-brands fa-linkedin"></i></li>
      <li><i class="fa-brands fa-github"></i></li>
      <li><i class="fa-brands fa-facebook"></i></li></ul>
    </div>
    <div class="to-contact">
      <div class="centered">
        <font-awesome-icon :icon="['fas', 'phone']" />
        <p>+33 6 12 34 56 78</p>
      </div>
      <div class="to-contact-icon">
        <i class="fa-solid fa-envelope"></i>
        <a href="mailto:florent.vieville03@gmail.com" >florent.vieville03@gmail.com</a>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['theme']);

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faPhone);


</script>

<style lang="scss" scoped>

.contact-top-bar {
  width: 100%;
  padding: rem(16);
  display: flex;
  justify-content: space-between;
  background-color: #00000015;
  margin-bottom: rem(16);
  font-size: rem(12);
}
.to-contact {
  @include flex-center;
  gap: rem(36);

  .appelez-moi {
    color: #0000ff;
    font-weight: 600;
  }

  .centered {
    display: flex;
    gap: rem(8);
  }

  & div {
    background-color: #bfb6b6a8;
    padding: rem(8);
    border-radius: rem(8);  


    & p {
      font-size: rem(12);
    }
  }
}


.to-contact-icon {
  display: flex;
  gap: rem(8);
  align-items: center;

  a {
    color: #0000ff;
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    } 
  }

}

.contact-top-bar-dark {
  color: white;
  background-color: #00000015;  
}

.contact-top-bar-light {
  color: white;
  background-color: #00000015;
}

.reseau {
  @include flex-row;

  ul {
    @include flex-row;
    gap: rem(16);
  }

  li {
    @include flex-center;
  }

  i {
    font-size: rem(16);
  }
}

</style>