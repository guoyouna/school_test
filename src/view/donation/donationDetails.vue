<template>
  <div class="donation">
      <nav-bar :title="nav.title" :naviconName="nav.naviconName2" ></nav-bar>
     <div class="content fs-r30" >
         <div class="hd-nav mg-bt-r20">
          <div class="hd-img">
            <img src="../../assets/img/home/swipe/swipe2.jpg" alt="">
             <span class="hd tip fs-r26">筹备中</span>
             
          </div>
          <div class="td-title">
              <h5 class=" fs-r36">"我爱母校"年度捐赠项目</h5>
             <p class="fc-70 fs-r28">"我爱母校"年度捐赠是我校校友会、教育基金联合发起的年度捐赠项目，是向全体校友展开的小额捐赠项目</p>
             <div class="box">
                <van-progress :show-pivot="false" color="#FD5C32" :percentage="25" />
                <span>25%</span>
             </div>
             
          </div>
          
          <div class="hd-title box-center fs-r30 fc-70">
              <div class="hd-name-item">
                  <p>目标筹款</p>
                  <p><span class="icon-tag">20,000</span>元</p>
              </div>
              <div class="hd-name-item">
                   <p>当前筹款</p>
                  <p><span class="icon-tag">1,900</span>元</p>
              </div>
              <div class="hd-name-item">
                  <p>捐赠人数</p>
                  <p><span class="icon-tag">188</span>人</p>
              </div>
          </div>
         </div>
         <div class="mg-bt-r20">
                <van-tabs v-model="active">
                <van-tab title="捐赠鸣谢" >
                    <router-link to="/donation/thank">
                    <div class="acknowledge">
                    <div class="box">
                        <div v-for="index in 6" :key="index">
                            <img src="./img/logo.png" alt="">
                        </div>
                            <i data-v-3bbeaa1e="" class="gc-iconright"></i>
                    </div>
                    <div class="talk u-tri">
                        <p>徐冰  捐赠<span class="icon-tag">500</span>元</p>
                        <p>"唯有感谢，祝君一切安好！"</p>
                    </div>
                    </div>
                    </router-link>
                </van-tab>
                <van-tab title="一起捐">
                    <div class="acknowledge">
                        暂无内容
                    </div>
                </van-tab>
            </van-tabs>
         </div>
         
        <div class="ct-main">
            <donation-cell :name="docell.name" :value="docell.value"></donation-cell>   
            <div class="ct-main-details">
                <p v-for="(item,index) in activeDetails" :key="index">
                    {{item}}
                </p>
                
            </div>    
        </div>
        <div class="more">
            <img src="./img/balloon.png" alt="">
            <van-button type="default">查看更多捐赠项目</van-button>
        </div>
             <div class="foot box">
            <van-button square  type="default" size="large">发起一起捐</van-button>
            <van-button square  type="danger" size="large">立即捐赠</van-button>
          </div>
     </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavbarReturn";
import DonationCell from "@/components/donation/donationcell";
import RecordItem from "@/components/donation/Recorditem";

export default {
  name: "",
  props: [""],
  data() {
    return {
      nav: {
        title: "活动详情",
        naviconName2: "gc-iconmore"
      },
      docell: {
        name: "项目详情",
        value: ""
      },
      active: 0,
      activeDetails:['“我爱母校”年度捐赠是我校校友会、教育发展基金会联合发起设立的年度捐赠项目，是面向全体校友展开的以自愿为原则、重在参与、贵在坚持的小额捐赠项目。由教育发展基金会统一管理，用于参与母校建设、组织和开展校友活动以及应对突发事件的爱心捐助等项目。资金使用情况都将通过校友会会刊和校友会网站等渠道公布。','本项活动接受校友个人和团体捐款，每年捐款的款额与母校建设的周年数倍数相等(建校115周 年捐资115元、230元、345元、.  1150元等，以此类推)']
    };
  },

  components: {
    NavBar,
    DonationCell,
    RecordItem
  },

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {}
};
</script>
<style  scoped>
.donation {
  width: 100%;
  height: 100%;
}
.mg-bt-r20 {
    margin-bottom: 0.2rem;
}
.hd-nav {
  margin-bottom: 0.2rem;

  background-color: #fff;
}
.hd-img {
  position: relative;
  text-align: left;
}
.td-title {
  text-align: left;
  padding: 10px;
}
.van-progress {
  margin: 0.2rem;
  width: 82%;
}
.td-title h5,
p {
  margin: 0.1rem;
}
.tip {
  position: absolute;
  top: 8px;
  left: 0;
  color: #fff;
  padding: 5px 8px;
  border-radius: 0 20px 20px 0;
  background: #fb2955;
}
.acknowledge {
    padding: 10px;
  background: #fff;
}
.acknowledge img {
  width: 1rem;
  margin: 0.2rem 0.05rem;
}
.acknowledge i.gc-iconright {
  font-size: 32px;
  color: #e5e5e5;
}
.hd-name-item p {
  margin: 0.1rem;
}
.hd-title {
  background: #fff;
  height: 1.6rem;
}
.icon-tag {
  color: #ff4c57;
  margin: 0.1rem;
  font-size: 0.34rem;
}
.ct-main {
    background: #fff;
}
.ct-main-details {
    padding: 10px;
    text-align: left;
    text-indent: 1em;
}
.ct-main-details p{
    margin-bottom: 0.2rem;
}
.talk {
  position: relative;
  display: inline-block;
  width: 93%;
  padding: 4px 8px;
  border-radius: 5px;
  border: 1px solid #DBDBDB;
  background-color: #F8F8F8;
  line-height: 20px;
  font-size: 14px;
}
.u-tri:before {
  position: absolute;
    left: 12px;
    top: -16px;
    content: "";
    border-top: 2px solid transparent;
    border-bottom: 13px solid #DBDBDB;
    border-left: 10px solid transparent;
    border-right: 14px solid transparent;
}
.more {
    margin:1rem  0.3rem;
}
.more img {
    width: 1.6rem;
    display: block;
    margin: auto;
}
.more .van-button--default {
    color: #323233;
    background-color: #fff;
    border: 1px solid #c8c9cc;
    border-radius: 5px;
}
.van-button--default {
    color: #ff4444;
}
</style>