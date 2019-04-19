<template>
  <div>
     <nav-bar :iconleft="navbar.iconleft" :mycity="navbar.mycity" :title="navbar.title" :naviconName2="navbar.naviconName2"></nav-bar>
     <div class="content">
       <div class="dynamic-nav flex-row">
        <div class="dynamic-nav-item" @click="fridendDynamic">
          <img src="../../assets/img/dynamic/dynamic.svg" alt="">
          <p>好友动态</p>
        </div>
        <div class="dynamic-nav-item">
          <img src="../../assets/img/dynamic/question.svg" alt="">
          <p>问题专区</p>
        </div>
        <div class="dynamic-nav-item">
          <img src="../../assets/img/dynamic/AlumniDynamics.svg" alt="">
          <p>附近校友</p>
        </div>
      </div>
      <div class="dynamin-ct">
        <dynamin-item :imgsrc="item.src" :itemName="item.itemName" v-for="(item,index) in dynaminItems" :key="index"></dynamin-item>
      </div>
      <div class="dynamin-ct">
        <dynamin-item :imgsrc="item.src" :itemName="item.itemName" v-for="(item,index) in dynaminItems2" :key="index"></dynamin-item>
      </div>
     </div>
     
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from "@/components/Tabbar";
import NavBar from "@/components/Navbar";
import DynaminItem from "@/components/dynamic/dynamicitems";
  export default {
    data () {
      return {
        navbar:{
          iconleft:"gc-iconlocation",
          title:"动态",
          naviconName:"gc-iconsearch",
          naviconName2:"gc-iconapps"
        },
        dynaminItems:[{
          src:require("../../assets/img/dynamic/item/bk.png"),
          itemName:"我的博客"
        },
        {
          src:require("../../assets/img/dynamic/item/tz.png"),
          itemName:"我的帖子"
        },
        {
          src:require("../../assets/img/dynamic/item/wt.png"),
          itemName:"我的问题"
        }],
        dynaminItems2:[{
          src:require("../../assets/img/dynamic/item/yx.png"),
          itemName:"游戏"
        },
        {
          src:require("../../assets/img/dynamic/item/yl.png"),
          itemName:"音乐"
        },
        {
          src:require("../../assets/img/dynamic/item/zb.png"),
          itemName:"直播"
        },{
          src:require("../../assets/img/dynamic/item/tcxy.png"),
          itemName:"同城校友"
        },
        {
          src:require("../../assets/img/dynamic/item/tchd.png"),
          itemName:"同城活动"
        },
        {
          src:require("../../assets/img/dynamic/item/chwl.png"),
          itemName:"吃喝玩乐"
        }]
      };
       
    },

    components: {
        TabBar,
        NavBar,
        DynaminItem
    },

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {
      fridendDynamic(){
        this.$router.push('/alumnicircle/FriendDynamic')
      }
    },

    watch: {}

  }

</script>
<style lang='' scoped>
.dynamic-nav {
    font-size: 16px;
    background: #fff;
    padding: 0.2rem 0;
}
.dynamic-nav-item img{
  width: 45%;
    padding: 0 0.2rem;
}
.dynamic-nav-item p{
    margin: 0.1rem;
}
.dynamin-ct{
  margin: 10px 0;
}
</style>