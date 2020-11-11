<template>
  <div class="container">
    <div class="admin">
      <v-text-field label="Name" required v-model="name"> </v-text-field>
      <v-text-field label="Description" required v-model="description">
      </v-text-field>
      <v-text-field label="Price" required v-model="price"> </v-text-field>
      <v-file-input label="File input" @change="uploadImage"></v-file-input>

      <v-btn @click="AddNewMenuItem" :disabled="btnDisable">Add</v-btn>
    </div>
    <br><br><br>
    <v-simple-table id="menu-table">
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Price</th>
          <th class="text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in menuItems" :key="item.name">
          <td>
            {{ item.name }}
            {{ item.description }}
          </td>

          <td>{{ item.price }}</td>
          <td>
            {{ item.add }}
            <v-btn small text> </v-btn>
            <v-btn @click.stop="dialog = true" @click="editItem(item)">
                 <v-icon>edit</v-icon> 
            </v-btn>
            <v-btn @click="deleteItem(item.id)">Delete</v-btn>
          </td>
        </tr>
      </tbody>
    </v-simple-table>
    <div class="preview">
      <v-simple-table id="menu-table">
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
          <tr>
            <td id="preview_menuitem_price">   </td>
          </tr>
        </tbody>
      </v-simple-table>
    </div>
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
      price: "",
      item: [],
      activeEditItem: null,
      image: null,
      btnDisable: true
    };
  },
  beforeCreate() {
    this.$store.dispatch("setMenuItems");
  },

  methods: {
      uploadImage(e) {
      let file = e.target.files[0];
      console.log("Test image file", file);
      var storageRef = fb.storage().ref('products/' + file.name);

      let uploadTask = storageRef.put(file);

     /*
eslint-disable */ uploadTask.on('state_changed', (snapshot) => {

     /*
eslint-disable */ },(error) => {
        }, () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          this.image = downloadURL
          console.log('File avaible at', downloadURL);
        });
      });
    },
    editItem(item) {
        this.item= item;
        this.activeEditItem = item.id    
    },
    updateItem() {
        dbMenuAdd.doc(this.id).update(this.item)
        .then(() => {
            console.log('mda, ma pis')
        })
        .catch(function(error) {
            console.error("eroare coaie ce plm faci", error)
        });

    },
    AddNewMenuItem() {
      dbMenuAdd.add({
        name: this.name,
        description: this.description,
        price: this.price,
        image: this.image
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
.container {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  grid-template-rows: 1fr;
}
.admin {
  height: 35vh;
  width: 35vh;
  background-color: blue;
  display: grid;
  place-items: center;
}
.input {
  width: 100px;
  height: 30px;
  background: #ffffff90;
  margin: 10px 0 0 0;
}
.button {
  width: 75px;
  height: 30px;
  background: #ffffff90;
  text-align: center;
}
#one {
  background: crimson;
}
#two {
  background: darkgreen;
}
.preview {
  background: crimson;
  width: 35vh;
  height: 35vh;
}
</style>
