<template>
  <div class="set fs-r30">
    <nav-bar :title="nav.title" :naviconName="nav.naviconName2" ></nav-bar>
   <div class="content">
     <div class="set-list">
        <div class="set-item">更换手机号<span style="float:right;">138****6525</span></div>
     </div>
     <div class="set-list">
       <div class="set-item" v-for="(item,index) in setList" :key="index">
         <router-link :to="item.to">
           <p>{{item.content}}</p>
         </router-link>
       </div>
        
     </div>
   </div>
   <van-button plain type="primary" size="large" @click="exit">退出当前账号</van-button>

  </div>
</template>

<script>
import NavBar from "@/components/NavbarReturn";
import UserItem from "@/components/user/userinfo-item";

export default {
  name: "",
  props: [""],
  data() {
    return {
      nav: {
        title: "个人设置",
        naviconName2: "gc-iconmore"
      },
      setList:[{
        content:'密码设置',
        to:'/updatePwd'
      },{
        content:'新消息提醒',
        to:'/mysettings'
      },{
        content:'隐私与过滤',
        to:'/mysettings'
      },{
        content:'关于校友集',
        to:'/mysettings'
      },{
        content:'清除缓存',
        to:'/mysettings'
      }]
    };
  },

  components: {
    NavBar,
    UserItem
  },

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    // 退出当前账号
    exit(){
      //像localStorage里存入从页面获取的用户名和密码；
      localStorage.siteName = '';
      localStorage.sitePassword = '';
      this.$router.push({ path: "/logins" });
      // alert("退出当前账号")
    }
  },

  watch: {}
};
</script>
<style lang='scss' scoped>
.set-list{
  margin: 0.1rem 0;
}
.set-item{
  background-color: #fff;
  text-align: left;
  border-bottom: 1px solid #eee;
  padding: 0.3rem;
  margin: 0
}
.van-button--large {
  width: 90%;
  height: 50px;
  line-height: 48px;
}
p{
  margin: 0;
}
</style>