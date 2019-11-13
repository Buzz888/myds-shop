<template>
  <div class="top">
    <van-nav-bar title="我的鱿鱼"></van-nav-bar>
    <div class="user">
      <div></div>
      <div @click="$router.push('login')" class="user1">注册/登陆</div>
    </div>
    <div class="middle">
      <div class="middletop">
        <span>我的订单</span>
        <span>查看全部订单 ></span>
      </div>
      <van-grid>
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
      </van-grid>
    </div>
    <div class="end">
      <van-cell title="客服" icon="location-o" />
      <van-cell title="单元格" icon="location-o" />
    </div>
  </div>
</template>
<style scoped>
.top {
  width: 100%;
  height: 100vh;
  background-color: #ffd84d;
}
.user {
  width: 90%;
  margin: 20px 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.user :nth-child(1) {
  border-radius: 50%;
  width: 60px;
  height: 60px;
  background-color: white;
  margin-right: 50px;
}
.middle {
  width: 92%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  border-radius: 15px;
}
.middletop {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}
.middletop :last-child {
  font-size: 0.7rem;
  color: #7d7e80;
}
.end {
  width: 92%;
  margin: 20px auto;
}
.user1{
  color: white;
  border-bottom: 1px solid white;
}
</style>