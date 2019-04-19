<template>
  <div class="comment fs-r30">
      <div class="box">
          <div class="w-2">
            <img class="logo" src="../../assets/img/userinfo/logo.jpg" alt="">
        </div>
        <div class="m-content w-8">
            <div class="flex-between">
                <p>{{comment.name}}</p>
                <p @click="replay"><i class="gc-iconmessage"></i></p>
            </div>
            <p class="fs-r24">{{comment.time|formatDate}}</p>
            <p>{{comment.content}}</p>
        </div>
      </div>
        <div class="reply" v-if="comment.reply.length > 0">
            <div v-for="(reply,index) in comment.reply" :key="index" v-if="index==0 && !allRelay">
                 <p><span style="color:#1A70B2;">{{reply.responder}}</span>:<span>{{reply.content}}</span></p>
            </div>
            <div v-for="(reply,index) in comment.reply" :key="index" v-if="allRelay">
                 <p><span style="color:#1A70B2;">{{reply.responder}}</span>:<span>{{reply.content}}</span></p>
            </div>
            <p style="color:#1A70B2;"  v-if="!allRelay" @click="moreComment">共{{comment.reply.length}}条回复 <i class="gc-iconright"></i></p>
        </div>
  </div>
</template>

<script>

  export default {
    //   评论内容
    name:'',
    props:['comment'],
    data () {
      return {
          allRelay:false,
      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {
        //回复
        replay(index,replyText){
             this.$emit("rePlays",'replyText');
        },
        //查看更多评论
        moreComment(){
            this.allRelay=!this.allRelay;
        }
    },

    watch: {}

  }

</script>
<style lang='scss' scoped>
.comment{
    padding: 0.1rem;
}
.logo{
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    margin: 0.2rem;
}
.m-content p{
    margin: 0.1rem;
    text-align: left;
}
.w-8{
    width: 80%;
    margin: 0.1rem;
}
.w-2{
    width: 20%;
}
.reply {
    margin: 0.1rem;
    padding: 0.05rem;
    margin-left: 20%;
    box-sizing: border-box;
    text-align: left;
    background-color: #F6F6F6;
}
.reply p{
    margin: 0.1rem;
}
i.gc-iconmessage {
    font-size: 17px;
}
</style>