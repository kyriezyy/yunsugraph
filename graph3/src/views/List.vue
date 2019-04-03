<template>
  <div class="container" v-loading="loading">
    <header-search />
    <div class="filter-box">
      <!-- <div class="filter-item" :class="{active:activeIndex==0}" @click="switchIndex(0)">全部</div> -->
      <div class="filter-item" :class="{active:activeIndex==1}" @click="switchIndex(1)">产品</div>
      <div class="filter-item" :class="{active:activeIndex==2}" @click="switchIndex(2)">企业</div>
      <div class="filter-item" :class="{active:activeIndex==3}" @click="switchIndex(3)">股票</div>
      <div class="filter-item" :class="{active:activeIndex==4}" @click="switchIndex(4)">新闻</div>
      <div class="filter-item" :class="{active:activeIndex==5}" @click="switchIndex(5)">研报</div>
    </div>
    <div class="main" v-if="!loading">
      <div class="sigle-result-box">
        <result-item v-for="item in showList" :key="item.title" :activeIndex="activeIndex" :item="item"/>
      </div>

    </div>
  </div>
</template>
<script>
import yanbaoList from '../jsons/yanbao_list.json'
import newsList from '../jsons/news_list.json'
import productList from '../jsons/product_list.json'
import ResultItem from './list/ResultItem'
import HeaderSearch from '../components/HeaderSearch'

export default {
  name: 'list',
  components: {
    ResultItem,
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
      let list = []
      switch (this.activeIndex) {
        case 1:
          list = productList.data
          break
        case 2:
          list = []
          break
        case 3:
          list = []
          break
        case 4:
          list = newsList.data
          break
        case 5:
          list = yanbaoList.data
          break
        default:
          list = []
      }
      return list
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
  width: calc(100% - 100px);
}

</style>
