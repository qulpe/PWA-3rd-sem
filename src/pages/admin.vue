<template>
    <div class="container">
        

        <div class="admin">
            <v-text-field
                label="Name"
                required 
                v-model="name"
            >
            </v-text-field>
                  <v-text-field
                label="Description"
                required 
                v-model="description"
            >
            </v-text-field>
                  <v-text-field
                label="Price"
                required 
                v-model="price"
            >
            </v-text-field>
           <v-btn @click="AddNewMenuItem">Add</v-btn>
           
        </div>
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
                                <v-btn @click="deleteItem(item.id)">Delete</v-btn>
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>
        <div class="preview">  
            <v-simple-table id="menu-table">
                <thead>
                    <tr>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td id="preview_menuitem_price"> {{name}} </td>
                    </tr>
                    <tr>
                        <td id="preview_menuitem_price"> {{description}} </td>
                        </tr>
                    <tr>
                        <td id="preview_menuitem_price"> {{price}} </td>
                    </tr>
                </tbody>
            </v-simple-table>
        </div>
    </div>
</template>
<script>
import { dbMenuAdd } from '../../firebase'
export default {
    data () {
        return {
            basket: [],
            name: '',
            description: '',
            price: '',
        }
    },
    beforeCreate() {
        this.$store.dispatch('setMenuItems')
    },

          
    methods: {
        AddNewMenuItem() {
            dbMenuAdd.add({
                name: this.name,
                description: this.description,
                price: this.price
            })
        },
        deleteItem(id) {
            dbMenuAdd.doc(id).delete().then(function(){
                console.log("Item removed succsessfully");
            }).catch(function(error){
                console.error("Error deletind item: ", error);
            })
        }
    },
    computed: {
        menuItems() {
            return this.$store.getters.getMenuItems
        }
    }

}
</script>
<style lang="scss" scoped>
.container{
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    grid-template-rows: 1fr;
}
.admin{
    height: 35vh;
    width: 35vh;
    background-color: blue;
    display: grid;
    place-items: center;
}
.input{
    width: 100px;
    height: 30px;
    background: #ffffff90;
    margin: 10px 0 0 0;
}
.button{
    width: 75px;
    height: 30px;
    background: #ffffff90;
    text-align: center;
}
#one{
    background: crimson;
}
#two{
    background: darkgreen;
}
.preview{
    background: crimson;
    width: 35vh;
    height: 35vh;
}
</style>