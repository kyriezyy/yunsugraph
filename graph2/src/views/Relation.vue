<template>
  <div class="container">
    <header-search/>
    <div class="main">
      <div class="result-box">
        <!-- <div class="search-key-box">
          <div class="search-item">
            <label for>A</label>
            <input type="text" placeholder="请输入一个起点">
          </div>
          <div class="search-item">
            <label for>B</label>
            <input type="text" placeholder="请输入一个终点">
          </div>
        </div> -->
        <div
          class="result-item"
          v-for="(item,index) in graphRelation"
          @click="selectItem(index)"
          :class="{active:index===activeIndex}"
          :key="index"
        >· 二苯基硅二醇 —[{{item.links.length}}]— 氯化二苯基硅烷</div>
      </div>
      <div class="graph-box" >
        <svg class="chart" width="800" height="600"></svg>
      </div>

      <div class="float-box" v-if="activeData">
        <div class="title">相似关系</div>
        <div class="content">
            <p v-for="item in activeData.similar.content" :key="item">· {{item}}</p>
        </div>
        <div class="title" v-if="activeLine">{{activeLine.relation}}</div>
        <div class="content" v-if="activeLine">
          <template v-if="activeLine.relation==='合成'">
            <p> <span class="label">相似度：</span>{{activeLine.factor}}</p>
            <p> <span class="label">参考文献：</span>{{activeLine.paper}}</p>
          </template>
          <template v-if="activeLine.relation==='相似关系' ">
            <p v-for="item in activeLine.content" :key="item">· {{item}}</p>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import D3Graph from '../D3Graph2'
import graphRelation from '../jsons/graphRelation.json'
import HeaderSearch from '../components/HeaderSearch'

export default {
  name: 'relation',
  components: {
    HeaderSearch
  },
  data () {
    return {
      d3Graph: null,
      graphRelation: graphRelation.data,
      activeLine: null,
      activeIndex: 0,
      activeData: 0,
      timer: null
    }
  },
  mounted () {
    this.d3Graph = new D3Graph('.chart')
    this.d3Graph.onClickLink = this.hanldeClickLine
    this.render()
  },
  methods: {
    handleClose () {
    },
    render () {
      let graph = graphRelation.data[this.activeIndex]
      this.d3Graph.addNodes(graph.nodes, graph.links)
      this.activeData = graph
    },
    selectItem (index) {
      this.activeIndex = index
      this.render()
    },
    hanldeClickLine (d) {
      this.activeLine = d.raw
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.activeLine = null
      }, 2000)
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
  /* background: #f0f0f0; */
}
.float-box {
  position: absolute;
  right: 20px;
  top: 40px;
  background: #fff;
  border: 1px solid #e0e0e0;
  /* padding: 20px 15px; */
  width: 350px;
}
.float-box .title {
  font-size: 18px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e0e0e0;
}
.float-box .content{
  padding: 15px 20px;
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
.search-key-box {
  margin-bottom: 30px;
}
.search-item {
  border: 1px solid #eaeaea;
  height: 30px;
  display: flex;
  margin: 5px 0;
}
.search-item label {
  background: #eaeaea;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #102e34;
}
.search-item input {
  width: 10px;
  flex-grow: 2;
  border: none;
  padding-left: 10px;
}
.content p{
  display: flex;
  font-size: 13px;
  margin: 10px 0;
}
.label{
  width: 80px;
  flex-shrink: 0;
}
</style>
