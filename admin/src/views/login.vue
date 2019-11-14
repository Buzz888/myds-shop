<template>
  <div>
    <van-nav-bar>
      <van-icon name="wap-home-o" @click="$router.push('/')" slot="right" />
      <van-icon name="arrow-left" @click="$router.go(-1)" slot="left" />
    </van-nav-bar>
    <div>
      <div class="login">
        <div @click="flag=true" :class="{active:flag}">登陆</div>
        <div @click="flag=false" :class="{active:!flag}">注册</div>
      </div>

      <div class="img">
        <img src="https://raw.githubusercontent.com/Buzz888/myds-shop/master/image/logn.png" alt />
      </div>
      <div v-if="flag">
        <div class="title">欢迎鱿鱼会员</div>
        <form class="inp">
          <label class="labelin">
            <input v-model="inputlist.username" placeholder="账户名" type="text" />
          </label>
          <label class="labelin">
            <input v-model="inputlist.userpassword" autocomplete placeholder="密码" type="password" />
          </label>
          <button @click="login">登陆</button>
        </form>
      </div>
    </div>
    <div v-if="!flag">
      <div class="title">注册鱿鱼会员/获取更多权利</div>
      <form class="inp">
        <label class="labelin">
          <input v-model="inputlist.username" placeholder="账户名" type="text" />
        </label>
        <label class="labelin">
          <input v-model="inputlist.uname" placeholder="用户名" type="text" />
        </label>
        <label class="labelin">
          <input v-model="inputlist.userpassword" autocomplete placeholder="密码" type="password" />
        </label>
        <button @click="res">注册</button>
      </form>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Notify } from "vant";

Vue.use(Notify);
export default {
  data() {
    return {
      flag: true,
      inputlist: {
        username: "",
        userpassword: "",
        uname: ""
      }
    };
  },
  methods: {
    async res() {
      if (
        /\d{3,5}/.test(this.inputlist.username) &&
        /\w{5,8}/.test(this.inputlist.userpassword) &&
        /\w{5,8}/.test(this.inputlist.uname)
      ) {
        const res = await this.$http.post("/regsin", this.inputlist);
        if (res.status == 200) {
          await Notify({
            type: "success",
            message: "注册成功欢迎登陆"
          });
          this.flag = true;
        }
      } else {
        Notify({
          type: "warning",
          message: "用户名必须为3-5位数字,密码必须为5-8位字符"
        });
      }
    },
    async login(){
          const res = await this.$http.post('/login',this.inputlist)
          localStorage.token = res.data.token
          if(localStorage.token){
            Notify({
          type: "success",
          message: "登陆成功"
        });
            this.$router.go(-1)
          }
    }
  }
};
</script>
<style scoped>
.login {
  display: flex;
  justify-content: space-around;
  color: #515151;
  font-size: 1.4rem;
  margin: 15px auto;
}
.active {
  color: #ffd84d;
  border-bottom: 2px solid #ffd84d;
}
.inp {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.title {
  margin-left: 10px;
  color: #515151;
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 40px;
}
.img {
  width: 100%;
  display: flex;
  justify-content: center;
  transform: rotate(20deg);
  animation: youyu 10s infinite;
}
@keyframes youyu {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.labelin {
  color: #515151;
  font-size: 1.1rem;
  margin-bottom: 40px;
}
.labelin input {
  border: none;
  height: 30px;
  border: 2px solid #ffd84d;
  border-radius: 15px;
  text-align: center;
}
.inp button {
  border: none;
  background-color: #ffd84d;
  width: 200px;
  height: 50px;
  border: 2px solid #ffd84d;
  border-radius: 15px;
  color: white;
}
</style>