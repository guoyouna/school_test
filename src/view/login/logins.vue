<template>
  <div class="login">
    <div class="login-main">
        <img class="yango_logo" src="../../assets/img/yangologo.png" alt="">
        <div class="login-input">
            <div class="login-inputs">
                <img src="../../assets/img/login/user.png" alt="用户名">
                <input type="text" v-model="username" placeholder="用户名: ">
            </div>
            <div class="login-inputs">
                <img src="../../assets/img/login/password.png" alt="密码">
                <input type="password" v-model="password" placeholder="密码: ">
            </div>
            <div class="flex-between login_pwd">
              <div class="remember-pwd">
                <label>
                      <input class="input_remember-pwd " type="checkbox" v-model="checked"/>记住密码
                      <span></span>
                </label>
              </div>
              <div>
                <router-link to="/logins/forget_pwd">忘记密码</router-link>
              </div>
            </div><div class="login_btn">
          <input type="button" value="登录" @click="doLogin">
          <input type="button" value="注册" @click="doReg">
        </div>
        </div>
        
    </div>
  </div>
</template>

<script>
import {mapActions,mapGetters,mapState} from "vuex";
import {saveToLocal,loadFromLocal,removeFromLocal} from '@/utlis/localStorage'
import { userSearch } from "@/api";
export default {
  name: "logins",
  props: [""],
  data() {
    return {
      username: "",
      password: "",
      checked: true
    };
  },

  components: {},

  computed: {
    ...mapGetters(["getUser"])
  },

  beforeMount() {},

  mounted() {
    this.getlocalStorage();
  },

  methods: {
    ...mapActions(["setToken", "setUser"]),
    seachuser() {
      var params = { truename: this.username };
      userSearch(this.username)
      // this.$http.get("/api/username", { params: { truename: this.username } },{emulateJSON: true })
        .then( res => {
            if (res.data.length > 0) {
              this.message();
            } else {
              this.$toast.fail("用户名不存在");
              this.username = "";
              this.password = "";
            }
            console.log(res);
          },
          error => {
            console.log(error);
          }
        );
    },
    message() {
      var params = { truename: this.username, pwd: this.password };
      this.$http.get("/login",
          { params: params },
          {
            emulateJSON: true
          }
        )
        .then(
          res => {
            if (res.data.length > 0) {
              this.$toast.success("登录成功");
              this.setUser({username: this.username,password: this.password});
              this.submitForm();
              this.$router.push({ path: "/" });
            } else {
              this.$toast.fail("密码错误");
            }
          },
          error => {
            console.log(error);
          }
        );
    },
    doLogin() {
      if (this.username != "" && this.password != "") {
        this.seachuser();
      } else if (this.username == "") {
        this.$toast.fail("请输入用户名");
      } else if (this.password == "") {
        this.$toast.fail("请输入密码");
      } else {
        this.$toast.fail("请输入用户名和密码");
      }
    },
    //去注册
    doReg() {
      this.$router.push({ path: "/choseidentity" });
    },
    // 当记住密码的checbox选中时，像localStorage里存入一下用户输入的用户名和密码
    submitForm() {
      if (this.checked == true) {
        // saveToLocal('token', res.token);
        saveToLocal('username', this.username);
        saveToLocal('password', this.password);
      } else {
        saveToLocal('username', '');
        saveToLocal('password', '');
      }
    },
    getlocalStorage: function() {
       this.username =loadFromLocal('username');
       this.password =loadFromLocal('password');
    }
  },

  watch: {
    
  }
};
</script>
<style scoped >
.login {
  width: 100%;
  height: 100%;
  background: rgba(0, 139, 251, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-main {
  background-color: #ffffff;
  width: 75%;
  height: 50%;
  border-radius: 0.2rem;
  font-size: 0.24rem;
}
.yango_logo {
  position: fixed;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(119, 191, 249, 0.5);
  width: 68%;
}
.login-inputs input {
  width: 90%;
  height: 0.78rem;
  padding: 0.1rem 0.2rem 0.1rem 0.7rem;
  box-sizing: border-box;
  margin: 0.1rem;
  border: 1px solid rgb(160, 160, 160);
  font-size: 0.24rem;
  border-radius: 5px;
}
.login-input {
  margin: 1rem 0.3rem;
}
.login-inputs {
  position: relative;
}
.login-inputs img {
  position: absolute;
  left: 0.3rem;
  top: 0.1rem;
  width: 0.5rem;
  height: 0.5rem;
  margin: 0.1rem;
}
/*隐藏掉我们模型的checkbox*/
.remember-pwd .input_remember-pwd {
  appearance: none;
  outline: none;
  display: none;
}
/*未选中时*/
.remember-pwd {
  position: relative;
}
.remember-pwd label {
  margin-left: 0.5rem;
}
.remember-pwd .input_remember-pwd + span {
  position: absolute;
  left: 0;
  top: 0;
  margin: 0.1rem;
  width: 0.3rem;
  height: 0.3rem;
  background-color: #fff;
  display: inline-block;
  border: 1px solid #29a1f7;
  border-radius: 50%;
  box-sizing: border-box;
}
/*选中checkbox时,修改背景图片的位置*/
.remember-pwd .input_remember-pwd:checked + span {
  background: url(../../assets/img/login/checked.png) no-repeat 100%;
  background-size: 100%;
}
.login_pwd {
  height: 0.5rem;
  line-height: 0.5rem;
  margin: 0.2rem;
}
.login_btn input[type="button"] {
  background-color: #409feb;
  width: 40%;
  margin: 0.3rem 0.2rem;
  padding: 0.2rem;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 0.28rem;
}
</style>