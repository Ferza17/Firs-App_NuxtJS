<template>
        <div>
            <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
            <TheSidenav
              :show="displaySidenav"
              @close="displaySidenav = !displaySidenav" />
            <nuxt />
        </div>
</template>

<script>
import Header from '@/components/Header.vue';
import TheHeader from '@/components/Navigation/TheHeader.vue'
import TheSidenav from '@/components/Navigation/TheSidenav.vue'
export default {
  middleware: 'log',
  components: {
    TheHeader,
    TheSidenav,
  },
  data () {
    return {
      displaySidenav: false
    }
  }
}
</script>

<style>
  html {
    font-family: 'Open Sans', sans-serif;
  }

  body {
    margin: 0;
  }
</style>
