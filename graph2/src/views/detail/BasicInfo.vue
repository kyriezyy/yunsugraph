<template>
  <div class="info-box">
    <div class="section" id="jibenxinxi">
      <div class="section-title">基本信息</div>
      <div class="content">
        <div class="params-box">
          <div class="param-item" v-for="(value,key) in detail.product_info" :key="key">
            <span class="key">{{key}}：</span>
            <span class="value">{{value}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="section" id="wuguanxingzhi">
      <div class="section-title">物化性质</div>
      <div class="content">
        <div class="params-box">
          <div class="param-item" v-for="(value,key) in detail.detail_quality" :key="key">
            <span class="key">{{key}}</span>
            <span class="value">{{value}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="section" id="anquanxinxi">
      <div class="section-title">安全信息</div>
      <div class="content">
        <div class="params-box">
          <div class="param-item" v-for="(value,key) in detail.safe_info" :key="key">
            <span class="key">{{key}}：</span>
            <span class="value">{{value}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="section" id="hechengluxian">
      <div class="section-title">合成路线</div>
      <div class="content">
        <div class="params-box">
          <div class="param-item" v-for="(value,key) in guanxi.data.synts" :key="key">
            <div class="huaxuepin front">
              <div
                class="img"
                :style="{background:`url(${value.front[0].url}) no-repeat center center/contain`}"
              ></div>
              <p class="huaxuepin-cas">{{value.front[0].cas}}</p>
              <p class="huaxuepin-name">{{value.front[0].name}}</p>
            </div>
            <div class="percent">
              <div class="jiantou"></div>
              <p>{{value.pre}}</p>
            </div>
            <div class="huaxuepin back">
              <div
                class="img"
                :style="{background:`url(${value.back[0].url}) no-repeat center center/contain`}"
              ></div>
              <p class="huaxuepin-cas">{{value.back[0].cas}}</p>
              <p class="huaxuepin-name">{{value.back[0].name}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section" id="shangxiayouchanpin">
      <div class="section-title">上下游产品</div>
      <div class="content">
        <div class="params-box">
          <div class="params-title">
            上游产品
            <span class="more">更多</span>
          </div>
          <div class="params-content">
            <div class="huaxuepin front" v-for="item in guanxi.data.updown.ups" :key="item.cas">
              <div
                class="img"
                :style="{background:`url(${item.url}) no-repeat center center/contain`}"
              ></div>
              <p class="huaxuepin-cas">{{item.cas}}</p>
              <p class="huaxuepin-name">{{item.name}}</p>
            </div>
          </div>
        </div>
        <div class="params-box">
          <div class="params-title">
            下游产品
            <span class="more">更多</span>
          </div>
          <div class="params-content">
            <div class="huaxuepin front" v-for="item in guanxi.data.updown.downs" :key="item.cas">
              <div
                class="img"
                :style="{background:`url(${item.url}) no-repeat center center/contain`}"
              ></div>
              <p class="huaxuepin-cas">{{item.cas}}</p>
              <p class="huaxuepin-name">{{item.name}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section" id="sds">
      <div class="section-title">SDS</div>
      <div class="content">
        <div v-html="detail.sds.sds"></div>
      </div>
    </div>
    <div class="section" id="msds">
      <div class="section-title">MSDS</div>
      <div class="content">
        <div v-html="detail.msds"></div>
      </div>
    </div>
  </div>
</template>
<script>
import detail from '../../jsons/detail.json'
import guanxi from '../../jsons/guanxi.json'

export default {
  name: 'basic-info',
  data () {
    return {
      detail,
      guanxi
    }
  }
}
</script>

<style scoped>
.section {
    margin: 20px 0;
    border: 1px solid #eaeaea;
  }
 .section-title {
    font-size: 16px;
    background: #eaeaea;
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 20px;
  }

  .add-color {
    color: #023d6f;
    position: relative;
  }

  .add-color:before {
    content: '';
    background-color: #023d6f;
    position: absolute;
    width: 5px;
    height: 40px;
    left: -5px;
  }

  .content {
    padding: 20px;
  }

  .param-item {
    display: flex;
    margin: 5px 0;
  }

  .key {
    width: 130px;
    flex-shrink: 0;
    color: #888;
  }

  .value {
    font-size: 14px;
  }

.info-box {
  width: 900px;
  margin: 0 auto;
}

.huaxuepin {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
}

.huaxuepin .img {
  width: 100px;
  height: 100px;
  flex-shrink: 0;
  border: 1px solid #e0e0e0;
}

#hechengluxian .param-item {
  padding: 15px 0;
  border-bottom: 1px solid #e0e0e0;
  align-items: center;
}

.jiantou {
  width: 40px;
  height: 15px;
  background: #888;
  position: relative;
  margin-top: -10px;
  margin-bottom: 10px;
}

.jiantou:after {
  content: "";
  position: absolute;
  border-top: 15px solid transparent;
  border-left: 15px solid #888;
  border-right: 15px solid transparent;
  border-bottom: 15px solid transparent;
  right: -30px;
  top: -7.1px;
}

.huaxuepin-cas {
  margin-top: 10px;
}

.huaxuepin-name {
  font-size: 13px;
}

.percent {
  color: red;
}

#shangxiayouchanpin .params-content {
  display: flex;
  padding: 15px 0;
}

#shangxiayouchanpin .params-title {
  background: #e0e0e0;
  padding: 0 20px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.more {
  font-size: 13px;
  color: #023d6f;
}
</style>
