<template>
  <div class="nav">
    <router-link to="/admin"><div class="nav-button">Admin</div></router-link>
    <router-link to="/"><div class="nav-button">Home</div></router-link>
    <router-link to="/cart"><div class="nav-button">Cart</div></router-link>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: $blue-color;
}
.nav {
  width: 100%;
  background-color: $light-turquoise;
  height: 72px;
  display: flex;
  justify-content: space-between;
}
.nav-button {
  height: 72px;
  width: auto;
  background-color: $turquoise;
  text-align: center;
  padding: 25px 0 0 0;
  font-size: 20px;
  font-family: "Goldman", cursive;
}
.nav-button:hover {
  background-color: $pink-color;
  transition: 1s;
}
</style>
