<template>
<div>
    <div class="major-item flex-row" @click="isDisplays">
        <p >{{major}}</p>
      <div>
          <i :class="{'gc-iconunfold':isDisplay,'gc-iconfold':!isDisplay}" ></i>
      </div>
    </div>
    
    <div  :class="{class_name:isDisplay}" v-for="(classitems,index) in classname" :key="index">
      <router-link :to="{name: 'classmate', params: {mid:id,sid:classitems.class_id,title:classitems.class_name}}">
        <class-item :departments="classitems.class_name"></class-item>
      </router-link>
    </div>
</div>
 
</template>

<script>
import ClassItem from "@/components/alumni/xylitem";
  export default {
    name:'',
    props:{
      major:{
        type:String,
        default:'电子信息工程'
      },
       id:{
        type:String,
        default:'1001'
      },
      classname:{
        type:Array,
        default:''
      }
    },
    data () {
      return {
        isDisplay:true,
      };
    },

    components: {
      ClassItem
    },

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {
      isDisplays(){
        this.isDisplay=!this.isDisplay;
      }
    },

    watch: {}

  }

</script>
<style lang='' scoped>
.major-item{
    padding: 2px 10px;
    font-size: 16px;
    height: 0.78rem;
    line-height: 0.78rem;
    border-bottom: 1px solid #eee;
    color: #434343;
    background-color: #fff;
}
.major-item p{
  margin: 0.1rem;
  color:#00AAEE;
}
.class_name{
  display: none;
  background-color: #eee;
}
.alu-item.flex-row {
    font-size: 14px;
    margin: 0 5px;
}
</style>