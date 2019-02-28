<template>
  <div>
    <svg class="chart" width="800" height="600"></svg>
  </div>
</template>
<script>
// import echarts from 'echarts';
// import graph from '../graph.json'
import axios from 'axios';
import _ from 'lodash';

import * as d3 from 'd3';
import { execDataNew } from '../utils/chart';
import { serverUrl } from '../config';

let svg;
let width;
let height;

let graphBox;
let linksBox;
let nodesBox;
const initialStatus = true;
function zoomed() {
  graphBox.attr('transform', d3.event.transform);
}
const color = d3.scaleOrdinal(d3.schemeCategory10);

let simulation;

function positionLink(d) {
  return `M${d[0].x},${d[0].y} ${d[1].x},${d[1].y}`;
}

function positionNode(d) {
  return `translate(${d.x},${d.y})`;
}

function dragstarted(d) {
  // console.log(d, d3.event.active);
  if (!d3.event.active) {
    simulation.alphaTarget(0.3);
    simulation.restart();
  }
  d.fx = d.x;
  d.fy = d.y;
}

function dragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function dragended(d) {
  // d.fx = d3.event.x, d.fy = d3.event.y;
  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}

export default {
  name: 'demo',
  data() {
    return {
      chart: null,
      zoom: null,
      svg: null,
      nodes: [],
      links: [],
    };
  },
  created() {},
  mounted() {
    svg = d3.select('svg');
    width = +svg.attr('width');
    height = +svg.attr('height');
    graphBox = svg.append('g');
    linksBox = graphBox.append('g');
    nodesBox = graphBox.append('g');
    svg.call(
      d3
        .zoom()
        .scaleExtent([1 / 2, 8])
        .on('zoom', zoomed),
    );

    simulation = d3
      .forceSimulation()
      // .velocityDecay(1)
      .force(
        'link',
        d3
          .forceLink()
          .distance(200)
          .strength(0.6),
      ) // 决定线的长度已经节点之间的间距
      .force('charge', d3.forceManyBody()) // 节点是否所在一起 相互吸引 相互排斥相关
      .force('center', d3.forceCenter(width / 2, height / 2)); // 设置节点中心
    // .stop();
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const res = await axios.get(`${serverUrl}/relaction?cas=39515-47-4`);
      const result = execDataNew(res.data.data);
      this.nodes = result.nodes;
      this.links = result.links;
      console.log(JSON.stringify(result));
      this.renderGrapg();
    },
    async loadNodes(cas) {
      // const res = await axios.get(`${serverUrl}/relaction?cas=${cas}`);
      // const result = execDataNew(res.data.data, cas);
      console.log('cas号', cas);

      // const nodes = [];
      // const nodeKeyMap = {};
      let curNode = null;

      // console.log(1, this.nodes.length);
      // console.log(2, result.nodes.length);
      // 过滤节点
      simulation.nodes().forEach((item) => {
        if (item.id === cas) {
          curNode = item;
        }
      });
      // this.nodes.forEach((item) => {
      //   nodeKeyMap[item.id] = true;
      // });
      // result.nodes.forEach((item) => {
      //   if (!nodeKeyMap[item.id]) this.nodes.push(item);
      // });
      const tempId = `39515-475-${Math.round(Math.random() * 1000)}`;
      this.nodes.push({
        id: tempId,
        name: tempId,
        symbol: 'huaxueIcon',
        type: 'element',
      });
      this.links.push({
        source: curNode,
        target: tempId,
      });

      // console.log(this.links);

      // result.links.forEach((item) => {
      //   if (item.target === cas) {
      //     item.target = curNode;
      //   }
      //   if (item.source === cas) {
      //     item.source = curNode;
      //   }
      //   console.log(item.target, item.source);
      // });
      // this.links = this.links.concat(result.links);


      // this.nodes = this.nodes.concat(result.nodes);
      // this.nodes = result.nodes;
      // this.links = result.links;
      this.renderGrapg();
    },
    renderGrapg() {
      // simulation.restart();
      const nodes = _.cloneDeep(this.nodes);
      // const nodes = this.nodes;
      const nodeById = d3.map(nodes, d => d.id);
      let links = _.cloneDeep(this.links);
      // let links = this.links;
      const bilinks = [];
      nodes.forEach((item) => {
        delete item.index;
      });

      links = links.filter(item => item.source && item.target);
      // 生成links
      links.forEach((link) => {
        if (typeof link.source === 'string') {
          link.source = nodeById.get(link.source);
        }
        if (typeof link.target === 'string') {
          link.target = nodeById.get(link.target);
        }
        // link.source = typeof link.source === 'object' ? link.source : nodeById.get(link.source);
        // link.target = typeof link.target === 'object' ? link.target : nodeById.get(link.target);
        // console
        // const i = {}; // intermediate node
        // nodes.push(i);
        links.push({ source: link.source, target: link.target });
        bilinks.push([link.source, link.target]);
      });


      // 所有的link选择器
      let link = linksBox
        .selectAll('.link')
        // .remove()
        .data(bilinks)
        .enter()
        .append('path')
        .attr('class', 'link');


      link.exit().remove();
      link = link.enter().merge(link);

      // 所有的节点选择器
      let node = nodesBox
        .selectAll('.node')
        // .remove()
        .data(nodes.filter(d =>
          d.id,
        ))
        .enter()
        .append('g')
        .attr('class', 'node')
        .on('click', (d) => {
          console.log(d.x, d.y);
          this.loadNodes(d.id);
        })
        // .attr('cx', d => d.x)
        // .attr('cy', d => d.y)
        .call(
          d3
            .drag()
            .on('start', dragstarted)
            .on('drag', dragged)
            .on('end', dragended),
        ); // 通过.call(d3.drag()) 设置节点可以拖拽

      node
        .append('circle')
        .attr('r', 15)
        .attr('cx', d => d.x)
        .attr('cy', d => d.y)
        .attr('fill', d => (d.symbol === 'nodeIcon' ? 'red' : 'green'));

      const label = node
        .append('text')
        .attr('dy', '.35em')
        .attr('dx', 12)
        .text(d => d.id);

      node
        .append('image')
        .attr('xlink:href', 'https://github.com/favicon.ico')
        .attr('x', -8)
        .attr('y', -8)
        .attr('width', 16)
        .attr('height', 16);

      node.exit().remove();
      node = node.enter().merge(node);

      // simulation.on('end', () => {
      //   node.each((d) => {
      //     d.fx = d.x;
      //     d.fy = d.y;
      //   });
      // });
      // simulation.alphaTarget(0.3);
      // simulation.restart();
      simulation.nodes(nodes).on('tick', ticked); // 把node画在画布上
      // simulation.initialize(nodes);
      // return;
      simulation.force('link').links(links); // 把link画在画布上
      // simulation.stop();

      function ticked() {
        link.attr('d', positionLink); // 每个link上有三个点，每次tick 都要重新画一遍link
        node.attr('transform', positionNode);
        label.attr('x', d => 8).attr('y', d => 0);
        // node.select('circle').attr('cx', d => d.x).attr('cy', d => d.y);
        // node.attr('cx', d => d.x).attr('cy', d => d.y);
      }
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

