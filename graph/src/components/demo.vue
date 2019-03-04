<template>
  <div>
    <svg class="chart" width="800" height="600"></svg>
  </div>
</template>
<script>
import axios from 'axios';
import _ from 'lodash';
import D3Graph from '../D3Graph';

import { execDataNew } from '../utils/chart';
import { serverUrl } from '../config';

export default {
  name: 'demo',
  data() {
    return {
      d3Graph: null,
    };
  },
  created() {},
  mounted() {
    this.d3Graph = new D3Graph('svg');
    this.d3Graph.onClickNode = this.loadNodes;
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const res = await axios.get(`${serverUrl}/relaction?cas=39515-47-4`);
      const result = execDataNew(res.data.data);
      this.d3Graph.addNodes(result.nodes, result.links);
    },
    async loadNodes(casData) {
      const res = await axios.get(`${serverUrl}/relaction?cas=${casData.id}`);
      const result = execDataNew(res.data.data, casData.id);
      this.d3Graph.addNodes(result.nodes, result.links, casData.id);
    },
    renderGrapg() {

    },
  },
};
</script>
<style scoped>
.chart {
  height: 600px;
  width: 1000px;
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
    /* fill: #000; */
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

