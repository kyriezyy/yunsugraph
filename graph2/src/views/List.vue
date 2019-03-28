<template>
  <div class="container">
    <div class="search-box">
      <div class="logo-text">CloudTree赟数</div>
      <div class="search">
        <div class="search-input">
          <input type="text" placeholder="请输入关键词" v-if="!isGraph">
          <template v-else>
            <input type="text" placeholder="路径起点">
            <span class="splide-line">---</span>
            <input type="text" placeholder="路径终点">
          </template>
        </div>
        <div class="search-btn search-icon" @click="handleSearch"></div>
      </div>

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
    <div class="main">
      <AllResult :list="showList" />
      <!-- <div class="result-box">
        <div v-if="activeIndex">
          <result-item v-for="item in showList" :key="item.title" :item="item"/>
        </div>
        <all-list :list="showList" v-else/>
      </div>
      <div class="slide-box">
        sss
      </div> -->
    </div>
  </div>
</template>
<script>
// import listData from '../jsons/chemical_list.json'
import listData from '../jsons/list_data.json'
import ResultItem from '../components/ResultItem'
import AllList from '../components/AllList'
import AllResult from './list/AllResult'

export default {
  name: 'list',
  components: {
    ResultItem,
    AllList,
    AllResult
  },
  data () {
    return {
      isGraph: false,
      list: [],
      activeIndex: 0
    }
  },
  computed: {
    showList () {
      if (this.activeIndex) {
        let filterType
        switch (this.activeIndex) {
          case 1:
            filterType = 'chemical'
            break
          case 4:
            filterType = 'news'
            break
          case 2:
            filterType = 'paper'
            break
          case 3:
            filterType = 'patent'
            break
          default:
            filterType = ''
        }

        return listData.data.filter(item => item.type === filterType)
      } else {
        return listData.data
      }
    }
  },
  methods: {
    handleSearch () {
      if (this.isGraph) {
        this.$router.push('/relation')
      }
    },
    switchIndex (index) {
      this.activeIndex = index
    }
  }
}
</script>
<style scoped>
.container {
  height: calc(100% - 60px);
}
.search-box {
  padding: 10px 20px 10px 30px;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 99;
}
.search {
  border: 1px solid #e0e0e0;
  display: flex;
  border-radius: 50px;
  overflow: hidden;
}
.search-input {
  width: 400px;
  display: flex;

  align-items: center;
  border-radius: 5px;
  overflow: hidden;
}
.splide-line {
  margin: 0 10px;
  white-space: nowrap;
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
  width: 50px;
  height: 30px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 16px;
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
.main{
  height: 100%;
  overflow: auto;
}

.filter-box {
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 40px;
  box-shadow: 0 3px 3px 3px #eee;
}
.filter-item {
  margin-right: 30px;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 10px;
}
.filter-item.active {
  color: #023d6f;
  border-bottom: 2px solid #023d6f;
}
.logo-text {
  color: rgb(0, 34, 97);
  font-size: 18px;
  font-weight: bold;
  margin-right: 10px;
}

</style>
