<template>
  <div class="xxld">
         <div class="leader-list ">
           <div class="leader-item box" v-for="(item,index) in xxld" :key="index"  >
                <strong>{{item.position}}:</strong>
                <div v-for="(leader,index) in item.leader" :key="index">
                 <router-link :to="{name: 'dsinfo', params: {id: leader.id}}">
                    <span>{{leader.name}}</span>
                  </router-link>
                </div>
           </div>
         </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    
  },
  data() {
    return {
      xxld:{
      }
    };
  },

  components: {
    
  },


  computed: {},

  beforeMount() {},

  mounted() {
      this.Xxld();
  },

  methods: {
    Xxld() {
      this.$http({
        method: "get",
        url:'../../static/json/xxgk/xxld.json',
        data: {}
      }).then(
        response => {
          console.log("请求成功");
          this.xxld = response.data.xxld;
          console.log(this.xxld);
        },
        response => {
          console.log("请求失败");
          console.log(response);
        }
      );
    }
  },

  watch: {}
};
</script>
<style  scoped>
.xxld {
  width: 100%;
  background: #fff;
}
.logo{
  width: 2.5rem;
  margin: 0.1rem;
}
.leader-list{
  width:70% ;
  padding: 0.1rem;
  box-sizing: border-box;
  font-size: 14px;
  text-align: left;
  margin: auto;
}
.leader-item {
    border-bottom: 1px solid #eee;
    padding: 0.2rem 0;
}
 strong,span{
  font-size: 14px;
  margin: 0.1rem;
}
a{
   color: #2c3e50;
}
</style>