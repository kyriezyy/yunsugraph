<template>
  <div class="analysis">

    <div class="filter">
      <el-tabs v-model="activeName" @tab-click="handleClick" class="tabs" :stretch="true">
        <el-tab-pane label="分数最高" name="first">
          <div class="analysis-content">
            <div class="analysis-table">
              <div class="title">
                <p>合成路线</p>
              </div>
              <div>
                <img src="../assets/1.jpg" alt="" class="images">
              </div>
            </div>

            <div class="analysis-table">
              <div class="title">
                <p>方案评分</p>
              </div>
              <div class="list">
                <div class="items">
                  <span>复杂程度:</span>
                  <el-rate v-model="value1"
                           disabled
                           show-score
                           text-color="#ff9900"
                           :colors="colors"
                           class="score"></el-rate>
                </div>
                <div class="items">
                  <span>转化率:</span>
                  <el-rate v-model="value2"
                           disabled
                           show-score
                           text-color="#ff9900"
                           :colors="colors"
                           class="score"></el-rate>
                </div>
                <div class="items">
                  <span>环保程度:</span>
                  <el-rate v-model="value3"
                           disabled
                           show-score
                           text-color="#ff9900"
                           :colors="colors"
                           class="score"></el-rate>
                </div>
                <div class="items">
                  <span>专利公开程度:</span>
                  <el-progress :text-inside="true"
                               :stroke-width="18"
                               :percentage="57"
                               color="rgba(113, 182, 199, 0.7)"
                               class="score"></el-progress>
                </div>
              </div>
            </div>

            <div class="analysis-table">
              <div class="title">
                <p>报表展示</p>
              </div>
              <div class="charts">
                <div class="pie" ref="pie"></div>
                <div class="pie" ref="bar"></div>
              </div>
            </div>

            <div class="analysis-table">
              <div class="title common-title">

                <span>综合评分:</span>
                <el-rate v-model="common"
                         disabled
                         show-score
                         text-color="#ff9900"
                         :colors="colors"
                         class="score"></el-rate>
              </div>
              <div class="common">
                <p>优势：该方案原料低，转化率高</p>
                <p>劣势：中间产物翔基碳酸钠毒性较大，环保低</p>
              </div>

            </div>

          </div>
        </el-tab-pane>
        <el-tab-pane label="成本最低" name="second">
          <div class="analysis-content">
            <div class="analysis-table">
              <div class="title">
                <p>合成路线</p>
              </div>
              <div>
                <img src="../assets/2.jpg" alt="" class="images">
              </div>
            </div>

            <div class="analysis-table">
              <div class="title">
                <p>方案评分</p>
              </div>
              <div class="list">
                <div class="items">
                  <span>复杂程度:</span>
                  <el-rate v-model="value4"
                           disabled
                           show-score
                           text-color="#ff9900"
                           :colors="colors"
                           class="score"></el-rate>
                </div>
                <div class="items">
                  <span>转化率:</span>
                  <el-rate v-model="value5"
                           disabled
                           show-score
                           text-color="#ff9900"
                           :colors="colors"
                           class="score"></el-rate>
                </div>
                <div class="items">
                  <span>环保程度:</span>
                  <el-rate v-model="value6"
                           disabled
                           show-score
                           text-color="#ff9900"
                           :colors="colors"
                           class="score"></el-rate>
                </div>
                <div class="items">
                  <span>专利公开程度:</span>
                  <el-progress :text-inside="true"
                               :stroke-width="18"
                               :percentage="70"
                               color="rgba(113, 182, 199, 0.7)"
                               class="score"></el-progress>
                </div>
              </div>
            </div>

            <div class="analysis-table">
              <div class="title">
                <p>报表展示</p>
              </div>
              <div class="charts">
                <div class="pie" ref="pie2"></div>
                <div class="pie" ref="bar2"></div>
              </div>
            </div>

            <div class="analysis-table">
              <div class="title common-title">

                <span>综合评分:</span>
                <el-rate v-model="common2"
                         disabled
                         show-score
                         text-color="#ff9900"
                         :colors="colors"
                         class="score"></el-rate>
              </div>
              <div class="common">
                <p>优势：该方案原料价格低，供应渠道充足，且有附属产品</p>
                <p>劣势：转化率较低，生产条件要求高</p>
              </div>

            </div>

          </div>
        </el-tab-pane>
        <el-tab-pane label="路劲最短" name="third">
          <div class="analysis-content">
            <div class="analysis-table">
              <div class="title">
                <p>合成路线</p>
              </div>
              <div>
                <img src="../assets/3.jpg" alt="" class="images">
              </div>
            </div>

            <div class="analysis-table">
              <div class="title">
                <p>方案评分</p>
              </div>
              <div class="list">
                <div class="items">
                  <span>复杂程度:</span>
                  <el-rate v-model="value7"
                           disabled
                           show-score
                           text-color="#ff9900"
                           :colors="colors"
                           class="score"></el-rate>
                </div>
                <div class="items">
                  <span>转化率:</span>
                  <el-rate v-model="value8"
                           disabled
                           show-score
                           text-color="#ff9900"
                           :colors="colors"
                           class="score"></el-rate>
                </div>
                <div class="items">
                  <span>环保程度:</span>
                  <el-rate v-model="value9"
                           disabled
                           show-score
                           text-color="#ff9900"
                           :colors="colors"
                           class="score"></el-rate>
                </div>
                <div class="items">
                  <span>专利公开程度:</span>
                  <el-progress :text-inside="true"
                               :stroke-width="18"
                               :percentage="80"
                               color="rgba(113, 182, 199, 0.7)"
                               class="score"></el-progress>
                </div>
              </div>
            </div>

            <div class="analysis-table">
              <div class="title">
                <p>报表展示</p>
              </div>
              <div class="charts">
                <div class="pie" ref="pie3"></div>
                <div class="pie" ref="bar3"></div>
              </div>
            </div>

            <div class="analysis-table">
              <div class="title common-title">

                <span>综合评分:</span>
                <el-rate v-model="common2"
                         disabled
                         show-score
                         text-color="#ff9900"
                         :colors="colors"
                         class="score"></el-rate>
              </div>
              <div class="common">
                <p>优势：该方案反应过程简单，设备成本较低，且有附属品</p>
                <p>劣势：原料供应渠道单一，成本较高</p>
              </div>

            </div>

          </div>

        </el-tab-pane>
      </el-tabs>
      <!--<span>分数最高</span><span>成本最低</span><span>路劲最短</span>-->
    </div>

  </div>
</template>

<script>

import ECharts from 'echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'

export default {
  name: 'Analysis',
  components: {
    'v-chart': ECharts
  },
  data () {
    return {
      activeName: 'first',
      value1: 3.5,
      value2: 4.1,
      value3: 2.9,
      colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
      common: 3.6,
      value4: 4.2,
      value5: 2.8,
      value6: 3.1,
      common2: 3.3,
      value7: 2.6,
      value8: 3.8,
      value9: 3.6,
      common3: 3.1
    }
  },
  methods: {
    handleClick (tab, e) {
      if (tab.name === 'second') {
        this.setSecond()
      } else {
        this.setThird()
      }
      // this.setThird()
    },
    setfirst () {
      let pieChart = ECharts.init(this.$refs.pie)
      let option = {
        title: {
          text: '所需原料占比',
          subtext: '',
          x: 'center'
        },
        // width: '100px',
        // height: 300,
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        // legend: {
        //   orient: 'vertical',
        //   left: 'left',
        //   data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        // },
        series: [
          {
            name: '占比',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              {value: 335, name: '苯基三氯硅烷'},
              {value: 310, name: '氯苯'},
              {value: 234, name: '联苯'},
              {value: 135, name: '翔基碳酸钠'}
              // {value: 1548, name: '搜索引擎'}
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
      pieChart.setOption(option)

      let barChart = ECharts.init(this.$refs.bar)

      let barOptions = {
        color: ['#3398DB'],
        title: {
          text: '原料价格',
          subtext: '',
          x: 'center'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['苯基三氯硅烷', '氯苯', '联苯', '翔基碳酸钠'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '价格',
            type: 'bar',
            barWidth: '60%',
            data: [30, 52, 26, 50]
          }
        ]
      }

      barChart.setOption(barOptions)
    },
    setSecond () {
      this.$nextTick(function () {
        let pieChart = ECharts.init(this.$refs.pie2)
        let option = {
          title: {
            text: '所需原料占比',
            subtext: '',
            x: 'center'
          },
          // width: '100px',
          // height: 300,
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          // legend: {
          //   orient: 'vertical',
          //   left: 'left',
          //   data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
          // },
          series: [
            {
              name: '占比',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              data: [
                {value: 335, name: '氯苯'},
                {value: 310, name: '羟基碳酸钠'}
                // {value: 234, name: '联苯'},
                // {value: 135, name: '翔基碳酸钠'}
                // {value: 1548, name: '搜索引擎'}
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        }
        pieChart.setOption(option)

        let barChart = ECharts.init(this.$refs.bar2)

        let barOptions = {
          color: ['#3398DB'],
          title: {
            text: '原料价格',
            subtext: '',
            x: 'center'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              data: ['氯苯', '翔基碳酸钠'],
              axisTick: {
                alignWithLabel: true
              }
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '价格',
              type: 'bar',
              barWidth: '60%',
              data: [24, 20]
            }
          ]
        }

        barChart.setOption(barOptions)
      })
    },
    setThird () {
      this.$nextTick(function () {
        let pieChart = ECharts.init(this.$refs.pie3)
        let option = {
          title: {
            text: '所需原料占比',
            subtext: '',
            x: 'center'
          },
          // width: '100px',
          // height: 300,
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          // legend: {
          //   orient: 'vertical',
          //   left: 'left',
          //   data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
          // },
          series: [
            {
              name: '占比',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              data: [
                {value: 335, name: '[4-(二甲基氨基)苯基]锂'},
                {value: 300, name: '二苯二氯硅烷'}
                // {value: 234, name: '联苯'},
                // {value: 135, name: '翔基碳酸钠'}
                // {value: 1548, name: '搜索引擎'}
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        }
        pieChart.setOption(option)
        let barChart = ECharts.init(this.$refs.bar3)
        let barOptions = {
          color: ['#3398DB'],
          title: {
            text: '原料价格',
            subtext: '',
            x: 'center'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              data: ['[4-(二甲基氨基)苯基]锂', '二苯二氯硅烷'],
              axisTick: {
                alignWithLabel: true
              }
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '价格',
              type: 'bar',
              barWidth: '60%',
              data: [60, 53]
            }
          ]
        }
        barChart.setOption(barOptions)
      })
    }
  },
  mounted () {
    this.setfirst()
    // this.setSecond()
  }
}
</script>

<style scoped>

  .analysis{
    overflow: auto;
    height: calc(100% - 1px);
  }

  .filter{
    width: 80%;
    /*height: 30px;*/
    /*background-color: #e1faff;*/
    margin: 20px auto;
    /*line-height: 30px;*/
    display: flex;
    justify-content: space-around;
    /*font-size: 22px;*/
    /*font-family: sans-serif;*/
    /*border-radius: 5px;*/
  }

  .tabs{
    width: 100%;
  }

  .analysis-content{
    width: 100%;
    /*margin: 20px auto;*/
  }

  .analysis-table{
    margin: 20px 0;
    border: 1px solid #dddddd;
    /*min-height: 200px;*/
  }

  .analysis-table:hover{
    box-shadow: 0 0 8px 0px #679cb4;
  }

  .title{
    display: block;
    height: 36px;
    line-height: 36px;
    width: 100%;
    overflow: hidden;
    padding: 0 9px;
    background: #e1faff;
  }

  .images{
    width: 50%;
    height: 300px;
  }

  .list{
    margin: 15px 40px;
  }

  .items{
    display: flex;
    justify-content: left;
    margin: 20px 0;
    line-height: 30px;
  }

  .items span{
    margin-right: 10px;
    font-size: 18px;
  }

  .score {
    padding: 6px 0;
    width: 40%;
  }

  .charts{
    display: flex;
    justify-content: space-around;
  }

  .pie{
    min-height: 300px;
    width: 40%;
    margin: 20px;
  }

  .common-title{
    display: flex;
    justify-content: left;
  }

  .common-title .score{
    padding: 8px;
  }

  .common{
    margin: 15px 40px;
    line-height: 30px;
    font-size: 18px;
  }

</style>
