<template>
  <div class="container">
    <div class="main">
      <div class="graph-box" id="graph">graph-box</div>
      <div class="info-box">
        <div class="section" id="jibenxinxi">
          <div class="section-title">基本信息</div>
          <div class="content">
            <div class="params-box">
              <div class="param-item" v-for="(value,key) in detail.product_info" :key="key">
                <span class="key">{{key}}：</span>
                <span class="value">{{value}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="section" id="wuhuaxingzhi">
          <div class="section-title">物化性质</div>
          <div class="content">
            <div class="params-box">
              <div class="param-item" v-for="(value,key) in detail.detail_quality" :key="key">
                <span class="key">{{key}}</span>
                <span class="value">{{value}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="section" id="anquanxinxi">
          <div class="section-title">安全信息</div>
          <div class="content">
            <div class="params-box">
              <div class="param-item" v-for="(value,key) in detail.safe_info" :key="key">
                <span class="key">{{key}}：</span>
                <span class="value">{{value}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="section" id="sds">
          <div class="section-title">SDS</div>
          <div class="content">
            <div v-html="detail.sds.sds"></div>
          </div>
        </div>
        <div class="section" id="msds">
          <div class="section-title">MSDS</div>
          <div class="content">
            <div v-html="detail.msds"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="nav-box">
      <a class="nav-item" href="#graph">图谱</a>
      <a class="nav-item" href="#jibenxinxi">基本信息</a>
      <a class="nav-item" href="#wuguanxingzhi">物化性质</a>
      <a class="nav-item" href="#anquanxinxi">安全信息</a>
      <a class="nav-item" href="#sds">SDS</a>
      <a class="nav-item" href="#msds">MSDS</a>
    </div>
  </div>
</template>
<script>
import detail from '../jsons/detail.json'

console.log(detail)
export default {
  name: 'detail',
  data () {
    return {
      detail: detail
    }
  }
}
</script>
<style scoped>
.container {
  height: calc(100% - 60px);

  position: relative;
}
.main{
  height: 100%;
  padding: 20px;
  overflow: auto;
}
.section {
  margin: 20px 0;
  border: 1px solid #eaeaea;
}
.section-title {
  font-size: 16px;
  background: #eaeaea;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 20px;
}
.content {
  padding: 20px;
}
.param-item {
  display: flex;
  margin: 5px 0;
}
.key {
  width: 130px;
  flex-shrink: 0;
  color: #888;
}
.value {
  font-size: 14px;
}
.nav-box {
  position: absolute;
  left: 50%;
  margin-left: -520px;
  top: 350px;
  display: flex;
  flex-direction: column;
  text-align: right
}
.nav-box a{
  color:#023d6f
}
.info-box {
  width: 900px;
  margin: 0 auto;
}
</style>
