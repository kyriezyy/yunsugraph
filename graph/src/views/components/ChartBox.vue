<template>
  <div class="chart-box">
    <chart1 />
    <chart2 />
  </div>
</template>
<script>
import Chart1 from './Chart1';
import Chart2 from './Chart2';

export default {
  name: 'chart-box',
  components: {
    Chart1,
    Chart2,
  },
};
</script>

<style scoped>
.chart-box{
  display: flex;
  flex-flow: row wrap;
}
</style>

