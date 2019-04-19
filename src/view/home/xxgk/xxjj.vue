<template>
  <div class="xyl">
       <div class="article">
         <img :src="'../../../static/img/xxjj/'+xxjj.img1" alt="图片">
         <p></p>
         <div class="article-ct" v-for="(item,index) in xxjj.p" :key="index">
           <p>{{item}}</p>
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
      xxjj:{}
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
        url:'../../static/json/xxgk/xxjj.json',
        data: {}
      }).then(
        response => {
          console.log("请求成功");
          this.xxjj = response.data.xxjj;
          console.log(this.xxjj);
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
.article{
  margin: 0.1rem;
      font-size: 0.24rem;
}
.article strong{
  padding: 0.1rem;
}
.article img{
  width:90%;
  margin: 0.2rem;
}
.article p{
      margin: 0.1rem;
    text-align: left;
    text-indent: 2em;
    font-size: 14px;
}
</style>