<template>
  <div class="greatalum">
      <nav-bar :title="nav.title" :naviconName="nav.naviconName2" ></nav-bar>
      <div class="content"> 
          <div class="alun-article">
             <h5 class="article-title">{{intro.name}}</h5>
             <p class="article-date">{{intro.date}}</p>
            <div class="article-content">
              <img :src="'../../../static/img/xxjj/dsh/'+intro.img" alt="图片">
             <p class="article-inntro">{{intro.inntro}}</p>
            </div>
         </div>
     </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavbarReturn";
export default {
  name: "",
  props: [""],
  data() {
    return {
      nav: {
        title: "",
        naviconName2: "gc-iconmore"
      },
       active: 0,
       intro:{

       },
       url:'',
       id:''
    };
  },

  components: {
    NavBar,
  },

  computed: {},

  beforeMount() {},

  mounted() {
      this.YgxzInfo();
  },

  methods: {
    YgxzInfo() {
        this.id=this.$router.history.current.params.id,
        this.url='../../static/json/xxgk/ds/'+this.id+'.json',
    console.log(this.id)
    console.log(this.url)
      this.$http({
        method: "get",
        url: this.url,
        // url:,
        data: {}
      }).then(
        response => {
          console.log("请求成功");
          this.intro = response.data.intro;
          console.log(this.intro);
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
.greatalum {
  width: 100%;
  background: #fff;
}
.navbar{
    background-color: #fff !important;
    color: #E42415 !important;
    border-bottom: 1px solid #ffe8e8 !important;
}
.alun-article {
    font-size: 16px;
    padding : 10px;
     border-bottom: 1px solid #eee;}
.article-title {
  text-align: left;

    margin: 0.1rem;
    font-size: 18px;
}
.alun-article img{
  width: 60%;
}
.article-inntro{
  /* 首行缩进2字符 */
text-indent: 2em;
}
.alun-article p{
  margin: 0.1rem;;
  
  text-align: left;
}
</style>