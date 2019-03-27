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
    <div class="filter-box">
      <div class="filter-item" :class="{active:activeIndex==0}" @click="switchIndex(0)">全部</div>
      <div class="filter-item" :class="{active:activeIndex==1}" @click="switchIndex(1)">化学品</div>
      <div class="filter-item" :class="{active:activeIndex==2}" @click="switchIndex(2)">文献</div>
      <div class="filter-item" :class="{active:activeIndex==4}" @click="switchIndex(4)">新闻</div>
      <div class="filter-item" :class="{active:activeIndex==3}" @click="switchIndex(3)">专利</div>

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
      list: listData.maindata,
      activeIndex: 0
    }
  },
  methods: {
    handleSearch () {

    },
    switchIndex (index) {
      this.activeIndex = index
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
  padding-bottom: 50px;
}
.filter-box{
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 40px;
  box-shadow: 0 3px 3px 3px #eee;

}
.filter-item{
  margin-right:  30px;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 10px;
}
.filter-item.active{
  color:#023d6f;
  border-bottom: 2px solid #023d6f
}
</style>
