<template>
  <div class="xyl">
         <div class="dongshi-list flex-flow">
           <div class="dongshi-item" v-for="(item,index) in dsh" :key="index" >
           <router-link :to="{name: 'dsinfo', params: {id: item.id}}">
            <img class="logo" :src="'../../../static/img/xxjj/dsh/'+item.img" alt="图片">
            <div>
              <h5 class="title">{{item.name}}</h5>
                <div class="position" v-for="(items,index) in item.position" :key="index">
                  <p>{{items}}</p>
                </div>
            </div>
            </router-link>
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
      dsh:{
      }
    };
  },

  components: {
    
  },


  computed: {},

  beforeMount() {},

  mounted() {
      this.Xxjj();
  },

  methods: {
    Xxjj() {
      this.$http({
        method: "get",
        url:'../../static/json/xxgk/dsh.json',
        data: {}
      }).then(
        response => {
          console.log("请求成功");
          this.dsh = response.data.dsh;
          console.log(this.dsh);
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
.xxjj {
  width: 100%;
  background: #fff;
}
.logo{
  width: 2.5rem;
  margin: 0.1rem;
}
.dongshi-item{
  width: 50%;
  padding: 0.1rem;
  box-sizing: border-box;
  font-size: 0.24rem;
  border-bottom: 1px solid #eee;
}
.dongshi-item h5{
  font-size: 0.24rem;
  margin: 0.1rem;
  
}
.dongshi-item p{
  font-size: 14px;
    margin: 0.1rem;
}
strong{
  padding: 0.1rem;
  font-size: 16px;
}
a{
  color: #2c3e50;
}
</style>