<template>
  <div class="container">
    <div class="result-box">
      <all-list :list="list"  @changetab="handleChangeTab"/>
    </div>
    <div class="slide-box">
      <el-tabs tab-position="right"  v-model="activeTab" @tab-click="handleClick">
        <el-tab-pane label="AA" name="1"></el-tab-pane>
        <el-tab-pane label="BB" name="2"></el-tab-pane>
        <el-tab-pane label="CC" name="3"></el-tab-pane>
        <el-tab-pane label="DD" name="4"></el-tab-pane>
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
      console.log(item.name)
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
  width: 300px;
  flex-shrink: 0;
}
</style>
