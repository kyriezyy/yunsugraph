<template>
  <div class="container" v-loading="loading">
    <header-search/>
    <div class="main" v-if="!loading">
       <div class="category-box">
      <div class="category-item">
        <p class="category-title">节点类型</p>
        <div class="category-content">
          <el-checkbox-group v-model="checkedCate" @change="handleCateChange">
            <el-checkbox label="1" disabled>公司</el-checkbox>
            <el-checkbox label="2">人员</el-checkbox>
            <el-checkbox label="3">产品</el-checkbox>
            <el-checkbox label="4">新闻</el-checkbox>
            <!-- <el-checkbox label="5">研报</el-checkbox> -->
          </el-checkbox-group>
        </div>
      </div>

      <div class="category-item">
        <p class="category-title">节点关系</p>
        <div class="category-content">
          <el-checkbox-group v-model="checkedRelaton" @change="handleCateChange">
            <el-checkbox :label="1">董事</el-checkbox>
            <el-checkbox :label="2">参股</el-checkbox>
            <el-checkbox :label="3">董事长</el-checkbox>
            <!-- <el-checkbox :label="3">负面新闻</el-checkbox> -->
            <!-- <el-checkbox :label="3">研报</el-checkbox> -->
            <!-- <el-checkbox :label="3">旗下产品</el-checkbox> -->
          </el-checkbox-group>
        </div>
      </div>
    </div>
      <!-- <div class="result-box">
        <div
          class="result-item"
          v-for="(item,index) in graphRelation"
          @click="selectItem(index)"
          :class="{active:index===activeIndex}"
          :key="index"
        >· 平安银行 —[{{item.links.length}}]— 上海钜派</div>
      </div> -->
      <div class="graph-box" >
        <svg class="chart" width="900" height="600">
          <defs>
    <filter x="0" y="0" width="1" height="1" id="solid">
      <feFlood flood-color="yellow"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
        </svg>
         <tooltip ref="tooltip" :node="activeNode" />
      </div>
    </div>
  </div>
</template>
<script>
import D3Graph from '../D3Graph2'
import relationData from '../jsons/kg_relation_data.json'
import HeaderSearch from '../components/HeaderSearch'
import tooltip from '../components/tooltip'

export default {
  name: 'relation',
  components: {
    HeaderSearch,
    tooltip
  },
  data () {
    return {
      d3Graph: null,
      graphRelation: relationData.data,
      activeLine: null,
      activeIndex: 0,
      activeData: 0,
      timer: null,
      loading: true,
      activeNode: null,
      checkedCate: ['1', '2', '3', '4', '5'],
      checkedRelaton: [1, 2, 3, 4]
    }
  },
  mounted () {
    setTimeout(() => {
      this.loading = false
    }, 1000)
    setTimeout(() => {
      this.d3Graph = new D3Graph('.chart')
      this.d3Graph.onClickLink = this.hanldeClickLine
      this.d3Graph.onClickNode = this.handleClickNode
      this.render()
    }, 1500)
  },
  methods: {
    handleClose () {
    },
    handleCateChange () {},
    render () {
      let graph = relationData.data[this.activeIndex]
      this.d3Graph.addNodes(graph.nodes, graph.links)
      // this.activeData = graph
    },
    selectItem (index) {
      this.activeIndex = index
      this.render()
    },
    handleClickNode (node) {
      this.activeNode = node
      this.$refs.tooltip.showBox()
    },
    hanldeClickLine (d) {
      // this.activeLine = d.raw
      // clearTimeout(this.timer)
      // this.timer = setTimeout(() => {
      //   this.activeLine = null
      // }, 2000)
    }
  }
}
</script>

<style scoped>
.container{
   height:100%;
}
.main {
  height: calc(100% - 60px);
  position: relative;
  display: flex;
}

.result-box {
  border-right: 1px solid #023d6f;
  width: 300px;
  padding: 20px 15px;
  flex-shrink: 0;
}
.graph-box {
  flex-grow: 2;
  display: flex;
  justify-content: center;
}
.chart {
  width: 100%;
  height: 100%;
}

.result-item {
  border-bottom: 1px solid #e0e0e0;
  height: 30px;
  align-items: center;
  display: flex;
  padding-left: 5px;
  font-size: 12px;
}
.result-item.active {
  color: #023d6f;
}
.category-box {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 999;
  border:1px solid #023d6f;
  width: 100px;
}
.category-title{
  background: #023d6f;
  height: 30px;
  display: flex;
  align-items: center;
  color:#fff;
  padding-left: 10px;
  font-size: 14px;
}

.category-content{
  padding: 10px;
}
</style>
<style>
.el-checkbox{
  margin-right: 5px;
  margin-bottom: 10px;
  display: block;
}
</style>
