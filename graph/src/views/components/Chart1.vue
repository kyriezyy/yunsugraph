<template>
  <div class="chart-container">
    <div class="titile">过去30天“二苯基硅二醇”百度搜索趋势</div>
    <div class="charts" ref="chart"></div>
  </div>
</template>

<script>
import echarts from 'echarts';

export default {
  name: 'chart1',
  data() {
    return {
      chart: null,
    };
  },
  mounted() {
    this.chart = echarts.init(this.$refs.chart);
    this.chart.setOption({
      color: ['#3398DB'],
      tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisTick: {
            alignWithLabel: true,
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
        },
      ],
      series: [
        {
          name: '直接访问',
          type: 'bar',
          barWidth: '60%',
          data: [10, 52, 200, 334, 390, 330, 220],
        },
      ],
    });
  },
  beforeDestroy() {
    this.chart.dispose();
  },
};
</script>

<style scoped>
.chart-container{
  display: inline-block;
   width: 400px;
  height: 400px;
}
.charts {
  width: 300px;
  height: 300px;
}
.titile{
  text-align: center;
}

</style>
