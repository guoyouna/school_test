<template>
    <div class="dynamin-ct-item box">
          <img :src="[imgsrc]" alt="logo">
          <span>{{itemName}}</span>
  </div>
</template>

<script>
export default {
  name: "dyamicitems",
  props: {
      imgsrc:{
          type:String,
          default:"../../assets/img/userinfo/myactivity.svg"
      },
      itemName:{
          type:String,
          default:"我的活动"
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
<style  scoped>
.dynamin-ct-item{
  width: 100%;
  font-size: 16px;
  background-color: #fff;
  border-bottom: 1px solid #eee
}
.dynamin-ct-item img {
    width: 0.5rem;
    height: 0.5rem;
    margin: 10px;
}

</style>
