<template>
    <div class="home">
        <div class="ad">
            <div class="h-content"></div>
            <p class="title">Some kind of title</p>
        </div>
        <div class="i-container">
        <div class="info"></div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.home{
    display: grid;
    width: 100%;
    height: auto;
    font-family: 'Goldman', cursive;
}
.ad{
    width: 100%;
    height: 60vh;
    background: $pink-color;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 50px;
}
.h-content{
    height: 45vh;
    width: 45vh;
    background: $turquoise;
}
.title{
    font-size: 6em;
    color: $blue-color;
}
.i-container{
    width: 100%;
    height: auto;
    padding: 40px;
}
.info{
    height: 50vh;
    width: 50vh;
    background: $turquoise;
}
@media screen and (max-width: 600px) { 
.ad{
    height: auto;
    width: 100%;
    margin: 0;
    padding: 20px;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    overflow: hidden;
}
.i-container{
    grid-template-columns: 1fr;
    padding: 0;
}
.h-content{
    width: 100%;
}
.info{
    width: 100%;
}
}
</style>