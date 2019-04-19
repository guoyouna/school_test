<template>
  <div class="xyl">
    <!-- 值存在时 -->
      <nav-bar :title="title" :naviconName="nav.naviconName2">
      </nav-bar>
     <div class="content departments" v-if="classes.length!=0">
       <div v-for="(item,index) in classes" :key="index">
             <router-link to="">
             <!-- <router-link :to="{name: 'classmate', params: {id: item.id}}"> -->
                <classmate-item :student="item.s_name" ></classmate-item>
            </router-link>
         </div>
     </div>
     <no-ct v-else></no-ct>
  </div>
</template>

<script>
import NavBar from "@/components/NavbarReturn";
import ClassmateItem from "@/components/alumni/classmateitem";
import { StringDecoder } from 'string_decoder';
import noCt from './noCt';
export default {
  name: "",
  props: {
    title:{
      type:String,
      default:'2013级电子信息工程1班'
    }
  },
  data() {
    return {
      nav: {
        title: "校友录",
        naviconName2: ""
      },
       active: 0,
       classes:{
       },
       sid:'',
       mid:'',
       url:''
    };
  },

  components: {
    NavBar,
    ClassmateItem,
    noCt
  },


  computed: {},

  beforeMount() {},

  mounted() {
      this.YgDepartments();
  },

  methods: {
    YgDepartments() {
      console.log(this.$router.history.current)
       this.sid=this.$router.history.current.params.sid;
       this.mid=this.$router.history.current.params.mid;
      var params = { c_id: this.sid };
      this.$http.get('/alumni/major/class',{params} ,{
        emulateJSON: true
      }).then(res=>{
        console.log(res)
          this.classes=res.data;
      }, error=> {
        console.log(error)
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