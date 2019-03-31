<template>
  <div>
    <div class="titile">过去30天“二苯基硅二醇”百度搜索趋势</div>
    <div class="charts" ref="chart"></div>
  </div>
</template>

<script>
import echarts from 'echarts'

export default {
  name: 'baiduzhishu',
  mounted () {
    let chart = echarts.init(this.$refs.chart)
    chart.setOption({
      xAxis: {
        type: 'category',
        boundaryGap: false
        // data: ['2019-', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [
            ['2019-3-1', 122],
            ['2019-3-2', 133],
            ['2019-3-3', 100],
            ['2019-3-4', 90],
            ['2019-3-5', 232],
            ['2019-3-6', 333],
            ['2019-3-7', 151],
            ['2019-3-8', 173],
            ['2019-3-9', 184],
            ['2019-3-10', 154],
            ['2019-3-11', 200],
            ['2019-3-12', 250],
            ['2019-3-13', 204],
            ['2019-3-14', 188],
            ['2019-3-15', 144],
            ['2019-3-16', 139],
            ['2019-3-17', 102],
            ['2019-3-18', 90],
            ['2019-3-19', 80],
            ['2019-3-20', 93],
            ['2019-3-21', 88],
            ['2019-3-22', 130],
            ['2019-3-23', 128],
            ['2019-3-24', 120],
            ['2019-3-25', 150],
            ['2019-3-26', 140],
            ['2019-3-27', 130],
            ['2019-3-28', 122],
            ['2019-3-29', 135],
            ['2019-3-30', 129],
            ['2019-3-31', 110]
          ],
          type: 'line',
          smooth: true,
          lineStyle: {
            color: 'rgb(2, 62, 111)'
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgb(2, 62, 111)'
            }, {
              offset: 1,
              color: 'rgb(142, 170, 231)'
            }])
          }
        }
      ]
    })
  }
}
</script>

<style scoped>
.charts {
  width: 900px;
  height: 400px;
}
.titile{
  text-align: center;
}
</style>
