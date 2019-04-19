<template>
  <div class="reg_id">
      <div class="reg-steps flex-row">
          <div class="reg-steps-item steps_item_1">1基本信息</div>
          <div class="reg-steps-item steps_item_choose">2身份验证</div>
          <div class="reg-steps-item steps_item_3">3完成注册</div>
      </div>
      <div class="reg-main">
          <van-cell-group>
            <van-field
                v-model="user.username"
                clearable
                label="用户名" 
                icon="question-o"
                placeholder="请输入用户名"
                @click-icon="$toast('question')"
            />
            <van-field
                v-model="user.password"
                clearable
                type="password"
                label="密码"
                placeholder="至少6位或以上的密码"
            />
            <div class="again_pwd">
              <van-field
                v-model="user.password2"
                clearable
                type="password"
                label="确定密码"
                placeholder="请再次输入您的密码"
            /> <span class="ifpwd" v-if="user.password2!='' && user.password!=user.password2">两次密码不一致</span>
            </div>
             
           
            
            </van-cell-group>
            <van-cell-group>
                <van-field @click="isShows"
                    v-model="user.grade"
                    clearable
                    type="text"
                    label="入学年时间"
                    placeholder="请输入入学年时间"
                />
                <van-field
                    v-model="user.major"
                    clearable
                    type="text"
                    label="专业"
                    placeholder="请输入专业"
                />
                <van-field
                    v-model="user.classmate"
                    clearable
                    type="text"
                    label="同班同学"
                    placeholder="请输入一位同班同学"
                />
                <van-field
                    v-model="user.messages"
                    clearable
                    label="留言"
                    type="textarea"
                    placeholder="请输入留言"
                    rows="1"
                    autosize
                />
            </van-cell-group>
            <button class="btn_next" @click="isSure">提交</button>
             
            <p>返回上一步</p>
            <div v-if="isShow" class="pos-bt">
              <van-datetime-picker
                  v-model="currentDate"
                  type="year-month"
                  :min-date="minDate"
                  :formatter="formatter"
                  @confirm="confirm"
                  @cancel="cancel"
                  
                />
                
            </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: [""],
  data() {
    return {
      user:{
        username: "",
        password: "",
        password2: "",
        email: "",
        grade: '',
        major: "",
        classmate: "",
        messages:"",
      },
      navnar: {
        title: "选择身份"
      },
      currentDate: new Date(),
       minDate: new Date(2000, 10,1),
      maxDate: new Date(2019, 10,1),
      isShow:false,
    };
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {
  },

  methods: {
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      } else if (type === 'month') {
        return `${value}月`
      }
      return value;
    },
    confirm(){
      this.user.grade=this.currentDate.getUTCFullYear();
      this.isShow = false;
    },
    cancel(){
      this.isShow = false;
    },
    isShows(){
      this.isShow = !this.isShow;
    },
    isSure(){
      if(this.user.username== "" ||
        this.user.password== "" ||
        this.user.password2== "" ||
        this.user.grade=='' ||
        this.user.major== "" ||
        this.user.classmate== "" ||
        this.user.messages==""){
          this.$toast("存在空值，请全部输入")
      }else{
        this.tellUs()
      }
    },
    reg(){
      var params = {
        truename:this.$route.query.user.name,
        tel:this.$route.query.user.telphone,
        email:this.$route.query.user.email,
        truename:this.$route.query.user.name,
        username:this.user.username,
        pwd:this.user.password,
        grade:this.user.grade.toString(),
        major:this.user.major
        };
        console.log(params);

        this.$http.post('/adduser', params, {
        emulateJSON: true
        }).then(res=>{
          this.$toast.success('成功文案');
            this.$router.push({path: '/register/reg_success'})
          console.log(res)
        }, error=> {
          this.$toast.fail('失败文案');
          console.log(error)
        })
    },
    tellUs() {
      this.$dialog.alert
        .confirm({
          title: "确定您的学籍信息",
          message:'<p>入学年时间：' + this.user.grade + ' </p><p>专业：' + this.user.major + ' </p><p>同班同学：'+ this.user.classmate +'</p>'
          
        })
        .then((res) => {
            this.reg();
        })
        .catch(() => {
            console.log(111)
        });
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
  background: url(../../assets/img/login/step_bg2.png) no-repeat;
  background-size: 100% 100%;
  color: #fff;
}
.steps_item_1 {
  background-color: #fafafa;
  /* background: url(../../assets/img/login/step_bg3.png) no-repeat; */
  background-size: 100% 100%;
}
.steps_item_3 {
  background: url(../../assets/img/login/step_bg.png) no-repeat;
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
.btn_next:hover{
    background-color: #1989fa;
}
.van-cell {
  height: 0.88rem;
  line-height: 0.5rem;
  text-align: left;
}
.van-cell-group {
  padding-top: 0.5rem;
}
.again_pwd{
  position: relative;
}
span.ifpwd {
    color: red;
    position: absolute;
    /* left: 0; */
    right: 0.2rem;
    top: 0.3rem;
    font-size: 13px;
}
.pos-bt{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>