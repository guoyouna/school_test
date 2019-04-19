<template>
 <div class="news-item">
    <p class="new_con">{{title}}</p>
    <p class="date">{{date}}</p>
 </div>
</template>

<script>

  export default {
    name:'',
    props:{
        title:{
            type:String,
            default:'我校揭牌成立外国语与海外教育学院'
        },
        date:{
            type:String,
            default:'2019-12-5'
        },
    },
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
<style lang='scss' scoped>
.news-item{
  text-align: left;
  border-bottom: 1px solid #eee;
  padding: 5px;
}
.news-item p{
  margin: 0.05rem;
}
.date {
    padding-left: 26px;
    color: #999999;
    font-size: 0.18rem;
}
.new_con{
  background: url(../../assets/img/home/icon_2.png) no-repeat 10px center;
    padding-left: 26px;
    display: block;
    color: #313030;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 150%;
    font-size: 0.24rem;
}
</style>