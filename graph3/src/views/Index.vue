<template>
  <div class="container">
    <div class="logo-text">
      <div class="logo"></div> 金融图谱情报库
    </div>
    <div class="search-box">
      <div class="search">
        <div class="search-input">
          <input type="text" placeholder="请输入关键词" v-if="!isGraph">
          <template v-else>
            <input type="text" placeholder="实体A">
            <span class="splide-line">——</span>
            <input type="text" placeholder="实体B">
          </template>
        </div>
        <div class="search-btn search-icon" @click="handleSearch"></div>
      </div>
      <div class="search-checkbox">
        <input id="checkbox" type="checkbox" v-model="isGraph">
        <label for="checkbox" class="label-text">关系分析</label>
      </div>
    </div>
    <div class="recommend">
    </div>
  </div>
</template>
<script>
import tuijianwenti from './index/tuijianwenti'
import remenshijian from './index/remenshijian'
export default {
  name: 'index',
  components: {
    tuijianwenti,
    remenshijian
  },
  data () {
    return {
      isGraph: false
    }
  },
  methods: {
    handleSearch () {
      if (this.isGraph) {
        this.$router.push('/relation')
      } else {
        this.$router.push('/list')
      }
    }
  }
}
</script>
<style scoped>
.container {
  padding-top: 100px;
}
.logo{
  width: 200px;
  height: 75px;
  background: url('/static/logo.png') no-repeat center center / 100% auto ;
}
.logo-text{
  color:#003d72;
  font-size: 38px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
  display: flex;
  align-items: flex-end;
  justify-content: center
}
.search-box {
  width: 800px;
  margin: 0 auto;
}
.search {
  display: flex;
  border: 1px solid #e0e0e0;
  border-radius: 60px;
  overflow: hidden;
}
.search-input {
  flex-grow: 2;
  display: flex;

  align-items: center;
}
.splide-line {
  margin: 0 10px;
  white-space: nowrap;
  color:#e0e0e0
}

.search-input input {
  width: 100%;
  height: 40px;
  font-size: 18px;
  padding-left: 20px;
  border: none;
}
.search-input input:focus,
.search-input input:active {
  /* border:none; */
  outline: none;
}
.search-btn {
  width: 70px;
  display: flex;
  height: 40px;
  margin-left: 10px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 20px;
}
.label-text {
  font-size: 14px;
  color: #023d6f;
}
.search-checkbox {
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-left: 20px;
}
.search-checkbox input {
  border-color: #023d6f;
  margin-right: 3px;
}
.recommend{
  width:800px;
  margin: 0 auto;
  display: flex;
  margin-top: 30px;
}
</style>
