<template>
  <div class="item" @click="handleClick">
      <div class="img" :style="{background:`url(${item.img}) no-repeat center center /contain`}"></div>
      <div class="info">
        <div class="title">{{item.title}} </div>
        <div class="params" >
            <span class="param">CAS号：{{item.CAS}} </span>
            <span class="param">分子式：{{item['分子式']}}</span>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  name: 'result',
  props: ['item'],
  data () {
    return {
    }
  },
  methods: {
    handleClick () {
      this.$router.push('/detail')
    }
  }
}
</script>
<style scoped>
.item{
  display: flex;
  border-bottom:  1px solid #e0e0e0;
  align-items: center;
  cursor: pointer;
  padding: 10px 0;
}
.img{
  height: 100px;
  width: 100px;
  flex-shrink: 0
}
.title{
  font-size: 18px;
  margin-bottom: 15px;
}
.params{
  font-size: 13px;
}
.param{
  margin-right: 40px;
}
</style>
