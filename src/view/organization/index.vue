<template>
  <div class="organization">
    <nav-bar :title="nav.title" :naviconName="nav.naviconName2" ></nav-bar>
    <div class="content">
      <!-- <van-search placeholder="查找校友会/校友会所在地" v-model="value" /> -->
      <van-tabs v-model="active">
        <van-tab title="各地校友会">
          <places-alumni></places-alumni>
        </van-tab>
        <van-tab title="院系校友会">
          <departments></departments>
        </van-tab>
        <van-tab title="特色社区">
        <community></community>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavbarReturn";
import placesAlumni from './placesAlumni.vue';
import departments from './departments.vue'
import community from './community.vue'
  export default {
    name:'',
    props:[''],
    data () {
      return {
        nav: {
              title: "校友组织",
              naviconName2: "gc-iconmore"
        },
         value:''   ,
         active:0,
         
      };
    },

    components: {
      NavBar,
      placesAlumni,
      departments,
      community
    },
    

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

  }

</script>
<style lang='scss' scoped>
.organization{
  height: 100%;
  width: 100%;
}
</style>