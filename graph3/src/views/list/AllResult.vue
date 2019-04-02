<template>
  <div class="container">
    <div class="result-box">
      <all-list :list="list" ref="resultBox" @changetab="handleChangeTab"/>
    </div>
    <div class="slide-box">
      <el-tabs tab-position="right"  v-model="activeTab" @tab-click="handleClick">
        <el-tab-pane label="化学品" name="1"></el-tab-pane>
        <el-tab-pane label="文献" name="2"></el-tab-pane>
        <el-tab-pane label="新闻" name="3"></el-tab-pane>
        <el-tab-pane label="专利" name="4"></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import AllList from '../../components/AllList'

export default {
  name: 'all-result',
  props: ['list'],
  components: {
    AllList
  },
  data () {
    return {
      activeTab: '1'
    }
  },
  methods: {
    handleChangeTab (index) {
      this.activeTab = (index + 1) + ''
    },
    handleClick (item) {
      this.$refs.resultBox.scrollToElemnt(item.name)
    }
  }
}
</script>
<style scoped>
.container {
  display: flex;
}
.result-box {
  padding: 15px 25px;
  flex-grow: 2;
}
.slide-box {
  padding-top: 40px;
  padding-left: 40px;
  width: 300px;
  flex-shrink: 0;
}
</style>
