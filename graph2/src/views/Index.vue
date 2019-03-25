<template>
  <div class="container">
    <div class="search-box">
      <div class="search">
        <div class="search-input">
          <input type="text" placeholder="请输入关键词" v-if="!isGraph">
          <template v-else>
            <input type="text" placeholder="路径起点">
            <span class="splide-line">---</span>
            <input type="text" placeholder="路径终点">
          </template>
        </div>
        <div class="search-btn" @click="handleSearch">搜索</div>
      </div>
      <div class="search-checkbox">
        <input id="checkbox" type="checkbox" v-model="isGraph">
        <label for="checkbox" class="label-text">关系图谱</label>
      </div>
    </div>
    <div class="character-box">
      <div class="character">
        知识图谱优点知识图谱优点知识图谱优点知识图谱优点
        知识图谱优点知识图谱优点知识图谱优点知识图谱优点知识图谱优点知识图谱优点知识图谱优点
      </div>
      <div class="character">
        知识图谱优点知识图谱优点知识图谱优点知识图谱优点
        知识图谱优点知识图谱优点知识图谱优点知识图谱优点知识图谱优点知识图谱优点知识图谱优点
      </div>
      <div class="character">
        知识图谱优点知识图谱优点知识图谱优点知识图谱优点
        知识图谱优点知识图谱优点知识图谱优点知识图谱优点知识图谱优点知识图谱优点知识图谱优点
      </div>
      <div class="character">
        知识图谱优点知识图谱优点知识图谱优点知识图谱优点
        知识图谱优点知识图谱优点知识图谱优点知识图谱优点知识图谱优点知识图谱优点知识图谱优点
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'index',
  data () {
    return {
      isGraph: false
    }
  },
  methods: {
    handleSearch () {
      console.log(this.isGraph)
      this.$router.push('/list')
    }
  }
}
</script>
<style scoped>
.container {
  padding-top: 100px;
}
.search-box {
  width: 600px;
  margin: 0 auto;
}
.search {
  display: flex;
}
.search-input {
  flex-grow: 2;
  display: flex;
  border: 1px solid #e0e0e0;
  align-items: center;
}
.splide-line {
  margin: 0 10px;
  white-space: nowrap
}

.search-input input {
  width: 100%;
  height: 40px;
  font-size: 18px;
  padding-left: 15px;
  border: none;
}
.search-input input:focus,
.search-input input:active {
  /* border:none; */
  outline: none;
}
.search-btn {
  background: #023d6f;
  width: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  color: #fff;
  font-size: 18px;
  margin-left: 10px;
}
.label-text {
  font-size: 14px;
  color: #023d6f;
}
.search-checkbox {
  display: flex;
  align-items: center;
  padding-top: 5px;
  padding-left: 5px;
}
.search-checkbox input {
  border-color: #023d6f;
  margin-right: 3px;
}
.character-box{
  display: flex;
  justify-content: space-around;
  width: 840px;
  margin: 0 auto;
  margin-top: 100px;
  font-size: 17px;
}
.character{
  width: 180px;
  border:1px solid #e0e0e0;
  border-radius: 5px;
  padding: 15px 10px;
}
</style>
