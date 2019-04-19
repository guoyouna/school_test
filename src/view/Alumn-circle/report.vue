<template>
  <div class="report">
    <div class="nav">
        <div>取消</div>
        <div>发表</div>
    </div>
    <div class="content">
       <textarea placeholder="分享新鲜事" name="" id="" cols="30" rows="10">
       </textarea>
    </div>
  </div>
</template>

<script>

  export default {
    name:'',
    props:[''],
    data () {
      return {

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
<style lang='' scoped>
.report{
    background-color: #fff;
}
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 8;
  width: 100%;
  height: 0.88rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #eee;
}
.reportmain{

}
.content textarea {
    border: none;
}
</style>