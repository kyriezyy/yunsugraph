<template>
  <div class="graph graph-detail" v-loading="loading" @click="showMenuBox = false">
    <div class="category-box">
      <el-checkbox-group v-model="checkedCate" @change="handleCateChange">
        <el-checkbox label="1" disabled >公司</el-checkbox>
        <el-checkbox label="2">法人</el-checkbox>
        <el-checkbox label="3">产品</el-checkbox>
        <el-checkbox label="4">新闻</el-checkbox>
        <el-checkbox label="5">研报</el-checkbox>
      </el-checkbox-group>
    </div>
    <svg class="chart" width="900" height="550"></svg>
    <tooltip ref="tooltip" :node="activeNode" />

    <div class="menu-box" ref="menuBox" v-show="showMenuBox">
      <div class="btn-item" @click="addOthers">相关企业</div>
      <div class="btn-item">相关新闻</div>
      <div class="btn-item">相关产品</div>
      <div class="btn-item">合作伙伴</div>
      <div class="btn-item" @click="removeOthers()">隐藏节点</div>
    </div>
  </div>
</template>
<script>
import D3Graph from '../D3Graph'
import kgData from '../jsons/kg_data.json'
import kgDataSub from '../jsons/kg_data_sup.json'
import tooltip from '../components/tooltip'

export default {
  name: 'graph',
  components: {
    tooltip
  },
  data () {
    return {
      d3Graph: null,
      loading: false,
      checkedCate: ['1', '2', '3', '4', '5'],
      activeNode: null,
      showMenuBox: false
    }
  },
  mounted () {
    this.d3Graph = new D3Graph('.chart')
    this.d3Graph.onClickNode = this.getNodeDetail
    this.d3Graph.onClickMenuBox = this.onClickMenuBox
    this.renderGraph()
  },
  methods: {
    getNodeDetail (node) {
      this.activeNode = node
      this.$refs.tooltip.showBox()
    },
    onClickMenuBox (node, event) {
      let x = event.clientX
      let y = event.clientY

      setTimeout(() => {
        this.showMenuBox = true
      }, 200)

      this.activeNode = node
      this.$refs.menuBox.style.top = (y - 145) + 'px'
      this.$refs.menuBox.style.left = x + 'px'
    },
    removeOthers () {
      let node = this.activeNode
      this.d3Graph.addNodes([node], [])
      this.showMenuBox = false
    },
    addOthers () {
      let nodes = kgDataSub.nodes.slice()
      let links = kgDataSub.links.slice()
      let centerNode = Object.assign({}, this.activeNode)
      delete centerNode.x
      delete centerNode.vx
      delete centerNode.y
      delete centerNode.vy
      delete centerNode.fx
      delete centerNode.fy
      delete centerNode.index
      console.log(centerNode)
      nodes.push(centerNode)
      this.d3Graph.addNodes(nodes, links)
    },
    handleCateChange () {
      this.renderGraph()
    },
    renderGraph () {
      const originNodes = kgData.nodes
      const originLinks = kgData.links
      const nodes = originNodes.filter(item => this.checkedCate.includes(item.nodetype))
      this.d3Graph.addNodes(nodes, originLinks)
    }
  }
}
</script>
<style scoped>
.graph{
  display: flex;
  justify-content: center;
  background: url('../assets/noise.png');
  position: relative;
}
.chart{
  /* border:1px solid red; */
   /* background: #f0f0f0; */
   height: 550px;
   width: 900px;
}
.category-box{
  position: absolute;
  top:20px;
  left:20px;
  z-index: 999;
}
.menu-box{
    border: 1px solid #023d6f;
    position: absolute;
    margin-left: 20px;
    margin-top: -20px;
    background: #fff;
    z-index: 999;
    padding: 4px 0;
}
.btn-item{
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  font-size: 12px;
}
.btn-item:before{
  content: "•";
  color:#a0a0a0;
  margin-right: 5px;
}
</style>
