<template>
   <div class="alun-article-item">
        <h5 class="article-title"><strong>{{name}}：</strong>{{title}}</h5>
        <div>
            <span class="article-time">{{date}}</span>
            <span class="article-total">浏览{{tatal}}次</span>
        </div>
    </div>
</template>

<script>
export default {
  name: "",
  props: {
      name:{
         type:String,
         default:"郑婷"
      },
      title:{
         type:String,
         default:"灿烂千阳"
      },
      date:{
         type:String,
         default:"2018-11-24"
      },
      tatal:{
         type:String,
         default:"248"
      }
      
  },
  data() {
    return {};
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {}
};
</script>
<style lang='' scoped>
.alun-article-item {
    text-align: left;
    font-size: 16px;
    padding: 10px;
    border-bottom: 1px solid #eee;
}
.alun-article-item span{
margin: 0.1rem;
   font-size: 14px;
}
.article-title {
    margin: 0.1rem;
    font-size: 16px;
}
</style>