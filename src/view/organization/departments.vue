<template>
  <div class="departments">
    <div class="index-list-nav fs-r26">
        <p  v-for="(itemletter,index) in letter" :key="index">{{itemletter}}</p>
    </div>
    <div class="main fs-r30">
        <p class="tip">D</p>
        <div class="name">
            <p>电子信息工程系校友会</p>
        </div>
        <p class="tip">F</p>
        <div class="name">
            <p>法律系学院校友会</p>
        </div>
        <p class="tip">S</p>
        <div class="name">
            <p>商学院校友会</p>
        </div>
        <p class="tip">T</p>
        <div class="name">
            <p>土木工程学院校友会</p>
        </div>
        <p class="tip">X</p>
        <div class="name">
            <p>信息工程学院学院校友会</p>
        </div>
        <p class="tip">Y</p>
        <div class="name">
            <p>艺术系学院校友会</p>
        </div>
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

    computed: {
        letter() {
        const letter = [];
        for (var i = 0; i < 25; i++) {
            letter.push(String.fromCharCode(65 + i));
        }
        return letter;
        }
    },

    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

  }

</script>
<style lang='scss' scoped>
.departments{
    width: 100%;
    height: 100%;
}
.index-list-nav{
    position: absolute;
    right: 0;
    top: 1.5rem;
    color: #217CBB;
    background: #fff;
}
.index-list-nav p{
    margin: 0.02rem;
}
.main{
    text-align: left;
    background: #F2F2F2;
}
.main p{
    margin: 0.1rem;
}
.tip{
    padding: 0.05rem 0.1rem;
        font-weight: 400;
}
.name{
    background: #fff;
    margin: 0.1rem;
    padding:0.2rem 0.1rem;
}
</style>