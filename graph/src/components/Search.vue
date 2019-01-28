<template>
  <div class="search-page">
    <div>
      <el-input placeholder="请输入内容" v-model="seatchkey" size="mini" class="input-with-select">
        <el-select v-model="select" slot="prepend" placeholder="请选择" size="mini">
          <el-option label="实体" value="实体"></el-option>
          <el-option label="关系" value="关系"></el-option>
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
        <div
          class="switch-btn"
          :class="{active:switchActive==='工作区'}"
          @click="switchActive='工作区'"
        >工作区</div>
      </div>
      <div class="reset-btn">重置
        <i class="el-icon-refresh"></i>
      </div>
    </div>
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="类别过滤" name="1">
        <div>
          <el-checkbox-group v-model="categorys" size="mini">
            <el-checkbox label="All" border>All</el-checkbox>
            <el-checkbox label="1" border>类别1</el-checkbox>
            <el-checkbox label="2" border>类别2</el-checkbox>
          </el-checkbox-group>
        </div>
      </el-collapse-item>
      <el-collapse-item title="属性过滤" name="2">
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
             <!-- @close="handleClose(tag)" -->
            <el-tag v-for="item in tags" :key="item.value" closable @close="handleClose(tag)">{{item.key}} </el-tag>
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item title="排序" name="3">
        <div></div>
      </el-collapse-item>
    </el-collapse>
    <search-result/>
  </div>
</template>
<script>
import SearchResult from './SearchResult';

export default {
  name: 'search',
  components: {
    SearchResult,
  },
  data() {
    return {
      seatchkey: '',
      select: '实体',
      categorys: [],
      properties: [],
      propertySearch: '',
      switchActive: '数据库',
      tags: [],
      activeNames: '',
    };
  },
  methods: {
    handleChange() {},
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
</style>
