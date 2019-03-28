<template>
  <div class="container">
    <div class="search-box">
      <div class="search">
        <div class="search-input">
          <input type="text" placeholder="请输入关键词" v-if="!isGraph">
          <template v-else>
            <input type="text" placeholder="路径起点">
            <span class="splide-line">---</span>
            <input type="text" placeholder="路径终点">
          </template>
        </div>
        <div class="search-btn" @click="handleSearch">搜索</div>
      </div>
      <div class="search-checkbox">
        <input id="checkbox" type="checkbox" v-model="isGraph">
        <label for="checkbox" class="label-text">关系图谱</label>
      </div>
    </div>
    <div class="character-box">
      <div class="character">
       维度丰富
覆盖了工商、司法涉诉、经营、税务、资产、舆情等120+维度，700+指标，结构化信息
      </div>
      <div class="character">
      实时更新
对各数据源与千万级站点信息进行实时数据对接、实时监测，实时采集，并实时推送
自然语言处理
      </div>
      <div class="character">
        深度挖掘
基于启信宝1.8亿+企业大数据挖掘出的企业关联关系网，不仅可以监控目标企业动态，还可以监控跟目标企业关系密切的企业及个人的相关动态
      </div>
      <div class="character">
     减少数据对接成本
启信宝1.8亿+企业大数据，均已对接知识图谱平台，减少开发过程中的信息提取、数据清洗、数据融合、系统对接问题
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'index',
  data () {
    return {
      isGraph: false
    }
  },
  methods: {
    handleSearch () {
      if (this.isGraph) {
        this.$router.push('/relation')
      } else {
        this.$router.push('/list')
      }
    }
  }
}
</script>
<style scoped>
.container {
  padding-top: 100px;
}
.search-box {
  width: 600px;
  margin: 0 auto;
}
.search {
  display: flex;
}
.search-input {
  flex-grow: 2;
  display: flex;
  border: 1px solid #e0e0e0;
  align-items: center;
}
.splide-line {
  margin: 0 10px;
  white-space: nowrap
}

.search-input input {
  width: 100%;
  height: 40px;
  font-size: 18px;
  padding-left: 15px;
  border: none;
}
.search-input input:focus,
.search-input input:active {
  /* border:none; */
  outline: none;
}
.search-btn {
  background: #023d6f;
  width: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  color: #fff;
  font-size: 18px;
  margin-left: 10px;
}
.label-text {
  font-size: 14px;
  color: #023d6f;
}
.search-checkbox {
  display: flex;
  align-items: center;
  padding-top: 5px;
  padding-left: 5px;
}
.search-checkbox input {
  border-color: #023d6f;
  margin-right: 3px;
}
.character-box{
  display: flex;
  justify-content: space-around;
  width: 840px;
  margin: 0 auto;
  margin-top: 100px;
  font-size: 17px;
}
.character{
  width: 180px;
  border:1px solid #e0e0e0;
  border-radius: 5px;
  padding: 15px 10px;
}
</style>
