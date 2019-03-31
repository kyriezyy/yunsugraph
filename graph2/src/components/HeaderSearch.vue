<template>
  <div class="search-box">
    <div class="logo-text" @click="$router.push('/')">CloudTree赟数</div>
    <div class="search">
      <div class="search-input">
        <input type="text" placeholder="请输入关键词" v-if="!isGraph">
        <template v-else>
          <input type="text" placeholder="路径起点">
          <span class="splide-line">——</span>
          <input type="text" placeholder="路径终点">
        </template>
      </div>
      <div class="search-btn search-icon" @click="handleSearch"></div>
    </div>

    <div class="search-checkbox">
      <input id="checkbox" type="checkbox" v-model="isGraph">
      <label for="checkbox" class="label-text">关系分析</label>
    </div>
  </div>
</template>
<script>
export default {
  name: 'header-search',
  data () {
    return {
      isGraph: false
    }
  },
  methods: {
    handleSearch () {
      if (this.isGraph) {
        this.$router.push('/relation')
      }
    }
  }
}
</script>
<style scoped>
.search-box {
  padding: 30px 20px 30px 30px;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 99;
  justify-content: center;
  box-shadow: 0 2px 3px 1px #dddddda8;
}
.search {
  border: 1px solid #e0e0e0;
  display: flex;
  border-radius: 50px;
  overflow: hidden;
}
.search-input {
  width: 400px;
  display: flex;

  align-items: center;
  border-radius: 5px;
  overflow: hidden;
}
.splide-line {
  margin: 0 10px;
  white-space: nowrap;
  color:#e0e0e0
}

.search-input input {
  width: 100%;
  height: 30px;
  font-size: 16px;
  padding-left: 25px;
  border: none;
}
.search-input input:focus,
.search-input input:active {
  /* border:none; */
  outline: none;
}
.search-btn {
  width: 50px;
  height: 30px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 16px;
}

.label-text {
  font-size: 14px;
  color: #023d6f;
}
.search-checkbox {
  display: flex;
  align-items: center;
  padding-left: 15px;
}
.search-checkbox input {
  border-color: #023d6f;
  margin-right: 5px;
}
.logo-text {
  color: rgb(0, 34, 97);
  font-size: 18px;
  font-weight: bold;
  margin-right: 10px;
}
.logo-text:hover {
  cursor: pointer;
}
</style>
