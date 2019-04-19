<template>
  <div class="xyl">
      <nav-bar :title="nav.title" :naviconName="nav.naviconName2" @getRight="search">
      </nav-bar>
     <div class="content departments">
         <div v-for="(item,index) in departments" :key="index">
             <router-link :to="{name: 'major', params: {id: item.id,name:item.name}}">
                <major-item :departments="item.name"></major-item>
            </router-link>
         </div>
         
        
     </div>
  </div>
</template>

<script>
import { DEPER } from './js/departments';
import NavBar from "@/components/NavbarReturn";
import MajorItem from "@/components/alumni/xylitem";
export default {
  name: "",
  props: [""],
  data() {
    return {
      nav: {
        title: "校友录",
        naviconName2: "gc-iconsearch"
      },
       active: 0,
       departments:DEPER
    };
  },

  components: {
    NavBar,
    MajorItem
  },


  computed: {},

  beforeMount() {},

  mounted() {
  },

  methods: {
    search(){
      this.$router.push('/alumni/search')
      
      alert(11)
    }
  },

  watch: {}
};
</script>
<style  scoped>
.xyl {
  width: 100%;
  height: 100%;
  background: #fff;
}
.navbar{
    border-bottom: 1px solid #ffe8e8 !important;
}
.departments{
    padding-left: 5px;
    padding-right: 5px;
}
</style>