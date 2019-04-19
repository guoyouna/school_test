<template>
 <div class="alu-item flex-row">
    <p class="box">{{departments}}</p>
    <div>
        <i class="gc-iconright"></i>
    </div>
 </div>
</template>

<script>

  export default {
    name:'',
    props:{
      departments:{
        type:String,
        default:'信息工程学院'
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
.alu-item{
    padding: 2px 10px;
    font-size: 16px;
    height: 0.78rem;
    line-height: 0.78rem;
    border-bottom: 1px solid #eee;
    color: #434343;
}
.alu-item p{
  margin: 0.1rem;
}
</style>