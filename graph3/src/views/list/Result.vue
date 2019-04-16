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
      <div class="des">
        <p>
          本产品是开放式净值型非保本浮动收益理财产品，无固定投资期限，按照固定
          费率扣除产品相关费用后，投资者可以在约定的交易日按照“金额申购，份额
          赎回”的原则对本产品进行申购赎回。
        </p>
        <p> .</p>
        <p>
          本产品向有投资经验个人投资者销售。平安银行建议：经我行风险承受度评估，
          评定为“进取型”、“成长型”、“平衡型”、“稳健型”的个人投资者适合购买本
          产品。
        </p>
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
// {
// 	"data": {
// 		"name": "天天成长A",
// 		"type": "理财产品(T01LK180001)",
// 		"tag": ["中低风险", "1万元起购", "T+0赎回200万"],
// 		"annualized": "3.721%",
// 		"income": "1.0489元",
// 		"progress": "99.99%",
// 		"undrawn": "6996.82"
// 	}
// }
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
  /* max-width: 800px; */
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
  margin-top: 30px;
  display: flex;
  padding: 40px 0;
  max-width: 500px;
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
  font-size: 32px;
}
.r-rate-str {
  color: #666;
  font-size: 14px;
}
.r-rate-box:first-child .r-rate {
  color: #023d6f;
}
.des {
  margin-top: 30px;
  font-size: 14px;
  color: #888;
}
.line{
  border-top: 3px solid #e0e0e0;
  margin: 20px 0;
}
</style>
