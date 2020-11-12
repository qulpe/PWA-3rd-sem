<template>
    <div class="home">
        <div class="ad">
            <div class="h-content"><p class="h-title">Best <br> shit <br> you'll <br> ever <br> take</p>
            <img src="../assets/collection-tushy-bidet.png" alt="" class="shit"></div>
            <p class="title">Try our new bidet!</p>
            
        </div>
        <div class="i-container">
              <div class="shop">
    <!-- <span class="work"></span> <br /> -->

    <div class="p-avaible" v-for="item in avaibleProducts" :key="item.name">
      <div class="product">
        
          <img :key="item.image" :src="item.image" class="p-image" />
    
        <div class="p-text-contain">
        <div class="p-name">{{ item.name }}</div>
        <div class="p-price">€{{ item.price }}</div>
        
        <div class="p-description">{{ item.description }}</div>

        <button class="add-to-cart" v-on:click="addToCart(item)">
          ADD TO CART
        </button>
        </div>
      </div>
    </div>
  </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from "vuex";
import { dbMenuAdd } from "../../firebase";

export default {
  methods: {
    ...mapMutations(["ADD_TO_CART"]),
    addToCart(item) {
      this.ADD_TO_CART(item);
    },
  },
  data() {
    return {
      cart: [],
      avaibleProducts: [],
      computed: {
        showProduct() {
          const id = this.$route.params.id;
          const product = this.avaibleProducts.find((p) => p.uuid == id);
          return product;
        },
      },
    };
  },
  created() {
    dbMenuAdd.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        var avaibleItemData = doc.data();
        this.avaibleProducts.push({
          id: doc.id,
          name: avaibleItemData.name,
          price: avaibleItemData.price,
          description: avaibleItemData.description,
          uuid: avaibleItemData.uuid,
          image: avaibleItemData.image,
        });
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.home{
    display: grid;
    width: 100%;
    height: auto;
    font-family: 'Goldman', cursive;
}
.ad{
    width: 100%;
    height: 60vh;
    background: $pink-color;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 50px;
}
.h-content{
    height: 45vh;
    width: 45vh;
    background: $turquoise;
    color: $light-turquoise;
    text-align: start;
    font-size: 5em;
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.title{
    font-size: 6em;
    color: $blue-color;
    margin: 200px 0 0 0;
}
.i-container{
    width: 100%;
    height: auto;
    padding: 40px;
    background: $turquoise;
}
.shit{
    height: 500px;
    width: 500px;
    margin: 0 0 0 50px;
}
.info{
    height: 50vh;
    width: 50vh;
    background: $turquoise;
}
@media screen and (max-width: 600px) { 
.ad{
    height: auto;
    width: 100%;
    margin: 0;
    padding: 20px;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    overflow: hidden;
}
.i-container{
    grid-template-columns: 1fr;
    padding: 0;
}
.title{
    margin: -50px 0 0 0;
}
.h-content{
    width: 100%;
    font-size: 3em;
}
.info{
    width: 100%;
}
.shit{
    height: 200px;
    width: 200px;
    margin: 30px 0 0 0;
}
}
.shop {
  height: auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-family: "Goldman", cursive;
  color: $blue-color;
  background: $pink-color;
}
.work {
  width: 100%;
  height: 50vh;
  background: $pink-color;
}
.product {
  height: auto;
  min-height: 30vh;
  width: auto;
  min-width: 30vh;
  margin: 20px;
  padding: 20px 10px;
  background: $light-turquoise;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
}
.p-image {
  height: 25vh;
  width: 25vh;
}
.p-text-contain{
  display: grid;
  grid-template-rows: 1fr 1fr;
}
.p-name{
  font-size: 3em;
}
.add-to-cart{
  font-size: 2em;
}
@media screen and (max-width: 600px) { 
.shop{
    height: auto;
    width: auto;
    margin: 0;
    padding: 40px 0;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
}
.product{
    height: auto;
    width: auto;
    margin: 10px 0;
    padding: 10px;
    grid-template-columns: 1fr;
}
.p-image {
  height: 40vh;
  width: auto;
}
.add-to-cart{
  font-size: 2em;
}
.p-description{
  margin: -10px 0 10px 0;
}
}
</style>