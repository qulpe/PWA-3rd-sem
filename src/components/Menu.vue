<template>
<div class="container">
    <v-container>
        <v-col offset-md="1" md="5">
            <div class="pa-2" id="info">
                <v-simple-table id="menu-table">
                    <thead>
                        <tr>
                            <th class="text-left">Name</th>
                            <th class="text-left">Price</th>
                            <th class="text-left">Add to cart</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in menuItems" :key="item.name">
                            <td> {{ item.name }}
                                 {{ item.description }}
                            </td>
                               
                            <td> {{ item.price}} </td>
                            <td> {{item.add}}
                                <v-btn small text>
                                <v-icon color="orange" @click="addToBasket(item)">add_box</v-icon> 
                                </v-btn>
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </div>
            <br><br><br><br>
                        <div class="pa-2" id="info">
                <v-simple-table id="menu-table"  v-if="basket.length > 0">
                    <thead>
                        <tr>
                            <th class="text-left">Name</th>
                            <th class="text-left">Price</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in basket" :key="item.name">
                            <td> {{ item.name }}</td>
                            <td>
                                <v-icon color="orange" @click="increaseQtn(item)">add_box</v-icon>
                                {{ item.quantity }}
                                <v-icon color="orange" @click="decreaseQtn(item)">indeterminate_check_box</v-icon>
                            </td>    
                            <td> {{ item.price}} </td>
                            <td> {{item.add}} </td>
                            
                        </tr>
                    </tbody>
                    <div class="total">
                        <h3>Total</h3>
                            <p> {{ subTotal }} </p>
                            <p> {{ total }} </p>
                        <v-btn class="pa-2">Checkout</v-btn>
                    </div>
                </v-simple-table>
                <v-simple-table else>
                    <p>The cart is empty</p>
                </v-simple-table>
            </div>
        </v-col>
    </v-container>
</div>
</template>

<script>
import { dbMenuAdd } from '../../firebase'
    export default {
        data () {
            return {
                basket: [],
                menuItems: [],
            }
        },
        created() {
            dbMenuAdd.get().then((querySnapshot) =>{
                querySnapshot.forEach((doc =>{
                    console.log(doc.id, " => ", doc.data());
                    var menuItemData = doc.data();
                    this.menuItems.push({
                        id: doc.id,
                        name: menuItemData.name,
                        description: menuItemData.description,
                        price: menuItemData.price,
                    })
                }))
            })
        },
        methods: {
            addToBasket(item) {
       /*     
         */
                this.basket.push({
                    name: item.name,
                    price: item.price,
                    quantity: 1
                });
                this.$store.commit('addBasketItems', this.basket);
                this.basket = [];
                
            },
              increaseQtn(item) {
                item.quantity++
            },
            decreaseQtn(item) {
                item.quantity--;

                if (item.quantity === 0) {
                    this.basket.splice(this.basket.indexOf(item), 1)
                }
            }
        },
    computed: {
        subTotal () {
            var subCost = 0;
            for( var items in this.basket) {
                var individualItem = this.basketDump[items];
                subCost += individualItem.quantity * individualItem.price;
            }
            return subCost
        },
        total () {
            var deliveryPrice = 10;
            var totalCost = this.subTotal
            return totalCost + deliveryPrice
        }
    }      
}
</script>

<style lang="scss" scoped>
.container{
    width: 100%;
    height: 100%;
    background-color: aqua; 
    // url('../assets/ceva-random.png');
    // background-repeat: no-repeat;
    // background-attachment: cover;
    // background-position: center;
}
.total{
    display: flex;
}
</style>