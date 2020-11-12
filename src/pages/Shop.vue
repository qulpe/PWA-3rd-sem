<template>
  <div class="shop">
    <!-- <span class="work"></span> <br /> -->

    <div class="p-avaible" v-for="item in avaibleProducts" :key="item.name">
      <div class="product">
        <router-link
          @click.native="scrollToTop"
          :to="{ name: 'Product', params: { ...item } }"
        >
          <img :key="item.image" :src="item.image" class="p-image" />
        </router-link>
        <div class="p-text-contain">
        <div class="p-name">{{ item.name }}</div>
        <div class="p-price">€{{ item.price }}</div>

        <button class="add-to-cart" v-on:click="addToCart(item)">
          ADD TO CART
        </button>
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
}
</style>
