<template>
  <div class="tooltip-box" v-if="node">
    <template>
      <!-- <div class="type">化学品</div> -->
      <div class="content">
        <div class="content-item">
          <div class="label">CAS</div>
          <div class="value">{{node.detail_basic['CAS号']}}</div>
        </div>
        <div class="section-collapse">
          <el-collapse>
            <el-collapse-item title="基本信息" name="1" class="collapse-item">
              <div class="child-attr-item" v-for="(item,key) in node.detail_basic" :key="key">
                <div class="child-attr-label">{{key}}</div>
                <div class="child-attr-value">{{item}}</div>
              </div>
            </el-collapse-item>
            <el-collapse-item title="物化性质" name="2" class="collapse-item">
              <div class="child-attr-item" v-for="(item,key) in node.detail_quality" :key="key">
                <div class="child-attr-label">{{key}}</div>
                <div class="child-attr-value">{{item}}</div>
              </div>
            </el-collapse-item>
            <el-collapse-item title="安全信息" name="3" class="collapse-item">
              <div class="child-attr-item" v-for="(item,key) in node.safe_info" :key="key">
                <div class="child-attr-label">{{key}}</div>
                <div class="child-attr-value">{{item}}</div>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </template>
    <template v-if="node.type==2">
      <div class="type">文献</div>
      <div class="content">
        <div class="content-item">
          <div class="label">标题</div>
          <div class="value">{{node.title}}</div>
        </div>
        <div class="content-item">
          <div class="label">作者</div>
          <div class="value">{{node.author}}</div>
        </div>
        <div class="content-item">
          <div class="label">链接</div>
          <div class="value">
            <a :href="node.fulltext_link">{{node.fulltext_link}}</a>
          </div>
        </div>
        <div class="content-item">
          <div class="label">摘要</div>
          <div class="value">{{node.abstract.substr(0, 180)}}...</div>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: 'tool-tip',
  props: ['node'],
  data() {
    return {
      showBI: false,
      showPP: false,
      showSI: false,
    };
  },
};
</script>

<style scoped>
.tooltip-box {
  width: 350px;
  white-space: normal;
  background: rgba(220, 220, 220, 0.9);
  padding: 10px;
  max-height: 400px;
  overflow: auto;
  position: absolute;
  right: 10px;
  top: 10px;
  word-break: break-all;
  border-radius: 5px;
}
.tooltip-box .type {
  font-size: 18px;
}
.tooltip-box .content {
  padding: 15px;
}
.content-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.label {
  width: 80px;
  flex-shrink: 0;
}
.value {
  font-size: 13px;
}
.section-item {
  padding: 8px 0;
  border-bottom: 1px solid #e0e0e0;
}
.child-attr-item {
  display: flex;
}
.child-attr-label {
  width: 90px;
  flex-shrink: 0;
  font-size: 13px;
}
.child-attr-value {
  font-size: 13px;
}
.collapse-item{
  background: transparent;
}
</style>

<style >

.collapse-item .el-carousel__mask,
 .collapse-item .el-cascader-menu,
 .collapse-item .el-cascader-menu__item.is-disabled:hover,
  .collapse-item .el-collapse-item__header,
  .collapse-item .el-collapse-item__wrap{
    background: transparent;
  }
</style>
