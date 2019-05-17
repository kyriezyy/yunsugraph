<template>
  <div class="item" :class="[item.type+'-item']" >
     <!-- <i class="iconfont icon-news1"></i> -->

    <template v-if="item.type==='chemical'">
      <div class="img" :style="{background:`url(${item.img}) no-repeat center center /contain`}" @click="handleClick"></div>
      <div class="info" @click="handleClick">
        <div class="title">{{item.title}}</div>
        <div class="params">
          <span class="param">CAS号：{{item.cas}}</span>
          <span class="param">分子式：{{item.formula}}</span>
        </div>
         <p class="zh-name">中文别名：{{item.anothernamer}}</p>
        <p class="en-name">英文名称：{{item.englishname}}</p>
        <div class="tags">
          <span class="tag" v-for="tag in item.tag" :key="tag">{{tag}}</span>
        </div>
      </div>
    </template>
    <template v-if="item.type==='news'">
      <a :href="item.link" class="news-title">{{item.title}} </a>
      <p class="news-des">
        {{item.desc}}
      </p>
       <p class="news-time">
        {{item.time}}
      </p>
    </template>
    <template v-if="item.type==='paper'">
      <p class="paper-title">{{item.title}}</p>
      <p class="paper-author">{{item.author}}</p>
      <p class="paper-abstract">{{item.abstract}}</p>
    </template>
     <template v-if="item.type==='patent'">
      <p class="paper-title" @click="downLoad(item)">{{item.title}} <span class="pdf-icon"></span> </p>
      <p class="paper-author">{{item.inventor}}</p>
      <p class="news-time">专利号： {{item.applicationumber}}</p>
      <p class="news-time">申请日期：{{item.applicationdate}}</p>
      <p class="news-time">分类号：{{item.class}}</p>
      <p class="paper-abstract">{{item.abstract}}</p>
    </template>
    <template v-if="item.type==='answer'">
     <div class="answer">
       <h1>染发剂   /   组成部分</h1>
       <div class="incu">
         <div class="h1">
           <h2>2-氨基烟酸</h2>
         </div>
         <div class="imgs">
           <img src="http://p1.molbase.net/molpic/f5/f8/450.png?123x104&imageView2/2/w/240/h/240" alt="">
         </div>
       </div>
       <div class="descript">
         <p>灰白色至淡黄色结晶粉末, 染发的一个组成部分.在常温和常压下稳定。可溶于水。存放在密闭容器内。 存放在阴凉，干燥，通风良好的区域，远离不相容的物质。</p>
         <p><span>健康危害：</span>
           造成皮肤刺激。造成严重眼刺激。可引起呼吸道刺激。</p>
         <p >危险性说明：</p>
         <p class="detail">H315 造成皮肤刺激。</p>
          <p class="detail">H319 造成严重眼刺激。</p>
         <p class="detail">H335 可引起呼吸道刺激。</p>
         <p><span>对保护施救者的忠告：</span>
           将患者转移到安全的场所。咨询医生。出示此化学品安全技术说明书给到现场的医生看。</p>
       </div>
       <div class="relaction">
        <h1>关联化合物</h1>
         <div class="lists">
           <div class="item-cas" v-for="item in relas" :key="item.cas">
             <img :src="item.url" alt="">
             <p class="name">{{item.name}}</p>
             <p class="cas">{{item.cas}}</p>
           </div>
         </div>
       </div>
     </div>
    </template>
  </div>
</template>
<script>
export default {
  name: 'result',
  props: ['item'],
  data () {
    return {
      relas: [
        {
          'url': 'http://p1.molbase.net/molpic/02/59/2590579.png?154x148',
          cas: '23411-03-2',
          name: '2-hydroxycarbamoyl-nicotinic acid'
        },
        {
          url: 'http://p1.molbase.net/molpic/02/18/02185859.png?148x144',
          cas: '88423-10-3',
          name: '2-N,3-N-dihydroxypyridine-2,3-dicarboxamide'
        },
        {
          url: 'http://p0.molbase.net/molpic/69/fc/25624.png?123x104',
          cas: '2942-59-8',
          name: '2-氯烟酸'
        },
        {
          url: 'http://p3.molbase.net/molpic/38/db/246.png?143x95',
          cas: '24517-64-4',
          name: '2-氨基-3-氰基吡啶'
        },
        {
          url: 'http://p3.molbase.net/molpic/3d/2d/655.png?162x86',
          cas: '335031-01-1',
          name: '2-氨基-5-溴-3-(羟甲基)吡啶'
        },
        {
          url: 'http://p0.molbase.net/molpic/15/d4/441.png?146x127',
          cas: '52833-94-0',
          name: '2-氨基-5-溴烟酸'
        }
      ]
    }
  },
  methods: {
    handleClick () {
      this.$router.push('/detail')
    },
    downLoad (item) {
      location.href = item.filepath
      // window.open(item.filepath)
    }
  },
  mounted () {
    console.log(this.item)
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
  margin-bottom: 10px;
  color:#023d6f;
}
.params {
  font-size: 13px;
  color: #666;
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
  color: #666;
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
.tags{
  display: flex;
  flex-flow: row wrap;
}
.tag{
  display: flex;
  padding: 2px 3px;
  color:#023d6f;
  font-size: 12px;
  border:1px solid #023d6f;
  margin-right: 8px;
  margin-top: 5px;
  border-radius: 3px;

}
.zh-name,.en-name{
  font-size: 13px;
  color: #666;
}

  .answer{
    border-radius: 8px;
    border: 1px #dddddd solid;
  }
  .answer h1{
    color: #777;
    font-size: 16px;
    overflow: hidden;
    padding-left: 16px;
    padding-right: 16px;
    text-overflow: ellipsis;
    vertical-align: middle;
    padding-top: 11.5px;
    padding-bottom: 11.5px;
    line-height: 1.54;
    border-radius: 8px;
    border-bottom: 1px #dddddd solid;
  }
  .incu{
    padding-left: 16px;
    padding-right: 16px;
    text-overflow: ellipsis;
    vertical-align: middle;
    /*border-radius: 8px;*/
    display: flex;
    justify-content: space-between;
    border-bottom: 1px #dddddd solid;
  }
  .incu h2 {
    line-height: 90px;
    /*text-indent: 60px;*/
    color: #222;
    font-size: 32px;
    /*line-height: 1.25;*/
    margin-bottom: 5px;
    margin-top: -3px;
    word-wrap: break-word;
  }

  .descript{
    padding: 16px;
    text-overflow: ellipsis;
    vertical-align: middle;
    border-radius: 8px;

  }

  .descript .detail{
    text-indent: 16px;
  }
  .descript span{
    font-weight: bold;
  }

  .relaction h1{
    margin-top: -10px;
    border-bottom: 0;
  }

  .lists{
    display: flex;
    /*flex-wrap: wrap;*/
  }

  .item-cas{
    width: 100%;
    text-align: center;
  }

  .item-cas img{
    width: 90px;
    height: 90px;
  }
</style>
