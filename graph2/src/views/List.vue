<template>
  <div class="container">
    <header-search />
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
import HeaderSearch from '../components/HeaderSearch'
import AllResult from './list/AllResult'

export default {
  name: 'list',
  components: {
    ResultItem,
    AllList,
    AllResult,
    HeaderSearch
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

</style>
