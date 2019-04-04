<template>
  <div class="list-header">
    <div>
      <span class="s-item">约3篇新闻</span>
      <span class="s-item">
        相关性
        <i class="el-icon-sort"></i>
      </span>
      <span class="s-item">
        发布时间
        <i class="el-icon-sort-down"></i>
      </span>
      <el-select v-model="ffff" placeholder="检索标题和内容" size="mini">
        <el-option label="内容1" value="1"/>
        <el-option label="内容2" value="3"/>
        <el-option label="内容3" value="2"/>
      </el-select>
    </div>

    <div>
      <el-radio-group v-model="radio2">
        <el-radio :label="3">今天</el-radio>
        <el-radio :label="6">近一周</el-radio>
        <el-radio :label="9">近10年</el-radio>
      </el-radio-group>
      <el-date-picker
        size="mini"
        v-model="daterange"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      ></el-date-picker>
    </div>
  </div>
</template>

<script>
export default {
  name: 'news-list-header',
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
  margin-right: 15px;
}
.el-icon-sort-down{
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
.el-radio__input.is-checked .el-radio__inner{
border-color:#023d6f;
background:#023d6f;
}
.el-radio__input.is-checked+.el-radio__label{
  color:#023d6f;
}
</style>
