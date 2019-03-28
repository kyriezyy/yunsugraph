<template>
  <div class="container">
    <h3>热门事件</h3>
    <ul class="list">
      <li class="item">
        华为折叠屏5G手机发布
      </li>
      <li class="item">
        华为折叠屏5G手机发布
      </li>

      <li class="item">
        华为折叠屏5G手机发布
      </li>
      <li class="item">
        华为折叠屏5G手机发布
      </li><li class="item">
        华为折叠屏5G手机发布
      </li>
      <li class="item">
        华为折叠屏5G手机发布
      </li>
      <li class="item">
        华为折叠屏5G手机发布
      </li>
      <li class="item">
        华为折叠屏5G手机发布
      </li>
      <li class="item">
        华为折叠屏5G手机发布
      </li>
      <li class="item">
        华为折叠屏5G手机发布
      </li>
      <li class="item">
        华为折叠屏5G手机发布
      </li>
       <li class="item">
        华为折叠屏5G手机发布
      </li>
      <li class="item">
        华为折叠屏5G手机发布
      </li>
      <li class="item">
        华为折叠屏5G手机发布
      </li>
      <li class="item">
        华为折叠屏5G手机发布
      </li>
       <li class="item">
        华为折叠屏5G手机发布
      </li>
      <li class="item">
        华为折叠屏5G手机发布
      </li>
      <li class="item">
        华为折叠屏5G手机发布
      </li>
      <li class="item">
        华为折叠屏5G手机发布
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'remenshijian'
}
</script>

<style scoped>
.container {
  width: 240px;
  flex-shrink: 0;
  box-shadow: 0px 4px 8px 0px #f7f8fa;
  border-radius: 8px;
  border: 1px solid #f5f7f9;
  padding: 16px 20px;
  overflow: auto;
  height: 420px;
}
h3 {
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  color: #333333;
}
.list{
  height: calc(100% - 50px);
  overflow: auto;
}
.item {
  font-size: 14px;
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
</style>
