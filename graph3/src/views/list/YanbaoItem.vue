<template>
  <div>
    <p class="title">
      <span  v-html="item.title"></span>
      <span class="pdf-icon"></span>
    </p>
    <p class="desc1" v-html="item.desc1"></p>
    <p class="desc2" v-html="item.desc2"></p>
    <p class="bottom">
      <span class="time">{{item.time}} </span>
      <span class="company">{{item.company}} </span>
      <span class="author">{{item.author}} </span>
    </p>
  </div>
</template>
<script>
export default {
  name: 'yanbao',
  props: ['item']
}
</script>

<style scoped>
.title{
  margin-bottom: 10px;
  display: flex;
  align-items: center
}
.desc1{
  font-size: 14px;
  background: #ecf2f9;
  padding: 8px 10px;
}

.desc2{
  font-size: 14px;
  padding: 8px 0;
}

.bottom{
  font-size: 13px;
}
.time{
  color: #888;
}
.company{
  margin: 0 15px;
}
.pdf-icon{
  height: 30px;
  width: 30px;
  display: inline-block;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAqCAMAAADhynmdAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABFUExURUxpcf///898g/HX2bY3QrQ0PsZOV7M0PcFFTbMzPrpDTf36+rY5Q/nv8L9TXN+oree+wcNcZMpvdsZkbNeSl/Xj5ezKzfNsHxUAAAAKdFJOUwD///87///wv9iq3/WnAAAA+UlEQVQ4y7XS2XKFMAgAUAFpa8hqov//qVXbenNHxKfyluFMhm0YJ1bia+hCFfzRG9ZJb+5IZ27Jy9yT0xjkz1jk15jkx9jkMA9kNzrxvbmmHda395WUAEDOJJniHJJFvCBzIos4KMxrtkjcSAS0f6mcF7MjD4gw202HLOlhLiuQt0kM4tgkNQhElbiKOG8pFIrSNDJve9kirPt2VtLIkqN3MQEIUEvgNLK1GTMs1WEWgKYQBFogtKNZ1wKs5VoupoTnNBBEkjdGd5TW5HVVKkEoNZBJmMjXc5c6KZJnQZPsszyXeUPYFc8PxLyX/yLTk5iGcfo0Yxq/Afk8HvuFFDrzAAAAAElFTkSuQmCC);
  background-size: 15px auto;
  background-repeat: no-repeat;
  background-position: center center;
}

</style>
