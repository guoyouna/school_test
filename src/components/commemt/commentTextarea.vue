<template>
  <div class="comment-textarea fs-r30">
    <div class="main">
      <div class="btn flex-between">
        <div class="btn-canel" @click="canelComment">取消</div>
        <div @click="addComment">发布</div>
      </div>
      <van-cell-group>
        <van-field
          v-model="commentText"
          type="textarea"
          placeholder="请输入留言"
          rows="1"
          clearable
          autosize
        />
      </van-cell-group>
    </div>
    
    <!-- <textarea name="" value="请填写评论内容" v-model="commentText"></textarea> -->
  </div>
</template>

<script>

  export default {
    name:'',
    props:[''],
    data () {
      return {
commentText:''
      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {
      addComment: function() {
            this.$emit("submit",this.commentText);
            this.commentText = "";
        },
        canelComment: function() {
            this.$emit("canel");
            this.commentText = "";
        }
    },

    watch: {}

  }

</script>
<style lang='scss' scoped>
.comment-textarea{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 38px;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 99;
}
.main{
  margin-top: 80%;
  height: 100%;
  background: #fff;
  padding:0.1rem;
}
.btn{
  margin: 0.1rem 0;
}
.btn-canel{
  color: #969799;
}
.van-cell{
  background-color: #eee !important;
}
</style>