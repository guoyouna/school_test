<template>
<div id="navigator">
    <router-link to="/">
        <i class="gc-iconhome"></i>
        <p>首页</p>
    </router-link>
    <router-link to="/alumnicircle">
        <i class="gc-iconshop"></i>
        <p>校友圈</p>
    </router-link>
    <router-link to="/alumni">
        <i class="gc-iconfriend"></i>
        <p>校友录</p>
    </router-link>
    <router-link to="/service">
        <i class="gc-icontag"></i>
        <p>服务</p>
    </router-link>
    <router-link to="/userinfo">
        <i class="gc-iconpeople"></i>
        <p>个人中心</p>
    </router-link>
</div>
</template>

<script>
export default {
  name: "Tabbar",
  data() {
    return {};
  }
};
</script>

<style  scoped>
.nav {
  height: 100%;
  width: 100%;
}

#navigator {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.98rem;
  color: #6d6d6d;
  font-size: 0.27rem;
  display: flex;
  z-index: 999;
  border-top: 1px solid #c8caca;
  background-color: #ffffff;
}
a {
  text-align: center;
  height: 100%;
  width: 20%;
  text-decoration: none;
  color: #25282a;
  margin: 2px auto;
}
p{
    margin:0.02rem;
    font-size: 0.28rem;
}
i {
  font-size: 0.5rem;
}
#navigator .router-link-exact-active {
  color: #0189fb !important;
}

#navigator .router-link-exact-active .icon {
  background-color: #0189fb !important;
}
</style>
