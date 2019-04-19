<template>
  <div class="myjob">
      <nav-bar :title="nav.title" :naviconName="nav.naviconName2" ></nav-bar>
     <div class="content" >
           <div class="ct-hd">
             <div class="box-center ct-name">
               <div>
                 <span v-for="(item,index) in numicon" :key="index" class="border-icon">{{item}}</span>
                 <span>人参与</span>
               </div>
               <div>
                 <span v-for="(item,index) in numicon2" :key="index" class="border-icon">{{item}}</span>
                 <span>元爱心</span>
               </div>
               <div class="bg-w">
                 <img src="./img/balloon3.png" alt="">
               </div>
             </div>
           </div>
           <div class="ct-main">
             <div class="thinl-list" v-for="(item,index) in donationThink" :key="index">
               <donation-think :donationThink="item"></donation-think>
             </div>
             
           </div>
     </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavbarReturn";
import donationThink from '@/components/donation/donationthink';
export default {
  name: "",
  props: [""],
  data() {
    return {
      nav: {
        title: "捐赠鸣谢",
        naviconName2: "gc-iconmore",
      } ,
      docell:{
        name:"捐赠列表",
        value:"更多"
      },
      numicon:['7','7','6','8','8'],
      numicon2:['8','9','8','7','6','5',],
      donationThink:[
        {
           img:require("./img/logo.png"),
           name:'王一鸣',
           money:'1200',
           date:'2019-01-12',
           text:'这个世界的改变不是一个人做了很多，而是大多数人做了一点点 。'
        },
          {
           img:require("./img/logo.png"),
           name:'王一鸣',
           money:'1200',
           date:'2019-01-12',
           text:'这个世界的改变不是一个人做了很多，而是大多数人做了一点点 。'
        },
         {
           img:require("./img/logo.png"),
           name:'李铭',
           money:'1000',
           date:'2019-01-02',
           text:''
        }
      ]
    };
  },

  components: {
    NavBar,
    donationThink
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
.myjob {
  width: 100%;
  height: 100%;
}

.ct-hd{
  height: 1.2rem;
  background: linear-gradient(#93dbff, #008bfb);
  padding-bottom: 0.2rem;
  
}
.ct-hd img{
  margin-top: 0.2rem;
  width: 90%;
}
.bg-w{
  width: 20%;
    height: 1.5rem;
}
.ct-name{
  color: #fff;
  height: 1.2rem;
  line-height: 1.2rem;
  font-size: 0.28rem;
  padding: 0 0.2rem;
}
span.border-icon {
    border: 1px solid #c2c2c2;
    margin: 0.01rem;
    padding: 0.06rem;
    color: #F66917;
    background: #fff;
    
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