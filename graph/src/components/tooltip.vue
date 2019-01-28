<template>
  <div
    class="tooltip-box"
    v-if="node"
  >
    <template v-if="node.type==1">
      <div class="type">化学品</div>
      <div class="content">
        <div class="content-item">
          <div class="label">CAS</div>
          <div class="value">{{node.CAS}}</div>
        </div>
        <div class="section-item">
          <div class="label">基本信息</div>
          <div>
            <div
              class="value"
              @click="showBI=!showBI"
            >{{showBI?'折叠':'展开'}} </div>
            <div v-if="showBI">
              <div
                class="child-attr-item"
                v-for="item in node.BI"
                :key="item.key"
              >
                <div class="child-attr-label">{{item.key}}</div>
                <div class="child-attr-value">{{item.value}}</div>
              </div>
            </div>
          </div>

        </div>
        <div class="section-item">
          <div class="label">物化性质</div>
          <div>
            <div
              class="value"
              @click="showPP=!showPP"
            >{{showPP?'折叠':'展开'}} </div>
            <div v-if="showPP">
              <div
                class="child-attr-item"
                v-for="item in node.PP"
                :key="item.key"
              >
                <div class="child-attr-label">{{item.key}}</div>
                <div class="child-attr-value">{{item.value}}</div>
              </div>
            </div>

          </div>
        </div>
        <div class="section-item">
          <div class="label">安全信息</div>
          <div>
            <div
              class="value"
              @click="showSI=!showSI"
            >{{showSI?'折叠':'展开'}} </div>
            <div v-if="showSI">
              <div
                class="child-attr-item"
                v-for="item in node.SI"
                :key="item.key"
              >
                <div class="child-attr-label">{{item.key}}</div>
                <div class="child-attr-value">{{item.value}}</div>
              </div>
            </div>

          </div>
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
          <div class="value"><a :href="node.fulltext_link">{{node.fulltext_link}}</a></div>
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
  background: rgba(220, 220, 220, 0.5);
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
}
.label {
  width: 80px;
  flex-shrink: 0;
}
.value{
  font-size: 13px;
}
.section-item{
  padding: 8px 0;
  border-bottom: 1px solid #e0e0e0;
}
.child-attr-item{
  display: flex;

}
.child-attr-label{
  width: 90px;
  flex-shrink: 0;
  font-size: 13px;
}
.child-attr-value{
  font-size: 13px;
}
</style>

