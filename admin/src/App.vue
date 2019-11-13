<template>
  <div id="app">
    <transition mode="out-in" name="fade">
      <router-view></router-view>
    </transition>
    <van-tabbar v-model="active" active-color="#ffd84d">
      <van-tabbar-item  @click="add" info="" icon="home-o" to="/"></van-tabbar-item>
      <van-tabbar-item   info="" icon="search" to="/menu"></van-tabbar-item>
      <van-tabbar-item  info="" icon="chat-o" to="/say"></van-tabbar-item>
      <van-tabbar-item  :info="this.$store.state.count" icon="shopping-cart-o" to="/car"></van-tabbar-item>
      <van-tabbar-item  info="" icon="manager-o" to="/me"></van-tabbar-item>
      

    </van-tabbar>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
<script>
export default {
  data() {
    return {
      info:'',
      active: 0,
    };
  },
  methods: {
    add(e) {
      if (e.pageY > 800) {
        let top = document.documentElement.scrollTop || document.body.scrollTop;
        // 实现滚动效果
        const timeTop = setInterval(() => {
          document.body.scrollTop = document.documentElement.scrollTop = top -= 100;
          if (top <= 0) {
            clearInterval(timeTop);
          }
        }, 10);
      }
    }
  },
  watch: {
    $route(to) {
     
     let tab = ['home','menu','say','car','me']
      const index = tab.findIndex(i => i == to.name);
      this.active = index;
    }
  },
  created(){
  

  }
};
</script>

