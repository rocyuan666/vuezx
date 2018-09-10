//注:此代码只能作为文件服务器.
//当静态网页服务器时,在访问的资源不是html时,需要返回正确的content-type,如css文件返回 Content-Type: text/css
//否则,浏览器不能正确识别资源,不能根据content-type,做出正确的处理
//使用node.js写一个简单的本地服务器
var http = require('http');
var fs = require('fs');//引入文件读取模块

var documentRoot = 'D:/web/nserver';//需要访问的本地文件的存放目录

var server = http.createServer(function (req, res) {

    var url = req.url;
    //客户端输入的url，例如如果输入
    // http://localhost:8080/index.html
    //那么这里的url == /index.html 

    //以下三行代码可已配置默认访问页面为index.html
    if (url == '/') {
        url = '/index.html';
    }

    var file = documentRoot + url;
    console.log(url);

    //参数1:要读取的文件路径;
    //参数2:回调函数,读取失败的信息在err中,err为空表示没有错误.data为读取到的文件数据
    fs.readFile(file, function (err, data) {
         if (err) {
            res.writeHeader(404, {'content-type': 'text/html;charset="utf-8"'});
            res.write('<h1>404错误</h1><p>你要找的页面不存在</p>');
            res.end();

        } else {
            res.writeHeader(200, {'content-type': 'text/html;charset="utf-8"'});
            res.write(data);
            res.end();}
    });
}).listen(8080);// 此处的8080是监听的端口

 console.log('服务器开启成功');
