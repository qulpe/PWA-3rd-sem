<template>
    <div class="product">
        <img src="../assets/inca-ceva.png" alt="" width="350" height="300">
        <div class="text-container">
        <p class="product-title">Product Title</p>
        <p class="product-description">This is just a short product description meant to test</p>
    
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
p{
    font-family: 'Goldman', cursive;
}
.product{
    height: auto;
    min-height: 30vh;
    width: auto;
    margin: 20px;
    padding: 20px 10px;
    background: $light-turquoise;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
}
.product-title{
    font-size: 35px;
    color: $blue-color;
    margin: 10px;
}
.product-description{
    margin: 0px 10px;
}
@media screen and (max-width: 600px) { 
.product{
    height: auto;
    min-height: 45vh;
    width: auto;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 0.1fr 0.1fr;
}
}
@media screen and (min-width: 600px) { 
.product{
    max-height: 30vh;
}
}
</style>