<template>
  <div class="reg_id">
      <div class="reg-steps flex-row">
          <div class="reg-steps-item steps_item_choose">1基本信息</div>
          <div class="reg-steps-item steps_item_2">2身份验证</div>
          <div class="reg-steps-item steps_item_3">3完成注册</div>
      </div>
      <div class="reg-main">
          <van-cell-group>
            <van-field
                v-model="user.name"
                clearable
                label="姓名" 
                icon="question-o"
                placeholder="请输入真实姓名"
                @click-icon="$toast('question')"
            />
            <van-field
                v-model="user.telphone"
                clearable                
                type="number"
                label="手机"
                placeholder="请输入手机号"
            />
             <van-field
                clearable
                v-model="user.email"
                type="email"
                label="邮箱"
                placeholder="请输入邮箱"
            />
            <div class="choose-sex box">
              <label for="">性别</label>
              <van-radio-group v-model="user.sex">
              <van-radio name="男">男</van-radio>
              <van-radio name="女">女</van-radio>
            </van-radio-group>
            </div>
            
            </van-cell-group>
            <button class="btn_next" @click="btn_next">下一步</button>
            <p>若您已有账号，去
                <router-link to="/logins">登录</router-link>
           </p>
      </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: [""],
  data() {
    return {
      user: {
        name: "",
        telphone: "",
        email: "",
        identity:'',
        sex: "女"
      },
      isNull: false,
      navnar: {
        title: "选择身份"
      }
    };
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    message() {
      if (  this.user.name == "" || this.user.telphone == "" || this.user.email == "" ) {
        this.isNull = true;
      }
    },
    seachuser() {
      var params = { truename: this.user.name };
      this.$http .get( "/username", { params }, {  emulateJSON: true } )
        .then( res => {
            if (res.data.length > 0) {
              this.$toast("用户名已存在");
            } else {
              this.$router.push({
                path: "/register/reg_id2",
                query: { user: this.user }
              });
            }
            console.log(res);
          },
          error => {
            console.log(error);
          }
        );
    },
    btn_next() {
      this.message();
      if (this.isNull) {
        this.$toast("用户名为空");
      } else {
        this.seachuser();
        // this.$router.push({ path: "/register/reg_id2" });
      }
    }
  },

  watch: {}
};
</script>
<style lang='' scoped>
.reg_id {
  width: 100%;
  height: 100%;
  background-color: #fff;
  font-size: 0.32rem;
}
.reg-steps {
  height: 0.88rem;
  font-size: 0.28rem;
  line-height: 0.88rem;
}
.reg-steps-item {
  height: 0.88rem;
  width: 34%;
}
.steps_item_choose {
  background-color: #349ff1;
  color: #fff;
}
.steps_item_2 {
  background: url(../../assets/img/login/step_bg.png) no-repeat;
  background-size: 100% 100%;
}
.steps_item_3 {
  background: url(../../assets/img/login/step_bg3.png) no-repeat;
  background-size: 100% 100%;
}
.btn_next {
  width: 80%;
  background-color: #ddd;
  border: none;
  height: 0.88rem;
  color: #fff;
  margin: 0.1rem;
  margin-top: 0.5rem;
}
.van-cell {
  height: 0.88rem;
  line-height: 0.5rem;
}
.van-cell-group {
  padding-top: 0.5rem;
}
.btn_next:hover {
  background-color: #1989fa;
}
.choose-sex {
  padding: 10px 15px;
}
.choose-sex label {
  display: inline-block;
  width: 90px;
  max-width: 90px;
}
.van-radio-group {
  display: flex;
}
.van-radio {
  margin: 0 0.2rem;
}
</style>