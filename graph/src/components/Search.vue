<template>
  <div class="search-page">
    <div>
      <el-input placeholder="请输入内容" v-model="searchkey" size="mini" @keyup.native.enter="seatchByKey" class="input-with-select">
        <el-select v-model="select" slot="prepend" placeholder="请选择" size="mini">
          <el-option label="实体" value="实体"></el-option>
          <!-- <el-option label="关系" value="关系"></el-option> -->
        </el-select>
      </el-input>
    </div>
    <div class="switch-btns-box">
      <div class="switch-btns">
        <div
          class="switch-btn"
          :class="{active:switchActive==='数据库'}"
          @click="switchActive='数据库'"
        >数据库</div>
        <!-- <div
          class="switch-btn"
          :class="{active:switchActive==='工作区'}"
          @click="switchActive='工作区'"
        >工作区</div> -->
      </div>
      <div class="reset-btn" @click="reset">重置
        <i class="el-icon-refresh"></i>
      </div>
    </div>
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="类别过滤" name="1">
        <div>
          <el-checkbox-group v-model="categorys" size="mini" @change="handleCategoryChange">
            <!-- <el-checkbox label="" border>All</el-checkbox> -->
            <el-checkbox class="category-item" border v-for="item in entity.categorys" :label="item" :key="item">{{item}}</el-checkbox>
          </el-checkbox-group>
        </div>
      </el-collapse-item>
      <!-- <el-collapse-item title="属性过滤" name="2">
        <div>
          <div class="properties-box">
            <el-checkbox-group v-model="properties" size="mini">
              <el-checkbox label="0" border>属性1</el-checkbox>
              <el-checkbox label="1" border>属性2</el-checkbox>
              <el-checkbox label="2" border>属性3</el-checkbox>
            </el-checkbox-group>
          </div>
          <div class="property-search">
            <el-input placeholder="请输入内容" v-model="propertySearch" size="mini">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>

          <div class="property-tags">
            <el-tag v-for="item in tags" :key="item.value" closable @close="handleClose(tag)">{{item.key}} </el-tag>
          </div>
        </div>
      </el-collapse-item> -->
      <el-collapse-item title="排序" name="3">
        <div></div>
      </el-collapse-item>
    </el-collapse>
    <search-result ref="searchResult" :searchkey="searchkey" :categorys="categorys" @selectEntity="hanldeSelectEntity" />
  </div>
</template>
<script>
import axios from 'axios';
import _ from 'lodash';
import SearchResult from './SearchResult';
import GraphChart from '../GraphChart';


export default {
  name: 'search',
  components: {
    SearchResult,
  },
  data() {
    return {
      searchkey: '',
      select: '实体',
      categorys: [],
      properties: [],
      propertySearch: '',
      switchActive: '数据库',
      tags: [],
      activeNames: '',
      entity: {
        categorys: ['生物及医药化学品',
          '农用化学品',
          '有机原料与中间体',
          '催化剂及助剂',
          '香精与香料',
          '染料及颜料',
          '无机化学品',
          '其他',
          '食品与饲料添加剂'],
      },
      catchResult: null,
    };
  },
  methods: {
    handleChange() {
      console.log(this.categorys);
    },
    reset() {
      this.categorys = [];
      this.searchkey = '';
      this.$refs.searchResult.clear();
      // this.properties = [];
      // this.entity.categorys = [];
    },
    async hanldeSelectEntity(selectItem) {
      this.$emit('showLoading');
      const cas = selectItem.detail_basic['CAS号'];
      const res = await axios.get(`http://10.102.21.89:8000/relaction?cas=${cas}`);
      const result = GraphChart.loadingData(res.data.data, cas);
      // console.log(result);
      this.$emit('updateGraph', { graph: result, node: selectItem });
    },
    async seatchByKey() {
      if (this.searchkey) {
        this.$refs.searchResult.search();
      }
    },
    handleCategoryChange(values) {
      this.$refs.searchResult.search();
      // console.log(values);
      // if (this.catchResult) {
      // let { links, nodes } = _.cloneDeep(this.catchResult);
      // links = links.filter(item => this.categorys.includes(item.value));
      // this.$emit('updateGraph', { links, nodes });
      // }
    },
  },
};
</script>
<style scoped>
.search-page {
  padding-top: 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.switch-btns-box {
  display: flex;
  justify-content: space-between;
  height: 40px;
  align-items: center;
  flex-shrink: 0;
}
.switch-btns {
  display: flex;
  align-items: center;
}
.switch-btn {
  padding: 3px 4px;
  cursor: pointer;
}
.reset-btn {
  font-size: 13px;
  cursor: pointer;
}
.switch-btn.active {
  color: #409eff;
  border-bottom: 1px solid #409eff;
}
.properties-box {
  padding-bottom: 10px;
}
.property-search{
  margin-bottom: 10px;
}
.category-item{
  margin-bottom: 4px;
}
</style>
