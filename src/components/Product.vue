<template>
    <div>

    </div>
</template>

<script>
    export default {
        data(){
            return{
            avaibleProducts= [],
            }
        },
        computed:{
        showProduct() {
          const id = this.$route.params.id;
          const product = this.avaibleProducts.find((p) => p.uuid == id);
          return product;
        },
        }
    }
</script>

<style lang="scss" scoped>

</style>