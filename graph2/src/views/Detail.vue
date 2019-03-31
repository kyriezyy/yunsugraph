<template>
  <div class="detail">

    <header-search/>
    <div class="container">
      <div class="main">
        <!-- <div class="graph-box" id="graph">
          <graph/>
          </div> -->
        <div class="box-content">
          <!-- <basic-info /> -->
          <!-- <baidu-zhishu /> -->
          <shichang-data />
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

export default {
  name: 'detail',
  components: {
    Graph,
    HeaderSearch,
    BasicInfo,
    BaiduZhishu,
    ShichangData
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

  .detail{
    height: calc(100% - 1px);
  }

  .container {
    height: calc(100% - 52px);
    display: flex;
    width: 100%;
  }

  .main {
    width: 80%;
    padding: 20px;
    overflow: auto;
    margin-right: 5%;
  }

  .graph-box {
    height: 540px;
    overflow: hidden;
  }

  .nav-box {
    width: 20%;
    display: flex;
    flex-direction: column;
    border-left: #dddddd 5px solid;
    color: #9b9b9b;
  }

  .nav-box a {

  }

  .nav-item {
    line-height: 40px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    padding-left: 20px;
  }

  .nav-item:hover {
    cursor: pointer;
    color: #023d6f;
  }

</style>
