<template>
  <div class="rote-page">
    <div>
      <el-input
        placeholder="请输入内容"
        v-model="searchkey1"
        @keyup.native.enter="searchByKey"
        size="mini"
      >
        <p slot="prepend">A</p>
      </el-input>
      <p style="height:5px"></p>
      <el-input
        placeholder="请输入内容"
        v-model="searchkey2"
        @keyup.native.enter="searchByKey"
        size="mini"
      >
        <p slot="prepend">B</p>
      </el-input>
    </div>
    <div class="switch-btns-box">
      <div class="switch-btns">
        <div class="switch-btn active">最短路径</div>
        <!-- <div class="switch-btn">工作区</div> -->

      </div>
      <div>
        跳数
      <el-input-number style="width:90px" size="mini" v-model="level" @change="searchByKey" :min="1" :max="10" label="描述文字"></el-input-number>

      </div>
    </div>
    <div>
      <div>
        <el-collapse v-model="activeNames">
          <el-collapse-item title="关系过滤" name="1">
            <div>
              <el-checkbox-group v-model="categorys" size="mini" @change="handleCategoryChange">
                <el-checkbox :label="item" v-for="item in types " border :key="item">{{item}}</el-checkbox>
              </el-checkbox-group>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
    <route-result
      ref="searchResult"
      :loading="loading"
      :list="showList"
      @selectRoute="(graph)=>$emit('updateRoute',graph)"
    />
  </div>
</template>
<script>
import RouteResult from './RouteResult';
import axios from 'axios';
import dotProp from 'dot-prop';

const nodeIcon = 'image://data:image/png;base64,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';
const huaxueIcon = 'image://data:image/png;base64,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';


export default {
  name: 'route',
  components: {
    RouteResult,
  },
  computed: {
    types() {
      const set = new Set();
      this.list.map(item => set.add(item.type));
      return Array.from(set);
    },
  },
  data() {
    return {
      searchkey1: '112-54-9',
      searchkey2: '143-07-7',
      activeNames: '',
      categorys: [],
      loading: false,
      list: [],
      showList: [],
      level: 6,
    };
  },
  methods: {
    async searchByKey() {
      if (this.searchkey1 && this.searchkey2) {
        this.loading = true;
        const url = `http://10.102.20.251:8000/searchrela/?source=${
          this.searchkey1
        }&target=${this.searchkey2}&level=${this.level}`;
        const res = await axios.get(url);
        const list = dotProp.get(res, 'data.data');
        list.forEach((item) => {
          item.links.forEach((it) => {
            it.label = {
              show: true,
              formatter: '{c}',
            };
          });
          item.nodes.forEach((it) => {
            it.type = 'element';
            if (it.symbol === 'diamond') {
              it.symbol = nodeIcon;
            } else {
              it.symbol = huaxueIcon;
            }
            // "diamond"
            it.label = {
              show: true,
              formatter: '{c}',
            };
          });
        });
        this.showList = this.list = list;
        this.loading = false;
      }
    },
    handleCategoryChange() {
      if (this.categorys.length) {
        this.showList = this.list.filter(item => this.categorys.includes(item.type));
      } else {
        this.showList = this.list;
      }
    },
  },
};
</script>
<style scoped>
.rote-page {
  padding-top: 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.switch-btns-box {
  display: flex;
  justify-content: space-between;
  height: 40px;
  margin-top: 10px;
  align-items: center;
}
.switch-btns {
  display: flex;
  align-items: center;
}
.switch-btn {
  padding: 3px 4px;
  cursor: pointer;
}
.switch-btn.active {
  color: #409eff;
  border-bottom: 1px solid #409eff;
}
</style>
