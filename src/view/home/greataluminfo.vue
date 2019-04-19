<template>
  <div class="greatalum">
      <nav-bar :title="nav.title" :naviconName="nav.naviconName2" ></nav-bar>
     <div class="content">
         <div class="alun-article">
             <h5 class="article-title">{{aluminfo.name}}：{{aluminfo.title}}</h5>
             <div class="article-date">
                <span class="article-time">{{aluminfo.time}}</span>
                <span class="article-total">浏览过{{aluminfo.tatil}}次</span>
            </div>
            <div class="article-content">
                <div v-for="(item,index) in aluminfo.article" :key="index">
                    <strong>{{item.strong}}</strong>
                    <div v-for="(items,index) in item.p" :key="index">
                        <p>{{items}}</p>
                    </div>
                    <img :src="'../../../static/img/ygrwinfo/'+aluminfo.id+'/'+item.img1" alt="图片">
                </div>
              
               
            </div>
         </div>
         <div class="article-comment">
             <h5 class="article-comment-head">观点</h5>
             <div class="article-comment-content ">
                 <div class="comment-content-item flex-between">
                     <div class="logo">
                         <img src="../../assets/img/home/ygrw/logo.png" alt="">
                     </div>
                     <div class="comment-content-viewpoint">
                         <div class="common-title flex-between">
                             <p class="comment-name">黄一燕</p>
                            <p class="comment-tatal">
                                <span> 3599666</span>
                                <i class="gc-iconappreciatefill"></i>
                            </p>
                         </div>
                         <p>谢教授多年来一直主张将“应用”带进课堂，最大限度激发学生的学习热情和能力。</p>
                         <p class="comment-replay"><span class="comment-time">1天前</span>.<span>回复</span></p>
                         <div class="replay">
                             <p class="replay-item">
                             <strong class="replay-item-name">陈文华：</strong>
                             <span class="replay-item-content">点赞</span>
                        </p>
                         </div>
                         
                     </div>
                 </div>
             </div>
         </div>
     </div>
     <!-- 底部 -->
     <foot-comment></foot-comment>
  </div>
</template>

<script>
import NavBar from "@/components/NavbarReturn";
import FootComment from "@/components/Footcomment";
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
       aluminfo:{

       },
       url:'',
       id:''
    };
  },

  components: {
    NavBar,
    FootComment
  },

  computed: {},

  beforeMount() {},

  mounted() {
      this.YgxzInfo();
  },

  methods: {
    YgxzInfo() {
        this.id=this.$router.history.current.params.id,
        this.url='../../static/json/ygxzinfo/'+this.id+'.json',
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
          this.aluminfo = response.data.ygxz;
          console.log(this.aluminfo);
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
/* .navbar{
    background-color: #fff !important;
    color: #E42415 !important;
    border-bottom: 1px solid #ffe8e8 !important;
} */
.alun-article {
    text-align: left;
    font-size: 0.28rem;
    padding : 10px;
    border-bottom: 1px solid #eee;}
.article-title {
    margin: 0.1rem;
    font-size: 18px;
}
.alun-article p{
    margin: 0.1rem;
    text-indent: 2em;
}
.alun-article span{
   margin: 0.1rem;
   font-size: 14px;
}
.article-comment {
    text-align: left;
    margin: 0.3rem 0.1rem;
}
h5.article-comment-head {
    margin: 0.1rem;
    padding-left: 10px;
    font-size: 18px;
    border-left: 5px solid #e52c1e;
}.logo {
    width:25%;
    margin: 0.05rem;
}
.comment-content-viewpoint {
    font-size: 16px;
    margin: 0.05rem;
}
.common-title p {
    margin: 0.1rem;
    font-size: 18px;
}
.comment-name{
    color: #bd6e4c;
}
.comment-tatal span {
    font-size: 14px;
}
.comment-content-viewpoint p{
    margin: 0.1rem;
}
.comment-time{
    color: #a5a2a2;
}
.comment-replay{
font-size: 14px;
}
.foot{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 8;
    display: flex;
    height:0.88rem;
    background-color: #fff;
    padding: 0 10px;
}
.foot input[type="text"] {
    margin: 0.1rem;
    height: 0.48rem;
    border: none;
    background-color: #eee;
    font-size: 14px;
    padding: 2px 10px;
    border-radius: 2px;
    flex: 1;
}
.foot i{
    margin: 0.1rem;
}
</style>