<template>
  <div class="page">
    <div id="main" class="chart"></div>
  </div>
</template>
<script>
import echarts from 'echarts';

import graph from '../graph.json';

export default {
  name: 'home',
  created() {},
  mounted() {
    this.draw();
  },
  methods: {
    draw() {
      // 基于准备好的dom，初始化echarts实例
      const myChart = echarts.init(document.getElementById('main'));

      const countCatch = {};
      // 重新排序
      graph.links.forEach((item) => {
        countCatch[item.target] = (countCatch[item.target] || 0) + 1;
        countCatch[item.source] = (countCatch[item.source] || 0) + 1;
      });
      // console.log(countCatch);


      graph.nodes.forEach((node) => {
        const symbolSize = 10 + (countCatch[node.id] || 0);
        // console.log(node.id);
        node.symbolSize = symbolSize;
        if (node.id == 0) {
          node.symbol = 'image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7';
        }
      });

      const categories = [];
      for (let i = 0; i < 9; i++) {
        categories[i] = {
          name: `类目${i}`,
        };
      }

      const option = {
        title: {
          text: 'Les Miserables',
          subtext: 'Default layout',
          top: 'bottom',
          left: 'right',
        },
        tooltip: {},
        legend: [{
          // selectedMode: 'single',
          data: categories.map(a => a.name),
        }],
        animation: false,
        series: [
          {
            name: 'Les Miserables',
            type: 'graph',
            layout: 'force',
            data: graph.nodes,
            links: graph.links,
            categories,
            roam: true,
            focusNodeAdjacency: true,
            label: {
              normal: {
                position: 'right',
                formatter: '{b}',
              },
            },
            lineStyle: {
              color: 'source',
              curveness: 0.3,
            },
            emphasis: {
              lineStyle: {
                width: 10,
              },
            },
            force: {
              repulsion: 100,
            },
          },
        ],
      };

      myChart.setOption(option);
    },
  },
};
</script>
<style scoped>
.page{
  height: 100%;
}
.chart{
  width: 100%;
  height: 100%;
}
</style>

