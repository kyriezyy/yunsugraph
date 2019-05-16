<template>
  <div class="page">
    <div class="header">cloudtree header</div>
    <div class="container">
      <home-aside  class="aside" />
      <div class="main">
        <!-- <chart-box /> -->
        <!-- <points-chart /> -->
        <graph />
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import dotProp from 'dot-prop';

import Aside from './components/Aside';
import ChartBox from './components/ChartBox';
import PointsChart from './components/PointsChart';
import Graph from './components/Graph';

export default {
  name: 'home',
  components: {
    HomeAside: Aside,
    ChartBox,
    PointsChart,
    Graph,
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style scoped>
.page {
  height: 100%;
}
.container{
  height: calc(100% - 60px);
  display: flex;
}
.aside{
  width: 250px;
  flex-shrink: 0;
}

.main{
  flex-grow: 2;
}

.content {
  flex-grow: 2;
}

.chart {
  width: 100%;
  height: 100%;
  background: url("../assets/noise.png") #f5f5f5;
}
.category-box {
  position: absolute;
  top: 20px;
  left: 320px;
  z-index: 999;
}
</style>
