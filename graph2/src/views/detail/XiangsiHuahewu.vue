<template>
  <div>
    <div class="titile">相似化学品</div>
    <div class="charts" ref="chart"></div>
  </div>
</template>

<script>
import echarts from 'echarts'

// {
// 	"data": {
// 		"chemical": ["磷酸二丁酯", "二苯基硅二醇", "硼酸三丁酯", "碳酸丙烯酯",
//  "L-苯丙氨酸", "6-氯氧化吲哚", "乙酰乙酸烯丙酯 ", "二苯二氯硅烷 ", "二苯基硅烷醇"],

// 		"property ": ["酸性 ", "碱性 ", "HNMR相似度 ", "折射率 ", "水溶解性 ", "分子量"]
// 	}
// }

export default {
  name: 'baiduzhishu',
  mounted () {
    var hours = [
      '酸性',
      '碱性',
      'HNMR相似度',
      '折射率',
      '水溶解性',
      '分子量'
    ]
    var days = []

    //  X 距离远近 Y 种类 Z 大小
    // var data = [
    //   [4, 4, 5],
    //   [4, 1, 10],
    //   [4, 2, 3],
    //   [4, 3, 4]
    // ]
    var data = [
      {
        name: '磷酸二丁酯',
        value: [4, 4, 5]
      },
      {
        name: '二苯基硅二醇',
        value: [2, 5, 10]
      }, {
        name: '硼酸三丁酯',
        value: [2, 3, 20]
      },
      {
        name: '碳酸丙烯酯',
        value: [3, 5, 10]
      },
      {
        name: 'L-苯丙氨酸',
        value: [2, 6, 10]
      },
      {
        name: '6-氯氧化吲哚',
        value: [4, 1, 10]
      },
      {
        name: '乙酰乙酸烯丙酯',
        value: [1, 2, 5]
      },
      {
        name: '二苯二氯硅烷',
        value: [3, 1, 10]
      },
      {
        name: '二苯基硅烷醇',
        value: [4, 0, 15]
      }
    ]

    let option = {
      polar: {},
      tooltip: {
        formatter: function (params) {
          return (params.name)
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
