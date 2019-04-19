<template>
<div class="record">
    <div class="donation-item box">
    <img class="img" src="../../assets/img/home/swipe/swipe2.jpg" alt="">
    <div class="item-main">
        <strong>众筹活动|献礼20周年，捐赠得月台景观</strong>
        <p class="fc-9c">捐赠金额：<span class="fc-red">20</span>元</p>
        <p class="fc-9c">捐赠时间：<span>2019-1-10 09:35</span></p>
    </div> 
    </div>
    <div class="donation-nav box-center">
        <p><i class="gc-iconedit"></i>  项目详情</p>
        <p><i class="gc-iconshop"></i>  捐赠赠书</p>
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
.record{
    
  font-size: 0.28rem;
  
  background-color: #fff;
    padding: 0.1rem ;
  border-bottom: 1px solid #e4e4e4;
  margin-bottom: 0.2rem;

}
.donation-item {
  border-bottom: 1px solid #e4e4e4;
}
.img{
    width: 30%;
    height: 1.68rem;
    margin: 0.05rem;
    border-radius: 5px;
}
.item-main{
    text-align: left;
    margin: 0.1rem;
}
.item-main p{
    margin: 0.1rem;
}
.item-main span {
    margin: 0.1rem;
}
.donation-nav{
       background-color: #fff;
    font-size: 0.34rem;
    height: 0.8rem;
    color: #FF5649;
}
.donation-nav p{
    margin: 0.1rem;
     padding: 0.05rem;
    width: 50%;
}
.donation-nav p:nth-child(1)
{
border-right: 1px solid #e4e4e4;
}
</style>