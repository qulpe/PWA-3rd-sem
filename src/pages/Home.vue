<template>
<div class="container-full">
    <div class="advert"></div>
    <div class="container">
        <Product />
   
        <Menu />
    </div>
</div>
</template>

<script>
  import Menu from '@/components/Menu.vue'
   import Product from '@/components/Product.vue'
export default {
  name: 'app',
  props: {
    source: String,
  },
  components: {
    Menu,
    Product
  }
}
</script>

<style lang="scss" scoped>
.container-full{
    height: auto;
    display: grid;
    padding: 0;
    margin: 0;
}
.advert{
    height: 80vh;
    padding: 0;
    margin: 0;
    background: $pink-color;
}
.container{
    padding: 0;
    margin: 0;
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}
@media screen and (max-width: 600px) { 
.container{
    height: auto;
    width: auto;
    margin: 0;
    padding: 0;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
}
}
</style>