<template>
  <div class="rote-page">
    <div>
      <el-input placeholder="请输入内容" v-model="seatchkey" size="mini">
        <p slot="prepend">A</p>
      </el-input>
      <p style="height:5px"></p>
      <el-input placeholder="请输入内容" v-model="seatchkey" size="mini">
        <p slot="prepend">B</p>
      </el-input>
    </div>
    <div class="switch-btns-box">
      <div class="switch-btns">
        <div class="switch-btn active">最短路径</div>
        <!-- <div class="switch-btn">工作区</div> -->
      </div>
    </div>
    <div>
      <div>
        <el-collapse v-model="activeNames">
          <el-collapse-item title="关系过滤" name="1">
            <div>
              <el-checkbox-group v-model="categorys" size="mini">
                <el-checkbox label="All" border>All</el-checkbox>
                <el-checkbox label="1" border>关系1</el-checkbox>
                <el-checkbox label="2" border>关系2</el-checkbox>
              </el-checkbox-group>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
    <route-result/>
  </div>
</template>
<script>
import RouteResult from './RouteResult';

export default {
  name: 'route',
  components: {
    RouteResult,
  },
  data() {
    return {
      seatchkey: '',
      activeNames: '',
      categorys: [],
    };
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
