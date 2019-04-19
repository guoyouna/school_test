<template>
  <div class="myjob">
      <nav-bar :title="nav.title" :naviconName="nav.naviconName2" ></nav-bar>
     <div class="content" >
         <div class="hd-nav mg-bt-r20">
          <div class="logo">
            <img src="../../assets/img/userinfo/logo.jpg" alt="">
              <p>亲爱的<span class="ds-r30">张晓敏</span></p>
              <p>感谢您的爱心和对阳光学院基金会的支持</p>
          </div>
          <div class="hd-title box-center fs-r30 fc-70">
              <div class="hd-name-item">
                  <p><span class="icon-tag">3</span>个</p>
                  <p>捐赠项目</p>
              </div>
              <div class="hd-name-item">
                  <p><span class="icon-tag">28</span>次</p>
                  <p>捐赠次数</p>
              </div>
              <div class="hd-name-item">
                  <p><span class="icon-tag">28.2</span>元</p>
                  <p>累计捐赠</p>
              </div>
          </div>
         </div>
        <div class="ct-main">
            <donation-cell :name="docell.name" :value="docell.value"></donation-cell>   
            <div>
                <record-item></record-item> 
                <record-item></record-item> 
            </div>
                     
        </div>
          <van-button size="large" type="danger">
              <img src="./img/share.png" alt="">
              点击分享，传递爱心</van-button>
     </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavbarReturn";
import DonationCell from "@/components/donation/donationcell";
import RecordItem from "@/components/donation/Recorditem";

export default {
  name: "",
  props: [""],
  data() {
    return {
      nav: {
        title: "捐赠记录",
        naviconName2: "gc-iconmore"
      } ,
       docell:{
        name:"捐赠记录",
        value:"更多"
      }
    };
  },

  components: {
    NavBar,
    DonationCell,
    RecordItem
  },

  computed: {},

  beforeMount() {},

  mounted() {
  },

  methods: {
   
  },

  watch: {}
};
</script>
<style  scoped>
.myjob {
  width: 100%;
  height: 100%;
}
.logo {
        height: 3.1rem;
  background: url(../../assets/img/userinfo/userinfobg.png) no-repeat #ffffff;
  background-size: 100%;
}.hd-nav {
    margin-bottom: 0.2rem;
}
.logo img{
    width: 1rem;
    height: 1rem;
    margin-top: 0.5rem;
    border: 3px solid #fff;
    border-radius: 50%;
}
.logo p{
    margin: 0.1rem;
    font-size: 0.28rem;
    text-align: center;
    color: #fff;
}
.logo p span {
    margin: 0.1rem;
}
.hd-name-item p {
    margin: 0.1rem;
}.hd-title {
    background: #fff;
    height: 1.6rem;
}
.icon-tag{
    color: #FF4C57;
    margin: 0.1rem;
    font-size: 0.34rem;
}
.van-button--large {
    width: 90%;
    border-radius: 5px;
    height: 50px;
    line-height: 48px;
    margin: 0.2rem;
}
span.van-button__text {
    line-height: 50px;
}
.van-button--large img{
    width: 0.4rem;
    line-height: 48px;
        width: 0.4rem;
    line-height: 48px;
    vertical-align: text-bottom;
    padding: 0 0.1rem;
}

</style>