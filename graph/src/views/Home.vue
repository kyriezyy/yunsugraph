<template>
  <div class="page">
    <my-aside
      :filters="filters"
      @onFilter="hanldeFilter"
      @updateGraph="handleUpdateGraph"
     />
    <div class="content">
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
    };
  },
  created() {},
  mounted() {
    this.chartApp = new GraphChart(document.getElementById('main'));
    // this.fetchData();
  },
  methods: {
    handleUpdateGraph(data) {
      this.chartApp.show(data.graph);
      this.activeNode = data.node;
    },
    async fetchData() {
      const res = await axios.get('http://10.102.21.89:8000/relaction?cas=947-42-2');
      const result = GraphChart.loadingData(res.data.data);
      console.log(result);
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
}
</style>

