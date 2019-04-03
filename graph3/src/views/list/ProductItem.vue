<template>
  <div>
    <p class="title" v-html="item.title"></p>
    <p class="desc2" v-html="item.desc"></p>
    <p class="bottom">
      <span class="time">{{item.time}} </span>
      <span class="company">{{item.source}} </span>
    </p>
  </div>
</template>
<script>
export default {
  name: 'product',
  props: ['item']
}
</script>

<style scoped>
.title{
  margin-bottom: 10px;
}
.desc1{
  font-size: 14px;
  background: #ecf2f9;
  padding: 8px 10px;
}

.desc2{
  font-size: 14px;
  padding: 8px 0;
}

.bottom{
  font-size: 13px;
}
.time{
  color: #888;
}
.company{
  margin: 0 15px;
}

</style>
