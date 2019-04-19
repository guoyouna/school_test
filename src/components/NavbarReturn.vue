<template>
<div class="navbar">
    <div class="icon_return" @click="get_return">
        <i class="gc-iconback"></i>
    </div>
    <h4 class="nav_title">{{title}}</h4>
    <div class="icon_right" @click="get_right">
        <i :class="[naviconName]"></i> 
    </div >
</div>
</template>

<script>
export default {
  name: "",
  props: {
    title: {
      type: String,
      default: "首页"
    },
    naviconName: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      name:"gon"
    };
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    get_return() {
      this.$router.go(-1);
    },
    get_right() {
      this.$emit("getRight")
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
  height: 0.88rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #c0c0c0;
  box-sizing: border-box;
  background-color: #008bfb;
  color: #fff;
}
 h4 {
  font-size: 0.36rem;
  margin: 0.1rem;
}
.navbar div{
  width: 10%;
}
.nav_title{
  flex: 1;
}
/*
i {
  font-size: 22px;
}
.icon_right {
  position: relative;
} */
</style>
