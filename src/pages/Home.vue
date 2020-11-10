<template>
    <div>

        <Menu />
    </div>
</template>

<script>
  import Menu from '@/components/Menu.vue'
export default {
  name: 'app',
  props: {
    source: String,
  },
  components: {
    Menu
  }
}
</script>

<style lang="scss" scoped>

</style>