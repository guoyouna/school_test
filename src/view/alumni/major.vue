<template>
  <div class="xyl">
      <nav-bar :title="nav.title" :naviconName="nav.naviconName2" >
      </nav-bar>
     <div class="content departments">
         <div class="content-title box">
             <p class="school-name">阳光学院</p>
             <!-- <p class="departments-name" v-if="major.name!=null">{{major.name}} -->
             <p class="departments-name">{{name}}</p>
         </div>
         <!-- id值存在时 -->
         <div  v-if="major.id==id">
          <div v-for="(item,index) in major.major" :key="index">
                  <major-item :major="item.name" :id="major.id" :classname="item.class" ref="child"></major-item>
              <!-- 值不存在时 -->
          </div>
         </div>
         <no-ct v-else></no-ct>
     </div>
  </div>
</template>

<script>
import { MAJOR } from './js/departments';
import NavBar from "@/components/NavbarReturn";
import MajorItem from "@/components/alumni/majoritem";
import noCt from './noCt';
export default {
  name: "",
  props: [""],
  data() {
    return {
      nav: {
        title: "校友录",
        naviconName2: "gc-iconmore"
      },
       active: 0,
       major:MAJOR,
       id:'',
       url:'',
       name
    };
  },

  components: {
    NavBar,
    MajorItem,
    noCt
  },


  computed: {},

  beforeMount() {},

  mounted() {
      this.YgDepartments();
  },

  methods: {
    YgDepartments() {
      this.name=this.$router.history.current.params.name;
      this.id=this.$router.history.current.params.id;
       var params = { d_id: this.id };
      this.$http.get('/alumni/major',{params} ,{
        emulateJSON: true
      }).then(res=>{
        console.log(res)
          // this.major=res.data;
      })
    },
    mycheck(){
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
}
.navbar{
    border-bottom: 1px solid #ffe8e8 !important;
}
.content-title{
    width: 100%;
    height: 0.98rem;
    margin:0.1rem 0;
    
}
.content-title p{
    
    width: 50%;
    margin: 0;
    padding:0.15rem 0.1rem;
    font-size: 16px;
    height: 0.48rem;
    line-height: 0.48rem;
}
.departments-name{
    background: url(../../assets/img/alumni/bg2.png) no-repeat #fff;
    background-size: 100% 100%;
    /* background-color: #00AAEE; */
    color: #fff;
}
.school-name{
     background: url(../../assets/img/alumni/bg1.png);
    background-size: 100% 100%;
    background-color: #fff;
}

</style>