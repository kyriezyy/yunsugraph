<template>
  <div class="container" v-loading="loading">
    <header-search />
    <div class="filter-box">
      <!-- <div class="filter-item" :class="{active:activeIndex==0}" @click="switchIndex(0)">全部</div> -->
      <div class="filter-item" :class="{active:activeIndex==1}" @click="switchIndex(1)">化学品</div>
      <div class="filter-item" :class="{active:activeIndex==2}" @click="switchIndex(2)">文献</div>
      <div class="filter-item" :class="{active:activeIndex==4}" @click="switchIndex(4)">新闻</div>
      <div class="filter-item" :class="{active:activeIndex==3}" @click="switchIndex(3)">专利</div>
      <div class="filter-item" :class="{active:activeIndex==5}" @click="switchIndex(5)">问答</div>
    </div>
    <div class="main" v-if="!loading">
      <div class="sigle-result-box">
          <result-item v-for="item in showList" :key="item.title" :item="item"/>
      </div>
         <!--
      <AllResult :list="showList" v-else /> -->
      <!-- <div class="result-box">

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
      activeIndex: 1,
      loading: true
    }
  },
  computed: {
    showList () {
      if (this.activeIndex === 5) {
        return [{type: 'answer', title: '问答'}]
      }
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
  mounted () {
    setTimeout(() => {
      this.loading = false
    }, 1000)
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
  height: calc(100% - 80px);
  overflow: auto;
  /* display: flex; */
}

.filter-box {
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 40px;
  box-shadow: 0 3px 3px 3px #eee;
  justify-content: center
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
.sigle-result-box{
  padding: 15px 25px;
  width: calc(100% - 300px);
}

</style>
