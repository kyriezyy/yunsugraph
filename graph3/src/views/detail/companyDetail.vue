<template>
  <div class="container">
    <div class="block">

      <h1>{{basic.type}}</h1>
      <div class="page">
        <div style="width: 75px" class="logo">
          <img src="../../assets/companyLogo.png" class="logo" width="75px"/>
        </div>
          <div>
          <div class="title">
            <h2>{{basic.name}}</h2>
            <el-tag type="success">{{basic.state}}</el-tag>
          </div>
          <table class="tabless">

            <tr>
              <th>电话:</th>
              <td>{{basic.phone}}</td>
              <th>邮箱:</th>
              <td>{{basic.email}}</td>
            </tr>
            <tr>
              <th>网站:</th>
              <td>{{basic.website}}</td>
              <th>地址:</th>
              <td>{{basic.address}}</td>
            </tr>
            <tr>
              <th>介绍:</th>
              <td style="width: 80%;">{{basic.introduce}}</td>
            </tr>
          </table>
        </div>

      </div>
    </div>

    <div class="block">
      <h1>{{number.type}}</h1>
      <table class="tables">
        <tbody v-for="(pre, index) in number.persion" :key="index">
        <tr>
          <th>姓名:</th>
          <td>{{pre.name}}</td>
          <th>职位:</th>
          <td>{{pre.position}}</td>
        </tr>
        <tr>
          <th>介绍:</th>
          <td style="width: 85%;">{{pre.introduce}}</td>
        </tr>
        </tbody>
      </table>
    </div>

    <div class="block">
      <h1>{{history.type}}</h1>
      <table class="table">
        <tr>
          <th>编号</th>
          <th>时间</th>
          <th>规模</th>
          <th>金额</th>
          <th>资方</th>
        </tr>
        <tr v-for="(item, index) in history.data" :key="index">
          <td>{{ item.number }}</td>
          <td>{{ item.time }}</td>
          <td>{{ item.round }}</td>
          <td>{{ item.money }}</td>
          <td>{{ item.investor }}</td>
        </tr>
      </table>
    </div>

    <div class="block">
      <h1>{{history.type}}</h1>
      <el-tabs tab-position="left" style="margin: 10px" @tab-click="handleClick" v-model="activeName">
        <el-tab-pane v-for="(item, index) in finance.data" :label="item.info" :key="index" :name="index.toString()">
          <div :id="'line'+index" :ref="'line'+index" class="graph">
        </div>
        </el-tab-pane>
      </el-tabs>
    </div>

  </div>
</template>

<script>

import ECharts from 'echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'

import data from '../../jsons/companyDetail'

export default {
  name: 'companyDetail',
  data () {
    return {
      ...data,
      activeName: '0'
    }
  },
  methods: {
    getOption (xs, ys) {
      ys = ys.map(val => (parseInt(val / 100000000)))
      console.log(ys)
      // console.log(xs.length)
      return {
        xAxis: {
          type: 'category',
          data: xs
        },
        yAxis: {
          type: 'value',
          name: '亿'
        },
        series: [{
          name: '亿',
          data: ys,
          type: 'line',
          smooth: true,
          itemStyle: {
            color: 'rgb(255, 70, 131)'
          },
          areaStyle: {
            color: new ECharts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgb(255, 158, 68)'
            }, {
              offset: 1,
              color: 'rgb(255, 70, 131)'
            }])
          }
        }]
      }
    },
    initChart (index) {
      this.$nextTick(() => {
        let chart = ECharts.init(document.getElementById(`line${index}`))
        let x = this.finance.data[index].x
        let y = this.finance.data[index].y
        // console.log(x)
        // console.log(y)
        chart.setOption(this.getOption(x, y))
      })
    },
    handleClick (tab) {
      // console.log(this.activeName)
      this.initChart(parseInt(this.activeName))
    }
  },
  mounted () {
    // console.log(this.$refs['line' + (0).toString()])
    // this.finance.data.forEach((item, index) => {
    //   console.log(index)
    //   // this.initChart(index)
    // })
    // let chart = ECharts.init(this.$refs['line0'])
    this.initChart(0)
  }
}
</script>

<style scoped>
  .container {
    height: calc(100% - 1px);
    overflow: auto;
    margin: 0 auto;
    width: 80%;
  }

  .block {
    margin: 20px;
    /*border: 1px #dddddd solid;*/
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    padding: 10px;
    border-radius: 5px;
  }

  .kv {
    margin: 25px;
  }

  .block p {
    line-height: 25px;
  }

  .block h1 {
    font-size: 25px;
    padding: 10px;
    border-bottom: 1px #dddddd solid;;
    margin: 0;
    background-color: #71b0fb70;
  }

  .tables, .tabless, .table{
    width: 95%;
    margin: 10px auto;
    background-color: transparent;
    border-spacing: 0;
    border-collapse: collapse;
    border-color: grey;
    display: table;
  }

  .tables tr {
    display: flex;
    line-height: 36px;
    text-indent: 5px;
  }

  .tabless tr {
    display: flex;
    line-height: 36px;
    text-indent: 5px;
  }

  .tabless {
    background-color: rgba(0, 132, 255, 0.04);
  }

  .tables td {
    width: 35%;
    border: #E4EEF6 1px solid
  }

  .tabless td {
    width: 35%;
  }

  .tables th {
    width: 15%;
    background-color: aliceblue;
    border: #E4EEF6 1px solid
  }

  .tabless th {
    width: 15%;
    background-color: aliceblue;
    /*border: #E4EEF6 1px solid*/
  }

  .table tr {
    line-height: 36px;
  }

  .table th {
    background-color: aliceblue;
    border: #E4EEF6 1px solid
  }

  .table td {
    border: #E4EEF6 1px solid;
    text-align: center;
  }

  .title {
    display: flex;
    line-height: 31px;
    margin: 10px 0;
   }

  .title h2{
    margin-top: 0px;
    margin-bottom: 0px;
    display: inline;
    line-height: 31px;
    font-size: 22px;
    color: #000000;
    letter-spacing: 0;
    font-weight: 600;
    margin-right: 15px;
  }

  .page{
    display: flex;
    justify-content: space-between;
  }

  .logo{
    width: 75px;
    height: 75px;
    margin: 15px;
  }

  .graph{
    width: 100%;
    height: 500px;
    /*padding: 30px;*/
  }
</style>
