<template>
  <div class="foot box">
         <input type="text" placeholder="发表你的观点">
         <i class="gc-iconcomment"></i>
         <i class="gc-iconfavor"></i>
         <i class="gc-iconexit"></i>
     </div>
</template>

<script>

  export default {
    name:'',
    props:[''],
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
.foot{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 8;
    display: flex;
    height:0.88rem;
    background-color: #fff;
    padding: 0 10px;
    border-top: 1px solid #eee;
}
.foot input[type="text"] {
    margin: 0.1rem;
    height: 0.48rem;
    border: none;
    background-color: #eee;
    font-size: 14px;
    padding: 2px 10px;
    border-radius: 2px;
    flex: 1;
}
.foot i{
    margin: 0.1rem;
}
</style>