<template>
  <div class="aside-container">
    <div class="aside-header">
      <div class="tab-item active">搜索</div>
      <div class="tab-item">关系</div>
      <div class="tab-item">其他</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'home-aside',
};
</script>
<style scoped>
    .aside-header{
      background: #f0f0f0;
      display: flex;
      height: 40px;
      padding: 0 15px;
    }
    .tab-item{
      height: 100%;
      display: flex;
       align-items: center;
       margin: 0 5px;
    }
    .tab-item.active{
      border-bottom:  1px solid #a0a0a0;
    }
</style>

