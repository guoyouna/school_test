<template>
  <div>
      <navbar :title="nav.title" :naviconName="nav.navicon" @getRight="isshow"></navbar>
      <div>
        
      </div>
      <div class="content">
        <div class="content-hd">
          <img src="../../assets/img/job/nav.png" alt=""> 
          <div class="contet-hd-nav box">
          <div class="contet-nav-item nav-bg1">
            <h5 class="fc-664">专场招聘会</h5>
            <p class="fc-664">阳光学院信息工程学院</p> </div>
          <div class="contet-nav-item nav-bg2">
            <h5 class="fc-blue">快速转正专场</h5>
            <p class="fc-blue">认可，无需漫长考察</p> </div>
        </div>
        </div>
        <div class="content-bar ">
          <div class="icon_left" >
              <span class="city">全国</span>
              <i class="gc-iconunfold"></i>
          </div>
          <div class="title">
            <search-item :placeholder="placeholder"></search-item>
          </div>
      </div>
       <router-link to="/job/jobinfo">
        <job-item></job-item>
        <job-item></job-item>
       </router-link>
      </div>
  </div>
</template>

<script>
import Navbar from "@/components/NavbarReturn";
import JobItem from "@/components/job/job-item";
import SearchItem from "@/components/common/search";
export default {
  name: "",
  props: [""],
  data() {
    return {
      nav:{
        title:"找工作",
        navicon:"gc-iconpeople"
      },
        value:"",
        placeholder:"请输入搜索关键词"
    };
  },

  components: {
    JobItem,
    SearchItem,
    Navbar
  },

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    isshow(date){
      console.log(11)
    }
  },

  watch: {}
};
</script>
<style lang='scss' scoped>
.content-bar {
  width: 100%;
  height: 0.88rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
  background-color: #fff;
  font-size: 0.24rem;
  border-bottom: 1px solid #eee;
}
.title{
  margin:0 0.2rem;
  flex: 1
}
.content-hd{
  background: #fff;
  padding-bottom: 0.2rem;
  margin-bottom: 0.2rem;
  
}
.contet-hd-nav{
  width: 100%;
  height: 2.3rem;
}
.contet-nav-item{
width: 50%;
  height: 2rem;
  margin: 0.2rem 0.1rem;
  text-align-last: left;
  padding: 0.3rem 0.1rem;
  box-sizing: border-box;
}
.contet-nav-item h5{
  
  margin: 0.2rem 0.1rem;
  font-size: 18px;
}
.contet-nav-item p{
  margin: 0.1rem 0.2rem;
  font-size: 14px;
}
.nav-bg1{
  background: url(../../assets/img/job/bg1.png);background-size: 100% 100%;
}
.nav-bg2{
  background: url(../../assets/img/job/bg2.png);
  background-size: 100% 100%;
}
.fc-664{
  color: #664939;
}
.fc-blue{
  color: #003e88;
}
i.gc-iconpeople {
    font-size: 18px;
}
</style>