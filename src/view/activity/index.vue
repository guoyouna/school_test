<template>
  <div class="greatalum">
      <nav-bar :title="nav.title" :naviconName="nav.naviconName2" ></nav-bar>
     <div class="content">
         <van-tabs v-model="active">
            <van-tab title="最近一周">
                <div class="alun-article" @click="lumininfo">
                    <h5 class="article-title">你在图书馆打瞌睡，他在里面发现世界</h5>
                    <img src="../../assets/img/home/ygrw/10001.jpg" alt="">
                    <div class="flex-between">
                        <p class="article-time">2019-2-02</p>
                        <p class="article-total">浏览过152次</p>
                    </div>
                </div>
                <div v-for="(item,index) in acticle " :key="index">
                    <router-link :to="{name: 'greataluminfo', params: {id: item.id}}">
                     <alum-article :name="item.name" :title="item.title" :date="item.time" :tatal="item.tatal"  ></alum-article>
                     </router-link>
                </div>
              
            </van-tab>
            <van-tab title="校友捐赠">
                <div v-for="(item,index) in acticle " :key="index" v-if="item.type==2">
                    <router-link to="/donation/details">
                    <donation-item></donation-item>
               </router-link>
                </div>
            </van-tab>
            <van-tab title="返校聚餐">
                <div class="ct-list">
                    <div v-for="(item,index) in returnschool " :key="index">
                    <returnschool-item :returnSchool="item"></returnschool-item>
                </div>
                </div>
                 
            </van-tab>
            <van-tab title="校级活动">暂无信息</van-tab>
            <van-tab title="校外聚餐">暂无信息</van-tab>
        </van-tabs>
        <div>
        </div>
     </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavbarReturn";
import DonationItem from "@/components/donation/donationitem";
import ReturnschoolItem from "@/components/active/returnschoolitem";

import AlumArticle from "@/components/home/alum-article";
export default {
  name: "",
  props: [""],
  data() {
    return {
      nav: {
        title: "活动列表",
        naviconName2: "gc-iconsearch"
      },
       active: 0,
       acticle:{},
       returnschool:{}
    //    returnschool: [
    //   {
    //     "img": "logo.png",
    //     "title": "2019“校友捐赠”新模式研讨会交流会",
    //     "date": "2019-04-20 14:30",
    //     "num":"10",
    //     "totalnum":"30",
    //     "collectionnum":"15"
    //   }]
    
  }
},
  components: {
    NavBar,
    DonationItem,
    ReturnschoolItem,
    AlumArticle
  },

  computed: {},

  beforeMount() {},

  mounted() {
      this.YgxzInfo();},

  methods: {
      YgxzInfo() {
      this.$http({
        method: "get",
        url: "../../static/json/active/active.json",
        data: {}
      }).then(res => {
          console.log("请求成功");
          this.returnschool=res.data.acticity.returnschool;
          console.log(this.returnschool);
        }
      );
    },
    lumininfos(id){
        alert(1)
          this.$router.push({
              name:'greataluminfo',
              params: {id: id}
          })
          console.log(this.$router)
      },
      lumininfo(){
          this.$router.push('/home/ygrw/ygrwinfo')
      }
  },

  watch: {}
};
</script>
<style  scoped>
.greatalum {
  width: 100%;
  height: 100%;
  background: #fff;
}
.ct-list{
    background: #F0F4F7;
}
.alun-article {
    text-align: left;
    font-size: 16px;
    padding : 10px;
     border-bottom: 1px solid #eee;}
.article-title {
    margin: 0.1rem;
    font-size: 16px;
}
.alun-article img{
   width: 98%;
    height: 3.4rem;
}
.alun-article p{
   margin: 0.1rem;
   font-size: 14px;
}
a{
    color: #2c3e50;
}
</style>