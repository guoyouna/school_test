var http = require('http');
var mysql = require('mysql');
var config = require('./defaultConfig');
// 创建线程池
var connection = mysql.createConnection({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  port: config.database.PORT
});

//开始你的mysql连接
connection.connect();

var server = http.createServer(function (req, res) {
    //如果你发一个GET到http://127.0.0.1:9000/test
    var url_info = require('url').parse(req.url, true);
    //检查是不是给/test的request
    if(url_info.pathname === '/test'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        connection.query('SELECT * FROM user',function(err,rows,fields){
            //处理你的结果
            // res.end(rows.constructor);
            // 输出结果
            res.end(JSON.stringify(rows));
            res.end(rows.join);
        });
    }
    //这个是用来回复上面那个post的，显示post的数据以表示成功了。你要是有别的目标，自然不需要这一段。
    else{
        req.pipe(res);
    }
});
server.listen(9000, '127.0.0.1');
//在server关闭的时候也关闭mysql连接
server.on('close',function(){
    connection.end();
});
console.log('listening on port  9000');