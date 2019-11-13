
<template>
  <div>
    <van-nav-bar title="分类"></van-nav-bar>
    <div class="header">
      <van-sidebar class="title" v-model="activeKey">
        <van-sidebar-item :title="item" v-for="(item,i) in title" :key="i" />
      </van-sidebar>
      <div class="menu">
        <van-grid  :column-num="3">
          <van-grid-item
            v-for="(item,i) in item[activeKey].title"
            :key="i"
            icon="photo-o"
            :text="item"
          />
        </van-grid>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      item: [
        { title: ["小米", "小米", "小米"] },
        { title: ["小米", "小米", "小米"] },
        { title: ["小3", "小3", "小3"] },
        { title: ["小4", "小4", "小4"] },
        { title: ["小5", "小5", "小5"] },
        { title: ["小7", "小7", "小7"] },
        { title: ["小6", "小6", "小6"] }
      ],
      activeKey: 0,
      title: ["手机", "电脑", "美妆", "百货", "鞋包", "充值"]
    };
  }
};
</script>
<style scoped>
.header {
  display: flex;
  justify-content: flex-start;
}
.title{
    height: 100vh;
    background-color: #fafafa;
}
.menu {
  width: 100%;
}
</style>