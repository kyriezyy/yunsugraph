<template>
  <div class="graph graph-detail" v-loading="loading">
    <div class="category-box">
      <el-checkbox-group v-model="checkedCate" @change="handleCateChange">
        <el-checkbox label="1" disabled >公司</el-checkbox>
        <el-checkbox label="2">法人</el-checkbox>
        <el-checkbox label="3">产品</el-checkbox>
        <el-checkbox label="4">新闻</el-checkbox>
        <el-checkbox label="5">研报</el-checkbox>
      </el-checkbox-group>
    </div>
     <svg class="chart" width="900" height="600"></svg>
      <tooltip :node="activeNode" />
  </div>
</template>
<script>
import D3Graph from '../D3Graph'
import kgData from '../jsons/kg_data.json'
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
      activeNode: null
    }
  },
  mounted () {
    this.d3Graph = new D3Graph('.chart')
    this.d3Graph.onClickNode = this.getNodeDetail
    this.renderGraph()
  },
  methods: {
    async getNodeDetail (node) {
      console.log(node)
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
  margin-top: -20px;
  position: relative;
  padding: 30px 20px;
}
.chart{
  /* border:1px solid red; */
   /* background: #f0f0f0; */
   height: 600px;
   width: 900px;
}
.category-box{
  position: absolute;
  top:20px;
  left:20px;
  z-index: 999;
}
</style>
