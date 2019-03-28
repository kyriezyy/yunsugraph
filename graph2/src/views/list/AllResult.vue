<template>
  <div class="container">
    <div class="result-box">
        <all-list :list="list"/>
      </div>
      <div class="slide-box">
        sss
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
      // showList: []
    }
  }
}
</script>
<style scoped>
.container{
  display: flex;
}
.result-box {
  padding: 15px 25px;
  flex-grow: 2;
  padding-bottom: 50px;
}
.slide-box{
  width: 300px;
  flex-shrink: 0;
}
</style>
