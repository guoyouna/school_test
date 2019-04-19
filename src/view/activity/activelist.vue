<template>
  <div class="active-list">
    <nav-bar :title="nav.title" :naviconName="nav.naviconName2" ></nav-bar>
    
    <comment-textarea v-if="!isShow" @canel="canelComment" @submit="addComment"></comment-textarea>
    <div class="content">
      <div class="header">
        <!-- E:\school\school\src\assets\img\article\10001\10001.jpg -->
        <!-- <img src="../../assets/img/article/10001/10001.jpg" alt="" > -->
        <img :src="'../../assets/img/article/'+[active.id]+'/'+[active.coverImg]" alt="" >
        <p class="hd-title fs-r30">{{active.title}}</p>
      </div>
      <div class="ct-info fs-r26 mg-bt-r20">
        <p class="ct-info-item"><span class="fc-a2">发起：</span><span>{{active.organizer}}</span></p>
        <p class="ct-info-item"><span class="fc-a2">组织：</span><span>{{active.organizer}}</span></p>
        <p class="ct-info-item"><span class="fc-a2">时间：</span><span>{{active.date|formatDate}}</span></p>
        <p class="ct-info-item"><span class="fc-a2">地点：</span><span>{{active.place}}</span></p>
        <p class="ct-info-item"><span class="fc-a2">人数：</span><span><span class="ct-info-n">12</span>/不限</span></p>
        <p class="ct-info-item"><span class="fc-a2">距结束报名还有：</span>
        <span>
          <span class="ct-info-t">11</span>天
          <span class="ct-info-t">11</span>时
          <span class="ct-info-t">1</span>分
          <span class="ct-info-t">51</span>秒
         </span>
         </p>
      </div>
      <div v-for="(item,index) in docell" :key="index">
        <div class="ct-main fs-r26 mg-bt-r20" >
          <donation-cell :item="item" @clkCallBk="listenCall"></donation-cell>
          <div class="join-logo" v-if="index == 0">
            <img v-for="index in 6" :key="index" src="../../assets/img/userinfo/logo.jpg" alt="">
          </div>
          <div class="ct-main-ct flex-row" v-if="index == 1">
            <!-- <router-link :to="'/community/details/'+[community.id]" class="flex-row hd-nav fs-r30" > -->
            <div class="ct-main-img"><img src="../../../static/img/article/10011.jpg" alt=""></div>
            <div class="ct-main-info">
              <h5 class="fs-r30">{{community.name}}</h5>
              <p><span class="fc-a2">联系人:</span><span>{{community.head}}</span><span class="fc-08b">{{community.headTel}}</span></p>
              <p><span class="fc-a2">成员数:</span><span>{{community.num}}</span></p>
              <p><span class="fc-a2">活动数:</span><span>{{community.activenum}}</span></p>
            </div>
            <!-- </router-link> -->
          </div>
          <div class="ct-details fs-r30" v-if="index == 2">
            <h3>{{active.title}}</h3>
            <p class="fs-r24">发布日期:<span>{{active.date}}</span></p>
            <div class="active-details">
              <img :src="'../../../static/img/article/'+[active.id]+'/'+[active.coverImg]" alt="" >
              <p v-for="(item,index) in activeArticle" :key="index">{{item}}</p>
              </div>
          </div>
          <div class="ct-main-active" v-if="index == 3">
            <img v-for="(item,index) in activeImg" :key="index" :src="'../../../static/img/article/'+[active.id]+'/'+[item]" alt="" >
          </div>
          <div v-if="index == 4">
            <commemt-content v-for="(item,index) in comment" :key="index" :comment="item" v-if="comment.length>0" @rePlays="replyComment(index,'replyText')"></commemt-content>
            <img v-else class="nocommon" src="../../assets/img/nocomment.png" alt="">
          </div>
        </div>
      </div>
      <van-button size="large" type="danger">报名</van-button>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavbarReturn";
import CommemtContent from "@/components/commemt/commemt";
import CommentTextarea from "@/components/commemt/commentTextarea";
import DonationCell from "@/components/donation/donationcell";
export default {
  name: "",
  props: [""],
  data() {
    return {
      nav: {
        title: "活动详情",
        naviconName2: "gc-iconmore"
      },
      active: {},
      activeArticle: [],
      activeImg: [],
      community: {},
      isShow: true,
      replyText:'',
      isactive:0,//评论选择的下标
      docell: [
        {
          name: "活动参与人",
          value: "查看全部",
          methods: "more1"
        },
        {
          name: "所属圈子",
          value: "更多",
          methods: "comDetails"
        },
        {
          name: "活动详情",
          value: "更多",
          methods: "more3"
        },
        {
          name: "活动掠影",
          value: "更多",
          methods: "more1"
        },
        {
          name: "评论",
          value: "发表评论",
          methods: "replyTexts"
        }
      ],
      comment: [
        {
          name: "卓晓翔", //评论人名字
          time: "2018-12-17  18:35",
          content: "这个活动收费吗？",
          reply: [
            //回复评论的信息，是一个数组，如果没内容就是一个空数组
            {
              responder: "管理员", //评论者
              reviewers: "有毒的黄同学", //被评论者
              time: "2018-12-17 19:00",
              content:"活动报名免费的哦！来回车票（88元）和住宿费（200元）需要自己承担"
            },
            {
              responder: "黄同学", //评论者
              time: "2018-12-17 19:12",
              content: "我也要参加"
            }
          ]
        }
      ]
    };
  },

  components: {
    NavBar,
    DonationCell,
    CommemtContent,
    CommentTextarea
  },

  computed: {},

  beforeMount() {},

  mounted() {
    this.getActive();
  },

  methods: {
    getActive() {
      var params = { id: this.$route.params.id };
      this.$http
        .get(
          "/search/Active",
          { params },
          {
            emulateJSON: true
          }
        )
        .then(
          res => {
            this.active = res.data[0];
            this.activeArticle = this.active.article.split("';'");
            this.activeImg = this.active.articleImg.split(",");
            this.getCommunity();
          },
          error => {}
        );
    },
    getCommunity() {
      var params = { id: this.active.cid };
      this.$http.get("/search/Community", { params },{emulateJSON: true})
        .then( res => {
            this.community = res.data[0];
            console.log(this.community);
          },
          error => {
            console.log(error);
          }
        );
    },
    //取消发布
    canelComment() {
      this.isShow = true;
    },
    //发布
    addComment(data){
      if(this.replyText=='replyText'){
          this.comment[this.isactive].reply.push({
                  responder: "评论者", //评论者
              reviewers: "被评论者", //被评论者
              time: new Date(),
              content:data
          });
      }else{
        this.comment.push({
        name: 'session',
        time: new Date(),
        content: data,
        reply: []
      });
      }
      this.isShow = true;
      this.replyText=''
    },
    //显示评论时发布面板
    replyComment(index,replyText) {
      this.isactive=index
      this.replyText=replyText;
      this.isShow = false;
    },
    //显示发布面板
    replyTexts() {
      // this.replyText=replyText;
      this.isShow = false;
    },
    listenCall(methodsWords) {
      this[methodsWords]();
    },
    comDetails() {
      this.$router.push("/community/details/" + this.community.id);
    },

    more2() {
      alert(112);
    },
    more3() {
      alert(113);
    }
  },

  watch: {}
};
</script>
<style lang='scss' scoped>
.van-button--large {
  width: 90%;
  margin: 0.2rem;
}
p {
  margin: 0.1rem;
}
.ct-main-active {
  padding: 5px 10px;
  text-align: left;
}
.active-list {
  width: 100%;
  height: 100%;
}
.header {
  position: relative;
  height: 4rem;
}
.header img {
  height: 4rem;
}
p.hd-title {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  padding: 5px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
}
.ct-info {
  background: #fff;
}

p.ct-info-item {
  line-height: 0.5rem;
  padding: 5px;
  text-align: left;
  border-bottom: 1px solid #eee;
}
.ct-info-n {
  color: #ffa200;
}
.ct-info-t {
  background: #4b94d2;
  color: #fff;
  width: 0.5rem;
  height: 0.5rem;
  display: inline-block;
  box-sizing: border-box;
  line-height: 0.5rem;
  padding: 0 0.1rem;
  margin: 0.1rem;
}
.van-cell__title {
  text-align: left;
}
.hd-nav {
  background-color: #fff;
  padding: 0 5px;
  border-bottom: 1px solid #eee;
  height: 0.8rem;
  line-height: 0.8rem;
  border-left: 5px solid #008bfb;
}
.join-logo {
  background: #fff;
  text-align: left;
  height: 2rem;
}
.join-logo img {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  margin: 0.3rem 0.1rem;
}
.ct-main-img {
  width: 40%;
}
.ct-main-info {
  width: 60%;
  text-align: left;
}
.ct-main-ct {
  background: #fff;
  padding: 0.2rem 0.1rem;
}
.ct-main {
  background: #fff;
}
.ct-main-img img {
  margin: 0.1rem;
  width: 90%;
}
.ct-main-info h5 {
  margin: 0.1rem;
}
.ct-main-info span {
  margin: 0.1rem;
}
.fc-08b {
  color: #008bfb;
}
.mg-bt-r20 {
  margin-bottom: 0.2rem;
}
.ct-details h3,
p {
  margin: 0.1rem;
}
.ct-details {
  padding: 5px 10px;
}
.active-details {
  text-align: left;
}
.active-details img {
  height: 4rem;
}
.ct-main-active img {
  width: 40%;
  margin: 0.1rem;
}
.nocommon {
  width: 50%;
  margin: 0.5rem;
}
</style>