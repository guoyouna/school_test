<template>
  <div class="myjob">
      <nav-bar :title="nav.title" :naviconName="nav.naviconName2" ></nav-bar>
     <div class="content" >
         <div class="logo">
           <p class="title">为母校建设，一起来助力</p>
           <div class="ct-hd">
             <van-swipe :autoplay="3000">
              <van-swipe-item v-for="(image, index) in images" :key="index">
                <div class="swipe">
                  <img class="swipe-imgs" :src="image" />
                  <p class="name">众筹活动|献礼20年校庆，捐赠得月台景色</p>
                </div>
      
              </van-swipe-item>
            </van-swipe>
             <div class="box-center ct-name">
               <div>
                 <span v-for="(item,index) in numicon" :key="index" class="border-icon">{{item}}</span>
                 <span>人参与</span>
               </div>
               <div>
                 <span v-for="(item,index) in numicon2" :key="index" class="border-icon">{{item}}</span>
                 <span>元爱心</span>
               </div>
             </div>
           </div>
           
          </div>
          
          <div class="main">
            <div v-for="(item,index) in docell" :key="index" class="ct-main mg-b2">
              <donation-cell :item="item" ></donation-cell>
              <!-- 捐赠版 -->
              <donarion-ranking v-if="index==0"></donarion-ranking>
              <!-- 捐赠列表 -->
              <div v-if="index==1" class="ct-main-list">
               <router-link to="/donation/details">
               <donation-item></donation-item>
               </router-link>
               <donation-item></donation-item>
             </div>
            </div>
            
            
            
             
           </div>
     </div>
     <div class="foot box">
            <van-button square  type="warning" size="large">邀请朋友一起捐</van-button>
            <van-button square  type="danger" size="large" @click="myReord">我的捐赠记录</van-button>
          </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavbarReturn";
import DonationItem from "@/components/donation/donationitem";
import DonationCell from "@/components/donation/donationcell";
import DonarionRanking from './donarionRanking'
export default {
  name: "",
  props: [""],
  data() {
    return {
      nav: {
        title: "捐赠版",
        naviconName2: "gc-iconmore",
      } ,
      docell:[{
        name:"捐赠版",
        value:"更多"
      },{
        name:"捐赠列表",
        value:"更多"
      }],
      images: [
        require("../../assets/img/home/swipe/swipe2.jpg"),
        require("../../assets/img/home/swipe/swipe3.jpg"),
        require("../../assets/img/home/swipe/swipe4.jpg")
      ],
      numicon:['7','7','6','8','8'],
      numicon2:['8','9','8','7','6','5',],
    };
  },

  components: {
    NavBar,
    DonationItem,
    DonationCell,
    DonarionRanking
  },

  computed: {},

  beforeMount() {},

  mounted() {
  },

  methods: {
    myReord(){
      this.$router.push({ 
        path:'/donation/record', 
      })
    }
   
  },

  watch: {}
};
</script>
<style  scoped>
.mg-b2{
  margin-bottom: 0.2rem;
}
.myjob {
  width: 100%;
  height: 100%;
}
.logo {
  background: url(../../assets/img/userinfo/userinfobg.png) no-repeat #ffffff;
  background-size: 100%;
}
.logo p{
    color: #ffffff;
    margin: 0;
    padding: 0.1rem;
    font-size: 20px;
}
.ct-hd{
  background-color: #fff;
  margin:0.1rem 0.2rem;
      padding-bottom: 0.2rem;
}
.ct-hd img{
  margin-top: 0.2rem;
  width: 90%;
}
.swipe{
  position: relative;
}
.swipe p{
  position: absolute;
  bottom: 0;
  font-size: 16px;
  left: 10px;
  width: 65%;
  overflow:hidden; 
text-overflow:ellipsis;
display:-webkit-box; 
-webkit-box-orient:vertical;
-webkit-line-clamp:1; 
}
.ct-name{
  font-size: 0.28rem;
      margin: 0.1rem;
}
span.border-icon {
    border: 1px solid #c2c2c2;
    margin: 0.05rem;
    padding: 0 0.05rem;
    color: #F66917;
    
}
.ct-main{
  background-color: #fff;
}
.foot{
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
}
.van-button--warning{
  border-radius: 1rem 0 0 1rem;

}
.van-button--danger{
  border-radius: 0 1rem 1rem 0;
}
</style>