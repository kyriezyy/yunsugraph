<template>
  <div class="tooltip-box" v-if="node" :class="{show:show}">
    <div class="show-btn" @click="show = true" v-if="!show">展开</div>
    <div @click="show = false" class="show-btn" v-else>收起</div>
<template v-if="show && activeNode.nodetype==='1'">
      <div class="type">公司信息</div>
      <div class="content company-box">
        <div class="content-item">
          <div class="label">名称</div>
          <div class="value" v-html="activeNode.name"></div>
        </div>
        <div class="content-item">
          <div class="label">公司类型</div>
          <div class="value">{{activeNode['公司类型']}} </div>
        </div>
         <div class="content-item">
          <div class="label">工商注册号</div>
          <div class="value">{{activeNode['工商注册号']}} </div>
        </div>
         <div class="content-item">
          <div class="label">成立日期</div>
          <div class="value">{{activeNode['成立日期']}} </div>
        </div>
         <div class="content-item">
          <div class="label">核准日期</div>
          <div class="value">{{activeNode['核准日期']}} </div>
        </div>
         <div class="content-item">
          <div class="label">法定代表人</div>
          <div class="value">{{activeNode['法定代表人']}} </div>
        </div>
         <div class="content-item">
          <div class="label">注册地址</div>
          <div class="value">{{activeNode['注册地址']}} </div>
        </div>
         <div class="content-item">
          <div class="label">注册资本</div>
          <div class="value">{{activeNode['注册资本']}} </div>
        </div>
         <div class="content-item">
          <div class="label">登记机关</div>
          <div class="value">{{activeNode['登记机关']}} </div>
        </div>
         <div class="content-item">
          <div class="label">纳税人识别号</div>
          <div class="value">{{activeNode['纳税人识别号']}} </div>
        </div>
         <div class="content-item">
          <div class="label">组织机构代码</div>
          <div class="value">{{activeNode['组织机构代码']}} </div>
        </div>
          <div class="content-item">
          <div class="label">经营状态</div>
          <div class="value">{{activeNode['经营状态']}} </div>
        </div>
          <div class="content-item">
          <div class="label">经营范围</div>
          <div class="value">{{activeNode['经营范围']}} </div>
        </div>
          <div class="content-item">
          <div class="label">统一社会信用代码</div>
          <div class="value">{{activeNode['统一社会信用代码']}} </div>
        </div>
         <div class="content-item">
          <div class="label">营业期限</div>
          <div class="value">{{activeNode['营业期限']}} </div>
        </div>
         <div class="content-item">
          <div class="label">行业</div>
          <div class="value">{{activeNode['行业']}} </div>
        </div>
      </div>
    </template>
    <template v-if="show && activeNode.nodetype==='2'">
      <div class="type">法人</div>
      <div class="content ">
        <div class="content-item">
          <div class="label">姓名</div>
          <div class="value">{{activeNode.name}} </div>
        </div>
        <div class="content-item">
          <div class="label">简介</div>
          <div class="value">{{activeNode['简介']}} </div>
        </div>
      </div>
    </template>

    <template v-if="show && activeNode.nodetype==='3'">
      <div class="type">理财产品</div>
      <div class="content licai-content ">
        <div class="content-item">
          <div class="label">标题</div>
          <div class="value" v-html="activeNode.name"></div>
        </div>
        <div class="content-item">
          <div class="label">产品编号</div>
          <div class="value">{{activeNode.number}}</div>
        </div>
        <div class="content-item">
          <div class="label">产品类型</div>
          <div class="value" v-html="activeNode.productype"></div>
        </div>
        <div class="content-item">
          <div class="label">{{activeNode.property[0].key}}</div>
          <div class="value">{{activeNode.property[0].value}}</div>
        </div>
        <div class="content-item">
          <div class="label">{{activeNode.property[1].key}}</div>
          <div class="value">{{activeNode.property[1].value}}</div>
        </div>
        <div class="content-item">
          <div class="label">标签</div>
          <div class="value">{{activeNode.tag.join(',')}}</div>
        </div>
      </div>
    </template>

    <template v-if="show && activeNode.nodetype==='4'">
      <div class="type">新闻</div>
      <div class="content ">
        <div class="content-item">
          <div class="label">标题</div>
          <div class="value" v-html="activeNode.name"></div>
        </div>
        <div class="content-item">
          <div class="label">时间</div>
          <div class="value">{{activeNode.time}}</div>
        </div>
        <div class="content-item">
          <div class="label">来源</div>
          <div class="value" v-html="activeNode.source"></div>
        </div>
        <div class="content-item">
          <div class="label">概要</div>
          <div class="value" v-html="activeNode.desc"></div>
        </div>
        <div class="content-item">
          <div class="label">标签</div>
          <div class="value">{{activeNode.label}}</div>
        </div>
      </div>
    </template>
    <template v-if="show && activeNode.nodetype==='5'">
      <div class="type">研报</div>
      <div class="content ">
        <div class="content-item">
          <div class="label">标题</div>
          <div class="value" v-html="activeNode.name"></div>
        </div>
        <div class="content-item">
          <div class="label">时间</div>
          <div class="value">{{activeNode.time}}</div>
        </div>
        <div class="content-item">
          <div class="label">摘要1</div>
          <div class="value" v-html="activeNode.desc1"></div>
        </div>
        <div class="content-item">
          <div class="label">摘要2</div>
          <div class="value" v-html="activeNode.desc2"></div>
        </div>
        <div class="content-item">
          <div class="label">作者</div>
          <div class="value">{{activeNode.author}}</div>
        </div>
        <div class="content-item">
          <div class="label">公司</div>
          <div class="value">{{activeNode.company}}</div>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: 'tool-tip',
  props: ['node'],
  computed: {
    activeNode () {
      let newNode = Object.assign({}, this.node)
      if (newNode.name) {
        newNode.name = newNode.name.replace(
          /###平安银行###/g,
          '<b>平安银行</b>'
        )

        newNode.name = newNode.name.replace('###上海钜派###', '<b>上海钜派</b>')
        newNode.name = newNode.name.replace('###成长###', '<b>成长</b>')
        newNode.name = newNode.name.replace('###000001###', '<b>000001</b>')
      }
      if (newNode.desc) {
        newNode.desc = newNode.desc.replace(
          /###平安银行###/g,
          '<b>平安银行</b>'
        )
      }
      if (newNode.desc1) {
        newNode.desc1 = newNode.desc1.replace(
          /###平安银行###/g,
          '<b>平安银行</b>'
        )
      }
      if (newNode.desc2) {
        newNode.desc2 = newNode.desc2.replace(
          /###平安银行###/g,
          '<b>平安银行</b>'
        )
      }
      // ###000001###
      return newNode
    }
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    showBox () {
      this.show = true
    }
  }
}
</script>

<style scoped>
.tooltip-box {
  width: 60px;
  white-space: normal;
  padding: 20px 10px 10px 10px;
  max-height: 400px;
  overflow: auto;
  position: absolute;
  right: 10px;
  top: 10px;
  word-break: break-all;
  border-radius: 5px;
}
.tooltip-box.show {
  width: 350px;
  background: rgba(220, 220, 220, 0.9);
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
  flex-grow: 2;
}
.section-item {
  padding: 8px 0;
  border-bottom: 1px solid #e0e0e0;
}

.show-btn {
  position: absolute;
  top: 5px;
  right: 10px;
  font-size: 12px;
  background: #2b3643;
  color: #fff;
  padding: 2px 4px;
  border-radius: 3px;
}
.licai-content .label{
  width: 120px;
}
.company-box .label{
   width: 120px;
}

</style>

<style >
.tooltip-box b {
  color: red;
}
</style>
