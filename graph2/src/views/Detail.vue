<template>
  <div class="detail">
    <header-search/>
    <div class="container">
      <div class="main">
        <div class="box-content">
          <graph v-if="current===0"/>
          <basic-info v-if="current===1"/>
          <baidu-zhishu v-if="current===2"/>
          <shichang-data v-if="current===3"/>
          <xiangsi-huahewu v-if="current===4"/>
          <analysis v-if="current===5" />
        </div>
        <div class="nav-box">
          <div class="nav-item" :class="{active:current===0}" @click="current=0">图谱</div>
          <div class="nav-item" :class="{active:current===1}" @click="current=1">基本信息</div>
          <div class="nav-item" :class="{active:current===2}" @click="current=2">搜索指数</div>
          <div class="nav-item" :class="{active:current===3}" @click="current=3">市场数据</div>
          <div class="nav-item" :class="{active:current===4}" @click="current=4">相似化学品</div>
          <div class="nav-item" :class="{active:current===5}" @click="current=5">方案分析</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Graph from './Graph'
import HeaderSearch from '../components/HeaderSearch'
import BasicInfo from './detail/BasicInfo'
import BaiduZhishu from './detail/BaiduZhishu'
import ShichangData from './detail/ShichangData'
import XiangsiHuahewu from './detail/XiangsiHuahewu'
import Analysis from './Analysis'

export default {
  name: 'detail',
  components: {
    Graph,
    HeaderSearch,
    BasicInfo,
    BaiduZhishu,
    ShichangData,
    XiangsiHuahewu,
    Analysis
  },
  data () {
    return {
      current: 0
    }
  },
  methods: {
    navTo (anchor, index) {
      document.querySelector('#' + anchor).scrollIntoView()
      let items = document.getElementsByClassName('nav-item')
      items[this.current].classList.remove('add-color')
      items[index].classList.add('add-color')
      this.current = index
    }
  }
}
</script>
<style scoped>
.detail {
  height: calc(100% - 1px);
}

.container {
  height: calc(100% - 52px);
  display: flex;
  width: 100%;
}

.main {
  padding: 0 20px;
  overflow: auto;
  display: flex;
  justify-content: center;
  width: 100%;
}

.box-content {
  padding-top: 20px;
  height: 100%;
  overflow: auto;
  padding-bottom: 50px;
}

.nav-box {
  padding-top: 20px;
  width: 200px;
  display: flex;
  flex-direction: column;
  border-left: #dddddd 5px solid;
  color: #9b9b9b;
  flex-shrink: 0;
}

.nav-item {
  line-height: 40px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  padding-left: 20px;
}
.nav-item.active {
  color: #023d6f;
  border-left: 5px solid #023d6f;
  margin-left: -5px;
}
.nav-item:hover {
  cursor: pointer;
  color: #023d6f;
}
</style>
