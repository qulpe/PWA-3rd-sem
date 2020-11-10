<template>
<div class="container-full">
    <div class="advert"></div>
    <div class="container">
        <Product />
        <Product />
        <Product />
                <Product />
        <Product />
        <Product />
        <!-- <Menu /> -->
    </div>
</div>
</template>

<script>
//   import Menu from '@/components/Menu.vue'
   import Product from '@/components/Product.vue'
export default {
  name: 'app',
  props: {
    source: String,
  },
//   components: {
//     Menu
//   }
  components: {
    Product
  }
}
</script>

<style lang="scss" scoped>
.container-full{
    height: auto;
    width: 100%;
    display: grid;
    grid-template-rows: 1fr 1fr;
}
.advert{
    height: 80vh;
    width: 100%;
    background: $pink-color;
}
.container{
    padding: 0;
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}
@media screen and (max-width: 600px) { 
.container{
    height: auto;
    width: auto;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 0.1fr 0.1fr;
}
}
</style>