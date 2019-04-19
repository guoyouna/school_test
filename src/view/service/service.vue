<template>
  <div class="userinfo">
      <nav-bar :iconleft="nav.iconleft" :title="nav.title" :naviconName2="nav.naviconName2" ></nav-bar>
      <div class="content">
          <div class="user-list flex-flow">
              <div class="user-item" v-for="(useritem,index) in userList" :key="index" >
                    <router-link :to="useritem.to">
                        <service-item :imgsrc="useritem.imgsrc" :to="useritem.to" :name="useritem.name"></service-item>
                        </router-link>
              </div>
              
                  
          </div>
      </div>
      <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from "@/components/Tabbar";
import NavBar from "@/components/Navbar";
import ServiceItem from '@/components/service/serviceitem';
export default {
  name: "",
  props: [""],
  data() {
    return {
      nav: {
        // iconleft: "gc-iconsettings",
        iconleft: "",
        title: "服务",
        // naviconName2: "gc-iconmore"
        naviconName2: ""
      },
      userList:[
      {
          imgsrc:require("../../assets/img/service/donation.svg"),
          name:"校友捐赠",
          to:{path:'/donation/list'}
      },
      {
          imgsrc:require("../../assets/img/service/photo.svg"),
          name:"学校照片",
          to:{path:'/news'}
      },
      {
          imgsrc:require("../../assets/img/service/activity.svg"),
          name:"同城活动",
          to:{path:'/news'}
      },
      
      {
          imgsrc:require("../../assets/img/service/nearby.svg"),
          name:"附近校友",
          to:{path:'/news'}
      },
      {
          imgsrc:require("../../assets/img/service/organization.svg"),
          name:"找组织",
          to:{path:'/organization/list'}
      },
      {
          imgsrc:require("../../assets/img/service/alumnus.svg"),
          name:"找校友",
          to:{path:'/'}
      },
      {
          imgsrc:require("../../assets/img/service/work.svg"),
          name:"找工作",
          to:{path:'/service/job'}
      },
      {
          imgsrc:require("../../assets/img/service/addressbook.svg"),
          name:"通讯录",
          to:{path:'/'}

      },
      {
          imgsrc:require("../../assets/img/service/release.svg"),
          name:"发起活动",
          to:{path:'/service/addactivity'}
      },
      {
          imgsrc:require("../../assets/img/service/share.svg"),
          name:"推荐给好友",
          to:{path:'/action/share'}
      }
      ]
    };
  },

  components: {
    TabBar,
    NavBar,
    ServiceItem
  },

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {}
};
</script>
<style  scoped>
.userinfo {
  width: 100%;
  height: 100%;
}
.logo {
  height: 3.1rem;
  background: url(../../assets/img/userinfo/userinfobg.png) no-repeat #ffffff;
  background-size: 100%;
}
.logo img {
  width: 1rem;
  height: 1rem;
  margin-top: 0.5rem;
  border: 3px solid #fff;
  border-radius: 50%;
}
.logo p {
  margin: 0.1rem;
  font-size: 0.28rem;
  color: #fff;
}
.center-top{
    background-color: #fff;
    width: 100%;
    height: 1rem;
    font-size: 0.24rem;
}
.iconcenter {
  width: 2px;
  height: 0.5rem;
  background-color: #52bbea;
}
.icon-tag{
    font-size: 0.34rem;
    color: #50c1e9;
    margin: 0.1rem;
}
.user-item{
    width: 33.33%;
}
</style>