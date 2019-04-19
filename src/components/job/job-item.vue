<template>
 <div class="job-item">
    <div class="mg-1 flex-row">
      <div>
         <span class="job-position fs-18">程序员</span>
         <van-tag color="#ff0000" plain>急聘</van-tag>
         <van-tag color="#359fe3" plain>就业</van-tag>
      </div>
      <div class="salary fs-18 fc-red">5000-8000元/月</div>
    </div>
    <div class="flex-row mg-1 fc-9c">
        <div class="jobcity">福州市</div>
        <div class="time">2018年01月03日</div>
    </div>
    <div class="company box">
        <div class="company-logo">
            <img src="" alt="">
        </div>
        <div>
            <p>鑫阳网络</p>
            <div class="iconfavor">
                <i class="gc-iconfavorfill"></i>
                <i class="gc-iconfavorfill"></i>
                <i class="gc-iconfavorfill"></i>
                <i class="gc-iconfavorfill"></i>
                <i class="gc-iconfavorfill"></i>
            </div>
        </div>
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
<style lang='' scoped>
.job-item {
  background-color: #fff;
  font-size: 0.28rem;
  padding: 0.1rem 0.2rem;
}
.company-logo{
    width: 0.8rem;
    height: 0.8rem;
    background-color: #726f6f;
    margin: 0.1rem;
}
.company p,.iconfavor{
    text-align: left;
    margin: 0.1rem ;
}
.company i{
    color: #ff8803;
}
.mg-1{
    margin: 0.1rem;
}

.company {
    margin: 0.2rem 0;
}
</style>