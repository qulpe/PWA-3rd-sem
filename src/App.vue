<template>
<div class="app">
 
    <Navigation />

    <router-view />

    <Footer />

</div>
</template>
<script>
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'app',
  props: {
    source: String,
  },
  components: {
    Navigation,
    Footer
  }
}
</script>
<style lang="scss" scoped>
body{
  margin: 0 auto;
}
a{
  text-decoration: none;
}
.app{
  height: 100vh;
  width: 100%;
}
.navigation{
  height: 72px;
  width:  100%;
}

</style>