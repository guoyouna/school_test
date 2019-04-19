<template>
  <div class="reg">
   <div class="content">
     <van-cell-group>
        <van-field
            v-model="username"
            clearable
            label="用户名"
            placeholder="请输入用户名"
            @click-right-icon="$toast('question')"
        />

        <van-field
            v-model="password"
            clearable
            type="password"
            label="密码"
            placeholder="请输入密码"
            
        />
        <van-field
            v-model="password2"
            clearable
            type="password"
            label="再次输入密码"
            placeholder="请再次输入密码"
            
        />
     </van-cell-group>
     <span class="ifpwd" v-if="password2!='' && password!=password2">两次密码不一致</span>
     <div class="btn_pwd">
      <button class="btn_save" @click="btn_save">保存</button>
      <button class="btn_cancel" @click="btn_cancel">取消</button>
     </div>
      
    </div>
  </div>
</template>

<script>
  export default {
    name:'',
    props:[''],
    data () {
      return {
          username:"",
          password:"",
          password2:"",
          navnar:{
              title:"忘记密码",
          }
      };
    },
    methods: {
        updated() {
             var params = {
                 username:this.username,
                 pwd:this.password
             };
            this.$http.post('/updatepwd', params, {
            emulateJSON: true
            }).then(res=>{
                if(res.data.affectedRows!=0){
                    this.$toast.success('修改成功');
                    this.$router.push({path: '/logins'})
                }
                else{
                    this.$toast.fail('用户名不存在');
                }
            console.log(res)
            }, error=> {
            console.log(error)
            })
        },
        btn_save(){
            if(this.username != '' && this.password != ''){
                 this.updated();
            }
            else{
                this.$toast('请输入用户名或密码');
            }

        },
         btn_cancel(){
             this.username = '';
             this.password = '';
             this.password2 = '';
        }
    },

    watch: {}

  }

</script>
<style lang='scss' scoped>
.reg{
    width: 100%;
    height: 100%;
    background: #fff;
}
.content{
  padding-bottom: 0
}
.btn_pwd button{
    width: 45%;
    background-color: #ddd;
    border: none;
    height: 0.88rem;
    color: #fff;
   font-size: 0.28rem;
    margin: 0.1rem;
    margin-top: 0.5rem;
}
.btn_pwd button:hover{
    background-color: #1989fa;
}
.van-cell{
    height: 0.88rem;
    line-height: 0.5rem;
    text-align: left;
    margin-bottom: 0.1rem;
}
.van-cell-group {
    padding-top: 0.5rem;
}
span.ifpwd {
    color: red;
    font-size: 13px;
}

</style>