<template>
  <div class="seatch-result">
    <div class="result-header">
      <p class="total-str">共350条结果，当前展示1-20</p>
      <el-select v-model="pageSize" size='mini' class="page-select">
        <el-option v-for="item in pageSizeArr" :key="item" :label="item" :value="item"></el-option>
      </el-select>
    </div>
    <div class="result-body">
      <ul>
        <li class="result-item">
          <div>
            <p class="title">腾讯</p>
            <p class="result-str">name:腾讯</p>
          </div>
          <div class="result-tag">化学品</div>
        </li>
         <li class="result-item">
          <div>
            <p class="title">腾讯</p>
            <p class="result-str">name:腾讯</p>
          </div>
          <div class="result-tag">化学品</div>
        </li>
         <li class="result-item">
          <div>
            <p class="title">腾讯</p>
            <p class="result-str">name:腾讯</p>
          </div>
          <div class="result-tag">化学品</div>
        </li>
         <li class="result-item">
          <div>
            <p class="title">腾讯</p>
            <p class="result-str">name:腾讯</p>
          </div>
          <div class="result-tag">化学品</div>
        </li>
      </ul>
    </div>
    <div class="result-footer">
      <div class="page-box">
        <div class="page-pre"> < </div>
        <div>页面 7/8</div>
        <div class="page-next"> > </div>
      </div>
      <div class="add-all">添加全部</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'search-result',
  data() {
    return {
      pageSizeArr: [10, 20, 50],
      pageSize: 10,
    };
  },
};
</script>
<style scoped>
.seatch-result{
  flex-grow: 2;
  display: flex;
  flex-direction: column;
}
.result-header {
  margin: 10px 0;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center
}
.page-select{
  width: 65px;
}
.result-item{
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
}
.result-item:hover{
  background: #f0f0f0;
  border-left: 2px solid #e0e0e0;
}
.result-str{
  font-size: 12px;
  color: #999
}
.result-tag{
  display: inline-block;
  background: red;
  align-self: flex-start;
  padding: 2px 4px;
  border-radius: 4px
}
.page-box{
  display: flex;
}
.result-body{
  flex-grow: 2;
  overflow: auto;
}
.result-footer{
  display: flex;
  justify-content: space-between;
  align-items: center
}
.page-pre,.page-next{
  padding: 0 3px;
  cursor: pointer;
}
</style>
