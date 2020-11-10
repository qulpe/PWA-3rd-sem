<template>
    <div class="container">

        <v-text-field
            v-model="email"
            label="Email"
            required
        ></v-text-field>
        <v-text-field
            v-model="password"
            label="Password"
            required
        ></v-text-field>
    <v-btn @click.prevent="signIn()">Submit</v-btn>
    <v-btn @click.prevent="signOut()">Log-out</v-btn>
   
    </div>
</template>

<script>

          import firebase from 'firebase'
import 'firebase/firestore'

    export default {
        data() {
            return{
                email: '',
                password: '',
            }
        },
        methods: {
            signIn() {
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() =>{
                    this.$router.replace('/admin')
                })
                .catch(function(error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    if (errorCode === 'auth/wrong-password') {
                        alert ("Wrong password")
                    }else {
                        alert(errorMessage)
                    }
                    console.log(error)
                })  
            },
            signOut() {
                firebase.auth().signOut().then(() => {
                    alert('Logged Out');
                    this.$router.replace('/')
                }).catch(error => {
                    alert(error)
                })
            },

    
        },
    }
</script>

<style lang="scss" scoped>
.container{
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
}
</style>