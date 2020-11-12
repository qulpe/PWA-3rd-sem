<template>
<div class="administrator">
  <div class="a-contain">
    <div class="admin">
      <v-text-field label="Name" required v-model="name"> </v-text-field>
      <v-text-field label="Description" required v-model="description">
      </v-text-field>
      <v-text-field label="Price" required v-model="price"> </v-text-field>
      <v-file-input label="File input" @change="uploadImage"></v-file-input>

      <v-btn @click="AddNewMenuItem">Add</v-btn>
    </div>
    <br /><br /><br />
    <v-simple-table id="menu-table"> </v-simple-table>
    <div class="preview">
      <div class="p-avaible" v-for="item in avaibleProducts" :key="item.name">
        <div class="product">
          <router-link
            @click.native="scrollToTop"
            :to="{ name: 'Product', params: { ...item } }"
          >
            <img :key="item.image" :src="item.image" class="p-image" />
          </router-link>
          <div class="p-name">{{ item.name }}</div>
          <div class="p-price">€{{ item.price }}</div>
          <v-btn @click.stop="dialog = true" @click="editItem(item)">
            <v-icon>edit</v-icon>
          </v-btn>
          <v-btn @click="deleteItem(item.id)">Delete</v-btn>
        </div>
      </div>
      <!-- <v-simple-table id="menu-table">
        <tbody>
          <tr>
            <td id="preview_menuitem_price">{{ name }}</td>
          </tr>
          <tr>
            <td id="preview_menuitem_price">{{ description }}</td>
          </tr>
          <tr>
            <td id="preview_menuitem_price">{{ price }}</td>
          </tr>
       
        </tbody>
      </v-simple-table> -->
    </div>
    <v-app>
      <v-dialog v-model="dialog" max-width="400">
        <v-card>
          <h1>Edit Item</h1>
          <v-text-field v-model="item.name"></v-text-field>
          <v-text-field v-model="item.description"></v-text-field>
          <v-text-field v-model="item.price"></v-text-field>
          <v-btn @click="updateItem()" @click.stop="dialog = false">Edit</v-btn>
          <v-btn @click.stop="dialog = false">
            Cancel
          </v-btn>
        </v-card>
      </v-dialog>
    </v-app>
  </div>
  </div>
</template>
<script>
import { dbMenuAdd, fb } from "../../firebase";
export default {
  data() {
    return {
      basket: [],
      dialog: false,
      name: "",
      description: "",
      avaibleProducts: [],
      item: [],
      activeEditItem: null,
      image: null,
    };
  },
  beforeCreate() {
    this.$store.dispatch("setMenuItems");
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

  methods: {
    uploadImage(e) {
      let file = e;
      console.log(file);
      var storageRef = fb.storage().ref("product" + file.name);
      let uploadTask = storageRef.put(file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          console.log(snapshot);
        },
        (error) => {
          console.log(error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            this.image = downloadURL;
            console.log("file available at", downloadURL);
          });
        }
      );
    },
    editItem(item) {
      this.item = item;
      this.activeEditItem = item.id;
    },
    updateItem() {
      dbMenuAdd
        .doc(this.activeEditItem)
        .update(this.item)
        .then(() => {
          console.log("mda, ma pis");
        })
        .catch(function(error) {
          console.error("eroare coaie ce plm faci", error);
        });
    },
    AddNewMenuItem() {
      dbMenuAdd.add({
        name: this.name,
        description: this.description,
        price: this.price,
        image: this.image,
      });
    },
    deleteItem(id) {
      dbMenuAdd
        .doc(id)
        .delete()
        .then(function() {
          console.log("Item removed succsessfully");
        })
        .catch(function(error) {
          console.error("Error deletind item: ", error);
        });
    },
  },
  computed: {
    menuItems() {
      return this.$store.getters.getMenuItems;
    },
  },
};
</script>
<style lang="scss" scoped>
.administrator{
  font-family: 'Goldman', cursive;
  color: $blue-color;
  width: 100%;
  height: auto;
}
.a-contain {
  width: 100%;
  height: auto;
  display: grid;
  place-items: center;
}
.admin {
  height: auto;
  width: 35vh;
  background-color: $turquoise;
  display: grid;
  place-items: center;
}
.preview {
  background: $pink-color;
  width: 35vh;
  height: auto;
}
.p-image {
  height: 25vh;
  width: 25vh;
}
@media screen and (max-width: 600px) {
.admin {
  width: 100%;
}
.preview {
  width: 100%;
    display: grid;
  place-items: center;
}
}
</style>
