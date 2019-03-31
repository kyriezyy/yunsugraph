<template>
  <div>
    <div class="titile">过去30天“二苯基硅二醇”百度搜索趋势</div>
    <div class="charts" ref="chart"></div>
    <table>
      <tr class="header">
        <td>关键词</td>
        <td>整体日均值</td>
        <td>移动日均值</td>
        <td>整体同比</td>
        <td>整体环比</td>
        <td>移动同比</td>
        <td>移动环比</td>
      </tr>
      <tr class="body">
        <td>二苯基硅二醇</td>
        <td>186</td>
        <td>103</td>
        <td>10% <img width="10" height="12" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwIDEwMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6I2ZhN2M2Mjt9DQo8L3N0eWxlPg0KPHBvbHlnb24gaWQ9IlhNTElEXzVfIiBjbGFzcz0ic3QwIiBwb2ludHM9IjUwLDIuMiAxMi44LDU3LjcgMzYuNyw1Ny43IDM2LjcsOTcuOCA2My42LDk3LjggNjMuNiw1Ny43IDg3LjIsNTcuNyAiLz4NCjwvc3ZnPg0K" style="vertical-align: middle;"></td>
        <td>12% <img width="10" height="12" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwIDEwMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6I2ZhN2M2Mjt9DQo8L3N0eWxlPg0KPHBvbHlnb24gaWQ9IlhNTElEXzVfIiBjbGFzcz0ic3QwIiBwb2ludHM9IjUwLDIuMiAxMi44LDU3LjcgMzYuNyw1Ny43IDM2LjcsOTcuOCA2My42LDk3LjggNjMuNiw1Ny43IDg3LjIsNTcuNyAiLz4NCjwvc3ZnPg0K" style="vertical-align: middle;"></td>
        <td>9% <img width="10" height="12" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwIDEwMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6I2ZhN2M2Mjt9DQo8L3N0eWxlPg0KPHBvbHlnb24gaWQ9IlhNTElEXzVfIiBjbGFzcz0ic3QwIiBwb2ludHM9IjUwLDIuMiAxMi44LDU3LjcgMzYuNyw1Ny43IDM2LjcsOTcuOCA2My42LDk3LjggNjMuNiw1Ny43IDg3LjIsNTcuNyAiLz4NCjwvc3ZnPg0K" style="vertical-align: middle;"></td>
        <td>13% <img width="10" height="12" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwIDEwMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6I2ZhN2M2Mjt9DQo8L3N0eWxlPg0KPHBvbHlnb24gaWQ9IlhNTElEXzVfIiBjbGFzcz0ic3QwIiBwb2ludHM9IjUwLDIuMiAxMi44LDU3LjcgMzYuNyw1Ny43IDM2LjcsOTcuOCA2My42LDk3LjggNjMuNiw1Ny43IDg3LjIsNTcuNyAiLz4NCjwvc3ZnPg0K" style="vertical-align: middle;"></td>
      </tr>
    </table>
  </div>
</template>

<script>
import echarts from 'echarts'

export default {
  name: 'baiduzhishu',
  data () {
    return {
      chart: null
    }
  },
  mounted () {
    this.chart = echarts.init(this.$refs.chart)
    this.chart.setOption({
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
  },
  beforeDestroy () {
    this.chart.dispose()
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
table{
  border-collapse: collapse;
  width: 900px;
  text-align: center;
}
td{
  border:1px solid #e0e0e0;
  height: 40px;
  vertical-align: middle;
  font-weight: 300
}
</style>
