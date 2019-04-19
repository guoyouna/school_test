<template>
<div class="classmate-item box">
  <img src="../../assets/img/alumni/studentlogo.png" class="classmate-logo" alt="logo">
  <p class="classmate-name">{{student}}</p>
</div>
 
</template>z

<script>
  export default {
    name:'',
    props:{
      student:{
        type:String,
        default:'张三'
      }
    },
    data () {
      return {
      };
    },

    components: {
    },

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {
      },
    watch: {}

  }

</script>
<style lang='' scoped>
.classmate-item{
    padding: 2px 10px;
    font-size: 16px;
    height: 1rem;
    line-height: 0.78rem;
    border-bottom: 1px solid #eee;
    color: #434343;
    background-color: #fff;
}
.classmate-item p{
  margin: 0.1rem;
}
.classmate-logo{
  width: 0.8rem;
  height: 0.8rem;
  margin: 0.1rem;
}
</style>