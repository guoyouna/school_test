<template>
 <div class="donation-item box">
    <img class="img" src="../../assets/img/home/swipe/swipe2.jpg" alt="">
    <div class="item-main">
        <p> <strong>众筹活动|献礼20周年，捐赠得月台景观</strong></p>
       
        <p class="overflow-hidden fc-9c">十年树木，百年树人。校友，在母校读过的这几年中...</p>
        <p class="fc-9c">共<span class="fc-red">2560</span>人捐赠</p>
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
.donation-item {
  background-color: #fff;
  font-size: 0.28rem;
  padding: 0.1rem 0;
  margin: 0 0.1rem;
  border-bottom: 1px solid #eee;
}
.img{
    width: 30%;
    height: 1.68rem;
    margin: 0.05rem;
}
.item-main{
    text-align: left;
    margin: 0.1rem;
}
.item-main p{
    margin: 0.1rem;
}
/* 超出隐藏 */
.overflow-hidden{
  overflow:hidden; 
text-overflow:ellipsis;
display:-webkit-box; 
-webkit-box-orient:vertical;
-webkit-line-clamp:1; 
}
</style>