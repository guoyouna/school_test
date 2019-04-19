<template>
  <div class="add-activity">
      <nav-bar :title="nav.title" :naviconName="nav.naviconName2" ></nav-bar>
     <div class="content">
       <div class="uploader-img">
         <van-uploader :after-read="onRead">
          <img class="head-img" src="../../assets/img/camera.png" alt="" ref="goodsImg">
        </van-uploader>
        <p>点击上传封面</p>
       </div>
       
       <div  class="mg-5">
         <van-cell-group>
             <van-field
              v-model="title"
              label="标题"
              type="textarea"
              placeholder="建议20字以内可读性更高哦"
              rows="1"
              autosize
            />
        </van-cell-group>
       </div>
       <div  class="mg-5">
         <van-cell-group>
            <van-field
              v-model="title"
              clearable
              label="发起"
              placeholder="默认当前登录人"
            />
            <van-field
              v-model="title"
              clearable
              label="组织"
              placeholder="默认发起人"
            />
        </van-cell-group>
       </div>
       <div class="mg-5">
         <van-cell-group>
            <van-field
              v-model="datetime"
              type="date"
              required
              clearable
              label="开始时间"
              placeholder="开始时间"
            />
            <van-field
              v-model="datetime"
              type="date"
              required
              clearable
              label="结束时间"
              placeholder="结束时间"
            />
            <van-field
              v-model="datetime"
              type="date"
              required
              clearable
              label="报名截止"
              placeholder="报名截止时间"
            />
          </van-cell-group>
       </div>
        <div  class="mg-5">
         <van-cell-group>
             <van-field
              v-model="title"
              label="活动地点"
              type="textarea"
              placeholder="请输入活动地点"
              value="福州市马尾区阳光学院科报厅"
              rows="1"
              autosize
            />
            <van-field
              type="text"
              required
              clearable
              label="活动类型"
              placeholder="活动类型"
            />
            <van-field
              type="number"
              required
              clearable
              label="报名人数"
              placeholder="报名人数4"
            />
        </van-cell-group>
       </div>
       <div class="list-choose mg-5">
         <div class="item-choose flex-row">
           <p>设置为活动圈子</p><van-switch v-model="checked1" />
         </div>
         <div class="item-choose flex-row">
           <p>仅校友可参加</p><van-switch v-model="checked2" />
         </div>
         <div class="item-choose flex-row">
           <p>允许评论</p><van-switch v-model="checked3" />
         </div>
       </div>
       <div class="mg-5">
         <p>活动详情</p>
         <textarea name="" id="" cols="30" rows="10"></textarea>
       </div>
     </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavbarReturn";
import ImgLoad from "@/components/common/imgLoad/index";
export default {
  name: "",
  props: [""],
  data() {
    return {
      nav: {
        title: "发布活动",
        naviconName2: "gc-iconmore"
      },
      title:"",
      message:"",
      datetime:"",
      checked1:true,
      checked2:false,
      checked3:true,
      imgs:[]
    };
  },

  components: {
    NavBar,
    ImgLoad
  },

  computed: {},

  beforeMount() {},

  mounted() {
  },

  methods: {
     onRead(file) {
      this.$refs.goodsImg.src=file.content;
    },
  },

  watch: {}
};
</script>
<style   scoped>
.add-activity {
  width: 100%;
  height: 100%;
  font-size: 0.28rem;
}
.content{
  text-align: left;
}
.uploader-img{
      text-align: center;
  background: #EBECF1;
}
.uploader-img p{
  margin: 0.1rem;
}
.van-icon {
    font-size: 1rem;
}
.mg-5{
  margin: 0.1rem 0;
}
.item-choose{
     height: 0.8rem;
    line-height: 24px;
    padding: 10px 15px;
    box-sizing: border-box;
    background: #fff;
}
.item-choose span{
  height: 0.8rem;
  line-height: 0.8rem;
  display: inline-block;
}
</style>