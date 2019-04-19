<template>
  <div class="jobinfo">
      <nav-bar :title="nav.title" :naviconName="nav.naviconName2" >
      </nav-bar>
     <div class="content ">
        <div class="content-hd job-item">
           <div class="bor-b">
              <div class="mg-1 flex-row">
                <div>
                  <span class="job-position fs-18">程序员</span>
                </div>
                <div class="salary fs-18 fc-red">5000-8000元/月</div>
              </div>
              <div>
                <van-tag color="#ff0000" plain>急聘</van-tag>
                <van-tag color="#359fe3" plain>就业</van-tag>
              </div>
              <div class="jobinfo-city box mg-1 fc-9c">
                <div>
                  <i class="gc-iconlocation"></i>
                  <span>福州市</span>
                </div>
                <div>
                  <i class="gc-iconshoplight"></i>
                  <span >本科</span>
                </div>
              </div>
             
           </div>
              <div class="company box bor-b">
                  <div class="company-logo">
                      <img src="" alt="">
                  </div>
                  <div>
                      <p>鑫阳网络</p>
                      <div class="iconfavor">
                          <i class="gc-iconfavorfill"></i>
                          <i class="gc-iconfavorfill"></i>
                          <i class="gc-iconfavorfill"></i>
                          <i class="gc-iconfavorfill"></i>
                          <i class="gc-iconfavorfill"></i>
                      </div>
                      <div class="icon-tab">
                        <span >IT通讯/网络/电子/互联网</span>
                        <span>50-100人</span>
                        <span>未融资</span>
                      </div>
                  </div>
              </div>
              <div class="describe">
                <h5>职位描述</h5>
                <div>
                  <p>岗位职责:</p>
                  <div>
                     <p>1、完成软件系统代码的实现，编写代码注释和开发文档;</p>
                    <p>2、辅助进行系统的功能定义,程序设计;</p>
                    <p>3、根据设计文档或需求说明完成代码编写，调试，测试和维护; ...</p>
                  </div>
                    <span>查看全部</span>
                </div>
              </div>
        </div>
        <div class="place flex-row">
                <div class="w-10 city-icon">
                   <i class="gc-iconlocation"></i>
                </div>
                <div>
                  <strong>工作地点</strong>
                  <p>福建省福州市台江区金融大厦33层金华鑫阳网络有限公司</p>
                </div>
              </div>
     </div>
     <van-goods-action>
       <van-goods-action-mini-btn
    icon="chat-o"
    text="聊天"
    @click="onClickMiniBtn"
  />
  <van-goods-action-mini-btn
    icon="like-o"
    text="收藏"
    @click="onClickMiniBtn"
  />
  <van-goods-action-mini-btn
    icon="share"
    text="分享"
    @click="onClickMiniBtn"
  />
  <van-goods-action-big-btn
    primary
    text="发送简历（在线）"
    @click="onClickBigBtn"
  />
</van-goods-action>
  </div>
</template>

<script>
import NavBar from "@/components/NavbarReturn";
import MajorItem from "@/components/alumni/majoritem";
export default {
  name: "",
  props: [""],
  data() {
    return {
      nav: {
        title: "程序员",
        naviconName2: ""
      },
       active: 0,
       major:{

       },
       id:'',
       url:'',
       name
    };
  },

  components: {
    NavBar
  },


  computed: {},

  beforeMount() {},

  mounted() {
      // this.YgDepartments();
  },

  methods: {
    onClickMiniBtn(){

    },
    onClickBigBtn(){
      
    }
    // YgDepartments() {
    //   this.name=this.$router.history.current.params.name;
    //   this.id=this.$router.history.current.params.id;
    //   this.url='../../static/json/xyl/major/'+this.id+'.json';
    //   this.$http({
    //     method: "get",
    //     url:this.url,
    //     data: {}
    //   }).then(
    //     response => {
    //       console.log("请求成功");
    //       this.major = response.data.departments;
    //       console.log(this.major);
    //     },
    //     response => {
    //       console.log("请求失败");
    //       console.log(response);
    //     }
    //   );
    // },
    // mycheck(){
    //     alert(11)
    // }
  },

  watch: {}
};
</script>
<style lang="scss"  scoped>

.navbar{
    border-bottom: 1px solid #ffe8e8 !important;
}
.job-item {
  background-color: #fff;
  font-size: 0.28rem;
  padding: 0.1rem 0.2rem;
}
.company{
  padding-bottom: 0.3rem;
}
.company-logo{
    width: 0.8rem;
    height: 0.8rem;
    background-color: #726f6f;
    margin: 0.1rem;
}
.company p,.iconfavor,.icon-tab{
    text-align: left;
    margin:0.2rem 0.1rem ;
}
.company i{
    color: #ff8803;
}
.icon-tab span{
  font-size: 12px;
  background-color: #eee;
  padding: 0.1rem;
  margin: 0.05rem;
}
.mg-1{
    margin: 0.1rem;
}

.company {
    margin: 0.2rem 0 0.5rem;
}
.content{
  text-align: left;
}
.jobinfo-city div{
  margin: 0.05rem 0.1rem;
}
.jobinfo-city i{
  width: 0.3rem;
  height: 0.3rem;
  display: inline-block;
}
.bor-b{
  border-bottom: 1px solid #eee;
}
.w-10{
  width: 10%;
}
.city-icon{
      font-size: 24px;
    margin: 0.1rem;
}
.describe{
  margin-bottom: 0.3rem;
}
.describe h5{
margin: 0.2rem 0.1rem ;
font-size: 16px;
}
.describe p{
margin: 0.1rem;
}
.place{
  background: #fff;
    margin: 0.2rem;
    font-size: 0.28rem;
    padding:0.2rem 0.1rem;
}
.place p{
  margin: 0.1rem;
}
</style>