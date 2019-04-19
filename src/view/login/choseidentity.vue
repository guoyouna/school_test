<template>
  <div class="choseidentity">
    <nav-bar :title="navnar.title" ></nav-bar>
   <div class="content">
          <div class="logo">
              <p class="fc-ff">请选择您的身份</p>
              <div class="chose_list ">
              <div class="chose-item flex-row" @click="go_reg()">
                  <div class="box ">
                       <img src="../../assets/img/login/students.png" alt="">
                        <p>在校学生</p>
                  </div>
                  <div>
                       <i class="gc-iconright"></i>
                  </div>
              </div>
              <div class="chose-item flex-row">
                  <div class="box">
                       <img src="../../assets/img/login/graduate.png" alt="">
                        <p>毕业生</p>
                  </div>
                  <div>
                       <i class="gc-iconright"></i>
                  </div>
              </div>
              <div class="chose-item flex-row">
                  <div class="box">
                       <img src="../../assets/img/login/worker.png" alt="">
                        <p>在校工作者</p>
                  </div>
                  <div>
                       <i class="gc-iconright"></i>
                  </div>
              </div>
          </div>
          <p class="fc-00 login">
              若已有账号，去<a href="#">登录</a>
          </p>
          </div>
          
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavbarReturn.vue'
  export default {
    name:'',
    props:[''],
    data () {
      return {
          navnar:{
              title:"选择身份",
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
        go_reg(){
             this.$router.push({path: '/register/reg_id1',query: { user: this.user }})
        }
    },

    watch: {}

  }

</script>
<style lang='' scoped>
.choseidentity{
    width: 100%;
    height: 100%;
}
.logo {
  height: 3.1rem;
  background: url(../../assets/img/userinfo/userinfobg.png) no-repeat;
  background-size: 100%;
}
.logo  p{
   margin: 0;
    padding: 0.7rem 0.4rem;
    text-align: left;
}
.chose-item{
    height: 1.98rem;
    background-color: #fff;
}
.chose-item img{
    height: 1.3rem;
    width: 1.3rem;
}
.chose_list {
    margin: 0.3rem;
}
.chose-item{
    height: 1.78rem;
    background-color: #fff;
    box-shadow: 2px 4px 6px #c4c6c8;
    border-radius: 0.3rem;
        padding: 0.2rem;
    box-sizing: border-box;
    margin-bottom: 0.3rem;
}
.chose-item p{
    color: #000;
    font-size: 0.32rem;
}
.login {
font-size: 0.28rem;
}

</style>