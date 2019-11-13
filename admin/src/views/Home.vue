<template>
  <div class="all">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-search v-model="value" placeholder="请输入搜索关键词" show-action shape="round">
        <div slot="action">搜索</div>
      </van-search>
      <van-swipe class="swiper" :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" width="100%" height="200px" />
        </van-swipe-item>
      </van-swipe>
      <van-grid :column-num="4" class="menu" icon-size="1rem">
        <van-grid-item v-for="(i,index) in menu" :key="index" :icon="i.icon" :text="i.text" />
      </van-grid>
      <van-tabs v-model="active" class="tab" swipeable>
        <van-tab v-for="index in 4" :title="'选项 ' + index" :key="index">
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <van-card
              v-for="(item,i) in list"
              :key="i"
              :num="item.formshop.num"
              :price="item.formshop.money"
              :title="item.formshop.input"
              :thumb="item.img[0].url"
              @click="add(item._id)"
            >
            <van-rate v-model="value" />
              <div slot="footer">
                <van-button @click.stop="goshop(item)" size="mini">加入购物车</van-button>
                <van-button size="mini">立即购买</van-button>
              </div>
            </van-card>
            <div class="loading" v-show="flag">
              <van-loading color="white" />
              <span style="color:white;">玩命加载中...</span>
            </div>
            <div class="loading" v-show="!flag">
              <van-divider>这是我的底线</van-divider>
            </div>
          </van-list>
        </van-tab>
      </van-tabs>
    </van-pull-refresh>
  </div>
</template>
<script>
import Vue from "vue";
import router from '../router/index'
import { Lazyload } from "vant";
Vue.use(Lazyload);
export default {
  data() {
    return {
      flag:true,
      active: 0,
      list: [],
      loading: false,
      finished: false,
      menu: [
        { icon: "goods-collect-o", text: "推荐" },
        { icon: "goods-collect-o", text: "推荐" },
        { icon: "goods-collect-o", text: "推荐" },
        { icon: "goods-collect-o", text: "推荐" },
        { icon: "goods-collect-o", text: "推荐" },
        { icon: "goods-collect-o", text: "推荐" },
        { icon: "goods-collect-o", text: "推荐" },
        { icon: "goods-collect-o", text: "推荐" }
      ],
      value: "",
      images: [
        "https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg",
        "https://aecpm.alicdn.com/simba/img/TB14ab1KpXXXXclXFXXSutbFXXX.jpg_q50.jpg",
        "https://img.alicdn.com/tps/i4/TB1awIwjBv0gK0jSZKbSuvK2FXa.jpg"
      ],
      isLoading: false
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 500);
    },
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 1; i++) {
          let promise = new Promise(rej => {
            const res = this.$http("/list");
            rej(res);
          });
          promise.then(res => {
            this.list.push(res.data[0]);
          });
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 30) {
          this.finished = true;
          this.flag = false;
        }
      }, 800);
    },
    async fetch() {
      const res = await this.$http("/list");
      this.list = res.data;
      //window.console.log(this.list);
    },
    add(id){
      router.push(`/list/${id}`)
    //window.console.log(id)
  },
  goshop(id){
    this.$store.getters.getTodoById(id) 
       window.console.log(this.$store.state.item)
  }
  },
  created() {
    this.fetch();
    
    
  },
  
};
</script>
<style scoped>
.all {
  background-color: #ffd84d;
  max-width: 800px;
  height: 100%;
}
.swiper {
  margin: 10px auto;
  width: 93%;
  border-radius: 15px;
}
.menu {
  margin: 10px auto;
  width: 93%;
}
.tab {
  margin: 10px auto;
  width: 93%;
}
.loading{
      display: flex;
    justify-content: center;
}
</style>