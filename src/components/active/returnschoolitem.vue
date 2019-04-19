<template>
<div class="donation-item">
    <div class="active-main box">
    <img class="img" :src="'../../static/img/article/'+[returnSchool.img]" alt="">
    <div class="item-main">
        <p><strong>{{returnSchool.title}}</strong></p>
        <p class="overflow-hidden fc-9c">时间：{{returnSchool.date}}</p>
        <p class="overflow-hidden fc-9c">地点：{{returnSchool.place}}</p>
    </div>
</div>
<div class="active-nav box-center">
    <div>
        <p style="color:#15B54E;" v-if="returnSchool.behavior=='1'">报名</p>
        <p v-if="returnSchool.behavior=='2'">取消报名</p>
        </div>
    <div><p>人数：<span class="returnSchoolnum">{{returnSchool.num}}</span>/{{returnSchool.totalnum}}</p></div>
    <div><p><i class="gc-iconfavorfill"></i>{{returnSchool.collectionnum}}</p></div>
</div>
</div>
 
</template>

<script>
export default {
  name: "",
  props: ["returnSchool"],
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
i[class^="gc-icon"], i[class=" gc-icon"] {
    vertical-align: initial;
}
i.gc-iconfavorfill {
    font-size: 18px;
    margin: 0.1rem;
}
.donation-item {
  background-color: #fff;
  font-size: 0.28rem;
  padding: 0.1rem 0;
  margin-bottom: 0.2rem;
  border-bottom: 1px solid #eee;
}
.active-main{
    padding: 0.1rem;
    border-bottom: 1px solid #eee;
}
.active-nav{
    width: 100%;
}
.active-nav p{
    margin: 0.1rem;
}
.active-nav div{
    width: 33.33%;
    margin: 0.1rem;
    border-right: 1px solid #eee;
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
.returnSchoolnum{
    color: #2D88CB;
    margin: 0.05rem;
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