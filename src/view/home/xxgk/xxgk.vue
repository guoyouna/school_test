<template>
  <div class="xxgk">
      <nav-bar :title="nav.title" :naviconName="nav.naviconName2">
      </nav-bar>
  
     <div class="content xxgk">
         <van-tabs>
            <van-tab title="学校简介">
                <xxjj-tab></xxjj-tab>
            </van-tab>
            <van-tab title="董事会">
                <dsh-tab></dsh-tab>
            </van-tab>
            <van-tab title="学校领导">
                <xxld-tab></xxld-tab>
            </van-tab>
            <van-tab title="专业设置">
                <zysz-tab></zysz-tab>
            </van-tab>
         </van-tabs>
     </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavbarReturn";
import XxjjTab from "./xxjj";
import DshTab from "./dsh";
import XxldTab from "./xxld";
import ZyszTab from "./zysz";
// import NavBar from "./navbar";
export default {
  name: "",
  props: {
    
  },
  data() {
    return {
      nav: {
        title: "阳光学院",
        naviconName2: ""
      },
      xxjj:{}
    };
  },

  components: {
    NavBar,
    XxjjTab,
    DshTab,
    XxldTab,
    ZyszTab
  },


  computed: {},

  beforeMount() {},

  mounted() {
  },

  methods: {
    
  },

  watch: {}
};
</script>
<style  scoped>
.xxgk {
  width: 100%;
  background: #fff;
}
/* .navbar{
    background-color: #E42415 !important;
    border-bottom: none !important;
} */
.xxgk-title{
    text-align: left;
    height: 0.88rem;
    line-height: 0.68rem;
    font-size: 18px;
    margin: 0.1rem;
    border-bottom: 1px solid #eee;
}
.content-title p{
    
    width: 50%;
    margin: 0;
    padding:0.15rem 0.1rem;
    font-size: 16px;
}
</style>