<template>
        <div>
          <Header />
          <v-col class="text-center">
            <nuxt />
          </v-col>
        </div>
</template>

<script>
import Header from '@/components/Header.vue';
export default {
  data () {
    return {
    }
  },
  components: {
    Header
  }
}
</script>

<style>

</style>
