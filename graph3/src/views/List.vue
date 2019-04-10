<template>
  <div class="container" v-loading="loading">
    <header-search/>
    <div class="filter-box">
      <!-- <div class="filter-item" :class="{active:activeIndex==0}" @click="switchIndex(0)">全部</div> -->
      <div class="filter-item" :class="{active:activeIndex==6}" @click="switchIndex(6)">图谱</div>
      <div class="filter-item" :class="{active:activeIndex==1}" @click="switchIndex(1)">产品</div>
      <div class="filter-item" :class="{active:activeIndex==2}" @click="switchIndex(2)">企业</div>
      <!-- <div class="filter-item" :class="{active:activeIndex==3}" @click="switchIndex(3)">股票</div> -->
      <div class="filter-item" :class="{active:activeIndex==4}" @click="switchIndex(4)">新闻</div>
      <div class="filter-item" :class="{active:activeIndex==5}" @click="switchIndex(5)">研报</div>
    </div>
    <div class="main" v-if="!loading">
      <news-list-header v-if="activeIndex==4"/>
      <yanbao-list-header v-if="activeIndex==5"/>
      <product-list-header @switchType="handleSwitchType" v-if="activeIndex==1 && productType!=='3'"/>

      <div v-if="activeIndex === 6 ">
        <graph/>
      </div>
      <div v-else-if="activeIndex === 1 && productType==='1'">
        <product-list :list="showList" @switchType="handleSwitchType" />
      </div>
      <div v-else-if="activeIndex === 1 && productType==='3'">
        <product-detail />
      </div>
      <div class="stock-box" v-else-if="activeIndex === 1 && productType==='2'">
        <iframe
          class="stock-iframe"
          src="http://www.tigerobo.com/search/?query=%E5%B9%B3%E5%AE%89"
          frameborder="0"
        ></iframe>
      </div>
      <div v-else-if="activeIndex === 2">
        <company-detail/>
      </div>
      <div
        v-else
        class="sigle-result-box"
        :style="{height:(activeIndex==4 || activeIndex==5)?'calc(100% - 50px)':'100%'}"
      >
        <result-item
          v-for="item in showList"
          :key="item.title"
          :activeIndex="activeIndex"
          :item="item"
          size="large"
        />
        <el-pagination class="pagination" background layout="prev, pager, next" :total="1000"></el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import yanbaoList from '../jsons/yanbao_list.json'
import newsList from '../jsons/news_list.json'
import productList from '../jsons/product_list.json'
import ResultItem from './list/ResultItem'
import NewsListHeader from './list/NewsListHeader'
import YanbaoListHeader from './list/YanbaoListHeader'
import ProductListHeader from './list/ProductListHeader'
import ProductList from './list/ProductList'
import HeaderSearch from '../components/HeaderSearch'
import ProductDetail from './detail/ProductDetail'
import CompanyDetail from './detail/companyDetail'
import Graph from './Graph'

export default {
  name: 'list',
  components: {
    ResultItem,
    HeaderSearch,
    NewsListHeader,
    YanbaoListHeader,
    CompanyDetail,
    ProductDetail,
    ProductListHeader,
    Graph,
    ProductList
  },
  data () {
    return {
      isGraph: false,
      list: [],
      activeIndex: 6,
      loading: true,
      productType: '1'
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
      this.productType = '1'
    },
    handleSwitchType (type) {
      this.productType = type
    }
  }
}
</script>
<style scoped>
.container {
  height: calc(100% - 60px);
}

.main {
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
  justify-content: center;
  position: relative;
  z-index: 9999;
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
.sigle-result-box {
  padding: 15px 25px;
  width: calc(100% - 100px);
  height: calc(100% - 50px);
  overflow: auto;
}
.stock-box {
  height: 100%;
}
.stock-iframe {
  height: calc(100% + 110px);
  width: 100%;
  position: static;
  z-index: -1;
  margin-top: -115px;
}
</style>
