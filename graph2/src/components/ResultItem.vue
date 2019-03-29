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
      <p class="paper-title">{{item.title}} <span class="pdf-icon"></span> </p>
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
  color:#023d6f;
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
  display: flex;
  align-items:  center;
  height: 40px;
}
.news-time,.paper-author{
  font-size: 13px;
}
.news-des,.paper-abstract{
  font-size: 14px;
  color: #666;
}
.pdf-icon{
  height: 30px;
  width: 30px;
  display: inline-block;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAqCAMAAADhynmdAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABFUExURUxpcf///898g/HX2bY3QrQ0PsZOV7M0PcFFTbMzPrpDTf36+rY5Q/nv8L9TXN+oree+wcNcZMpvdsZkbNeSl/Xj5ezKzfNsHxUAAAAKdFJOUwD///87///wv9iq3/WnAAAA+UlEQVQ4y7XS2XKFMAgAUAFpa8hqov//qVXbenNHxKfyluFMhm0YJ1bia+hCFfzRG9ZJb+5IZ27Jy9yT0xjkz1jk15jkx9jkMA9kNzrxvbmmHda395WUAEDOJJniHJJFvCBzIos4KMxrtkjcSAS0f6mcF7MjD4gw202HLOlhLiuQt0kM4tgkNQhElbiKOG8pFIrSNDJve9kirPt2VtLIkqN3MQEIUEvgNLK1GTMs1WEWgKYQBFogtKNZ1wKs5VoupoTnNBBEkjdGd5TW5HVVKkEoNZBJmMjXc5c6KZJnQZPsszyXeUPYFc8PxLyX/yLTk5iGcfo0Yxq/Afk8HvuFFDrzAAAAAElFTkSuQmCC);
  background-size: 15px auto;
  background-repeat: no-repeat;
  background-position: center center;
}
</style>
