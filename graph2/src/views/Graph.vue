<template>
  <div class="graph">
     <svg class="chart" width="800" height="600"></svg>
  </div>
</template>
<script>
import D3Graph from '../D3Graph'
import graphData from '../jsons/graph.json'
export default {
  name: 'graph',
  data () {
    return {
      d3Graph: null
    }
  },
  mounted () {
    this.d3Graph = new D3Graph('.chart')
    this.render()
  },
  methods: {
    render () {
      this.d3Graph.addNodes(graphData.nodes, graphData.links)
    }
  }
}
</script>
<style scoped>
.graph{
  display: flex;
  justify-content: center;
}
.chart{
  border:1px solid red
}
</style>
