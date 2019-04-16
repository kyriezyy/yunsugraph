<template>
  <div class="graph graph-detail" v-loading="loading" @click="showMenuBox = false">
    <div class="category-box">
      <div class="category-item">
        <p class="category-title">节点类型</p>
        <div class="category-content">
          <el-checkbox-group v-model="checkedCate" @change="handleCateChange">
            <el-checkbox label="1" disabled>公司</el-checkbox>
            <el-checkbox label="2">人员</el-checkbox>
            <el-checkbox label="3">产品</el-checkbox>
            <el-checkbox label="4">新闻</el-checkbox>
            <el-checkbox label="5">研报</el-checkbox>
          </el-checkbox-group>
        </div>
      </div>

      <div class="category-item">
        <p class="category-title">节点关系</p>
        <div class="category-content">
          <el-checkbox-group v-model="checkedRelaton" @change="handleCateChange">
            <el-checkbox :label="1">投资</el-checkbox>
            <el-checkbox :label="2">任职</el-checkbox>
            <el-checkbox :label="3">正面新闻</el-checkbox>
            <el-checkbox :label="3">负面新闻</el-checkbox>
            <el-checkbox :label="3">研报</el-checkbox>
            <el-checkbox :label="3">旗下产品</el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
    </div>
    <div class="icon-box">
      <div class="icon-item">
        <div class="icon icon1"></div>
        <div class="icon-name">公司</div>
      </div>
      <div class="icon-item">
        <div class="icon icon2"></div>
        <div class="icon-name">人员</div>
      </div>
      <div class="icon-item">
        <div class="icon icon3"></div>
        <div class="icon-name">新闻</div>
      </div>
      <div class="icon-item">
        <div class="icon icon4"></div>
        <div class="icon-name">理财产品</div>
      </div>
      <div class="icon-item">
        <div class="icon icon5"></div>
        <div class="icon-name">研报</div>
      </div>
    </div>
    <svg class="chart" width="900" height="550">
      <defs>
        <filter x="0" y="0" width="1" height="1" id="solid">
          <feFlood flood-color="yellow"></feFlood>
          <feComposite in="SourceGraphic"></feComposite>
        </filter>
      </defs>
    </svg>
    <tooltip ref="tooltip" :node="activeNode"/>

    <div class="zoom-btns">
      <div class="zoom-btn el-icon-zoom-in" @click="handleZoomIn"></div>
      <div class="zoom-btn el-icon-zoom-out" @click="handleZoomOut"></div>
    </div>

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

let newGraphData = { nodes: kgData.nodes.slice(), links: kgData.links.slice() }
let nodes2 = []
let nodes3 = []
let nodes4 = []
newGraphData.nodes.forEach(item => {
  if (item.id !== '1' && item.id !== '2') {
    nodes2.push(
      Object.assign({}, item, {
        id: item.id + '10'
      })
    )
    nodes3.push(
      Object.assign({}, item, {
        id: item.id + '100'
      })
    )
    nodes4.push(
      Object.assign({}, item, {
        id: item.id + '1000'
      })
    )
  }
})

let links2 = []
let links3 = []
let links4 = []
newGraphData.links.forEach(item => {
  if (item.target !== '2') {
    links2.push(
      Object.assign({}, item, {
        target: item.target + '10'
      })
    )
    links3.push(
      Object.assign({}, item, {
        target: item.target + '100'
      })
    )
    links4.push(
      Object.assign({}, item, {
        target: item.target + '1000'
      })
    )
  }
})
newGraphData.links = newGraphData.links
  .concat(links2)
  .concat(links3)
  .concat(links4)
newGraphData.nodes = newGraphData.nodes
  .concat(nodes2)
  .concat(nodes3)
  .concat(nodes4)

// console.log(newGraphData)
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
      checkedRelaton: [1, 2, 3, 4],
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
      this.$refs.menuBox.style.top = y - 145 + 'px'
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
      const originNodes = newGraphData.nodes
      const originLinks = newGraphData.links
      const nodes = originNodes.filter(item =>
        this.checkedCate.includes(item.nodetype)
      )
      this.d3Graph.addNodes(nodes, originLinks)
    },
    handleZoomIn () {
      this.d3Graph.zoomIn()
    },
    handleZoomOut () {
      this.d3Graph.zoomOut()
    }
  }
}
</script>
<style scoped>
.graph {
  display: flex;
  justify-content: center;
  background: url("../assets/noise.png");
  position: relative;
}
.chart {
  /* border:1px solid red; */
  /* background: #f0f0f0; */
  height: 550px;
  width: 900px;
}
.category-box {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 999;
}
.menu-box {
  border: 1px solid #023d6f;
  position: absolute;
  margin-left: 20px;
  margin-top: -20px;
  background: #fff;
  z-index: 999;
  padding: 4px 0;
}
.btn-item {
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  font-size: 12px;
}
.btn-item:before {
  content: "•";
  color: #a0a0a0;
  margin-right: 5px;
}
.zoom-btns {
  position: absolute;
  right: 30px;
  bottom: 30px;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
}
.zoom-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #a0a0a0;
  width: 40px;
  height: 40px;
  cursor: pointer;
}

.icon-box {
  padding-top: 60px;
}
.icon-item {
  height: 40px;
  display: flex;
  align-items: center;
}
.icon {
  height: 30px;
  width: 30px;
  flex-shrink: 0;
  border-radius: 30px;
  margin-right: 10px;
}
.icon-name {
  font-size: 13px;
  color: #888;
}
.icon1 {
  background: #6f3e02 url("/static/gongsi.png") no-repeat center center / 20px
    20px;
}
.icon2 {
  background: #375a07 url("/static/faren.png") no-repeat center center / 20px
    20px;
}
.icon3 {
  background: #3e075a url("/static/news_icon.png") no-repeat center center /
    20px 20px;
}
.icon4 {
  background: #075a56 url("/static/licai.png") no-repeat center center / 20px
    20px;
}
.icon5 {
  background: #5a0748 url("/static/yanbao.png") no-repeat center center / 20px
    20px;
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
