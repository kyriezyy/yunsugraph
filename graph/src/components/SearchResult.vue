<template>
  <div class="seatch-result">
    <div class="result-header">
      <p class="total-str">共{{total}}条结果，当前展示{{pageNoStart}}-{{pageNoEnd}}</p>
      <el-select v-model="pageSize" size='mini' class="page-select" @change="search">
        <el-option v-for="item in pageSizeArr" :key="item" :label="item" :value="item"></el-option>
      </el-select>
    </div>
    <div class="result-body" v-infinite-scroll="loadMore" :infinite-scroll-disabled="busy" infinite-scroll-distance="20">
      <ul >
        <li class="result-item" v-for="item in list" :key="item.detail_basic['CAS号']" :title="item.detail_basic['中文名称']" @click="hanldeSelect(item)">
          <div>
            <p class="title">{{item.detail_basic['中文名称']}} </p>
            <!-- <p class="result-str">name:</p> -->
          </div>
          <div class="result-tag">化学品</div>
        </li>
      </ul>
      <div class="loading-box" v-if="busy">
        <i class="el-icon-loading"></i>
      </div>
    </div>
    <div class="result-footer">
      <div class="page-box">
        <div class="page-pre" @click="prePage"> < </div>
        <div>页面 {{pageIndex}}/{{totalPage}} </div>
        <div class="page-next" @click="nextPage"> > </div>
      </div>
      <!-- <div class="add-all">添加全部</div> -->
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import dotProp from 'dot-prop';

export default {
  name: 'search-result',
  props: ['searchkey', 'categorys'],
  data() {
    return {
      pageSizeArr: [10, 20, 50],
      pageSize: 20,
      pageIndex: 1,
      list: [],
      total: 0,
      busy: false,
    };
  },
  computed: {
    pageNoStart() {
      if (this.total === 0) {
        return 0;
      }
      return (this.pageIndex - 1) * this.pageSize + 1;
    },
    pageNoEnd() {
      if (this.total === 0) {
        return 0;
      }
      return this.pageNoStart + this.pageSize - 1;
    },
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },
  },
  methods: {
    clear() {
      this.total = 0;
      this.pageIndex = 1;
      this.list = [];
    },
    hanldeSelect(item) {
      // selectEntity
      const cas = item.detail_basic['CAS号'];
      if (cas) {
        this.$emit('selectEntity', cas);
      }
    },
    async search() {
      this.pageIndex = 1;
      this.fetchData();
    },
    async fetchData() {
      this.busy = true;
      const cate = this.categorys.toString();
      let url = `http://10.102.21.89:8000/search?kw=${this.searchkey}&pageIndex=${this.pageIndex}&pageSize=${this.pageSize}`;
      if (cate) {
        url += `&cate=${cate}`;
      }
      const res = await axios.get(url);
      const list = dotProp.get(res, 'data.data.result') || [];
      this.list = this.list.concat(list);
      this.total = dotProp.get(res, 'data.data.total') || 0;
      this.busy = false;
    },
    loadMore() {
      if (this.busy) return;
      this.pageIndex = this.pageIndex + 1;
      this.fetchData();
    },
    prePage() {
      if (this.loading) return;
      if (this.pageIndex !== 1) {
        this.pageIndex = this.pageIndex - 1;
        this.fetchData();
      }
    },
    nextPage() {
      if (this.loading) return;
      if (this.pageIndex !== this.totalPage) {
        this.pageIndex = this.pageIndex + 1;
        this.fetchData();
      }
    },
  },
};
</script>
<style scoped>
.seatch-result{
  flex-grow: 2;
  display: flex;
  flex-direction: column;
}
.result-header {
  margin: 10px 0;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center
}
.page-select{
  width: 65px;
}
.result-item{
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
}
.result-item:hover{
  background: #f0f0f0;
  border-left: 2px solid #e0e0e0;
}
.result-str{
  font-size: 12px;
  color: #999
}
.result-tag{
  display: inline-block;
  background: red;
  align-self: flex-start;
  padding: 2px 4px;
  border-radius: 4px
}
.page-box{
  display: flex;
}
.result-body{
  flex-grow: 2;
  overflow: auto;
}
.result-footer{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 34px;
  flex-shrink: 0;
}
.page-pre,.page-next{
  padding: 0 3px;
  cursor: pointer;
}
.title{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 180px;
}
.loading-box{
  font-size: 20px;
  text-align: center;
  padding-top: 15px;
  color: #666;
}
</style>
