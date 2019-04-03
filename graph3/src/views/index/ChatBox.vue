<template>
  <div class="chart-box">
    <div class="header">
      <div class="title">机器人</div>
      <div class="close" @click="$emit('close')">关闭</div>
    </div>
    <div class="logs-box">
      <ul class="logs-list" ref="logList">
        <li v-for="(item,index) in dialogList" :key="index" class="log-item" :class="[item.type?'mylog-item':'robotlog-item']">
          <div class="user-head"></div>
          <div class="content">
            <div class="content-text">
               {{item.text}}
              </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="dialog-box">
      <textarea name="" id="" v-model="question" placeholder="请输入你要咨询的问题" @keydown="handleKeypress"></textarea>
      <div class="btn" @click="handleAddQuestion">发送</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'chart-box',
  data () {
    return {
      question: '',
      dialogList: []
    }
  },
  watch: {
    dialogList () {
      this.$nextTick(this.scrollList)
    }
  },
  methods: {
    async hanldeGetchAnswer (question) {
      this.dialogList.push({
        type: 0,
        text: '哈哈哈哈哈哈',
        timestamp: Date.now()
      })
    },

    handleAddQuestion () {
      let question = this.question
      this.question = ''
      this.dialogList.push({
        type: 1,
        text: question,
        timestamp: Date.now()
      })
      this.hanldeGetchAnswer(question)
    },
    handleKeypress (e) {
      if (e.keyCode === 13) {
        e.preventDefault()
        this.handleAddQuestion()
      }
    },
    scrollList () {
      let element = this.$refs.logList
      element.scrollTop = element.scrollHeight + 500
    }
  }
}
</script>

<style lang="scss" scoped>
.chart-box {
  width: 300px;
  height: 440px;
  border: 1px solid #f0f0f0;
  background: #fff;
  position: fixed;
  bottom: 120px;
  right: 60px;
  z-index: 99;
}
.header {
  height: 40px;
  display: flex;
  align-items: center;
  background: #003d72;
  color: #fff;
  padding: 0 20px;
  justify-content: space-between;
  .title {
    font-weight: bold;
  }
  .close {
    font-size: 12px;
    cursor: pointer;
  }
}
.logs-box {
  height: 300px;
  padding: 10px;
}
.logs-list {
  height: 100%;
  overflow: auto;
  font-size: 14px;
}
.logs-list::-webkit-scrollbar{
  width: 0;
}
.dialog-box {
  border-top: 1px solid #003d72;
  height: calc(100% - 240px);
  textarea {
    border: none;
    resize: none;
    width: 100%;
    padding: 10px 20px;
  }
  textarea:active,textarea:focus{
    outline:none
  }
  .btn {
    background: #003d72;
    color: #fff;
    font-size: 12px;
    text-align: center;
    margin-top: 10px;
    float: right;
    margin-right: 20px;
    border-radius: 3px;
    padding: 3px 10px;
    cursor: pointer;
  }
}
.log-item {
  display: flex;
  margin-top: 10px;
  .user-head {
    width: 30px;
    height: 30px;
    flex-shrink: 0;
  }
  .content-text {
    border-radius: 4px;
    padding: 5px;
    background: #f0f0f0;
  }
}
.mylog-item {
  flex-direction: row-reverse;
  .user-head {
    margin-left: 10px;
    background: url("../../assets/head.png") no-repeat center center/contain;

  }
  .content-text {
    background: #003d72;
    color: #fff;
  }
}
.robotlog-item {
  .user-head {
    margin-right: 10px;
    background: url("../../assets/robotlog.png") no-repeat center center/contain;
  }
  .content-text {
    //  background: #003d72;
  }
}
.evaluate-btns{
  color:#003d72;
  font-size: 13px;
  margin-top: 3px;
}
.evaluate-btn{
  margin-right: 10px;
  cursor: pointer;
}
</style>
