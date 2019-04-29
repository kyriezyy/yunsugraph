<template>
  <div class="base-container">
    <slide class="slide"/>
    <div class="right-area">
      <div class="right-header">知识图谱</div>
      <router-view/>
    </div>
  </div>
</template>
<script>
import Slide from "../components/Slide";
export default {
  name: "baseaa",
  components: {
    Slide
  }
};
</script>

<style scoped>
.base-container {
  height: 100%;
  display: flex;
}
.slide {
  width: 200px;
  flex-shrink: 0;
}
.right-area {
  flex-grow: 2;
}
.right-header{
  height: 60px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  border-bottom: 1px solid #e0e0e0;
}
</style>

