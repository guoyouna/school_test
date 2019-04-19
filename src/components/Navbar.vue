<template>
<div class="navbar">
    <div class="icon_left" >
        <i :class="[iconleft]"></i>
        <span class="city">{{mycity}}</span>
    </div>
    <div class="title">
       <h4 class="nav_title">{{title}}</h4>
    </div>
   
    <div class="icon_right" >
        <i :class="[naviconName]"></i> 
        <i :class="[naviconName2]"></i> 
    </div >
</div>
</template>

<script>
export default {
  name: "",
  props: {
     iconleft:{
        type: String,
      default: ""
    },
      mycity:{
          type: String,
      default: ""
      },
    title: {
      type: String,
      default: "阳光学院"
    },
    naviconName: {
      type: String,
      default: ""
    },
     naviconName2: {
      type: String,
      default: ""
    }
  },

  data() {
    return {};
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    
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
  height: 0.88rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
  background-color: #008bfb;
  color: #fff;
}
.navbar div{
  width:20%;
}
.title{
  flex: 1;
}
 h4 {
  font-size: 0.36rem;
}
span{
    font-size: 0.28rem;
}
i {
  padding: 0.1rem;
  font-size: 0.4rem;
}
</style>
