<template>
  <div class="all-list" ref="listBox" @scroll="hanldeScroll">
    <div class="section" id="section1">
      <div class="section-title">化学品
        <span class="more">更多信息</span>
      </div>
      <div class="content">
         <result-item v-for="item in chemicalList" :key="item.title" :item="item"  />
      </div>
    </div>
    <div class="section" id="section2">
      <div class="section-title">文献
         <span class="more">更多信息</span>
      </div>
      <div class="content">
         <result-item v-for="item in paperList" :key="item.title" :item="item"  />
      </div>
    </div>
    <div class="section" id="section3">
      <div class="section-title">新闻
         <span class="more">更多信息</span>
      </div>
      <div class="content">
         <result-item v-for="item in newsList" :key="item.title" :item="item"  />
      </div>
    </div>
    <div class="section" id="section4">
      <div class="section-title">专利
         <span class="more">更多信息</span>
      </div>
      <div class="content">
         <result-item v-for="item in patentList" :key="item.title" :item="item"  />
      </div>
    </div>
  </div>
</template>
<script>
import ResultItem from './ResultItem'

export default {
  name: 'all-list',
  props: ['list'],
  components: {
    ResultItem
  },
  data () {
    return {
      catchTop: []
    }
  },
  computed: {
    chemicalList () {
      return this.list.filter(item => item.type === 'chemical').slice(0, 3)
    },
    newsList () {
      return this.list.filter(item => item.type === 'news').slice(0, 3)
    },
    paperList () {
      return this.list.filter(item => item.type === 'paper').slice(0, 3)
    },
    patentList () {
      return this.list.filter(item => item.type === 'patent').slice(0, 3)
    }

  },
  mounted () {
    this.catchTop = []
    this.$nextTick(this.catchMeta)
  },
  methods: {
    catchMeta () {
      this.catchTop = [
        {
          top: document.querySelector('#section1').offsetTop,
          height: document.querySelector('#section1').offsetHeight
        },
        {
          top: document.querySelector('#section2').offsetTop,
          height: document.querySelector('#section2').offsetHeight
        },
        {
          top: document.querySelector('#section3').offsetTop,
          height: document.querySelector('#section3').offsetHeight
        },
        {
          top: document.querySelector('#section4').offsetTop,
          height: document.querySelector('#section4').offsetHeight
        }
      ]
    },
    scrollToElemnt (index) {
      let item = this.catchTop[index - 1]
      console.log(item)
      this.$refs.listBox.scrollTop = item.top - 127
      // let element = document.querySelector('#section' + index)
      // element.scrollIntoView()
    },
    hanldeScroll () {
      let scrollTop = this.$refs.listBox.scrollTop
      let activeIndex
      let boxHeight = this.$refs.listBox.clientHeight

      this.catchTop.map((item, index) => {
        // item.top < scrollTop && scrollTop < item.top + item.height
        if ((item.top - boxHeight < scrollTop)) {
          activeIndex = index
        }
      })

      this.$emit('changetab', activeIndex)
    }
  }
}
</script>

<style scoped>
.all-list{
  height: 100%;
    overflow: auto;
}
.section{
  margin: 10px 0;
  border:1px solid #e0e0e0;
}
.section-title{
  background: #F6F8FD;
  border-bottom: 1px solid #e0e0e0;
  height: 70px;
  display: flex;
  align-items: center;
  padding:0 15px;
  font-size: 20px;
  justify-content: space-between;
}
.more{
  font-size: 14px;
  color:#002261;
  cursor: pointer;
}
.content{

}
</style>
