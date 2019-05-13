<template>
  <div class="points-chart">
    <svg ref="pointSvg"></svg>
    <el-button @click="groupBy">分组</el-button>
  </div>
</template>

<script>
import * as d3 from 'd3';
import { rollup } from 'd3-array';

const color = d3.scaleSequential([8, 0], d3.interpolateMagma);
const format = d3.format(',d');
const height = 400;
const width = 1075;

const cate1 = ['AA', 'AB', 'AC', 'AD', 'AE'];
const cate2 = ['BA', 'BB', 'BC', 'BD', 'BE'];

const nodes = [];

for (let i = 200; i--;) {
  const random1 = Math.floor(Math.random() * 5);
  const random2 = Math.floor(Math.random() * 5);
  nodes.push({
    value: i,
    self: i,
    cate1: cate1[random1],
    cate2: cate2[random2],
  });
}

export default {
  name: 'points-chart',
  data() {
    return {
      svg: null,
      graphBox: null,
    };
  },
  created() {},
  mounted() {
    this.$nextTick(this.init);
  },
  methods: {
    init() {
      this.svg = d3
        .select(this.$refs.pointSvg)
        .style('font', '10px sans-serif');
      // .style('width', width)
      // .style('height', height)
      // .style('overflow', 'visible');

      this.svg.call(
        d3
          .zoom()
          .scaleExtent([1 / 10, 8])
          .on('zoom', this.zoomed),
      );
      this.graphBox = this.svg.append('g');
      this.generateData();
    },
    zoomed() {
      this.graphBox.attr('transform', d3.event.transform);
    },
    generateData() {
      const roopData = rollup(
        nodes,
        // v => d3.sum(v, d => d.value),
        v => d3.sum(v, d => 1),
        // d => d.cate1,
        // d => d.cate2,
        d => d.self,
      );

      const root = d3
        .hierarchy(
          [null, roopData],
          ([, value]) => value.size && Array.from(value),
        )
        .sum(([, value]) => value)
        .sort((a, b) => b.value - a.value);

      const pack = () =>
        d3
          .pack()
          .size([width, height])
          .padding(2)(root);

      const rootData = pack(nodes);

      this.render(rootData);
    },
    groupBy() {
      const roopData = rollup(
        nodes,
        // v => d3.sum(v, d => d.value),
        v => d3.sum(v, d => 1),
        d => d.cate1,
        // d => d.cate2,
        d => d.self,
      );

      const root = d3
        .hierarchy(
          [null, roopData],
          ([, value]) => value.size && Array.from(value),
        )
        .sum(([, value]) => value)
        .sort((a, b) => b.value - a.value);

      const pack = () =>
        d3
          .pack()
          .size([width, height])
          .padding(2)(root);

      const rootData = pack(nodes);

      this.render(rootData);
    },
    render(rootData) {
      this.graphBox.selectAll('g').remove();

      this.graphBox
        .append('g')
        .attr('fill', '#ccc')
        .selectAll('circle')
        .data(rootData.leaves())
        .join('circle')
        .attr('transform', d => `translate(${d.x},${d.y})`)
        .attr('r', d => d.r)
        .append('title')
        .text(
          d =>
            `${d
              .ancestors()
              .map(d => d.data[0])
              .reverse()
              .join('/')}\n${format(d.value)}`,
        );

      this.graphBox
        .append('g')
        .attr('pointer-events', 'none')
        .attr('text-anchor', 'middle')
        .selectAll('text')
        .data(rootData.leaves().filter(d => d.r > 2))
        .join('text')
        .attr('transform', d => `translate(${d.x},${d.y}) scale(${d.r / 30})`)
        .selectAll('tspan')
        .data(d => `${d.data[0]}`.split(/\s+/g))
        .join('tspan')
        .attr('x', 0)
        .attr('y', (d, i, nodes) => `${i - nodes.length / 2 + 0.8}em`)
        .text(d => d);
    },
  },
};
</script>

<style>
.points-chart {
  height: 400px;
  width: 900px;
}
svg{
  height: 100%;
  width: 100%;
}
</style>

