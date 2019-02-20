<template>
  <div>

   <svg class="chart"></svg>

   <button @click="zoomAdd">放大</button>
   <button @click="zoomReduce">缩小</button>
  </div>
</template>
<script>
// import echarts from 'echarts';
// import graph from '../graph.json'
//   ;

import * as d3 from 'd3';
import { forceSimulation } from 'd3-force';

console.log(d3);


const drag = (simulation) => {
  function dragstarted(d) {
    if (!d3.event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  function dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
  }

  function dragended(d) {
    if (!d3.event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }

  return d3.drag()
    .on('start', dragstarted)
    .on('drag', dragged)
    .on('end', dragended);
};
const scale = d3.scaleOrdinal(d3.schemeCategory10);
const color = d => scale(d.group);
export default {
  name: 'demo',
  data() {
    return {
      chart: null,
      zoom: null,
      svg: null,
    };
  },
  created() {
  },
  mounted() {
    this.renderGraph();

    // const nodes = [];
    // const simulation = d3.forceSimulation(nodes);
  },
  methods: {
    async renderGraph() {
      this.zoom = d3.zoom().on('zoom', this.zoomd);


      const width = 1000;
      const height = 600;
      const data = await d3.json('https://gist.githubusercontent.com/mbostock/4062045/raw/5916d145c8c048a6e3086915a6be464467391c62/miserables.json');

      const links = data.links.map(d => Object.create(d));
      const nodes = data.nodes.map(d => Object.create(d));

      const simulation = d3.forceSimulation(nodes)
        .force('link', d3.forceLink(links).id(d => d.id))
        .force('charge', d3.forceManyBody())
        .force('center', d3.forceCenter(width / 2, height / 2));

      const svg = this.svg = d3.select('.chart');
      // this.zoom.scaleBy(this.svg, 1);
      svg.call(this.zoom);

      const link = svg.append('g')
        .attr('stroke', '#999')
        .attr('stroke-opacity', 0.6)
        .selectAll('line')
        .data(links)
        .join('line')
        .attr('stroke-width', d => Math.sqrt(d.value));

      const node = svg.append('g')
        .attr('stroke', '#fff')
        .attr('stroke-width', 1.5)
        .selectAll('circle')
        .data(nodes)
        .join('circle')
        .attr('r', 5)
        .attr('fill', color)
        .call(drag(simulation));

      node.append('title')
        .text(d => d.id);

      simulation.on('tick', () => {
        link
          .attr('x1', d => d.source.x)
          .attr('y1', d => d.source.y)
          .attr('x2', d => d.target.x)
          .attr('y2', d => d.target.y);

        node
          .attr('cx', d => d.x)
          .attr('cy', d => d.y);
      });

      // invalidation.then(() => simulation.stop());

      // return svg.node();
      // console.log(svg);
    },
    zoomd(a, b, c) {
      // console.log(a, b, c, d);
      // this.zoom.translateTo(this.svg, 2, 3);
      // const transform = this.zoom.transform(this.svg);
      // this.zoom.scaleBy(d3.event.transform, 1);
      this.svg.attr('transform', d3.event.transform);
      console.log(d3.event);
      // console.log(d3.event.transform.k);
      // this.svg.scale(2);
    },
    zoomAdd() {
      // const curValue = this.zoom.scale();
      // console.log(this.svg);
      const transform = d3.zoomTransform(this.svg.node());
      // transform.translate(30, 40);

      console.log(transform);
      // this.zoom.scaleTo(curValue + 1);
    },
    zoomReduce() {},
  },
};
</script>
<style scoped>
.chart{
  height: 600px;
  width: 1000px;
}
</style>
