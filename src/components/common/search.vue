<template>
  <div>
    <div class="search">
        <div class="search-filed">
            <input type="text" name="" :placeholder="[placeholder]" id="">
        </div>
        <div class="search-icon">
            <i class="gc-iconsearch"></i>
        </div>
      
    </div>
  </div>
</template>

<script>

  export default {
    name:'',
    props:{
         placeholder:{
           type: String,
           default: "请输入内容 "
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
<style lang='' scoped>
.search{
    position: relative;
    color: #000000;
    font-size: 0.16px;
    width: 100%;
}
.search-filed input[type="text"] {
    width: 90%;
    height: 0.58rem;
    border: none;
    border-radius: 5px;
    padding: 2px 5px 2px 30px;
        box-sizing: border-box;
        margin: 5px 10px;
}
.search-icon i{
    position: absolute;
    top: 10px;
    left: 4%;
    color: #969799;
    font-size: 16px;
    margin-left: 5px;
}
</style>