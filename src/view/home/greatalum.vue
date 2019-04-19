<template>
  <div class="greatalum">
      <nav-bar :title="nav.title" :naviconName="nav.naviconName2" ></nav-bar>
     <div class="content">
         <van-tabs v-model="active">
            <van-tab title="推荐">
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
            <van-tab title="优秀校友">
                <div v-for="(item,index) in acticle " :key="index" v-if="item.type==2">
                    <router-link :to="{name: 'greataluminfo', params: {id: item.id}}">
                     <alum-article :name="item.name" :title="item.title" :date="item.time" :tatal="item.tatal"  ></alum-article>
                     </router-link>
                </div>
            </van-tab>
            <van-tab title="优秀教师">
                 <div v-for="(item,index) in acticle " :key="index" v-if="item.type==3">
                    <router-link :to="{name: 'greataluminfo', params: {id: item.id}}">
                     <alum-article :name="item.name" :title="item.title" :date="item.time" :tatal="item.tatal"  ></alum-article>
                     </router-link>
                </div>
            </van-tab>
            <van-tab title="阳光学子">暂无信息</van-tab>
        </van-tabs>
        <div>
        </div>
     </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavbarReturn";
import AlumArticle from "@/components/home/alum-article";
export default {
  name: "",
  props: [""],
  data() {
    return {
      nav: {
        title: "阳光人物",
        naviconName2: "gc-iconsearch"
      },
       active: 0,
       acticle:{},
    };
  },

  components: {
    NavBar,
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
        url: "../../static/json/ygxz.json",
        data: {}
      }).then(
        response => {
          console.log("请求成功");
          this.acticle = response.data.ygxz;
          console.log(this.acticle);
        },
        response => {
          console.log("请求失败");
          console.log(response);
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
  background: #fff;
}
/* .navbar{
    background-color: #E42415 !important;
    border-bottom: none !important;
} */
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