<template>
  <div>
    <van-nav-bar title="商品" left-arrow>
      <van-icon @click="addright" name="arrow-left" slot="left" />
      <van-icon name="home-o" @click="addleft" slot="right" />
    </van-nav-bar>
    <!-- swiper -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in list.img" :key="index">
        <img v-lazy="image.url" class="swiper" />
      </van-swipe-item>
    </van-swipe>
    <!-- 标题 -->
    <div class="toptitle">
      <div>{{list.formshop.input}}</div>
      <div class="sumsize">
        <div>数量:{{list.formshop.num}}</div>
        <div>发货地:{{list.formshop.city}}</div>
      </div>
      <div style="color:red;">价格:{{list.formshop.money}}</div>
    </div>
    <!-- 内容 -->
    <div>
      <div class="dianpu">
        
      <div class="pinfen" v-for="(item,i) in value" :key="i">
        <div class="pinfenname">{{item.name}}</div>
        <van-rate size=15 class="pinfennum" v-model="item.num" />
      </div>
      </div>
    </div>
    <!-- 购买页面 -->
    <van-goods-action style="z-index: 2;">
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="cart-o"  :info="this.$store.state.count" to='/car' text="购物车" />
      <van-goods-action-button color="#ffd84d" @click="addshop" type="warning" text="加入购物车" />
      <van-goods-action-button color="#ffd84d" type="danger" text="立即购买" />
      
    </van-goods-action>
  </div>
</template>
<script>
import Vue from "vue";
import router from "../router/index";
import { Lazyload,Sku } from "vant";
Vue.use(Lazyload,Sku);
export default {
  props: {
    id: {}
  },
  data() {
    return {
      value: [
        { num: 4, name: "店铺描述" },
        { num: 2, name: "物流信息" },
        { num: 2, name: "店铺评分" }
      ],
      show: false,
      sku: {
        // 数据结构见下方文档
      },
      goods: {
        // 数据结构见下方文档
      },
      messageConfig: {
        // 数据结构见下方文档
      },
      list: []
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http(`/list/${this.id}`);
      window.console.log(res.data);
      this.list = res.data;
    },
    addright() {
      router.go(-1);
    },
    addleft() {
      router.push("/");
    },
    addshop(){
    this.$store.getters.getTodoById(this.list) 
  }
  },
  created() {
    this.fetch();
  },
};
</script>
<style scoped>
.van-nav-bar .van-icon {
  color: #ffd84d;
}
.swiper {
  width: 100%;
}
.sumsize {
  color: #323233;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
}
.toptitle {
  width: 90%;
  margin: auto;
}
.pinfen{
  width: 90%;
  margin: auto;
}
.pinfenname{
  font-size: .7rem;
}
.dianpu{
  display: flex;
  align-content: center;
  width: 90%;
  margin: auto;
}



</style>