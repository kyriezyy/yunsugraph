<template>
  <div class="container">
    <div class="logo-text">
      <div class="logo"></div>金融图谱情报库
    </div>
    <div class="search-box">
      <div class="search">
        <div class="search-input">
          <!-- <input type="text" placeholder="请输入关键词" v-if="!isGraph"> -->
          <el-autocomplete
            class="inline-input"
            v-model="input1"
            :fetch-suggestions="querySearch"
            placeholder="请输入关键词"
            :trigger-on-focus="false"
            @select="handleSelect"
            v-if="!isGraph"
          >
            <template slot-scope="{ item }">
              <div class="name">{{ item.value }}</div>
              <span class="addr">{{ item.number }}</span>
            </template>
          </el-autocomplete>
          <template v-else>
            <el-autocomplete
            class="inline-input"
            v-model="input2"
            :fetch-suggestions="querySearch"
            placeholder="实体A"
            :trigger-on-focus="false"
          >
            <template slot-scope="{ item }">
              <div class="name">{{ item.value }}</div>
              <span class="addr">{{ item.number }}</span>
            </template>
          </el-autocomplete>

            <span class="splide-line">——</span>
            <el-autocomplete
            class="inline-input"
            v-model="input3"
            :fetch-suggestions="querySearch2"
            placeholder="实体B"
            :trigger-on-focus="false"
          >
            <template slot-scope="{ item }">
              <div class="name">{{ item.value }}</div>
              <span class="addr">{{ item.number }}</span>
            </template>
          </el-autocomplete>
          </template>
        </div>
        <div class="search-btn el-icon-search" @click="handleSearch"></div>
      </div>
      <div class="search-checkbox">
        <input id="checkbox" type="checkbox" v-model="isGraph">
        <label for="checkbox" class="label-text">关系分析</label>
      </div>
    </div>
    <chat-box v-show="showChatBox" @close="showChatBox=false"/>
    <div class="robot-icon" @click="showChatBox = true"></div>
  </div>
</template>
<script>
import ChatBox from './index/ChatBox'
export default {
  name: 'index',
  components: {
    ChatBox
  },
  data () {
    return {
      isGraph: false,
      showChatBox: false,
      input1: '',
      input2: '',
      input3: ''
    }
  },
  methods: {
    handleSearch () {
      if (this.isGraph) {
        this.$router.push('/relation')
      } else {
        this.$router.push('/list')
      }
    },
    querySearch (queryString, cb) {
      var restaurants = this.loadAll()
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants
      // 调用 callback 返回建议列表的数据
      cb(results)
    },
    querySearch2 (queryString, cb) {
      var restaurants = this.loadAll2()
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants
      // 调用 callback 返回建议列表的数据
      cb(results)
    },
    createFilter (queryString) {
      return restaurant => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        )
      }
    },
    loadAll () {
      return [
        {
          value: '平安银行',
          number: '000001'
        },
        {
          value: '中国平安',
          number: '601318'
        },
        {
          value: '平安证券集团控股',
          number: '00231'
        },
        {
          value: '平安租赁',
          number: '834091'
        },
        {
          value: '平安环保',
          number: '835688'
        }
      ]
    },
    loadAll2 () {
      return [
        {
          value: '上海钜派',
          number: '-'
        },
        {
          value: '上海机电',
          number: '600835'
        },
        {
          value: '上海实业控股',
          number: '00363'
        },
        {
          value: '上海石油化工股份',
          number: '00338'
        },
        {
          value: '上海翰讯',
          number: '834091'
        },
        {
          value: '上海家化',
          number: '835688'
        }
      ]
    },
    handleSelect (item) {
      console.log(item)
    }
  }
}
</script>
<style scoped>
.container {
  padding-top: 100px;
}
.logo {
  width: 200px;
  height: 75px;
  background: url("/static/logo.png") no-repeat center center / 100% auto;
}
.logo-text {
  color: #003d72;
  font-size: 38px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
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
  color: #e0e0e0;
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
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #003d72;
  font-weight: bold;
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
  border-color: #003d72;
  margin-right: 3px;
}
.recommend {
  position: absolute;
  width: 290px;
  height: 350px;
  border: 1px solid #003d72;
  z-index: 99;
  bottom: 50px;
  right: 30px;
  background: #fff;
  display: flex;
  flex-direction: column;
}
.recommend-title {
  height: 40px;
  display: flex;
  align-items: center;
  background: #003d72;
  color: #fff;
  padding: 0 15px;
}
.robot-icon {
  position: absolute;
  bottom: 50px;
  right: 30px;
  cursor: pointer;
  width: 70px;
  height: 70px;
  background: url("../assets/robot.gif") no-repeat center center / 100% auto;
}
.content {
  flex-grow: 2;
}
.send-box {
  height: 60px;
  border-top: 1px solid #003d72;
}
.addr {
  font-size: 12px;
  color: #a0a0a0;
  /* line-height: 15px; */
}
.name {
  /* line-height: 20px; */
}
</style>
<style>
.inline-input {
  width: 100%;
}
.inline-input .el-input__inner {
  border: none;
}
.el-autocomplete-suggestion li {
  margin-bottom: 9px;
  line-height: 1.4;
}
</style>
