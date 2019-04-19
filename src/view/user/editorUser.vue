<template>
  <div class="editor-user">
    <nav-bar :title="nav.title" :naviconName="nav.naviconName2" ></nav-bar>
   <div class="content">
     <div class="user-list">
        <div class="user-item">
            <div class="uploader-img box">
                <label for="">头像</label>
                <div>
                  <img :src="user.img" alt ref="goodsImg">
            <input type="file" name="file" accept=".jpg, .jpeg, .png" class="van-uploader__input" @change="uploadAvatar">
                </div>
                
            </div>
        </div>
        <div class="user-item">
            <van-cell-group>
            <van-field v-model="user.truename"  clearable label="姓名" />
            <van-field v-model="user.username"  clearable label="昵称" />
            <van-field v-model="user.sex"  clearable label="性别"  />
            <!-- <van-field v-model="user."  clearable label="个性签名"  /> -->
        </van-cell-group>
        </div>
        <div class="user-item">
            <van-cell-group>
            <van-field v-model="user.identity"  clearable label="身份" />
            <van-field v-model="user.school"  clearable label="学校"  />
            <van-field v-model="user.major"  clearable label="学院"  />
            <van-field v-model="user.classes"  clearable label="班级"  />
        </van-cell-group>
        </div>
     </div>
   </div>
   <van-button plain type="primary" size="large" @click="save">保存</van-button>
  </div>
</template>

<script>
import NavBar from "@/components/NavbarReturn";
import UserItem from "@/components/user/userinfo-item";

export default {
  name: "",
  props: [""],
  data() {
    return {
      nav: {
        title: "编辑资料",
        naviconName2: "gc-iconmore"
      },
      // logoImg:require("../../assets/img/userinfo/logo.jpg"),
      user: {
        classes: "电子信息工程1班",
        email: "2200@qq.com",
        grade: "2013",
        id: 1,
        identity: "学生",
        major: "电子信息工程",
        pwd: "111",
        sex: "男",
        tel: "13850450000",
        truename: "李明",
        username: "lldd",
        img: require("../../assets/img/userinfo/logo.jpg"),
        school: "阳光学院"
      },
      username: "",
      password: ""
    };
  },

  components: {
    NavBar
  },

  computed: {},

  beforeMount() {},

  mounted() {
    this.seachuser();
  },

  methods: {
    // 上传图片
    uploadAvatar(avatar) {
      let file = avatar.target.files[0];
      let fr = new FileReader();
      fr.onload = () => {
        this.$refs.goodsImg.src=fr.result;
      };
      fr.readAsDataURL(file);
      let data = new FormData();
      data.append("file", file, file.name); //很重要 data.append("file", file);不成功
      data.append("data", 112);
      this.user.img = file.name;
      console.log(data.get("file"));
      console.log(this.user.img);
      return this.$http.post("/file", data, {
        headers: { "content-type": "multipart/form-data" }
      });
    },
    // 通过用户名查找个人资料
    seachuser() {
      var params = { truename: this.username };
      this.$http
        .get(
          "/username",
          { params: { truename: "李明" } },
          {
            emulateJSON: true
          }
        )
        .then(
          res => {
            this.user = res.data[0];
            console.log(res);
          }
        );
    },
    //修改个人资料
    updated() {
      var params = {
        img: this.user.img,
        username: this.user.username,
        sex: this.user.sex,
        identity: this.user.identity,
        major: this.user.major,
        classes: this.user.classes,
        truename:this.user.truename
      };
      this.$http
        .post("/update", params, {
          emulateJSON: true
        })
        .then(
          res => {
            this.$toast("保存成功");
          }
        );
    },
    save() {
      this.updated();
    }
  },

  watch: {}
};
</script>
<style>
.editor-user .van-field .van-cell__title {
  max-width: 70px !important;
}
</style>

<style lang='scss' scoped>
.content {
  text-align: left;
}
.uploader-img {
  background: #fff;
  padding: 10px 15px;
  font-size: 14px;
}
.uploader-img label {
  width: 70px;
  display: inline-block;
}
.user-item img {
  width: 1.2rem;
  height: 1.2rem;
}
.user-item {
  margin-bottom: 0.1rem;
}
.van-button--large {
  width: 90%;
  height: 50px;
  line-height: 48px;
}
</style>