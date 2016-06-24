# Stock
一个10档盘口的小工具
不敢独享，分享出来。

###Update 2015-11-1###

用Nodejs抓取原接口数据，然后用express框架再撸出去，也就是说先抓数据，拿到数据后自己再写一个接口自用，解决了跨域问题。理论上这种方法可以拿到任何自己想要的数据接口。

1、在命令行中跳至 /get 目录，node server.js 运行server.js;

2、在浏览器中访问localhost:8080/api?id=股票代码；

3、在console中可以看到数据已经抓取出来，浏览器中也能看到api抓取的数据，可以用get请求到。

###Update 2015-10-30###

用Node-webkit打包了桌面端可运行的客户端程序

我只打包了win64的程序，使用Node-webkit可以打包全平台运行的程序，具体方式请查看这里 http://nwjs.io/

###Update 2015-10-29###

![](http://img-storage.qiniudn.com/15-10-29/48114395.jpg )


![](https://ooo.0o0.ooo/2015/10/29/5631c3735d7ff.png )

请使用chrome并在chrome快捷方式（可以专门专门建个用）属性 → 目标 “"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"” 后面添加  --disable-web-security （有空格）
这么设置是为了能够跨域，我是暂时没有别的办法。

然后随便起个服务器环境。

然后就可以看10档盘口了

###Update 2016-06-24###
由于一些问题，这个小工具将不再维护。

