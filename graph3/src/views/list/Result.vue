<template>
  <div class="container">
    <div class="inline-container">
      <div class="r-title">
        天天成长A
        <span class="r-subtitle">理财产品(T01LK180001)</span>
      </div>
      <div class="r-tags">
        <div class="r-tag">中低风险</div>
        <div class="r-tag">1万元起购</div>
        <div class="r-tag">T+0赎回200万</div>
      </div>
      <div class="r-content-box">
        <div class="r-rate-box">
          <div class="r-rate">3.721%</div>
          <div class="r-rate-str">七日年化收益率</div>
        </div>
        <div class="r-rate-box">
          <div class="r-rate">1.0489元</div>
          <div class="r-rate-str">万份收益（2019-4-15）</div>
        </div>
      </div>
    </div>
    <div class="line"></div>
     <!-- <product-list :list="showList"  /> -->
     <result-item
          v-for="item in showList"
          :key="item.title"
          :activeIndex="4"
          :item="item"
        />
  </div>
</template>
<script>

import productList from '../../jsons/news_list.json'

import ResultItem from './ResultItem'
export default {
  name: 'result',
  components: {
    ResultItem
  },
  data () {
    return {
      showList: productList.data
    }
  }
}
</script>
<style scoped>
.container {
  padding: 20px;
}
.inline-container {
  padding: 20px;
  border: 1px solid #023d6f;
  max-width: 500px;
}
.r-title {
  font-size: 22px;
}
.r-subtitle {
  font-size: 14px;
  color: #888;
  margin-left: 15px;
}
.r-tags {
  display: flex;
  margin-top: 10px;
}
.r-tag {
  font-size: 14px;
  background: #f0f0f0;
  color: #888;
  margin-right: 10px;
  border-radius: 3px;
  padding: 2px 5px;
}
.r-content-box {
  background: #023d6f30;
  margin-top: 10px;
  display: flex;
  padding: 10px 0;
  max-width: 450px;
}
.r-rate-box:first-child {
  border-right: 1px solid #888;
}
.r-rate-box {
  width: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
}
.r-rate {
  color: #444;
  font-size: 22px;
}
.r-rate-str {
  color: #666;
  font-size: 14px;
}
.r-rate-box:first-child .r-rate {
  color: #023d6f;
}

.line{
  border-top: 3px solid #e0e0e0;
  margin: 20px 0;
}
</style>
