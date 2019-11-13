<template>
  <div class="top">
    <van-nav-bar title="消息"></van-nav-bar>
    <van-swipe-cell>
      <van-cell :border="false" title="天天旗舰店" value="你好,我是客服1" />
      <template slot="right">
        <van-button square type="danger" text="删除" />
        <van-button square type="primary" text="收藏" />
      </template>
    </van-swipe-cell>
  </div>
</template>
<style scoped>
  .top{
      width: 100%;
      height: 100vh;
      background-color: #ffd84d;
  }
</style>