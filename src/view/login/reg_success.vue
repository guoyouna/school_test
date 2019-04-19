<template>
  <div class="choseidentity">
    <div class="logo">
        <img src="../../assets/img/login/choose.png" alt="">
        <p class="reg_title">注册成功</p>
        <div class="reg_text">
            <p>恭喜您已经通过校友申请审核，</p>
            <p>赶紧前往校友集首页或查看进行的校友活动吧</p>
        </div>
        <div class="reg_btn">
            <button class="btn_home" @click="btn_login">前往登录</button>
            <button class="btn_actity"  @click="btn_home">前往首页</button>
        </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavbarReturn.vue";
export default {
  name: "",
  props: [""],
  data() {
    return {
      navnar: {
        title: "选择身份"
      }
    };
  },

  components: {
    NavBar
  },

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
      btn_home(){
          this.$router.push({path: '/'})
      },
      btn_login(){
          this.$router.push({path: '/logins'})
      }
  },

  watch: {}
};
</script>
<style lang='' scoped>
.choseidentity {
  width: 100%;
  height: 100%;
}
.logo {
  height: 3.1rem;
  background: url(../../assets/img/login/bg2.png) no-repeat;
  background-size: 100%;
}
.logo img {
    width: 1.5rem;
    height: 1.5rem;
    margin-top: 1.6rem;
}
.reg_title {
    color: #1296db;
}
.reg_text p{
    margin: 0.2rem;
    font-size: 0.28rem;
    color: #828282;
}
.reg_btn button{
    width: 85%;
    margin: 0.2rem;
    border: 1px solid #006ac0;
    height: 0.8rem;
    border-radius: 0.1rem;
    font-size: 0.28rem;
}
.btn_home{
     background: #008bfb;
     color: #fff;
}
.btn_actity{
 background: #fff;
     color: #008bfb;
}
</style>