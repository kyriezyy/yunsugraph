<template>
  <div class="item" :class="[item.type+'-item']" >
    <template v-if="item.type==='chemical'">
      <div class="img" :style="{background:`url(${item.img}) no-repeat center center /contain`}" @click="handleClick"></div>
      <div class="info" @click="handleClick">
        <div class="title">{{item.title}}</div>
        <div class="params">
          <span class="param">CAS号：{{item.cas}}</span>
          <span class="param">分子式：{{item.formula}}</span>
        </div>
      </div>
    </template>
    <template v-if="item.type==='news'">
      <a :href="item.link" class="news-title">{{item.title}} </a>
       <p class="news-time">
        {{item.time}}
      </p>
      <p class="news-des">
        {{item.desc}}
      </p>
    </template>
    <template v-if="item.type==='paper'">
      <p class="paper-title">{{item.title}}</p>
      <p class="paper-author">{{item.author}}</p>
      <p class="paper-abstract">{{item.abstract}}</p>
    </template>
     <template v-if="item.type==='patent'">
      <p class="paper-title">{{item.title}}</p>
      <p class="paper-author">{{item.inventor}}</p>
      <p class="news-time">专利号： {{item.applicationumber}}</p>
      <p class="news-time">申请日期：{{item.applicationdate}}</p>
      <p class="news-time">分类号：{{item.class}}</p>
      <p class="paper-abstract">{{item.abstract}}</p>
    </template>
  </div>
</template>
<script>
export default {
  name: 'result',
  props: ['item'],
  data () {
    return {}
  },
  methods: {
    handleClick () {
      this.$router.push('/detail')
    }
  }
}
</script>
<style scoped>
.item {
  display: flex;
  border-bottom: 1px solid #e0e0e0;
  align-items: center;
  cursor: pointer;
  padding: 10px 0;
  padding-left: 25px
}
.img {
  height: 100px;
  width: 100px;
  flex-shrink: 0;
}
p{
  line-height: 1.8
}
.title {
  font-size: 18px;
  margin-bottom: 15px;
}
.params {
  font-size: 13px;
}
.param {
  margin-right: 40px;
}
.news-item,.paper-item,.patent-item{
  flex-direction: column;
  align-items: flex-start
}
.news-title,.paper-title{
  font-size: 17px;
  color:#023d6f;
}
.news-time,.paper-author{
  font-size: 13px;
}
.news-des,.paper-abstract{
  font-size: 14px;
  color: #666;
}
</style>
