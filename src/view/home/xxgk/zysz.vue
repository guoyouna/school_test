<template>
  <div class="zzsz">
         <div class="zzsz-list flex-flow">
           <div class="zzsz-item" v-for="(item,index) in dsh" :key="index"  >
             <a  target="_blank" :href="item.http" >
            <img class="logo" :src="'../../../static/img/xxjj/zysz/'+item.img" alt="图片">
            <div>
              <h5 class="title">{{item.name}}</h5>
              <div class="overflow-hiddenr">
                <span class="position" v-for="(items,index) in item.major" :key="index">{{items}}</span>
              </div>
                  
            </div>
            </a>
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
        url:'../../static/json/xxgk/zysz.json',
        data: {}
      }).then(
        response => {
          console.log("请求成功");
          this.dsh = response.data.zysz;
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
.zzsz {
  width: 100%;
}
.logo{
  width: 100%;
    padding: 0.1rem;
    box-sizing: border-box;
}
.zzsz-item{
    width: 47%;
    margin: 0.1rem;
  font-size: 16px;
  border-bottom: 1px solid #eee;
  background-color: #eee;
  height: 3.6rem;
  text-align: left
}
.zzsz-item h5{
  font-size: 14px;
  margin: 0.1rem;
  
}
.zzsz-item span{
  font-size: 12px;
    margin: 0.1rem;
}
strong{
  padding: 0.1rem;
  font-size: 14px;
}
a{
  color: #2c3e50;
}
div.overflow-hiddenr{
  overflow:hidden; 
text-overflow:ellipsis;
display:-webkit-box; 
-webkit-box-orient:vertical;
-webkit-line-clamp:2; 
}
</style>