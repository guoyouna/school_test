<template>
  <div class="ct-main-tittle flex-between">
    <div class="box-center">
      <i class="left-icon"></i>
      <span class="ct-list-name">{{item.name}}</span>
    </div>
    <div  class="box-center" @click="clkCall(item.methods)">
       <span>{{item.value}}</span>
       <i class="gc-iconright"></i>
    </div>
  </div>
</template>

<script>

  export default {
    name:'',
    props:['item'],
    data () {
      return {

      };
    },
    methods:{
      clkCall(methodsWords) {
        this.$emit('clkCallBk', methodsWords)
      }
    }

  }

</script>
<style lang='scss' scoped>
.ct-main-tittle {
    height: 0.78rem;
    line-height: 0.78rem;
    padding-right: 5px;
    border-bottom: 1px solid #eee;
    background: #fff;
}
.ct-main-tittle i.left-icon {
    background: #F66917;
    width: 5px;
    height: 100%;
    display: inline-block;
}
.ct-main-tittle span {
    height: 0.78rem;
    line-height: 0.78rem;
    font-size: 0.28rem;
}
.ct-main-tittle i.gc-iconright {
    font-size: 0.28rem;
}
.ct-list-name{
  margin-left: 0.2rem;
}
</style>