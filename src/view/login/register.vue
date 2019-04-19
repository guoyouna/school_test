<template>
  <div class="reg">
    <nav-bar :title="navnar.title" ></nav-bar>
   <div class="content">
     <router-view></router-view>
        <!-- <reg-id1></reg-id1> -->
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavbarReturn.vue'
// import RegId1 from './reg_indentity1.vue'
  export default {
    name:'',
    props:[''],
    data () {
      return {
          navnar:{
              title:"身份验证",
          }
      };
    },

    components: {
        NavBar,
        // RegId1
    },

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

  }

</script>
<style lang='' scoped>
.reg{
    width: 100%;
    height: 100%;
}
.content{
  padding-bottom: 0
}

</style>