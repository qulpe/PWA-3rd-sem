<template>
    <div class="nav">   
    
 <router-link to="/admin"><div class="nav-button">Admin</div></router-link> 
     <!-- <router-link to="/login"><div class="nav-button">Login</div></router-link>  -->
      <router-link to="/"><div class="nav-button">Home</div></router-link> 
            <router-link to="/cart"><div class="nav-button">Cart</div></router-link> 
                <router-link to="/Shop"><div class="nav-button">Shop</div></router-link> 
     
      <!-- <div v-if="currentUser">
     <h4>  {{ currentUser.email }} </h4>
    
    </div>   -->
    </div>
</template>

<script>
// import { dbMenuAdd } from '../../firebase'

import firebase from 'firebase'
import 'firebase/firestore'
// import store from '../store/index.js'
// firebase.auth().onAuthStateChanged(function(user){
//     if(user){
//         store.dispatch('setUser', user)
//     }else{
//         store.dispatch('setUser', null)
//     }
// });


 export default {
        //    created() {
        //     dbMenuAdd.get().then((querySnapshot) =>{
        //         querySnapshot.forEach((doc =>{
        //             console.log(doc.id, " => ", doc.data());
        //             var menuItemData = doc.data();
        //             this.menuItems.push({
        //                 // id: doc.id,
        //                 name: menuItemData.name,
        //                 description: menuItemData.description,
        //                 price: menuItemData.price,
        //             })
        //         }))
        //     })
        // },
      methods: {
       signOut() {
                firebase.auth().signOut().then(() => {
                    alert('Logged Out');
                    this.$router.replace('/')
                }).catch(error => {
                    alert(error)
                })
            }
      },
      //  computed: {
      //     currentUser() {
      //       return this.$store.getters.currentUser
      //     }
      //   },  
 }
</script>

<style lang="scss" scoped>
a{
  text-decoration: none;
  color: $blue-color;
}
.nav{
  width: 100%;
  background-color: $light-turquoise;
  height: 72px;
  display: flex;
  justify-content: space-between;
}
.nav-button{
  height: 72px;
  width: auto;
  background-color: $turquoise;
  text-align: center;
  padding: 25px 0 0 0;
  font-size: 20px;
  font-family: 'Goldman', cursive;
}
.nav-button:hover{
  background-color: $pink-color;
  transition: 1s;
}
</style>