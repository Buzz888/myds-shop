<template>
  <div class="top">
    <van-nav-bar title="购物车"></van-nav-bar>
    <div>
      <van-swipe-cell v-for="(item,i) in this.$store.state.item" :key="i">
        <van-stepper
          v-model="item.option"
          @change="strchange0(i)"
          @minus="strchange1(i)"
          @plus="stchange(item)"
          class="jishuqi"
        />
        <van-card
          class="shop"
          :num="item.option"
          :price="item.id.formshop.money"
          :title="item.id.formshop.input"
          :thumb="item.id.img[0].url"
        />
        <template slot="right">
          <van-button @click="spliceshop(i)" square type="danger" text="删除" />
        </template>
      </van-swipe-cell>
    </div>
    <van-submit-bar
      v-show="flag"
      class="buy"
      :price="money"
      button-text="提交订单"
      @submit="onSubmit(money)"
    ></van-submit-bar>
    <van-submit-bar
      class="buy"
      v-show="!flag"
      disabled
      :price="money"
      button-text="提交订单"
      tip="请先购物"
      tip-icon="info-o"
      @submit="onSubmit"
    />
  </div>
</template>
<style scoped>
.buy {
  bottom: 50px;
}
</style>
<script>
import Vue from 'vue';
import { Notify } from 'vant';

Vue.use(Notify);
export default {
  data() {
    return {
      num: 1,
      checked: false,
      money: 0,
      flag: false
    };
  },
  methods: {
    price() {
      //window.console.log(this.$store.state.item)
      if (this.$store.state.item.length > 0) {
        this.flag=true
        this.$store.state.item.map(i => {
          this.money = this.money + i.option * i.id.formshop.money;
        });
        this.money = this.money * 100;
      }
    },
    stchange(item) {
      this.$store.state.item[item].option++;
      this.money = 0;
      this.price();
    },
    strchange1(item) {
      this.$store.state.item[item].option--;
      this.money = 0;
      this.price();
    },
    strchange0() {
      this.money = 0;
      this.price();
    },
    spliceshop(i) {
      this.$store.state.item.splice(i, 1);
      this.money = 0;
      this.price();
      this.$store.commit("increment");
    },
    onSubmit(money) {
      // window.console.log(money/100)
      if(localStorage.token){
        this.$router.push({ name: "ok", query: { money1: money / 100 } });
      }else{
        this.$router.push('/login')
        Notify({ type: 'primary', message: '请先登陆' });
      }
      
    }
  },
  created() {
    this.price();
    
  }
};
</script>
<style scoped>
.van-button {
  height: 100%;
}
.shop {
  background-color: white;
}
.jishuqi {
  top: 70%;
  right: 0%;
  position: absolute;
  z-index: 9;
}
</style>