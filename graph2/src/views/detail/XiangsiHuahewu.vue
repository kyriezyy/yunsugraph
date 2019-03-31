<template>
  <div>
    <div class="titile">相似化学品</div>
    <div class="charts" ref="chart"></div>
  </div>
</template>

<script>
import echarts from 'echarts'

export default {
  name: 'baiduzhishu',
  mounted () {
    var hours = [
      '12a',
      '1a',
      '2a',
      '3a',
      '4a',
      '5a',
      '6a',
      '7a',
      '8a',
      '9a',
      '10a',
      '11a'
    ]
    var days = []

    var data = [
      [4, 0, 5],
      [4, 1, 1],
      [4, 2, 0],
      [4, 3, 0],
      [4, 4, 0],
      [5, 5, 20],
      [5, 6, 40],
      [5, 7, 0],
      [5, 8, 0],
      [5, 9, 0]
    ]

    let option = {
      polar: {},
      tooltip: {
        formatter: function (params) {
          return (
            params.value[2] +
            ' commits in ' +
            hours[params.value[1]] +
            ' of ' +
            days[params.value[0]]
          )
        }
      },
      angleAxis: {
        type: 'category',
        data: hours,
        boundaryGap: false,
        splitLine: {
          show: true,
          lineStyle: {
            color: '#999',
            type: 'dashed'
          }
        },
        axisLine: {
          show: false
        }
      },
      radiusAxis: {
        type: 'category',
        data: days,
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          rotate: 45
        }
      },
      series: [
        {
          name: 'Punch Card',
          type: 'scatter',
          coordinateSystem: 'polar',
          symbolSize: function (val) {
            return val[2] * 2
          },
          data: data,
          animationDelay: function (idx) {
            return idx * 5
          }
        }
      ]
    }
    let chart = echarts.init(this.$refs.chart)
    chart.setOption(option)
  }
}
</script>

<style scoped>
.charts {
  width: 900px;
  height: 400px;
}
.titile {
  text-align: center;
}
</style>
