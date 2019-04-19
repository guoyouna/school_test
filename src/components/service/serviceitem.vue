<template>
  <div class="service-item">
      <img :src="[imgsrc]" alt="">
      <p>{{name}}</p>
    
  </div>
</template>

<script>

  export default {
    name:'',
    props:{
      imgsrc:{
          type:String,
          default:"../../assets/img/userinfo/myactivity.svg"
      },
      name:{
          type:String,
          default:"我的活动"
      }
  },
    data () {
      return {

      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

  }

</script>
<style lang='scss' scoped>
.service-item{
  //  width: 33.33%;
    padding: 0.4rem;
    background-color: #fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border: 1px solid #eee;
}
.service-item img {
    width: 40%;
}
.service-item p {
    margin: 0.1rem;
    font-size: 0.28rem;
}
</style>