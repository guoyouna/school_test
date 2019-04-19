<template>
 <div class="myjob-item">
     <p><strong>测试实习</strong>神州智联</p>
     <p class="pay"><i class="gc-iconrecharge"></i><span class="salary">5000-1000</span></p>
     <div class=" flex-between">
         <div><span class="date">职位发布于2018-12-23</span></div>
         <div><i class="gc-icondelete"></i></div>
    </div>
</div>
</template>

<script>
export default {
  name: "",
  props: [""],
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
<style lang='scss' scoped>
.myjob-item{
    background-color: #fff;
    font-size: 0.28rem;
  padding: 0.2rem;
    text-align: left;
    border-bottom: 1px solid #eee;
}
.myjob-item p{
    margin: 0.1rem;
    height: 0.48rem;
    line-height: 0.48rem;
}
.myjob-item strong {
    margin-right: 0.4rem;
}
i.gc-iconrecharge {
    font-size: 24px;
    margin: 0.05rem;
}
.salary{
    font-size: 18px;
    color: red;
}
.date{
    font-size: 0.18rem;
}
</style>