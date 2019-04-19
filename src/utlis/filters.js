import Vue from 'vue';


/*
 * @descript 时间戳转化成格式化的时间字符串
 * @param val {String|Number} 时间戳
 * @param str {String} 格式化参数 默认 yyyy-mm-dd hh:MM:ss
 */
Vue.filter('formatDate', (val, str)=>{
    var padDate=function(va){
        va=va<10?'0'+va:va;
        return va
    }
    var value=new Date(val);
    var year=value.getFullYear();
    var month=padDate(value.getMonth()+1);
    var day=padDate(value.getDate());
    var hour=padDate(value.getHours());
    var minutes=padDate(value.getMinutes());
    var seconds=padDate(value.getSeconds());
    return year+'-'+month+'-'+day+' '+hour+':'+minutes+':'+seconds;
})

