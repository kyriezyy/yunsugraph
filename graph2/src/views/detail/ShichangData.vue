<template>
  <div>
    <div class="titile">"二苯基硅二醇"市场价格图</div>
    <div class="charts" ref="chart"></div>
    <div class="titile">"二苯基硅二醇" 供应商列表</div>
    <ul class="company-list">
      <li class="company-item" v-for="(item,index) in list" :key="index">
        <span class="index">{{index+1}}.</span>
        <span class="name">{{item}}</span>
        <span class="detail">详情</span>
      </li>
      <li class="company-item more">更多</li>

    </ul>
  </div>
</template>
<script>
import echarts from 'echarts'

export default {
  name: 'shichang-data',
  data () {
    return {
      list: ['上海联硕生物科技有限公司', '山东小野化学股份有限公司', '上海澄绍生物科技有限公司', '北京百灵威科技有限公司', '金锦乐化学有限公司', '上海金锦乐实业有限公司', '上海皓鸿生物医药科技有限公司']
    }
  },
  mounted () {
    let chart = echarts.init(this.$refs.chart)
    chart.setOption({
      xAxis: {
        type: 'category',
        nameLocation: 'end',
        name: '价格(元/20kg)',
        boundaryGap: false,
        data: ['100', '120', '140', '160', '180', '200', '220', '240', '260']
      },
      yAxis: {
        type: 'value',
        name: '占比%'
      },
      series: [
        {
          data: [0, 5, 12, 30, 33, 18, 6, 5, 0],
          type: 'line',
          smooth: true,
          lineStyle: {
            color: 'rgb(2, 62, 111)'
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgb(2, 62, 111)'
              },
              {
                offset: 1,
                color: 'rgb(142, 170, 231)'
              }
            ])
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
.titile {
  text-align: center;
}
.company-list{
  width: 700px;
  margin: 0 auto;
  padding: 20px;
}
.company-item{
  height: 40px;
  display: flex;
  align-items: center;
  border-bottom: 1px dashed #e0e0e0;
  cursor: pointer;
}
.name{
  flex-grow: 2;
}
.detail{
  font-size: 14px;
  color: #023d6f
}
.company-item.more{
  justify-content: flex-end;
  border-bottom: none;
   font-size: 14px;
  color: #023d6f
}
</style>
