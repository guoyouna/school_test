<template>
  <div class="frienddyamic">
      <nav-bar :title="nav.title" :naviconName="nav.naviconName2" ></nav-bar>
     <div class="contents">
        <div class="logo">
            <div class="user-name box">
                <img src="../../assets/img/userinfo/logo.jpg" alt="">
                    <p>张晓敏</p>
            </div>
            <!-- <div class="logo-main">
                <p>一路有你共度燃情岁月 </p>
                <p>今朝重逢再续手足深情</p>
            </div> -->
            <div class="my-dyamic">
                <div class="my-dyamic-title flex-row">
                    <div>我的校友圈</div>
                    <div>
                        <i class="gc-iconright"></i>
                    </div>
                </div>
                <div class="my-dyamic-list flex-row">
                    <div class="my-dyamic-item">
                        <img src="../../assets/img/dynamic/logo/logo1.jpg" alt="">
                        <p>沙漠绿洲</p>
                    </div>
                    <div class="my-dyamic-item">
                        <img src="../../assets/img/dynamic/logo/logo2.jpg" alt="">
                        <p>沙漠绿洲</p>
                    </div>
                    <div class="my-dyamic-item">
                        <img src="../../assets/img/dynamic/logo/logo3.jpg" alt="">
                        <p>沙漠绿洲</p>
                    </div>
                    <div class="my-dyamic-item">
                        <img src="../../assets/img/dynamic/logo/logo4.jpg" alt="">
                        <p>沙漠绿洲</p>
                    </div>
                    <div class="my-dyamic-item">
                        <img src="../../assets/img/dynamic/logo/addfrident.png" alt="">
                        <p>添加</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="fridend-dymaic">
            <frident-acticle></frident-acticle>
            <frident-acticle></frident-acticle>
        </div>
     </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavbarReturn";
import FridentActicle from "@/components/dynamic/fridentacticle";
export default {
  name: "",
  props: [""],
  data() {
    return {
      nav: {
        title: "校友圈",
        naviconName2: "gc-iconadd"
      },
      isDisplay:true,
      isLike:false
    };
  },

  components: {
    NavBar,
    FridentActicle
  },

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
  },

  watch: {}
};
</script>
<style  scoped>
.frienddyamic {
  width: 100%;
  height: 100%;
}
.navbar{
    background-color: rgba(0, 0, 0, 0.1) !important;
    border-bottom: none !important;
    
}

.logo {
  height: 7rem;
  background: url(../../assets/img/dynamic/bg.jpg) no-repeat #ffffff;
  background-size: 100%;
}
.user-name{
    padding: 2.5rem 10px 0.8rem;

}
.logo-main{
    height: 4.4rem;
    /* padding-top: 2rem; */
    box-sizing: border-box;
}
.logo p {
  margin: 0.2rem;
  font-size: 18px;
  color: #fff;
}
.logo img {
  width: 1rem;
  height: 1rem;
  border: 1px solid #fff;
    border-radius: 10px;
}
.my-dyamic-title {
    font-size: 22px;
    padding: 2px 10px;
}
.my-dyamic-list.flex-row {
    padding: 10px;
}
.my-dyamic-item{
    width: 20%;
}
.my-dyamic-item img {
    width: 0.8rem;
    height:0.8rem;
    border-radius: 50%;
        background-color: #eee;
}
.my-dyamic-item p{
    color: #000;
    font-size: 14px;
    margin: 0;
}

</style>