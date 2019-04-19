<template>
  <div class="newlist">
      <nav-bar :title="nav.title" :naviconName="nav.naviconName2" ></nav-bar>
     <div class="content">
        <van-swipe :autoplay="30000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
            <img :src="image">
            </van-swipe-item>
        </van-swipe>
        <div class="title box">
            <h5 class="fs-16">媒体聚焦</h5>
            <span class="fc-9c fs-14">/Medao</span>
        </div>
        
         <div class="news" v-for="(item,index) in news" :key="index">
              <router-link :to="{name: 'newsinfo', params: {id: item.id}}">
                <news-item :title="item.title" :date="item.date"></news-item>
              </router-link>
            </div>
     </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavbarReturn";
import NewsItem from "@/components/home/news-item";
export default {
  name: "",
  props: [""],
  data() {
    return {
      nav: {
        title: "媒体聚焦",
        naviconName2: "gc-iconsearch"
      },
      images: [
        require("../../assets/index/swipe/swipe2.jpg"),
        require("../../assets/index/swipe/swipe3.jpg"),
        require("../../assets/index/swipe/swipe4.jpg")
      ],
       news:{},
    };
  },

  components: {
    NavBar,
    NewsItem
  },

  computed: {},

  beforeMount() {},

  mounted() {
      this.News();},

  methods: {
      News() {
      this.$http({
        method: "get",
        url: "../../static/json/news.json",
        data: {}
      }).then(
        response => {
          console.log("请求成功");
          this.news = response.data.news;
          console.log(this.news);
        },
        response => {
          console.log("请求失败");
          console.log(response);
        }
      );
    },
    
  },

  watch: {}
};
</script>
<style  scoped>
.newlist {
  width: 100%;
  height: 100%;
  background: #fff;
}
/* .navbar{
    background-color: #E42415 !important;
    border-bottom: none !important;
} */
.title h5 {
    margin: 0.2rem;
}
</style>