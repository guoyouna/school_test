<template>
  <div class="donation-list">
              <ul>
                <li>
                  <van-tag round type="danger">1</van-tag><span class="name">方淼淼</span><span class="place">厦门校友会</span><span class="money">8000元</span></li>
                <li><van-tag round type="primary">2</van-tag><span class="name">毛不语</span><span  class="place">土木工程学院</span><span  class="money">5000元</span></li>
                <li><van-tag round type="success">3</van-tag><span class="name">李明亮</span><span class="place">电子信息工程系</span><span  class="money">3000元</span></li>
                <li><van-tag round>4</van-tag><span class="name">方淼淼</span><span class="place">法律系</span><span >1500元</span></li>
                <li><van-tag round>5</van-tag><span class="name">方淼淼</span><span class="place">法律系</span><span  class="money">1500元</span></li>
              </ul>
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
<style scoped>
.donation-list {
    margin: 0.1rem;
        text-align: left;
}
 .donation-list span{
   margin: 0.05rem;
   font-size: 0.24rem;
   display: inline-block;
    overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
 }
 .donation-list .name{
   width: 22%;
 }
 .donation-list .place{
   width: 30%;
 }
 .donation-list .money{
   width: 24%;
 }
</style>