<template>
<div class="article-item" >
    <router-link :to="'active/list/'+[id]" class=" flex-row">
    <div class="article-item-img">
        <img :src="require('../../assets/img/article/'+[id]+'/'+[img])">
    </div>
    <div  class="article-item-content">
        <h4>{{title}}</h4>
        <p>{{place}}</p>
        <p>{{date|formatDate}}</p>
        </div>
        </router-link>
</div>
</template>

<script>
export default {
  name: "",
  props: {
    img: {
      type: String,
      default: "10011.jpg"
    },
    id: {
      type: Number,
      default: 10001
    },
    title: {
      type: String,
      default: "阳光学校校友毕业10周年返校返校活动主题晚会"
    },
    place: {
      type: String,
      default: "图书馆科报厅2楼"
    },
    date: {
      type: String,
      default: "2018-12-20"
    }
  },
  data() {
    return {
      // urlImg:require('../../assets/img/article')
    };
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    getActive() {
      var params = { id: this.$route.params };
      this.$http
        .get("/active", {
          emulateJSON: true
        })
        .then(
          res => {
            this.active = res.data;
            for (var i = 0; i < this.active.length; i++) {
              this.activeArticle = this.active[i].article.split("';'");
              this.activeImg = this.active[i].articleImg.split(",");
            }
          },
          error => {
            console.log(error);
          }
        );
    }
  },

  watch: {}
};
</script>
<style lang='scss' scoped>
.article-item {
  width: 100%;
  background-color: #fff;
  padding: 0.1rem;
  // margin: 0.1rem 0;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
}
.article-item-img {
  width: 35%;
  margin: 0.1rem;
}
.article-item-content {
  margin: 0.1rem;
  width: 65%;
  font-size: 0.24rem;
  text-align: left;
}
.article-item-content h4 {
  margin: 0.1rem;
  font-size: 0.28rem;
}
.article-item-content p {
  margin: 0.1rem;
  color: #999999;
}
</style>