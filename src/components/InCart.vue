<template>
  <div class="cart">
    <div class="wrap">
      <h2 class="c-title">
        YOU HAVE {{ countOfCartProducts }} ITEMS IN CART
      </h2>

        <div class="item" v-for="(item, index) in myCart" v-bind:key="index">
          <div class="left-item">
            <img :key="item.image" :src="item.image" class="p-image" />
          </div>
     
            <h2>
              {{ item.name }}
            </h2>

              <v-icon left v-on:click="removeFromCart">
                DELETE
              </v-icon>
            
            <h3>
              Price €{{ item.price }}
            </h3>
          
        </div>
       
          <h3>
            Total Price:€{{ getTotal }}
          </h3>
        

        <button>PAY NOW</button>
      
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["REMOVE_FROM_CART"]),
    removeFromCart(item) {
      this.REMOVE_FROM_CART(item);
    },
  },
  computed: {
    ...mapGetters(["countOfCartProducts"]),
    ...mapGetters(["myCart"]),
    ...mapGetters(["getTotal"]),
  },
  props: ["product"],
  data() {
    return {
      cart: [],
      currentItem: this.$route.params,
    };
  },
};
</script>

<style type="scss" scoped>
.cart{
  height: auto;
  width: 100%;
  display: grid;
  place-items: center;
  font-family: "Goldman", cursive;
  color: #31326f;
}
.wrap{
  height: auto;
  width: 100%;
  background: #ffdada;
  display: grid;
  place-items: center;
}
.p-image {
  height: 25vh;
  width: 25vh;
}
.item{
  display: grid;
  place-items: center;
}
</style>
