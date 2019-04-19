<template>
  <div id="home">
    <nav-bar :iconleft="navbar.iconleft" :mycity="navbar.mycity" :title="navbar.title" :naviconName =" navbar.naviconName" :naviconName2="navbar.naviconName2"></nav-bar>
    <div class="content">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img :src="image">
        </van-swipe-item>
      </van-swipe>
      <div class="nav-list">
        
        <div class="nav_item">
          <router-link to="/active">
          <i class="gc-iconnotice bg-01"></i>
          <p>热门活动</p>
          </router-link>
        </div>
        <div class="nav_item" @click="Ygrw">
          <i class="gc-iconfriendfavor bg-02" ></i>
          <p>阳光人物</p>
        </div>
        <div class="nav_item" @click="DonationList">
          <i class="gc-iconshoplight bg-03"></i>
          <p>捐赠版</p>
        </div>
        <div class="nav_item">
          <i class="gc-icongoodsfavor bg-04"></i>
          <p>回馈母校</p>
        </div>
        <div class="nav_item">
          <i class="gc-iconfavor bg-05"></i>
          <p>返校指南</p>
        </div>
         <div class="nav_item bg-06">
          <i class="gc-icontag"></i>
          <p>校园建设</p>
        </div>
        <div class="nav_item">
          <router-link to="/alumni/yxl">
          <i class="gc-iconphone bg-07"></i>
          <p>通讯录</p></router-link>
        </div>
        <div class="nav_item">
          <i class="gc-iconservice bg-08"></i>
          <p>校友建议</p>
        </div>
      </div>
      <van-notice-bar text="2018年12月28日我校揭牌成立外国语与海外教育学院" left-icon="volume-o"/>
      <!-- 热门活动 -->
      <div class="article">
        <div class="title flex-row">
          <div>
            <i class="medio-icon"></i>
            <span class="pink">热门活动</span>
          </div>
          <div class="article_num">
            <span>35场</span>
            <i class="gc-iconright"></i>
          </div>
        </div>
        <acticle-item  v-for="(item,index) in active" :key="index" :img="item.coverImg" :title="item.title" :place="item.place" :date="item.date" :id="item.id"></acticle-item>
      </div>
      <div class="DoAn box">
          <!-- 捐赠版 -->
        <div class="donation">
          <div class="title">
              <i class="medio-icon"></i>
              <span class="pink">捐赠版</span>
              <i class="gc-iconright"></i>
            </div>
            <donarion-ranking></donarion-ranking>
        </div>
        <!-- 校友风采   -->
        <div class="alum">
            <div class="title">
              <i class="medio-icon"></i>
              <span class="pink">校友风采</span>
              <i class="gc-iconright"></i>
            </div>
            <div class="alum-list">
              <p>颜钰鹏：你在图书馆打瞌睡，他在里面发现世界</p>
              <p>谢朝和：追风而来 腾“云”驾“物”</p>
              <p>陈培琳：翩翩迎阳光 飞去逐惊鸿</p>
            </div>
        </div>
      </div>
      
      <!-- 媒体聚焦 -->
      <div class="medio ">
            <div class=" flex-row my_medio">
                <div>
                    <i class="medio-icon"></i>
                    <span class="pink">媒体聚焦</span>
                </div>
                <div>
                  <router-link to="/home/newslist">
                    <span>查看更多</span></router-link>
                    <i class="gc-iconright"></i>
                    <i class="gc-iconright"></i>
                </div>
            </div>
            <div class="flex-row">
                <div class=" medio-item" >
                    <img src="../../static/home/medio/medio1.jpg">
                    <p class="medio-item-title">我校召开2018 年期末工作会议</p>
                </div>
                 <div class=" medio-item" >
                    <img src="../../static/home/medio/medio2.jpg">
                    <p class="medio-item-title">我校揭牌成立外国语与海外教育学院</p>
                </div>
            </div> 
            <div class="news" v-for="(item,index) in news" :key="index" v-if="index<3">
              <router-link :to="{name: 'newsinfo', params: {id: item.id}}">
                <news-item :title="item.title" :date="item.date"></news-item>
              </router-link>
            </div>
      </div>
    </div>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from "@/components/Tabbar";
import NewsItem from "@/components/home/news-item";
import ActicleItem from "@/components/home/acticleitem";
import NavBar from "./home/navbar";
import DonarionRanking from './donation/donarionRanking'
export default {
  name: "",
  props: [""],
  data() {
    return {
      navbar: {
        iconleft: "gc-iconlocation",
        mycity: "福州",
        title: "阳光学院",
        naviconName: "gc-iconsearch",
        naviconName2: "gc-iconapps"
      },
      active:[],
      images: [
        require("../assets/index/swipe/swipe1.jpg"),
        require("../assets/index/swipe/swipe2.jpg"),
        require("../assets/index/swipe/swipe3.jpg"),
        require("../assets/index/swipe/swipe4.jpg")
      ],
      home: {},
      news: {},
      
    };
  },
  components: {
    TabBar,
    NavBar,
    NewsItem,
    ActicleItem,
    DonarionRanking
  },
  mounted() {
    this.myajax();
    this.News();
    this.getActive() ;
  },
  created(){
  },
  methods: {
    // http://127.0.0.1:9000/test
    myajax() {
      this.$http({
        method: "get",
        url: "../../static/home/home.json",
        data: {}
      }).then(
        response => {
          console.log("请求成功");
          this.home = response.data.home;
          console.log(this.home);
        },
        response => {
          console.log("请求失败");
          console.log(response);
        }
      );
    },
    News() {
      this.$http({
        method: "get",
        url: "../../static/json/news.json",
        data: {}
      }).then(
        response => {
          console.log("请求成功");
          this.news = response.data.news;
        },
        response => {
          console.log("请求失败");
        }
      );
    },
    Ygrw() {
      this.$router.push("/home/ygrw");
    },
    DonationList() {
      this.$router.push("/donation/list");
    },
    getActive() {
      this.$http.get('/active', {
        emulateJSON: true
      }).then(res=>{
          this.active=res.data;
      }, error=> {
        console.log(error)
      })
    },
  }
};
</script>
<style scoped>
img {
  width: 100%;
}
.van-notice-bar {
  color: #565453;
  background-color: #fff;
  margin: 0.1rem 0;
}
.nav-list {
  padding: 0.2rem;
  display: flex;
  flex-wrap: wrap;
  background-color: #ffffff;
}
.nav_item {
  width: 25%;
  height: 1.58rem;
  box-sizing: border-box;
}
.nav_item p {
  margin: 0.1rem;
  font-size: 0.24rem;
}
.nav_item i {
  background-color: #ef7769;
  color: #ffffff;
  padding: 0.2rem;
  border-radius: 50%;
  display: inline-block;
  font-size: 28px;
  text-align: center;
  margin: auto;
}
.nav_item .bg-01 {
  background-color: #ef7769;
}
.nav_item .bg-02 {
  background-color: #7db1fd;
}
.nav_item .bg-03 {
  background-color: #c1ff91;
}
.nav_item .bg-04 {
  background-color: #f9ae53;
}
.nav_item .bg-05 {
  background-color: #91df65;
}
.nav_item .bg-06 {
  background-color: #fdcb4e;
}
.nav_item .bg-07 {
  background-color: #9b8beb;
}
.nav_item .bg-08 {
  background-color: #f57572;
}
#home {
  width: 100%;
  height: 100%;
}

.medio-icon {
  width: 0.1rem;
  height: 0.4rem;
  background: #98e151;
  margin-right: 0.2rem;
  float: left;
}

.medio {
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #ffffff;
  margin: 10px auto;
  padding-bottom: 0.2rem;
  font-size: 0.18rem;
}
.my_medio {
  padding: 0.1rem;
}
.medio-item {
  margin: 0;
  width: 48%;
  position: relative;
  margin: 0.2rem;
}
.medio-item-title {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(67, 67, 67, 0.5);
  margin: 0;
  color: #fff;
  padding: 0.1rem;
  font-size: 0.14rem;
}
.medio-item-title :hover {
  background-color: rgba(67, 67, 67, 0.1);
  font-size: 0.18rem;
}
.news-item {
  padding: 0.2rem;
  border-bottom: 1px solid #eee;
}
.new-item-img {
  width: 35%;
}
.new-item-content {
  width: 65%;
}
.new-item-content h4 {
  margin: 0.1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.new-item-content p {
  margin: 0.1rem;
  font-size: 0.14rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.article{
  background-color: #fff;
  padding: 0.1rem;
  font-size: 0.28rem;
}
.article_num{
 color: #7db1fd;
    background-color: #eee;
    padding: 0.05rem;
    padding-left: 0.3rem;
    border-radius: 1rem 0 0 1rem;
}
    /* 捐赠版，校友风采 */
.DoAn{
   border-bottom: 1px solid #eee;
       border-bottom: 1px solid #eee;
    background: #fff;
    margin-top: 0.2rem;
}
.title{
  padding: 0.1rem 0;
}
.donation,.alum{
  padding: 0.1rem;
  width: 50%;
  text-align: left;
  font-size: 0.28rem;
  
}
.donation i.gc-iconright,.alum i.gc-iconright{
  padding: 1px;
    border-radius: 50%;
    border: 1px solid #84888c;
    font-size: 0.24rem;
  }
  
 .alum-list p{
   margin: 0.1rem 0.2rem;
   padding: 0.1rem 0;
 }
</style>