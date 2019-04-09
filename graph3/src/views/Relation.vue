<template>
  <div class="container" v-loading="loading">
    <header-search/>
    <div class="main" v-if="!loading">
      <div class="result-box">
        <div
          class="result-item"
          v-for="(item,index) in graphRelation"
          @click="selectItem(index)"
          :class="{active:index===activeIndex}"
          :key="index"
        >· 平安银行 —[{{item.links.length}}]— 上海钜派</div>
      </div>
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
      activeNode: null
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

</style>
