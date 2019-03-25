<template>
  <div class="container">
     <div class="search-box">
        <div class="search-input">
          <input type="text" placeholder="请输入关键词" v-if="!isGraph">
          <template v-else>
            <input type="text" placeholder="路径起点">
            <span class="splide-line">---</span>
            <input type="text" placeholder="路径终点">
          </template>
        </div>
        <div class="search-btn" @click="handleSearch">搜索</div>
      <div class="search-checkbox">
        <input id="checkbox" type="checkbox" v-model="isGraph">
        <label for="checkbox" class="label-text">关系图谱</label>
      </div>
    </div>
    <div class="result-box">
      <result-item v-for="item in list" :key="item.title" :item="item" />
    </div>
  </div>
</template>
<script>
import listData from '../jsons/chemical_list.json'
import ResultItem from '../components/ResultItem'
export default {
  name: 'list',
  components: {
    ResultItem
  },
  data () {
    return {
      isGraph: false,
      list: listData.maindata
    }
  },
  methods: {
    handleSearch () {

    }
  }
}
</script>
<style scoped>
.container{
  height: calc(100% - 60px);
}
.search-box {
  padding: 10px 20px;
  box-shadow: 0 3px 3px 3px #eee;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 99;
}
/* .search {
  display: flex;
} */
.search-input {
  width: 400px;
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
  height: 30px;
  font-size: 16px;
  padding-left: 25px;
  border: none;
}
.search-input input:focus,
.search-input input:active {
  /* border:none; */
  outline: none;
}
.search-btn {
  background: #023d6f;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  color: #fff;
  font-size: 16px;
  margin-left: 10px;
}
.label-text {
  font-size: 14px;
  color: #023d6f;
}
.search-checkbox {
  display: flex;
  align-items: center;
  padding-left: 15px;
}
.search-checkbox input {
  border-color: #023d6f;
  margin-right: 5px;
}
.result-box{
  height: calc(100% - 60px);
  overflow: auto;
  padding: 15px 25px;
}
</style>
