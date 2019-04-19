<template>
  <div class="scrollTop" @click="toTop" v-if="fullHeight>0">
    <img src="../../assets/img/totop.png" alt="">
  </div>
</template>
<script>
export default {
    // 回到顶部
  name: "scroll-top",
  props: {
    toBottom: {
      type: String,
      default: "0.98rem"
    }
  },
  data() {
    return {
      fullHeight: document.documentElement.clientHeight
    };
  },
  methods: {
    toTop() {
      document.documentElement.scrollTop = document.body.scrollTop = "0.98rem";
    },
    setTimer: function() {
      this.timer = setInterval(() => {
        this.fullHeight = document.documentElement.scrollTop;
      }, 1000);
    }
  },
  mounted() {
    this.setTimer();
    // clearInterval(this.timer);
    document.querySelector(".scrollTop").style.bottom = this.toBottom;
  },
  distroyed: function () {

　　clearInterval(this.timer)

},
  watch: {
    fullHeight(val) {
      if (!this.timer) {
        this.fullHeight = val;
        console.log(this.fullHeight);
        this.timer = true;
        let that = this;
        setTimeout(function() {
          that.timer = false;
        }, 400);
      }
    }
  }
};
</script>
    <style scoped>
.scrollTop {
  position: fixed;
  bottom: 0.98rem;
  right: 0.1rem;
  z-index: 99;
}
.scrollTop img {
  width: 0.68rem;
}
</style>