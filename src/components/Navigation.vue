<template>
    <div class="nav">   
    
 <router-link to="/admin"><div class="nav-button">Admin</div></router-link> 
     <!-- <router-link to="/login"><div class="nav-button">Login</div></router-link>  -->
      <router-link to="/"><div class="nav-button">Home</div></router-link> 
     <v-btn @click.prevent="signOut()">Log-out</v-btn>
      <!-- <div v-if="currentUser"> -->
        <!-- <v-card
    class="mx-auto"
    max-width="50"
    tile
  >
    <v-img
      height="50"
      src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
    >
      <v-row
        align="end"
        class="fill-height"
      >
        <v-col
          align-self="start"
          class="pa-0"
          cols="12"
        >
          <v-avatar
            class="profile"
            color="grey"
            size="50"
            tile
          >
            <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
          </v-avatar>
        </v-col>
        <v-col class="py-0">
          <v-list-item
            color="rgba(0, 0, 0, .4)"
            dark
          >
            <v-list-item-content>
              <v-list-item-title class="title">
               {{ currentUser.email }}
              </v-list-item-title>
              <v-list-item-subtitle>Network Engineer</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-img>
  </v-card> -->
    
    <!-- </div> -->
    </div>
</template>

<script>
// //  import { dbMenuAdd } from '../../firebase'
             import firebase from 'firebase'
import 'firebase/firestore'
          
// // // import store from '../store/index.js'
// // firebase.auth().onAuthStateChanged(function(user){
// //     if(user){
// //         store.dispatch('setUser', user)
// //     }else{
// //         store.dispatch('setUser', null)
// //     }
// // });


 export default {
//         //    created() {
//         //     dbMenuAdd.get().then((querySnapshot) =>{
//         //         querySnapshot.forEach((doc =>{
//         //             console.log(doc.id, " => ", doc.data());
//         //             var menuItemData = doc.data();
//         //             this.menuItems.push({
//         //                 // id: doc.id,
//         //                 name: menuItemData.name,
//         //                 description: menuItemData.description,
//         //                 price: menuItemData.price,
//         //             })
//         //         }))
//         //     })
//         // },
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
       computed: {
          currentUser() {
            return this.$store.getters.currentUser
          }
        },  
 }
</script>

<style lang="scss" scoped>
a{
  text-decoration: none;
  color: #fff
}
.nav{
  width: 100%;
  background-color: $colorz;
  height: 72px;
  display: grid;
  grid-template-rows: 0.1fr;
  grid-template-columns: 0.35fr 0.1fr 0.1fr 0.1fr;
  place-items: center;
}
.nav-button{
  height: 72px;
  width: 60px;
  background-color: aquamarine;

}
.nav-button:hover{
  background-color: #30da30;
  transition: 1s;
}
</style>