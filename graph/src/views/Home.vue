<template>
  <div class="page">
    <my-aside
      :filters="filters"
      @onFilter="hanldeFilter"
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
  </div>
</template>
<script>
import echarts from 'echarts';
import axios from 'axios';
import GraphChart from '../GraphChart';
// import graph from '../graph.json';

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
    };
  },
  created() {},
  mounted() {
    this.chartApp = new GraphChart(document.getElementById('main'));
    this.chartApp.app.on('click', (params) => {
      console.log(params);
      this.getNodeDetail(params.data);
    });
    this.fetchData();
  },
  methods: {
    handleUpdateGraph(data) {
      this.chartApp.show(data.graph);
      this.loading = false;
      this.activeNode = data.node;
      const cas = data.node.detail_basic['CAS号'];
      data.graph.nodes.forEach((item) => {
        if (item.name === cas) {
          this.activeNode.image = item.img;
        }
        // console.log(item);
      });
    },
    async getNodeDetail(node) {
      if (node.type === 'element') {
        const res = await axios.get(`http://10.102.20.251:8000/cas/?cas=${node.id}`).catch(() => {
          this.$message.error('当前数据库中无此CAS号数据');
        });
        if (res) {
          this.activeNode = res.data.data;
          this.activeNode.type = 'element';
        }
      }
      if (node.type === 'news') {
        // 新闻节点
        this.activeNode = node;
      }
    },
    handleUpdateRoute(data) {
      this.chartApp.show(data);
      this.loading = false;
      this.activeNode = null;
    },
    async fetchData() {
      const res = await axios.get('http://10.102.20.251:8000/relaction?cas=947-42-2');
      const result = GraphChart.loadingData(res.data.data);
      this.chartApp.show(result);
    },
    handleChartClick() {
      // this.activeNode = null;
    },
    hanldeFilter(filters) {
      if (filters.length) {
        const links = graph.links.filter(item => filters.includes(item.relation));
        this.draw(graph.nodes, links);
      } else {
        this.draw(graph.nodes, graph.links);
      }
    },
    handleShowGraphInfo(params) {
      if (params.dataType === 'node') {
        this.activeNode = params.data;
      }
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
</style>

