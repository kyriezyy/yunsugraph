<template>
  <div class="tooltip-box" v-if="node" :style="{width:show?'350px':'66px'}">
    <template v-if="!show">
      <div class="show-btn" @click="show = true">
        最大化
      </div>
    </template>
    <template v-if="show && node.type==='element'">
      <div class="content">
         <div @click="show = false" class="show-btn">
        最小化
      </div>
        <div class="content-item">
          <div class="label">CAS</div>
          <div class="value">{{node.detail_basic['CAS号']}}</div>
        </div>
        <div class="section-collapse">
          <el-collapse>
            <el-collapse-item title="基本信息" name="1" class="collapse-item">
               <div class="child-attr-item" v-if="node.image">
                <div class="child-attr-label">分子式</div>
                <div class="child-attr-value">
                  <img class="huaxue-icon" :src="node.image"/>
                </div>
              </div>
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
    <template v-if="show && node.type==='news'">
       <div @click="show = false" class="show-btn">
        最小化
      </div>
      <div class="type">新闻</div>
      <div class="content">
        <div class="content-item">
          <div class="label">标题</div>
          <div class="value">{{node.name}}</div>
        </div>
        <div class="content-item">
          <div class="label">摘要</div>
          <div class="value">{{node.name}}</div>
        </div>
        <div class="content-item">
          <div class="label">链接</div>
          <div class="value">
            <a :href="node.url" target="_blank">{{node.url}}</a>
          </div>
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
      show: true,
    };
  },
};
</script>

<style scoped>
.tooltip-box {
  width: 350px;
  white-space: normal;
  background: rgba(220, 220, 220, 0.9);
  padding: 20px 10px 10px 10px;
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
.huaxue-icon{
  width: 100px;
}
.show-btn{
  position: absolute;
  top:5px;
  right:10px;
  font-size: 12px;
  background: #2b3643;
  color:#fff;
  padding: 2px 4px;
  border-radius: 3px;
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
