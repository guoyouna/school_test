<template>
  <div class="fridend-dymaic-item">
                <div class="fridend-dymaic-itemtitle box">
                    <img src="../../assets/img/userinfo/logo.jpg" alt="logo">
                    <p>张晓敏</p>
                </div>
                <div class="fridend-dymaic-article">
                    <p :class="{hide:isDisplay}">天空依旧是那样湛蓝,云朵依然是那样洁白,和煦的阳光照射在脸上,这是多么温暖.而我那颗轻松快乐的心,仿佛被什么揪住了,变得惆怅万分.因为在不久之后,我们将告别这熟悉的校园,告别可亲可敬的老师,告别朝夕相处的同学.此时此刻,纵然有千言万语、良词妙句,也无法表达我那深深的眷恋之情</p>
                    <p style="text-align: right;color: #17aaf8" @click="displayActicle">全文</p>
                    <div class="flex-between ">
                        <div>
                            3分钟前
                        </div>
                        <div>
                            <i class="gc-iconappreciate" :class="{iconappreciate:isLike}" @click="islike"></i>
                            <i class="gc-iconcomment"></i>
                            <i class="gc-iconforward"></i>
                        </div>
                    </div>
                </div>
                
                <div class="remark">
                    <span class="fc-028">沙漠绿洲 ：</span>
                    <span>时间过得真快</span>
                </div>
            </div>
</template>

<script>

  export default {
    name:'',
    props:[''],
    data () {
      return {
 isDisplay:true,
      isLike:false
      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {
        
      displayActicle(){
          this.isDisplay=!this.isDisplay
      },
      islike(){
          this.isLike = !this.isLike
      }
    },

    watch: {}

  }

</script>
<style lang='' scoped>
.fridend-dymaic-itemtitle img{
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    margin: 5px;
}
.fridend-dymaic-item {
    margin: 10px 0;
    background-color: #fff;
    font-size: 18px;
    text-align: left;
    padding: 5px 10px 10px;
}
.fridend-dymaic-article p {
    margin: 5px;
}
.hide {
    overflow: hidden;
    text-overflow:ellipsis;
    display:-webkit-box; 
    -webkit-box-orient:vertical;
    -webkit-line-clamp:3;
}
.fridend-dymaic-article {
    padding-bottom: 5px;
    border-bottom: 1px solid #8f8f8f;
    font-size: 16px;
}
.remark {
    margin: 5px;
}
.fridend-dymaic-item i{
    margin: 5px;
}
.iconappreciate{
    color: #e96c4d;
}
</style>