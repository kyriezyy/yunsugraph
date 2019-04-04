<template>
  <div class="list-header">
    <div>
      <span class="s-item active">按相关性</span>
      <span class="s-item">按时间</span>

    </div>

    <div>
     隐藏摘要  &nbsp; <el-checkbox v-model="checked"></el-checkbox>
    </div>
  </div>
</template>

<script>
export default {
  name: 'yanbao-list-header',
  data () {
    return {
      ffff: '',
      radio2: 3,
      daterange: ''
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
}
.s-item{
  padding-right: 8px;
  margin-right: 6px;
}
.s-item.active{
  color:#023d6f;
  border-right: 1px solid #a0a0a0;
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
