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
import axios from 'axios';
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
      const options = getOption(data.graph);
      this.chartApp.clear();
      this.chartApp.setOption(options, false);

      this.loading = false;
      this.activeNode = data.node;
      this.activeNode.type = 'element';
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
          this.addNodes(node.id);
          this.activeNode = res.data.data;
          this.activeNode.type = 'element';
        }
      }
      if (node.type === 'news') {
        // 新闻节点
        this.activeNode = node;
      }
    },
    async addNodes(cas) {
      const res = await axios.get(`http://10.102.20.251:8000/relaction?cas=${cas}`);
      const result = execData(res.data.data, cas);
      const originOptions = this.chartApp.getOption();
      const originNodes = originOptions.series[0].data;
      const originLinks = originOptions.series[0].links;

      const nodes = removeDuplicateNodes(originNodes.concat(result.nodes));
      const links = originLinks.concat(result.links);
      const options = getOption({ nodes, links });
      this.chartApp.clear();
      this.chartApp.setOption(options, false);
    },
    handleUpdateRoute(data) {
      this.chartApp.show(data);
      this.loading = false;
      this.activeNode = null;
    },
    async fetchData() {
      const res = await axios.get('http://10.102.20.251:8000/relaction?cas=947-42-2');
      // const result = GraphChart.loadingData();
      const result = execData(res.data.data);
      const chartOption = getOption(result);
      this.chartApp.setOption(chartOption);
      // this.chartApp.show(result);
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
    initChartEvents() {
      this.chartApp.on('click', (params) => {
        this.getNodeDetail(params.data);
      });

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
</style>

