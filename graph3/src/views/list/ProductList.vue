<template>
  <div class="product-list" @click="$emit('switchType','3')">
     <product-item v-for="item in list" :key="item.name" :item="item" />
  </div>
</template>
<script>
import ProductItem from './ProductItem'

export default {
  name: 'product-list',
  props: ['list'],
  components: {
    ProductItem
  }
}
</script>

<style scoped>
.product-list{
  display: flex;
  flex-flow: row wrap;
  /* justify-content:  space-around; */
}
</style>
