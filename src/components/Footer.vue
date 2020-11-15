<template>
  <div class="footer">
    <div>
      <div @click.prevent="signOut()" class="footer-button">Log-out</div>
      <div v-if="currentUser" class="log">
        <h4>You are logged in as: {{ currentUser.email }}</h4>
      </div>
      <div class="filler"></div>
    </div>
  </div>
</template>

<script>
import { dbMenuAdd } from "../../firebase";

import firebase from "firebase";
import "firebase/firestore";
import store from "../store/index.js";
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    store.dispatch("setUser", user);
  } else {
    store.dispatch("setUser", null);
  }
});

export default {
  created() {
    dbMenuAdd.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        var menuItemData = doc.data();
        this.menuItems.push({
          // id: doc.id,
          name: menuItemData.name,
          description: menuItemData.description,
          price: menuItemData.price,
        });
      });
    });
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          alert("Logged Out");
          this.$router.replace("/");
        })
        .catch((error) => {
          alert(error);
        });
    },
  },
  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  height: 250px;
  width: 100%;
  background: $blue-color;
  display: grid;
  grid-template-columns: 1fr;
  padding: 50px 0 0 0;
  font-family: "Goldman", cursive;
}
.log {
  color: $light-turquoise;
}
.footer-button {
  color: $light-turquoise;
  background: $blue-color;
  padding: 15px;
}
.filler {
  background: url("../assets/ceva-random.png");
  height: 150px;
  width: 100%;
  opacity: 0.5;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
@media screen and (max-width: 600px) {
  .footer {
    padding: 20px 0;
  }
}
</style>
