<template>
  <div class="userinfo">
      <nav-bar :iconleft="nav.iconleft" :title="nav.title" :naviconName2="nav.naviconName2" ></nav-bar>
      <div class="content">
          <div class="logo">
              <img src="../../assets/img/userinfo/logo.jpg" alt="">
              <p>{{username}}</p>
              <p>ID:20190111001</p>
              
          </div>
          <div class="center-top box-center">
              <div><span class="icon-tag">30</span>积分</div>
              <div class="iconcenter"></div>
              <div><span class="icon-tag">2</span>次活动</div>
          </div>
          <div class="user-list">
              <div  v-for="(useritem,index) in userList" :key="index">
                  <router-link :to="useritem.to">
                    <user-item :imgsrc="useritem.imgsrc" :name="useritem.name"></user-item>
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
import UserItem from '@/components/user/userinfo-item';
export default {
  name: "",
  props: [""],
  data() {
    return {
      nav: {
        iconleft: "gc-iconsettings",
        title: "个人中心",
        naviconName2: "gc-iconmore"
      },
      username:'测试',
      userList:[{
          imgsrc:require("../../assets/img/userinfo/myactivity.svg"),
          name:"我的活动",
          to:{path:'/service/myjob'}

      },
      {
          imgsrc:require("../../assets/img/userinfo/donation.png"),
          name:"我的捐赠",
          to:{path:'/service/myjob'}

      },
      {
          imgsrc:require("../../assets/img/userinfo/work.svg"),
          name:"我的职位",
          to:{path:'/service/myjob'}

      },
      {
          imgsrc:require("../../assets/img/userinfo/alumnus.svg"),
          name:"个人资料",
          to:{path:'/editorUser'}

      },
      {
          imgsrc:require("../../assets/img/userinfo/communication.png"),
          name:"通讯录",
          to:{path:'/service/myjob'}

      },
      {
          imgsrc:require("../../assets/img/userinfo/setting.png"),
          name:"设置",
          to:{path:'/mysettings'}

      }
      ]
    };
  },

  components: {
    TabBar,
    NavBar,
    UserItem
  },

  computed: {},

  beforeMount() {},

  mounted() {
      this.getlocalStorage();
  },

  methods: {
      getlocalStorage: function() {
          this.username = this.$store.state.user.username
    //   this.username = localStorage.getItem(localStorage.key(1)) //保存到保存数据的地方
    }
  },

  watch: {}
};
</script>
<style  scoped>
.userinfo {
  width: 100%;
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

</style>