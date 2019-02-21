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

import { serverUrl } from '../config';
import { nodeIcon, huaxueIcon } from '../utils/icon';


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
        const url = `${serverUrl}/searchrela/?source=${
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
            it.symbolSize = 30;
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
  flex-shrink: 0
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
