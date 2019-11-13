<template>
  <div>
    <van-nav-bar title="快速下单">
      <van-icon name="arrow-left" @click="$router.go(-1)" slot="left" />
      <van-icon name="wap-home-o" slot="right" />
    </van-nav-bar>
    <van-steps :active="active">
      <van-step>挑选商品</van-step>
      <van-step>购买商品</van-step>
      <van-step>买家支付</van-step>
      <van-step>交易完成</van-step>
    </van-steps>
    <div class="sava" v-if="flag2">
      <div>收货信息填写</div>
      <input type="text" placeholder="收货人" />
      <input type="text" v-model="data1" placeholder="收货地址" />
      <input type="text" placeholder="电话" />
      <button @click="add" style="margin-bottom: 30px;">保存</button>
      <button @click="flag2=!flag2">取消</button>
    </div>
    <div v-if="flag3" class="zegai"></div>
    <div v-if="flag2" class="zegai"></div>
    <van-panel title="收货地址" @click="flag2=!flag2" :desc="data" status="可用">
      <van-swipe-cell v-for="(item,i) in this.$store.state.item" :key="i">
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
    </van-panel>

    <van-submit-bar
      v-show="flag"
      :price="money"
      button-text="提交订单"
      @submit="onSubmit"
    />

    <van-submit-bar
      v-show="!flag"
      disabled
      :price="money"
      button-text="提交订单"
      tip="请填写收获地址"
      tip-icon="info-o"
      @submit="onSubmit"
    />
    <div class="mima" v-if="flag3">
      <van-password-input
        :value="value"
        info="密码为 6 位数字"
        :focused="showKeyboard"
        @focus="showKeyboard = true"
      />

      <!-- 数字键盘 -->
      <van-number-keyboard
        :show="showKeyboard"
        @input="onInput"
        @delete="onDelete"
        @blur="showKeyboard = false"
      />
    </div>
    <van-loading class="load" v-show="flag4" size="80px">加载中...</van-loading>
  </div>
</template>
<script>
import Vue from "vue";
import { Notify, PasswordInput, NumberKeyboard } from "vant";

Vue.use(Notify, PasswordInput, NumberKeyboard);
export default {
  data() {
    return {
      money:0,
      flag4: false,
      flag3: false,
      data1: null,
      data: "暂无收货地址点击填写",
      flag: false,
      active: 2,
      flag2: false,
      value: "",
      showKeyboard: true,
      option: 0
    };
  },
  methods: {
     price() {
      //window.console.log(this.$store.state.item)
      if (this.$store.state.item.length > 0) {
        
        this.$store.state.item.map(i => {
          this.money = this.money + i.option * i.id.formshop.money;
        });
        this.money = this.money * 100;
      }else{
        Notify({ type: 'success', message: '请先购物' });
        this.$router.push('/')
      }
    },
    onInput(key) {
      this.value = (this.value + key).slice(0, 6);
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    },
    add() {
      if (this.data1) {
        this.data = this.data1;
        this.flag2 = !this.flag2;
        this.flag = !this.flag;
      } else {
        this.data = "暂无收货地址点击填写";
        Notify({ type: "warning", message: "请填写收货地址" });
      }
    },
    onSubmit() {
      this.flag3 = !this.flag3;
    }
  },
  created() {
    if (this.data === !"暂无收货地址点击填写") {
      this.flag = !this.flag;
    }
    this.price()
  },
  watch: {
    value: function(val) {
      if (val.length == 6) {
          if(this.option<3){
        if (val == 123456) {
          this.flag4 = !this.flag4;
          this.onDelete = () => {
            return 1;
          };
          setTimeout(async() => {
              window.console.log(this.$store.state.item)
              const res = await this.$http.post('/fahuo',this.$store.state.item)
            res.data.success?this.$router.push("/fahuo"):Notify({ type: "warning", message: `网络不通` });
          }, 5000);
        } else {
          this.option += 1;
          let index = 3
           - this.option;
          this.value = "";
          Notify({ type: "warning", message: `密码错误你还有${index}次机会` });
        }}
        else{
            this.$router.push("/stop");
        }
      }
    }
  }
};
</script>
<style >
.load {
  width: 100%;
  margin: auto;
  z-index: 130;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mima {
  z-index: 100;
}
.van-password-input {
  z-index: 120;
}
.zegai {
  top: 0;
  position: fixed;
  z-index: 98;
  background-color: #e6e6e6;
  height: 100vh;
  width: 100%;
  opacity: 0.6;
}
.sava {
  display: flex;
  width: 80%;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  margin: auto;
  background-color: white;
  z-index: 99;
  position: fixed;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  padding: 20px;
  padding-top: 30px;
  padding-bottom: 70px;
  border-radius: 15px;
}
.sava input {
  width: 80%;
  margin-bottom: 30px;
}
.sava button {
  width: 100%;
  height: 40px;
  background-color: red;
  color: white;
  border-radius: 15px;
}
</style>