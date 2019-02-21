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
        id="main"
        class="chart"
        @click.capture="handleChartClick" ></div>
      <tooltip :node="activeNode" />
    </div>
    <div class="category-box">
      <el-checkbox-group v-model="checkedCate" @change="handleCateChange">
          <el-checkbox label="element" disabled>化学品</el-checkbox>
         <el-checkbox label="news">新闻</el-checkbox>
         <el-checkbox label="article">论文</el-checkbox>
      </el-checkbox-group>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import dotProp from 'dot-prop';
import { initChart, execData, getOption, removeDuplicateNodes } from '../utils/chart';

import myAside from '../components/aside';
import tooltip from '../components/tooltip';

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
      myChart: null,
      chartApp: null,
      loading: false,
      checkedCate: ['element', 'news', 'article'],
    };
  },
  created() {},
  mounted() {
    this.chartApp = initChart(document.getElementById('main'));
    this.initChartEvents();
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
        const res = await axios.get(`http://10.102.20.251:8000/cas/?cas=${node.id}`).catch(() => {
          this.$message.error('当前数据库中无此CAS号数据');
        });
        if (res) {
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
      const res = await axios.get(`http://10.102.20.251:8000/relaction?cas=${cas}`);
      // console.log(name);
      // get news
      const newRes = await axios.get(`http://10.102.20.251:8000/search_new?kw=${name}`);
      // get articles
      const articleRes = await axios.get(`http://10.102.20.252:8000/searchDoc?cas=${cas}`);

      const result = execData(res.data.data, cas, newRes.data.data, articleRes.data.docInfo);

      let graph = this.$store.state.graph;
      graph = graph || { nodes: [], links: [] };

      graph.nodes = removeDuplicateNodes(graph.nodes.concat(result.nodes));
      graph.links = graph.links.concat(result.links);
      this.$store.commit('updateGraph', graph);
      this.renderGraph();
      this.loading = false;
    },
    handleCateChange() {
      this.renderGraph();
    },
    renderGraph() {
      const graph = this.$store.state.graph;
      const originNodes = graph.nodes;
      const originLinks = graph.links;
      const nodes = originNodes.filter(item => this.checkedCate.includes(item.type) || !item.type);
      const options = getOption({ nodes, links: originLinks });
      this.chartApp.clear();
      this.chartApp.setOption(options, true);
    },
    handleUpdateRoute(data) {
      this.chartApp.show(data);
      this.loading = false;
      this.activeNode = null;
    },
    async fetchData() {
      const res = await axios.get('http://10.102.20.251:8000/relaction?cas=39515-47-4');
      const result = execData(res.data.data);
      const chartOption = getOption(result);
      this.chartApp.setOption(chartOption);
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
      this.chartApp.on('click', (params) => {
        this.getNodeDetail(params.data);
      });

      // zoom

      // zoom 隐藏节点 && 加载新节点
      //
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

