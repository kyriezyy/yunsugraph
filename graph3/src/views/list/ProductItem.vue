<template>
  <div class="product-item item">
    <p class="title" >
      <span v-html="item.title"></span>
      <span class="productype" >{{item.productype}} </span>
    </p>
    <p class="desc2" v-html="item.desc"></p>
    <div class="params">
      <div class="param param1">
        <div class="value">{{item.property[0].value}} </div>
        <div class="key">{{item.property[0].key}}</div>
      </div>
      <div class="param param2">
        <div class="value">{{item.property[1].value}} </div>
        <div class="key">{{item.property[1].key}}</div>
      </div>
    </div>
    <div class="tags">
      <span class="tag" v-for="tag in item.tag" :key="tag">{{tag}}</span>
    </div>
    <p class="bottom">
      <span class="time">{{item.time}} </span>
      <span class="company">{{item.source}} </span>
    </p>
  </div>
</template>
<script>
export default {
  name: 'product',
  props: ['item']
}
</script>

<style scoped>
.product-item{
  border:1px solid #a0a0a0;
  width: 300px;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}
.product-item:hover{
  box-shadow: 0 0 6px #a0a0a0;
}
.title{
  /* margin-bottom: 10px; */
}
.productype{
  padding: 1px 3px;
  color:#f5980d;
  border:1px solid #f5980d;
  font-size: 12px;
  border-radius: 3px;
  margin-left: 15px;
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
.params{
  display: flex
}
.params .key{
  color: #888;
}
.params .value{
  color: #023d6f;
  font-size: 25px;
  margin-bottom: 5px;
}
.param{
  margin-right: 35px;
}

.tags{
  color: #023d6f;
  margin-top: 10px;
}
.tag{
  padding: 3px 5px;
  border:1px solid #023d6f;
  margin-right: 15px;
  font-size: 12px;
  border-radius: 3px;
}
</style>
