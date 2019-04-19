<template>
  <div class="chinaren" >
    <nav-bar :title="navbar.title" :naviconName="navbar.naviconName" :naviconName2="navbar.naviconName2"></nav-bar>
    <div class="content">
      <search-item :placeholder="searchPlaceholder"></search-item> 
      <div class="alu-list">
        <div class="alu-item flex-row">
          <div class="box">
             <img src="../../assets/img/alumni/组织.png" alt="" class="othercity bgc-ea6">
             <span>各地校友会</span>
          </div>
          <div>
            <i class="gc-iconright"></i>
          </div>
        </div>
        <div class="alu-item flex-row">
          <div class="box">
             <img src="../../assets/img/alumni/群组.png" alt="" class="othercity bgc-13b">
             <span>院系校友会</span>
          </div>
          <div>
            <i class="gc-iconright"></i>
          </div>
        </div>
        <div class="alu-item flex-row">
          <router-link to="/alumni/yxl">
          <div class="box">
             <img src="../../assets/img/alumni/通讯录.png" alt="" class="othercity bgc-7ec">
             <span>校友通讯录</span>
          </div>
          </router-link>
          <div>
            <i class="gc-iconright"></i>
          </div>
        </div>
        <div class="alu-item flex-row">
          <div class="box">
             <img src="../../assets/img/alumni/讨论组.png" alt="" class="othercity bgc-32b">
             <span>学校社团</span>
          </div>
          <div>
            <i class="gc-iconright"></i>
          </div>
        </div>
      </div>
      <div class="friends flex-between">
        <div class="frident-content">
         
          <div>
            <p>C</p>
            <div class="alu-item fs-item flex-row">
              <div class="box">
                <div class="friend-logo">
                  <img src="../../assets/img/alumni/人物.png" alt="" >
                </div>
                    <span>蔡茵茵</span>
                    <span class="fs-18">2013级学生</span>
              </div>
            </div>
            <div class="alu-item  fs-item  flex-row">
              <div class="box">
                <div class="friend-logo">
                  <img src="../../assets/img/alumni/人物.png" alt="" >
                </div>
                    <span>陈鹤妮</span>
                    <span class="fs-18">2012级学生</span>
              </div>
            </div>
            <div class="alu-item  fs-item  flex-row">
              <div class="box">
                <div class="friend-logo">
                  <img src="../../assets/img/alumni/人物.png" alt="" >
                </div>
                    <span>陈晶晶</span>
                    <span class="fs-18">老师</span>
              </div>
            </div>
          </div>
           <div>
            <p>D</p>
            <div class="alu-item fs-item flex-row">
              <div class="box">
                <div class="friend-logo">
                  <img src="../../assets/img/alumni/人物.png" alt="" >
                </div>
                    <span>戴明</span>
                    <span class="fs-18">2012级学生</span>
              </div>
            </div>
          </div>
        </div>
         <div class="index-list-nav">
            <div v-for="(itemletter,index) in letter" :key="index">
                <p>{{itemletter}}</p>
            </div>
        </div>
      </div>
    </div>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from "@/components/Tabbar";
import NavBar from "@/components/Navbar";

import SearchItem from "@/components/common/search";
export default {
  name: "",
  props: [""],
  data() {
    return {
      value: "",
      searchPlaceholder:"搜索校友会组织/联系人",
      navbar: {
        title: "校友录",
        naviconName: "gc-iconcomment",
        naviconName2: "gc-iconfriendadd",
      }
    };
  },

  components: {
    TabBar,
    NavBar,
    SearchItem
  },

  computed: {
    letter() {
      const letter = [];
      for (var i = 0; i < 25; i++) {
        letter.push(String.fromCharCode(65 + i));
      }
      return letter;
    }
  },

  beforeMount() {},

  mounted() {},

  methods: {
    // goxyl(){
    //   this.$router.push('/alumni/yxl');
    // }
  },

  watch: {}
};
</script>
<style lang='' scoped>
.alu-item {
  height: 0.78rem;
  background-color: #fff;
  padding: 0.1rem 0.2rem;
  font-size: 18px;
  border-bottom: 1px solid #dde6ed;
  padding: 0.1rem;
}
.box img {
  width: 0.6rem;
  height: 0.6rem;
  margin-right: 0.2rem;
  box-sizing: border-box;
  padding: 0.1rem;
}
.box span {
  font-size: 0.28rem;
}
.othercity {
  border-radius: 50%;
  padding: 0.05rem;
}
.bgc-ea6 {
  background-color: #ea68a2;
}
.bgc-13b {
  background-color: #13b5b1;
}
.bgc-7ec {
  background-color: #7ecef4;
}
.bgc-32b {
  background-color: #32b16c;
}
.index-list-nav {
  width: 7%;
  background-color: #fff;
}
.frident-content {
  width: 93%;
}
.index-list-nav p {
  margin: 0.2rem 0;
  font-size: 0.18rem;
}
.frident-content {
  text-align: left;
  font-size: 0.28rem;
}
.frident-content p {
  margin: 0.15rem 0.3rem;
}
.fs-item {
  margin: 0.1rem 0;
}
.fs-item span {
  margin: 0.1rem;
}
.fs-item .fs-18 {
  font-size: 0.18rem;
}
.friend-logo img {
  width: 0.6rem;
  height: 0.6rem;
  margin: 0.1rem;
  padding: 0;
}
</style>