<template>
  <div class="active-list">
    <nav-bar :title="nav.title" :naviconName="nav.naviconName2" ></nav-bar>
    <div class="content">
      <div class="header" style="background: url(../../../static/img/article/10011.jpg)">
        <img class="hd-bg" src="../../../static/img/article/10011.jpg" alt="" >
        <div  class="hd-logo" >
          <img :src="'../../../static/img/community/'+[community.logo]" alt="" >
          <p class="hd-title fs-r30"><strong>{{community.name}}</strong></p>
          <p class="hd-title fs-r30">{{community.message}}</p>
        </div>
      </div>
      <div v-for="(item,index) in docell" :key="index">
        <div class="ct-main fs-r26 mg-bt-r20" >
          <donation-cell :item="item"></donation-cell>
          <!-- 圈子成员 -->
         <div class="join-logo" v-if="index==0">
          <img v-for="index in 6" :key="index" src="../../assets/img/userinfo/logo.jpg" alt="">
        </div>
        <!-- 活动圈子 -->
        <div v-if="index==1">
          <ul class="active-item">
            <li v-for="item in 5" :key="item">信息工程学院集体聚餐活动<span style="float: right">2019-01-26</span></li>
          </ul>
        </div>
        <!-- 圈子相册 -->
        <div class="photo" v-if="index==2">
          <p class="fc-70">提示：点击可大图显示，图片较大，建议在WIFI环境下打开，土豪请随意</p>
          <div class="photo-list  flex-right">
            <img src="./img/photo/01.jpg" alt="">
            <img src="./img/photo/02.jpg" alt="">
            <img src="./img/photo/03.jpg" alt="">
            <img src="./img/photo/04.jpg" alt="">
            <img src="./img/photo/05.jpg" alt="">
            <img src="./img/photo/06.jpg" alt="">
            <img src="./img/photo/07.jpg" alt="">
            <img src="./img/photo/08.jpg" alt="">
            <img src="./img/photo/09.jpg" alt="">
          </div>
        </div>
        <!-- 评论 -->
        <div v-if="index==3" class="ct-main-active">暂无评论</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavbarReturn";
import DonationCell from "@/components/donation/donationcell";

  export default {
    name:'',
    props:[''],
    data () {
      return {
         nav: {
              title: "校友社区",
              naviconName2: "gc-iconmore"
            },
        community:{},
        docell:[{
          name:"圈子成员",
          value:"108人"
        },{
           name:"圈子活动",
           value:"20场"
        },{
           name:"圈子相册",
           value:"118张"
        },{
           name:"评论",
           value:"发表评论"
        }]
      };
    },

    components: {
      NavBar,
      DonationCell
    },
    

    computed: {},

    beforeMount() {},

    mounted() {
      this.getCommunity();
    },

    methods: {
      getCommunity() {
      var params = {id: this.$route.params.id};
        this.$http.get('/search/Community',{params} ,{
        emulateJSON: true
        }).then(res=>{
            this.community=res.data[0];
            console.log(this.community)
        }, error=> {
        console.log(error)
        })
        },
    },

    watch: {}

  }

</script>
<style>
.ct-main-tittle i.left-icon{
 background: #008bfb !important;
    width: 5px;
    height: 100%;
    display: inline-block;
}
</style>

<style lang='scss' scoped>
p{
  margin: 0.1rem;
}
.ct-main-active{
  height: 2rem;
  padding: 5px 10px;
  text-align: left;
}
.active-list{
  width: 100%;
  height: 100%;
}
.header {
  position: relative;
    height: 4rem;
}
.hd-bg{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
   height: 4rem;
}
.hd-logo {
  color: #fff;
    z-index: 55;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.hd-logo img{
width: 1.8rem;
    height: 1.8rem;
    padding: 0.05rem;
    background: #fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 50%;
}
p.hd-title {
    margin: 0.12rem;
}
.photo{
  text-align: left;
}
.join-logo{
  background: #fff;
  text-align: left;
  height: 1.6rem;
}
.join-logo img {
    width: 1rem;
    height:  1rem;
    border-radius: 50%;
    margin: 0.3rem 0.1rem;
}
.ct-main {
    background: #fff;
}
.active-item li {
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: left;
    margin-left: 0.2rem;
}
.active-item span{
  margin: 0 0.2rem;
}
.active-item li:before {
      width: 0.15rem;
    height: 0.15rem;
    content: '';
    background-color: #008bfb;
    display: inline-block;
    margin: 0 0.2rem;
    border-radius: 50%;
}
.mg-bt-r20{
  margin-bottom: 0.2rem};
.photo-list{
  width: 100%;
}
.photo-list img{
  width: 32%;
  margin: 0.02rem;
}
</style>