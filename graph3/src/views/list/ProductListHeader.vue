<template>
  <div class="list-header">
    <div>
      <span class="s-item  s-item1" :class="{active:type==='1'}" @click="switchType('1')">一级市场</span>
      <span class="s-item" :class="{active:type==='2'}" @click="switchType('2')">二级市场</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'yanbao-list-header',
  data () {
    return {
      type: '1'
    }
  },
  methods: {
    switchType (index) {
      this.type = index
      this.$emit('switchType', index)
    }
  }
}
</script>

<style scoped>
.list-header {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;
  font-size: 13px;
  border-bottom: 1px solid #e0e0e0;
      z-index: 999;
    position: relative;
    background: #fff;
}
.s-item{
  padding-right: 8px;
  margin-right: 6px;
}
.s-item1{
  border-right: 1px solid #a0a0a0;

}
.s-item.active{
  color:#023d6f;
}
</style>
<style>
.list-header .el-radio__label{
   font-size: 13px;
}
.list-header  .el-radio{
 margin-right:15px
}
</style>
