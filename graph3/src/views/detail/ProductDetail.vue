<template>
<div class="page">
   <header-search/>
   <div class="container">

    <div class="block introduce">
      <h1>{{introduce.name}}</h1>
      <span>{{ introduce.versions }}</span>
      <el-tag type="success" v-for="(tag, index) in introduce.tag" :key="index">{{tag}}</el-tag>
      <span>来源：{{ introduce.source }}</span>

      <div class="kv">
        <p v-for="(p, index) in introduce.property" :key="index">
          <span class="key">{{p.key}}: </span>
          <span class="val">{{p.value}}</span>
        </p>
      </div>
    </div>

    <div class="block basic">
      <h1>基本信息</h1>
      <div class="kv">
        <p v-for="(p, index) in basic" :key="index">
          <span class="key">{{p.key}}: </span>
          <span class="val">{{p.value}}</span>
        </p>
      </div>
    </div>

    <div class="block rule">
      <h1>规则</h1>
      <div class="kv">
        <p v-for="(p, index) in rule" :key="index">
          <span class="key">{{p.key}}: </span>
          <span class="val">{{p.value}}</span>
        </p>
      </div>
    </div>

    <div class="block">
      <h1>历史</h1>
      <el-table
        :data="history"
        :stripe="true"
        style="width: 100%">
        <el-table-column
          prop="numbe"
          label="编号"
          width="180">
        </el-table-column>
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="value"
          label="历史收益率">
        </el-table-column>
      </el-table>
    </div>
  </div>
</div>

</template>

<script>
import {data} from '../../jsons/productDetail'
import HeaderSearch from '../../components/HeaderSearch'

export default {
  name: 'productDetail',
  components: {
    HeaderSearch
  },
  data () {
    return {
      ...data
    }
  },
  mounted () {
    // console.log(data)
  }
}
</script>

<style scoped>
.page{
  height: 100%;
}
  .container {
    height: calc(100% - 100px);
    overflow: auto;
    margin: 0 auto;
    width: 80%;
  }

  .block {
    margin: 20px;
    /*border: 1px #dddddd solid;*/
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    /*padding: 10px;*/
    border-radius: 5px;
  }

  .kv {
    margin: 25px;
  }

  .block p {
    line-height: 25px;
  }

  .block h1 {
    font-size: 25px;
    padding: 10px;
    border-bottom: 1px #dddddd solid;;
    margin: 0;
    background-color: #71b0fb;
  }

  .introduce span {
    margin: 5px;
    /*font-size: 13px;*/
  }

  .introduce .kv, .basic .kv {
    display: flex;
    /*background-color: #c9f8ed;*/
    width: 100%;
    border-radius: 5px;
    font-size: 15px;
    /*margin: 25px;*/
    /*flex-direction: column;*/
    flex-wrap: wrap;
  }

  .introduce .kv p, .basic .kv p {
    width: 50%;
    /*border: 1px #bbbbbb solid;*/
    display: flex;
    /*justify-content: space-evenly;*/
  }

  .key {
    color: #777777;
    width: 30%;
  }

  .rule .kv {
    line-height: 20px;
  }

  .rule .kv span {
    display: block;
  }

  .rule .val{
    text-indent: 15px;
  }

</style>
