<template>
  <div>
    <van-collapse v-model="activeNames">
  <van-collapse-item title="福建地区" name="1" >
   <span v-for="(item,index) in fujian" :key="index">{{item.name}}</span>
  </van-collapse-item>
  <van-collapse-item title="浙江地区" name="2">
    <span v-for="(item,index) in fujian" :key="index">{{item.name}}</span>
  </van-collapse-item>
  <van-collapse-item title="湖南地区" name="3">
   <span v-for="(item,index) in fujian" :key="index">{{item.name}}</span>
  </van-collapse-item>
  <van-collapse-item title="其他地区" name="4">
    暂无内容
  </van-collapse-item>
</van-collapse>
  </div>
</template>

<script>

  export default {
    name:'',
    props:[''],
    data () {
      return {
          activeNames: ['1'],
          fujian:[
              {name:'福州校友会'},
              {name:'厦门校友会'},
              {name:'漳州校友会'},
              {name:'泉州校友会'},
              {name:'龙岩校友会'},
              {name:'莆田校友会'},
              {name:'宁德校友会'},
              {name:'三明校友会'},
              {name:'南平校友会'},
          ]
      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

  }

</script>
<style lang='scss' scoped>
.van-hairline--top-bottom.van-collapse {
    text-align: left;
}
.van-collapse-item__content {
    padding: 0px !important;
}
.van-collapse-item__content span{
       width: 30%;
    display: inline-block;
    text-align: center;
    margin: 0.1rem;
    color: #5f5f5f;
}
.van-cell__left-icon{
    color: #008bfb !important;
}
</style>