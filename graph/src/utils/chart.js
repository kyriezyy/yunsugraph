// import echarts from 'echarts';

import { nodeIcon, huaxueIcon, newsIcon, articleIcon } from './icon';

let chartApp = null;
export const execData = (data, cas, news = [], articles = []) => {
  const keys = [];
  const nodes = [];
  const links = [];
  // this.cass = this.cass.unshift({ name: cas });

  function genEleNode(v, cate) {
    if (keys.indexOf(v.cas) < 0) {
      // const symbol = v.url ? prefix + v.url : 'rect';
      nodes.push({
        type: 'element',
        img: v.url,
        name: v.cas,
        id: v.cas,
        symbol: huaxueIcon,
        category: cate,
        symbolSize: 40,
        label: { normal: { show: true } },
        emphasis: {
          itemStyle: {
            borderColor: 'blue',
          },
        },
      });
      // nodes.push({name: v.cas, id: v.cas, category: cate, symbolSize: 30, label: {normal: {show: true}}})
      keys.push(v.cas);

      if (news.length) {
        const selectNews = news.splice(0, 1);
        nodes.push({
          type: 'news',
          url: selectNews[0].link,
          name: selectNews[0].title,
          source_web: selectNews[0].source_web,
          id: `news${v.cas}`,
          symbol: newsIcon,
          symbolSize: 40,
          // label: { normal: { show: true } },
          emphasis: {
            itemStyle: {
              borderColor: 'blue',
            },
          },
        });
        links.push({ name: null, source: v.cas, target: `news${v.cas}`, value: '新闻', lineStyle: { color: 'red' } });
      }

      if (articles.length) {
        const selectNews = articles.splice(0, 1);
        nodes.push({
          type: 'article',
          url: selectNews[0].herf,
          name: selectNews[0].title,
          author: selectNews[0].author,
          abstract: selectNews[0].abstract,
          id: `article${v.cas}`,
          symbol: articleIcon,
          symbolSize: 40,
          label: { show: false },
          emphasis: {
            itemStyle: {
              borderColor: 'blue',
            },
          },
        });
        links.push({ name: null, source: v.cas, target: `article${v.cas}`, value: '论文', lineStyle: { color: 'red' } });
      }
    }
  }


  genEleNode(data.info, 0);

  function loadingNodes() {
    data.synts.forEach((val, index) => {
      const mid = `${val.pre}:${Math.random().toString(36).substr(2)}`;
      // var cate = cass.push(`路线${index.toString()}`)
      nodes.push({
        name: mid,
        id: mid,
        value: val.pre,
        category: 3,
        symbolSize: 40,
        symbol: nodeIcon,
        label: { normal: { show: false } },
      });
      val.front.forEach((v) => {
        genEleNode(v, 3);
        links.push({ name: null, source: v.cas, target: mid, value: '构成', lineStyle: { color: 'darkgreen' } });
      });
      val.back.forEach((v) => {
        genEleNode(v, 3);
        links.push({ name: null, source: mid, target: v.cas, value: '转化', lineStyle: { color: 'darkblue' } });
      });
    });
  }

  function loadingupdown(data, cas) {
    data.updown.ups.forEach((val) => {
      genEleNode(val, 1);
      // console.log(val);
      links.push({ name: null, source: cas, target: val.cas, value: '上游', lineStyle: { color: '#888' } });
    });
    data.updown.downs.forEach((val) => {
      genEleNode(val, 2);
      // console.log(val);
      links.push({ name: null, source: cas, target: val.cas, value: '下游', lineStyle: { color: 'darkred' } });
    });
  }

  loadingNodes();
  loadingupdown(data, cas);

  return { nodes, links };
};

export const removeDuplicateNodes = (nodes) => {
  const keys = {};
  return nodes.filter((item) => {
    if (keys[item.id]) {
      return false;
    }
    keys[item.id] = 1;
    return true;
  });
};

export const getOption = (graph) => {
  graph.nodes.map((n) => {
    n.x = n.y = null;
  });
  return {
    tooltip: {
      show: false,
    },
    legend: [],
    // animation: false,
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
        roam: true,
        nodeScaleRatio: 0.8,
        focusNodeAdjacency: true,
        draggable: true,
        symbolRotate: 2,
        scaleLimit: {
          max: 2,
          min: 0.3,
        },
        itemStyle: {
          normal: {
            borderColor: '#fff',
            borderWidth: 2,
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.3)',
          },
        },
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [2, 8],
        edgeLabel: {
          normal: {
            textStyle: {
              fontSize: 12,
            },
          },
        },
        force: {
          edgeLength: 100,
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
          width: 2,
        },
        emphasis: {
          lineStyle: {
            width: 4,
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
};

export const initChart = (el) => {
  if (chartApp) {
    chartApp.dispose();
  }
  chartApp = echarts.init(el);
  return chartApp;
};

export default {};
