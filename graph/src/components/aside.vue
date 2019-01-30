<template>
  <div class="slide">
    <div class="slide-tab-box">
      <el-radio-group v-model="activeTab" size="mini" class="slide-tab">
        <el-radio-button class="slide-tab-item" label="搜索">
          <i class="el-icon-search"></i>搜索
        </el-radio-button>
        <el-radio-button class="slide-tab-item" label="路径">
          <i class="el-icon-share"></i>
          路径
        </el-radio-button>
      </el-radio-group>
    </div>
    <div class="tab-container">
      <search
        @updateGraph="(result)=>$emit('updateGraph', result)"
        @showLoading="$emit('showLoading')"
        v-show="activeTab==='搜索'"
      />
      <route v-show="activeTab==='路径'"/>
    </div>
  </div>
</template>
<script>
import Search from './Search';
import Route from './Route';

export default {
  name: 'my-aside',
  props: ['filters'],
  components: {
    Search,
    Route,
  },
  data() {
    return {
      open: true,
      selectd: [],
      activeTab: '搜索',
    };
  },
  computed: {
    showFilters() {
      const filters = Array.from(this.filters);
      return filters.map(item => ({
        text: item,
        active: this.selectd.includes(item),
      }));
    },
  },
  methods: {
    toggleAside() {
      this.open = !this.open;
    },
    handleSelectItem(item) {
      if (this.selectd.includes(item)) {
        this.selectd = this.selectd.filter(select => select !== item);
      } else {
        this.selectd.push(item);
      }
      this.$emit('onFilter', this.selectd);
    },
  },
};
</script>
<style scoped>
.slide {
  width: 300px;
  position: relative;
  height: 100%;
  background: #fff;
  bottom: 0;
  box-shadow: rgba(0, 0, 0, 0.26) 0 3px 10px, rgba(0, 0, 0, 0.33) 0 3px 10px;
  z-index: 10;
  padding: 5px 10px;
  font-size: 13px;
  flex-shrink: 0;
}
.slide-tab {
  width: 100%;
  /* display: flex; */
  /* border: 1px solid #e0e0e0; */
  /* border-radius: 4px; */
}
.slide-tab-item {
  width: 50%;
  text-align: center;
  /* border-right: 1px solid #eaeaea; */
  /* padding: 3px 0; */
}
.slide-tab-item.active {
  background: #95a5a6;
}
.slide-tab-item:last-child {
  border-right: none;
}
.tab-container {
  height: calc(100% - 30px);
}
</style>

