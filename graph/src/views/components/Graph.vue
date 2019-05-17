<template>
  <div class="graph-box">
    <svg id="chart" width="900" height="600" />

    <el-button @click="selectProduct"> 选择产品 </el-button>
    <el-button @click="selectCustomer"> 突出客户 </el-button>
    <el-button @click="highlightLine(1)"> 高亮线1 </el-button>
    <el-button @click="highlightLine(2)"> 高亮线2 </el-button>
  </div>
</template>
<script>
import dataJson from './demo.json';
import D3Graph from '../../D3Graph2'
  ;

export default {
  name: 'graph',
  data() {
    return {
      d3Graph: null,
    };
  },
  created() {},
  mounted() {
    this.d3Graph = new D3Graph('#chart');
    this.renderChart();
  },
  methods: {
    renderChart() {
      this.d3Graph.addNodes(dataJson.nodes, dataJson.links);
    },
    selectProduct() {
      this.d3Graph.selectProduct();
    },
    selectCustomer() {
      this.d3Graph.selectCustomer();
    },
    highlightLine(index) {
      this.d3Graph.highlightLine(index);
    },
  },
};
</script>

<style scoped>

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
  stroke-opacity: 1;
  stroke-width: 3px;
}

.activelink{
    stroke:red;
    stroke-opacity: 1;
    stroke-width: 6px;
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

