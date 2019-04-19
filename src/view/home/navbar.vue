<template>
<div class="navbar">
    <div class="icon_left box" >
        <img src="../../assets/img/logo1.png" alt="">
    </div>
    <div class="icon_right" >
        <i class="van-icon van-icon-search"></i> 
        <i class="van-icon van-icon-wap-nav" @click="isDisplay"></i>
    </div >
    <div class="menu" v-if="isdisplay==true">
        <ul>
            <router-link to="/xxgk/xxgk"><li>学校概况</li></router-link>
            
            <li>机构设置</li>
            <li>科研情况</li>
            <li>对外交流</li>
            <li>教育教学</li>
        </ul>

    </div>
</div>
</template>

<script>
export default {
  name: "",
  props: {
     
  },

  data() {
    return {
        isdisplay:false,
    };
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    isDisplay(){
        this.isdisplay =! this.isdisplay;
    }
  },

  watch: {}
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  width: 100%;
  height: 0.98rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background-color: #008bfb;
  color: #fff;
}
.icon_left{
    width: 60%;
    padding-left:10px;
}
.icon_left img{
   width: 57%;
    height: 0.78rem;
    margin: 0.1rem;
}
.icon_right{
    padding:0 10px;
    background-color: #0076d6;
}
span{
    font-size: 0.28rem;
}
i {
    height: 0.98rem;
    width: 0.98rem;
    padding:0.2rem 0.1rem;
    box-sizing: border-box;
}
.menu{
    /* display: none; */
    position: absolute;
    top: 0.98rem;
    right: 0;
    /* height: 0.98rem; */
    width:40%;
    background-color: #0076d6;
}
.menu li{
    font-size: 16px;
    padding: 10px;
        border-bottom: 1px solid #0f69b3;
}
.menu li:hover{
    background-color: #008bfb;
}
a{
    color: #fff;
}
</style>
