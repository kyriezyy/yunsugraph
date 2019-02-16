<template>
  <div>
    <div class="chart" id="chart"></div>
  </div>
</template>
<script>
import echarts from 'echarts';
import graph from '../graph.json'
  ;

export default {
  name: 'demo',
  data() {
    return {
      chart: null,
    };
  },
  created() {
  },
  mounted() {
    this.renderGraph();
  },
  methods: {
    renderGraph() {
      console.log(graph);
      this.chart = echarts.init(document.getElementById('chart'));
      // 、http://saasimg.molbase.net/mol_command/a6c8310e53e44fd0b49b7a0ad2288909.png
      graph.nodes.forEach((item) => {
        item.symbol = 'image://http://saasimg.molbase.net/mol_command/a6c8310e53e44fd0b49b7a0ad2288909.png';
        item.symbolSize = 50;
      });
      // this.chart.on('mouseup', (params) => {
      //   console.log('mouseup');
      //   const option = this.chart.getOption();
      //   option.series[0].data[params.dataIndex].x = params.event.offsetX;
      //   option.series[0].data[params.dataIndex].y = params.event.offsetY;
      //   option.series[0].data[params.dataIndex].fixed = true;
      //   this.app.setOption(option);
      // });

      const options = {
        tooltip: {
          show: false,
        },
        legend: [],
        animationDuration: 1,
        animationEasingUpdate: 'quinticInOut',
        series: [
          {
            name: '',
            type: 'graph',
            layout: 'force',
            // layout: 'none',
            data: graph.nodes,
            links: graph.links,
            // categories,
            roam: true,
            focusNodeAdjacency: true,
            draggable: true,
            symbolRotate: 2,
            itemStyle: {
              normal: {
                borderColor: '#fff',
                borderWidth: 2,
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.3)',
              },
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [1, 10],
            edgeLabel: {
              normal: {
                textStyle: {
                  fontSize: 12,
                },
              },
            },
            force: {
              edgeLength: 50,
              repulsion: 500,
              layoutAnimation: false,
            },
            label: {
              position: 'right',
              formatter: '{b}',
            },
            lineStyle: {
              color: 'source',
              // curveness: 0.3,
              width: 1,
            },
            emphasis: {
              lineStyle: {
                width: 3,
              },
            },
            markPoint: {
              silent: true,
            },
            markLine: {
              silent: true,
            },
            markArea: {
              silent: true,
            },
            zlevel: 100,
          },

        ],
      };
      this.chart.setOption(options);
    },
  },
};
</script>
<style scoped>
.chart{
  height: 500px;
}
</style>
