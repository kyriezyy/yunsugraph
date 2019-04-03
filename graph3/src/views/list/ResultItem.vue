<template>
  <div class="item" :class="[item.type+'-item']" >
    <yanbao-item v-if="activeIndex===5" :item="item" />
    <news-item v-if="activeIndex===4" :item="item" />
    <product-item v-if="activeIndex===1" :item="item" />
  </div>
</template>
<script>
import YanbaoItem from './YanbaoItem'
import NewsItem from './NewsItem'
import ProductItem from './ProductItem'

export default {
  name: 'result',
  props: ['item', 'activeIndex'],
  components: {
    YanbaoItem,
    NewsItem,
    ProductItem
  },
  data () {
    return {}
  },
  methods: {
    handleClick () {
      this.$router.push('/detail')
    },
    downLoad (item) {
      location.href = item.filepath
      // window.open(item.filepath)
    }
  }
}
</script>
<style scoped>
.item {
  display: flex;
  border-bottom: 1px solid #e0e0e0;
  align-items: center;
  cursor: pointer;
  padding: 10px 0;
  padding-left: 25px
}

</style>
<style>
.item b{
  color:red;
}
</style>
