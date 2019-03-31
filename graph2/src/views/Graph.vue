<template>
  <div class="graph graph-detail" v-loading="loading">
    <div class="category-box">
      <el-checkbox-group v-model="checkedCate" @change="handleCateChange">
        <el-checkbox label="element" disabled >化学品</el-checkbox>
        <el-checkbox label="news">新闻</el-checkbox>
        <el-checkbox label="article">论文</el-checkbox>
        <el-checkbox label="patent">专利</el-checkbox>
      </el-checkbox-group>
    </div>
     <svg class="chart" width="900" height="600"></svg>
<tooltip :node="activeNode" />
  </div>
</template>
<script>
import dotProp from 'dot-prop'
import axios from 'axios'
import D3Graph from '../D3Graph'
import graphData from '../jsons/graph.json'
import { execData } from '../chart'
import listData from '../jsons/list_data.json'
import tooltip from '../components/tooltip'
const articleList = listData.data.filter(item => item.type === 'paper')
const patentList = listData.data.filter(item => item.type === 'patent')
const newsList = listData.data.filter(item => item.type === 'news')
const serverUrl = 'http://10.102.20.251:8000'
export default {
  name: 'graph',
  components: {
    tooltip
  },
  data () {
    return {
      d3Graph: null,
      loading: false,
      checkedCate: ['element', 'news', 'article', 'patent'],
      graph: {},
      activeNode: null
    }
  },
  mounted () {
    this.d3Graph = new D3Graph('.chart')
    this.d3Graph.onClickNode = this.getNodeDetail
    this.addNodes('947-42-2', '二苯基硅二醇')
  },
  methods: {
    async getNodeDetail (node) {
      if (node.type === 'element') {
        // cas
        const res = await axios.get(`${serverUrl}/cas/?cas=${node.id}`).catch(() => {
          this.$message.error('当前数据库中无此CAS号数据')
        })

        if (res && res.data.code !== -1) {
          // const name = dotProp.get(res, 'data.data.product_info.名称') || node.id
          // this.addNodes(node.id, name)
          this.activeNode = res.data.data
          this.activeNode.type = 'element'
        }
      }
      if (node.type === 'news') {
        // 新闻节点
        this.activeNode = node
      }
      if (node.type === 'article') {
        // 新闻节点
        this.activeNode = node
      }
      if (node.type === 'patent') {
        // 新闻节点
        this.activeNode = node
      }
      console.log(node)
    },
    async addNodes (cas, name) {
      this.loading = true
      const res = await axios.get(`${serverUrl}/relaction?cas=${cas}`)
      // get news
      // const newRes = await axios.get(`${serverUrl}/search_new?kw=${name}`)
      // get articles
      // const articleRes = await axios.get(`${serverUrl}/searchDoc?cas=${cas}`)
      const graph = execData(res.data.data, cas, [], [])

      let otherLinks = []
      let newses = newsList.map((item, index) => {
        otherLinks.push({source: cas, target: `news${index}`, value: '新闻'})
        return {
          type: 'news',
          name: item.title.slice(0, 10) + '...',
          id: `news${index}`,
          symbol: 'newsIcon',
          raw: item
        }
      })
      let articles = articleList.map((item, index) => {
        otherLinks.push({source: cas, target: `article${index}`, value: '论文'})
        return {
          type: 'article',
          name: item.title.slice(0, 10) + '...',
          id: `article${index}`,
          symbol: 'articleIcon',
          raw: item
        }
      })
      let patents = patentList.map((item, index) => {
        otherLinks.push({source: cas, target: `patent${index}`, value: '专利'})
        return {
          type: 'patent',
          name: item.title.slice(0, 10) + '...',
          id: `patent${index}`,
          symbol: 'patentIcon',
          raw: item
        }
      })

      graph.nodes = graph.nodes.concat(newses)
      graph.nodes = graph.nodes.concat(articles)
      graph.nodes = graph.nodes.concat(patents)

      graph.links = graph.links.concat(otherLinks)

      // let graph = this.$store.state.graph
      // graph = graph || { nodes: [], links: [] }

      // graph.nodes = removeDuplicateNodes(graph.nodes.concat(result.nodes))
      // graph.links = graph.links.concat(result.links)

      // this.$store.commit('updateGraph', graph)
      this.graph = graph
      this.renderGraph(cas)

      this.loading = false
    },
    handleCateChange () {
      this.renderGraph()
    },
    renderGraph (cas) {
      const graph = this.graph
      // if (graph) {
      const originNodes = graph.nodes
      const originLinks = graph.links

      const nodes = originNodes.filter(item => this.checkedCate.includes(item.type) || !item.type || item.category === 0)
      //   const options = getOption({ nodes, links: originLinks });
      this.d3Graph.addNodes(nodes, originLinks, cas)
      //   this.chartApp.clear();
      //   this.chartApp.setOption(options, true);
      // }
      //  const res = await axios.get(`${serverUrl}/relaction?cas=${casData.id}`);
      // const result = execDataNew(res.data.data, casData.id);
      // this.d3Graph.addNodes(result.nodes, result.links, cas);
    },
    render () {
      this.d3Graph.addNodes(graphData.nodes, graphData.links)
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
