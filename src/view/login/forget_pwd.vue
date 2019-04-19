<template>
  <div class="reg">
    <nav-bar :title="navnar.title" ></nav-bar>
    <update-pwd></update-pwd>
  </div>
</template>

<script>
import NavBar from '@/components/NavbarReturn.vue'
import updatePwd from './updatePwd.vue'
  export default {
    name:'',
    props:[''],
    data () {
      return {
          navnar:{
              title:"忘记密码",
          }
      };
    },

    components: {
        NavBar,
        updatePwd
    },
    watch: {}

  }

</script>
<style lang='scss' scoped>

</style>