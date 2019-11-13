<template>
<div>
    <van-nav-bar  >
  <van-icon  name="search" slot="right" />
  <van-icon  name="arrow-left" slot="left" />
</van-nav-bar>
<div>
    <div class="login">
    <div class="active">登陆</div>
    <div>注册</div>
    </div>
    <form class="inp">
        <label class="labelin"><input placeholder="账户名" type="text"></label>
        <label class="labelin"><input placeholder="密码" type="password"></label>
        <button>登陆</button>
    </form>
</div>
</div>
</template>
<style scoped>
.login{
    display: flex;
    justify-content: space-around;
    color: #515151;
    font-size: 1.4rem;
    margin: 15px auto;
}
.active{
    color: #ffd84d;
    border-bottom: 2px solid #ffd84d;
}
.inp{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 30vh;
}
.labelin{
 color: #515151;
 font-size: 1.1rem;
 margin:30px;
}
.labelin input{
    border: none;
    height: 30px;
    border: 2px solid #ffd84d;
    border-radius: 15px;
   text-align: center;
}
.inp button{
    border: none;
    background-color: #ffd84d;
    width: 200px;
    height: 50px;
    border: 2px solid #ffd84d;
    border-radius: 15px;
    color: white;

}
</style>