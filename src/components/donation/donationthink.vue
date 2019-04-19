<template>
 <div class="donation-item box fs-r30">
    <img class="img" :src="donationThink.img" alt="">
    <div class="item-main">
        <p><strong>{{donationThink.name}}</strong></p>
        <p><strong>捐款<span  class="fc-red">{{donationThink.money}}</span>元</strong><span class="fc-9c">{{donationThink.date}}</span></p>
        <p class="overflow-hidden fc-9c">{{donationThink.text}}</p>
    </div>
</div>
</template>

<script>
export default {
  name: "",
  props: ["donationThink"],
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
  padding: 0.1rem;
  margin: 0 0.1rem;
  border-bottom: 1px solid #eee;
}
.img{
    height: 1.2rem;
    width: 1.2rem;
    margin: 0.05rem;
}
.item-main{
    text-align: left;
    margin: 0.1rem;
}
.item-main p{
    margin: 0.1rem;
}
.item-main span{
  margin: 0.1rem;
}
/* 超出隐藏 */
.overflow-hidden{
  overflow:hidden; 
text-overflow:ellipsis;
display:-webkit-box; 
-webkit-box-orient:vertical;
-webkit-line-clamp:2; 
}
</style>