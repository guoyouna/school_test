<template>
<div class="search">
    <div class="navbar">
        <div class="icon_return" @click="get_return">
        <i class="gc-iconback"></i>
    </div>
    <form action="/">
        <van-search
            v-model="value"
            placeholder="请输入搜索关键词"
            show-action
            @search="onSearch"
            @cancel="onCancel"
        />
        </form>
    </div>
    <div class="content">
        <div v-for="(item,index) in classmate" :key="index" >
             <router-link to="">
             <!-- <router-link :to="{name: 'classmate', params: {id: item.id}}"> -->
                <classmate-item :student="item.s_name" ></classmate-item>
            </router-link>
         </div>
         <div class="no_classmate" v-if="isShow">
             <img src="../../assets/img/alumni/noclassmate.png" alt="">
             <p>找不到该同学</p>
         </div>
    </div>
    
    
</div>
</template>

<script>
import ClassmateItem from "@/components/alumni/classmateitem";
export default {
  name: "",
  props: {
    
  },

  data() {
    return {
      value:'',
      classmate:[],
      isShow:false
    };
  },

  components: {
      ClassmateItem
  },

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    get_return() {
      this.$router.go(-1);
    },
    onSearch() {
        var params = { s_name: this.value };
      this.$http.get('/search/classmate',{params} ,{
        emulateJSON: true
      }).then(res=>{
          this.classmate=res.data;
          if(this.classmate.length==0){
              this.isShow=true;
          }
      })
    },
    onCancel() {
      this.value=''
    }
  },

  watch: {}
};
</script>
<style>
.search .van-search__action {
    color: #ffffff !important;
}
</style>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  width: 100%;
  height: 0.88rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #c0c0c0;
  box-sizing: border-box;
  background-color: #008bfb;
  color: #fff;
}
.van-search--show-action {
    padding-right: 0;
    width: 350px;
}
.van-search.van-search--show-action {
    background: #008bfb !important;
}

h4 {
  font-size: 0.36rem;
  margin: 0.1rem;
}
.nav_title {
  flex: 1;
}
.no_classmate img{
    width:30% ;
    margin-top: 0.5rem;
}
</style>
