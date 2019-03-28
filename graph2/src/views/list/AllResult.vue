<template>
  <div class="container">
    <div class="result-box">
      <all-list :list="list"/>
    </div>
    <div class="slide-box">
      <el-tabs tab-position="right"  v-model="activeTab">
        <el-tab-pane label="AA" name="AA"></el-tab-pane>
        <el-tab-pane label="BB" name="BB"></el-tab-pane>
        <el-tab-pane label="CC" name="CC"></el-tab-pane>
        <el-tab-pane label="DD" name="DD"></el-tab-pane>
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
      activeTab: 'AA'
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
  overflow: auto;
}
.slide-box {
  width: 300px;
  flex-shrink: 0;
}
</style>
