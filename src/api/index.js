import Axios from 'axios'

//查找用户
export const userSearch = function(truename){
    // this.$http.get("/api/username", { params: { truename: this.username } },{emulateJSON: true })
    return Axios.get('/username',{
        params:{
            truename
        },
    })
}

//注册
export const Register = function(username,password,email='',tel=''){
    return Axios.get('/register',{
        params:{
            username,
            password,
            email,
            tel
        }
    })
}

//分类
export const GETCATCONTENT = function(id,_token){
    return Axios.get(`/cat/${id}`,{
        params:{
           _token
        }
    })
}

//获取商品详情
export const GETCATINFOCONTENT = function(id,_token){
    return Axios.get(`goods/${id}`,{
        params:{
           _token
        }
    })
}