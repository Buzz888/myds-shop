<template>
  <el-container style="height: 100vh">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu router>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-message"></i>商品列表
          </template>
          <el-menu-item-group>
            <template slot="title">商品操作</template>
            <el-menu-item index="/shop/push">新增商品</el-menu-item>
            <el-menu-item index="/shop/list">商品列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-message"></i>用户购买信息
          </template>
          <el-menu-item-group>
            <template slot="title">购物车</template>
            <el-menu-item index="/shop/buy">商品列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-message"></i>用户信息
          </template>
          <el-menu-item-group>
            <template slot="title">账户管理</template>
            <el-menu-item index="/shop/login">账户列表</el-menu-item>
          </el-menu-item-group>
           <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
        </el-submenu>
      </el-menu>
      
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px"></el-header>

      <el-main>
        <transition name="fade" mode="out-in">
        <router-view></router-view>
        </transition >
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

<script>
export default {
  data() {
    return {};
  }
};
</script>
