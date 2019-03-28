<template>
  <div class="container">
    <h3>推荐问题</h3>
    <section>
      <p class="title">股票研究</p>
      <ul class="list">
        <li class="item">平安银行历年收入</li>
        <li class="item">平安银行历年收入</li>
        <li class="item">平安银行历年收入</li>
        <li class="item">平安银行历年收入</li>
        <li class="item">平安银行历年收入</li>
        <li class="item">平安银行历年收入</li>
      </ul>
    </section>
    <section>
      <p class="title">股票研究</p>
      <ul class="list">
        <li class="item">平安银行历年收入</li>
        <li class="item">平安银行历年收入</li>
        <li class="item">平安银行历年收入</li>
        <li class="item">平安银行历年收入</li>
        <li class="item">平安银行历年收入</li>
        <li class="item">平安银行历年收入</li>
      </ul>
    </section>
  </div>
</template>
<script>
export default {
  name: 'tuijianwenti'
}
</script>

<style scoped>
.container {
  flex-grow: 2;
  overflow: auto;
  box-sizing: border-box;
  width: 510px;
  height: 400px;
  padding: 16px 20px 0;
  box-shadow: 0px 4px 8px 0px #eee;
  border-radius: 8px;
   height: 420px;
}
h3 {
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  color: #333333;
}
.list {
  display: flex;
  flex-flow: row wrap;
}
.item {
  font-size: 14px;
  width: 50%;
  height: 36px;
  line-height: 36px;
  padding-left: 10px;
  color: #333333;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
}
.item:before {
  content: "";
  display: block;
  width: 4px;
  height: 4px;
  position: absolute;
  left: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  background-color: #dbdbdb;
  border-radius: 50%;
}
.title {
  font-size: 13px;
  color: #333333;
  position: relative;
  margin: 8px 0;
  padding-left: 10px;
  font-weight: bold;
}
.title::before {
  content: "";
  display: block;
  width: 3px;
  height: 13px;
  background-color: #0066ff;
  position: absolute;
  top: 2px;
  left: 0;
}
</style>
