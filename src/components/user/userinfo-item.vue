<template>
  <div class="user-item flex-row">
    <div class="box">
        <img :src="[imgsrc]" alt="">
         <span>{{name}}</span>
    </div>
    <div>
        <i class="gc-iconright"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
      imgsrc:{
          type:String,
          default:"../../assets/img/userinfo/myactivity.svg"
      },
      name:{
          type:String,
          default:"我的活动"
      }

  },
  data() {
    return {};
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {}
};
</script>
<style lang='' scoped>
.user-item{
    margin: 0.3rem 0;
    height: 0.78rem;
    background-color: #fff;
    padding: 0.1rem;
    
}
.box span{
    display: inline-block;
    font-size: 0.28rem;
}
.box img{
    width: 0.6rem;
    height: 0.6rem;
    margin-right: 0.2rem;
}
</style>