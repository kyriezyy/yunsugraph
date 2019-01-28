<template>
  <div class="page">
    <my-aside :filters="filters" @onFilter="hanldeFilter" />
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
    // console.log(graph);
    // this.init();
    this.$nextTick(() => {
      this.chartApp = new GraphChart(document.getElementById('main'));

      this.fetchData();
    });
  },
  methods: {
    async fetchData() {
      // 10.102.21.89:8000/relaction
      const res = await axios.get('http://10.102.21.89:8000/relaction?cas=622-33-3');
      // console.log(res);
      const result = this.chartApp.loadingData(res.data.data);
      console.log(result);
      this.chartApp.show(result);
    },
    handleChartClick() {
      this.activeNode = null;
    },
    hanldeFilter(filters) {
      if (filters.length) {
        const links = graph.links.filter(item => filters.includes(item.relation));
        this.draw(graph.nodes, links);
      } else {
        this.draw(graph.nodes, graph.links);
      }
    },
    init() {
      this.myChart = echarts.init(document.getElementById('main'));
      this.myChart.on('click', (params) => {
        // 监听点击事件
        this.handleShowGraphInfo(params);
      });
      // 初始化节点信息
      const countCatch = {};
      // 重新排序
      const filters = new Set();
      graph.links.forEach((item) => {
        filters.add(item.relation);
        item.value = 190;
        countCatch[item.target] = (countCatch[item.target] || 0) + 1;
        countCatch[item.source] = (countCatch[item.source] || 0) + 1;
      });
      this.filters = filters;


      graph.nodes.forEach((node) => {
        const symbolSize = 50 + (countCatch[node.id] || 0);
        node.symbolSize = symbolSize;
        // node.x = 120;
        // node.y = 200;
        // node.fixed = true;
        if (node.type == '1') {
          node.symbol =
            'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACgElEQVRYR+3XSciNYRQH8N9nKCkLC8XCUCgslI2FTCkK8aXslKV5ypAhQmRYmGVYWCg7G3MhC1NiwcKQxMKwkA2FLIwdPa/evu/e9733vhuL79nce9/nnPP8n/85/3Pe26Z83cW4crOaFuE7vsi3rYHAt8uCFMS4gwlVAWT+v9OXItCx96sBu3+YGmGgC0AXA10M/BcMTMcVvMeAkub1Af0wDdfLGl0jfaA7nmMY1mB/SdDV2IeXGIGfVTvhChxKAUfhewmAnniWAIfvkSoA+uIV4nNmSkMZq7E/A5fxEUPTZ02/shQcxvJGTiywCQaCiaYBRM4j91EDVVbUQNRC1ESnVcTANUzF0QosHMCqpIZQRcMAshx+xuCiHJZQ0wevi2qoFgN52QX6UEB+tWN3erAR50tALMSJerKsBWAlDhbo+F1SRLygRKUPLAEQZzxBSLjThToCCLkFZUHdLFyqEfxN2outCylFZUU6ETfRKaUdAYRkliXjyXWiRgr2pL0NDaQgC3MWc3EMS7OHeQCZ7GJvdOpmZTfL70esbViUuuWp9Dt7lxyEF+iRj58HkMnuOJY0c3Ky3YuRWI9uqVCjJQdL2dqBzbiFSfEwAxBtNvJdRXafUsOJiRkrbvwA/XMAeqfijok6GxcDQF52a9Mka4GAv30/Uvc2OQ/BvRrjex7OZMMtAETOgvao/uENTLt64KIwIwWbksGuVEfRKzqu+xgbsgwADzEGc3Culasnn4i1JVfh0Xy21ok3BTdi1oTTN/RK2v9SAUAzrlELX+PsAPA0dant2IkfzURq0XY+TuNRAFiAky0GquIW/yHbMxkuTn06irDsJaXKoZnvY6zD1T8RtYp8G9a2xgAAAABJRU5ErkJggg==';
        } else {
          node.symbol =
            'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEyklEQVRYR8WWUUybVRTHf+1HwUIHzMhQEF1nZolKNOtGTCQhk2BwUeKIIksJyzanZMsgmjinW3jQKC8+YNdIsiyM4Ew0qEB0NcgkZFFe3CAqYouIQEgHpRXBzK20o+bUjwVq6b7Omd2kSXO/e8/53f+595yj4xYP3S32TzyALOAkMA+Mq/8nEwC+A3gcKAQ2Al8DzdH74wGYgNeAUsAKhIETwDHgjzggmcCbwAEgAHwDjKgAnVoA9gDPAFPAr0C/qsCLwMvAElANfBkD4iHgKyAZqAM+Ae4GSoAHVCVk7sPlvbEUeAx4DrgHEIObAR/wNiAn+AB4FHge+GwFRAXQBvQBrwBPA3tVx17gZ1VFB/BpLACRbIP6QeSWDRI3I/AS8CpwERAldgPPAtuAH4Fa4H3gXSAbqALmgFPqaYdWgMrdkt+wzC0rkAQE14irgJwFvgeKgV3AF0AGcB9QA/Soc2XAL8BHwGVV+geBewH9CvsSxjTgyrUQ6PV6v91uv/3gwYMsLS0xPT2N2+2+eObMmUmn05nqcrks4bAIw3dAAXAJWAcYgL+AReAH4GFRUqfThXJyckYLCgoWCwsLjUVFRZsNBgMdHR0Bu90uAKkrFZD/g0eOHHmksbExphDz8/O0trbS1tY2PzAwkK4uugooKSkpM4FA4E6TyXR5x44dczabLaekpIS0NDnk6nHo0KEJh8MhwHIpV+WBz20221OnT5++7lMfGxujrq4Op9OJqGKxWDh8+DDV1dUkJ8sDWHtUVFRMd3R0SDglXKsAmq1W667z589LbDWNmpoahoaGGBgY0LReFuXn5//mdrvlcu+PBjiam5t7bGpq6jat1mpra3G5XPT1ycvTNrKysn73+XxNwFvRALsVRTkVCoU014cbAdDr9VfD4fALQGs0gGSrszMzM2zYsJwO4p8qUYDZ2dll2+KrNxrAArguXLjAli1bNOmZKIDY3rp1q9i+X80Xqy6hvMtLXV1dlJeX/y8AnZ2d7Ny5U2xL7ghFK0BSUtJCU1PTOklGWkaiCtjtdurr62dXpPzV/YDRaBypr6/fvFYyioZKFGDfvn1TLS0tUpikvEdG9I132my2J7UkI9mcKEBZWdlsd3f3t0AkDrEAThQXF+/X+q4TBbBYLLMjIyNSqKRXiAnQkJeXd3RycjJ+PlU3JwqQkZHx58LCgnRLUrZjAuxVFOVkMBjU6XTXz0eJAIRCIQwGg5RTKecfrwXwBNCtNRklAjA+Po7ZbBa/0nFJmxdTASmRP2lNRokAnDt3juJi6WfIU/vNmAAmnU43Fw6Hk9avXx/ZUFVVhdVqjdArirLqJcYD8Hq9DA8PEwgEGBwcpKenx9Pb23uX9A9qbxgTQCalCc2Vvs1isRzw+Xzb/H5/WmpqKqWlpRGgyspK9Hr9v57h4uIi7e3tNDc309/fT0pKSigzM3PC7/dPB4NByXwTaj957SDXv2n/LM3Zvn37bo/Hs9/tdps3bdpEQ0NDxInb7eb48eM4HI6Ic0VRrpjN5v65ubn3RkdHpXeU9mvNoRVgpYGN2dnZR71e7x6j0bhkMpkMInd6evqMyWR6w+PxtMRzGP3tRgCWbeQD7wBSRV9Xu+K4p40F9l8AEjnoTQ3BTXG8bORvGQbUMOQ0RVoAAAAASUVORK5CYII=';
        }
      });
      this.draw(graph.nodes, graph.links);
    },
    draw(nodes, links) {
      const option = {
        tooltip: {
          // backgroundColor: 'transparent',
          // alwaysShowContent: true,
          // triggerOn: 'click',
          // position: (point, params) => {
          //   if (params.dataType !== 'edge') {
          //     return {
          //       right: 0,
          //       top: 0,
          //     };
          //   }
          // },
          formatter: (params) => {
            if (params.dataType === 'edge') {
              return params.data.relation;
            }
            if (params.dataType === 'node') {
              if (params.data.type == '1') {
                return params.data.BI[0].value;
              }
              return `${params.data.title.substr(0, 40)}...`;
            }
            return '';
          },
        },
        animation: false,
        series: [
          {
            name: '化学品',
            type: 'graph',
            layout: 'force',
            data: nodes,
            links,
            roam: true,
            focusNodeAdjacency: true,
            edgeSymbol: ['', 'arrow'],
            // edgeSymbolSize: 100,
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
              edgeLength: [10, 500],
              initLayout: 'circular',
              repulsion: 1000,
            },
          },
        ],
      };

      this.myChart.setOption(option);
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

