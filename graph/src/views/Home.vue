<template>
  <div class="page">
    <my-aside
      :filters="filters"
      @updateGraph="handleUpdateGraph"
      @updateRoute="handleUpdateRoute"
      @showLoading="loading = true"
     />
    <div class="content" v-loading="loading">


      <div
        class="chart"
        @click.capture="handleChartClick" >
          <svg class="chart" width="800" height="600"></svg>

        </div>
      <tooltip :node="activeNode" />
    </div>
    <div class="category-box">
      <el-checkbox-group v-model="checkedCate" @change="handleCateChange">
        <el-checkbox label="element">化学品</el-checkbox>
        <el-checkbox label="news">新闻</el-checkbox>
        <el-checkbox label="article">论文</el-checkbox>
      </el-checkbox-group>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import dotProp from 'dot-prop';
import { execData, getOption, removeDuplicateNodes } from '../utils/chart';

import D3Graph from '../D3Graph';

import { serverUrl } from '../config';
import myAside from '../components/aside';
import tooltip from '../components/tooltip';

const first = true;
export default {
  name: 'home',
  components: {
    myAside,
    tooltip,
  },
  data() {
    return {
      activeNode: null,
      filters: new Set(),
      d3Graph: null,
      loading: false,
      checkedCate: ['element', 'news', 'article'],
    };
  },
  created() {},
  mounted() {
    this.d3Graph = new D3Graph('svg');
    this.d3Graph.onClickNode = this.getNodeDetail;
    // this.fetchData();
    // console.log(this.chartApp);
    // this.fetchData();
  },
  methods: {
    handleUpdateGraph(data) {
      // 清空store graph
      this.$store.commit('updateGraph', null);
      const cas = data.node.detail_basic['CAS号'];
      const name = dotProp.get(data.node, 'product_info.名称') || data.node.id;
      this.addNodes(cas, name);

      this.activeNode = data.node;
      this.activeNode.type = 'element';
    },
    async getNodeDetail(node) {
      if (node.type === 'element') {
        // cas
        const res = await axios.get(`${serverUrl}/cas/?cas=${node.id}`).catch(() => {
          this.$message.error('当前数据库中无此CAS号数据');
        });

        if (res && res.data.code !== -1) {
          const name = dotProp.get(res, 'data.data.product_info.名称') || node.id;
          this.addNodes(node.id, name);
          this.activeNode = res.data.data;
          this.activeNode.type = 'element';
        }
      }
      if (node.type === 'news') {
        // 新闻节点
        this.activeNode = node;
      }
      if (node.type === 'article') {
        // 新闻节点
        this.activeNode = node;
      }
    },
    async addNodes(cas, name) {
      this.loading = true;
      const res = await axios.get(`${serverUrl}/relaction?cas=${cas}`);
      // get news
      const newRes = await axios.get(`${serverUrl}/search_new?kw=${name}`);
      // get articles
      // const articleRes = await axios.get(`${serverUrl}/searchDoc?cas=${cas}`);

      const result = execData(res.data.data, cas, newRes.data.data, []);

      let graph = this.$store.state.graph;
      graph = graph || { nodes: [], links: [] };

      graph.nodes = removeDuplicateNodes(graph.nodes.concat(result.nodes));
      graph.links = graph.links.concat(result.links);

      this.$store.commit('updateGraph', graph);
      this.renderGraph(cas);

      this.loading = false;
    },
    handleCateChange() {
      this.renderGraph();
    },
    renderGraph(cas) {
      const graph = this.$store.state.graph;
      if (graph) {
        const originNodes = graph.nodes;
        const originLinks = graph.links;

        const nodes = originNodes.filter(item => this.checkedCate.includes(item.type) || !item.type || item.category === 0);
        //   const options = getOption({ nodes, links: originLinks });
        this.d3Graph.addNodes(nodes, originLinks, cas);
      //   this.chartApp.clear();
      //   this.chartApp.setOption(options, true);
      }
      //  const res = await axios.get(`${serverUrl}/relaction?cas=${casData.id}`);
      // const result = execDataNew(res.data.data, casData.id);
      // this.d3Graph.addNodes(result.nodes, result.links, cas);
    },
    handleUpdateRoute(data) {
      this.d3Graph.addNodes(data.nodes, data.links);
      this.activeNode = null;
    },
    async fetchData() {
      const res = await axios.get(`${serverUrl}/relaction?cas=947-42-2`);
      const result = execData(res.data.data, '947-42-2');
      this.d3Graph.addNodes(result.nodes, result.links);
    },
    handleChartClick() {
      // this.activeNode = null;
    },
    handleShowGraphInfo(params) {
      if (params.dataType === 'node') {
        this.activeNode = params.data;
      }
    },
    initChartEvents() {
      // this.chartApp.on('click', (params) => {
      //   this.getNodeDetail(params.data);
      // });

      // // zoom

      // // zoom 隐藏节点 && 加载新节点
      // //
      // // graphZoom
      // this.chartApp.on('graphRoam', (params) => {
      //   graphZoom = params.zoom || graphZoom;
      // });
    },
  },
};
</script>
<style scoped>
.page {
  height: calc(100% - 60px);
  display: flex;
  position: relative;
}

.content {
  flex-grow: 2;
}

.chart {
  width: 100%;
  height: 100%;
  background: url('../assets/noise.png') #f5f5f5;
}
.category-box{
  position: absolute;
  top:20px;
  left:320px;
  z-index: 999;
}
</style>

<style>

.node {
    /* stroke: #fff; */
    stroke-width: 1.5px;
  }

  .link {
    fill: none;
    stroke: #bbb;
  }

  .link {
    stroke: #777;
    stroke-opacity: 0.3;
    stroke-width: 1.5px;
  }
.link:hover{
  stroke-width: 3px;
}
  .node circle {
    /* fill: #ccc; */
    /* stroke: #000; */
    stroke-width: 1.5px;
  }

  .node text {
    fill: #000;
    font-size: 18;
    display: none;
    font: 10px sans-serif;
  }

  .node:hover circle {
    fill: #888;
  }

  .node:hover text {
    display: inline;
    /* fill: #ccc; */
  }

  .cell {
    fill: none;
    pointer-events: all;
  }

</style>

