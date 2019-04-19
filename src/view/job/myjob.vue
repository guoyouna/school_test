<template>
  <div class="myjob">
      <nav-bar :title="nav.title" :naviconName="nav.naviconName2" ></nav-bar>
     <div class="content" >
         <van-tabs>
            <van-tab title="已申请">
                <div class="job-list">
                    <myjob-item></myjob-item>
                    <myjob-item></myjob-item>
                </div>
                
            </van-tab>
            <van-tab title="已收藏">
                <div class="job-list">
                    <myjob-item></myjob-item>
                </div>
            </van-tab>
            <van-tab title="已发布">
                <div class="job-list">
                    <myjob-item></myjob-item>
                </div>
            </van-tab>
        </van-tabs>
     </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavbarReturn";
import MyjobItem from "@/components/job/myjobitem";
export default {
  name: "",
  props: [""],
  data() {
    return {
      nav: {
        title: "我的职位",
        naviconName2: "gc-iconmore"
      }
    };
  },

  components: {
    NavBar,
    MyjobItem
  },

  computed: {},

  beforeMount() {},

  mounted() {
  },

  methods: {
   
  },

  watch: {}
};
</script>
<style  scoped>
.myjob {
  width: 100%;
  height: 100%;
}

</style>