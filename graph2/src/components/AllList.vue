<template>
  <div class="all-list">
    <div class="section">
      <div class="section-title">化学品</div>
      <div class="content">
         <result-item v-for="item in chemicalList" :key="item.title" :item="item"  />
      </div>
    </div>
    <div class="section">
      <div class="section-title">文献</div>
      <div class="content">
         <result-item v-for="item in paperList" :key="item.title" :item="item"  />
      </div>
    </div>
    <div class="section">
      <div class="section-title">新闻</div>
      <div class="content">
         <result-item v-for="item in newsList" :key="item.title" :item="item"  />
      </div>
    </div>
    <div class="section">
      <div class="section-title">专利</div>
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
  computed: {
    chemicalList () {
      return this.list.filter(item => item.type === 'chemical')
    },
    newsList () {
      return this.list.filter(item => item.type === 'news')
    },
    paperList () {
      return this.list.filter(item => item.type === 'paper')
    },
    patentList () {
      return this.list.filter(item => item.type === 'patent')
    }

  }
}
</script>

<style scoped>

.section{
  margin: 10px 0;
  border:1px solid #e0e0e0;
}
.section-title{
  background: #e0e0e0;
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 15px
}
.content{

}
</style>
