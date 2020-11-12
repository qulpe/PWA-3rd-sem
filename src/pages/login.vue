<template>
  <div class="login">
    <v-text-field v-model="email" label="Email" required></v-text-field>
    <v-text-field v-model="password" label="Password" required></v-text-field>
    <v-btn @click.prevent="signIn()">Submit</v-btn>

    <!-- <iframe
      src="https://crapcha.com/embed/"
      frameborder="0"
      scrolling="0"
      width="300"
      height="150"
    ></iframe> -->
  </div>
</template>

<script>
import firebase from "firebase";
import "firebase/firestore";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    signIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.replace("/admin");
        })
        .catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode === "auth/wrong-password") {
            alert("Wrong password");
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  background: $turquoise;
}
</style>
