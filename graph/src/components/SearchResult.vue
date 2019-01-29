<template>
  <div class="seatch-result">
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
      pageSize: 20,
      pageIndex: 1,
      list: [],
      busy: false,
    };
  },
  computed: {
  },
  methods: {
    clear() {
      this.pageIndex = 1;
      this.list = [];
    },
    hanldeSelect(item) {
      // selectEntity
      const cas = item.detail_basic['CAS号'];
      if (cas) {
        this.$emit('selectEntity', item);
      }
    },
    async search() {
      this.pageIndex = 1;
      this.list = [];
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
      if (!this.searchkey) return;
      this.pageIndex = this.pageIndex + 1;
      this.fetchData();
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
  background: darkolivegreen;
  align-self: flex-start;
  padding: 2px 4px;
  border-radius: 4px;
  color: #f0f0f0;
  font-size: 11px;
}
.page-box{
  display: flex;
}
.result-body{
  margin-top: 10px;
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
