var express    = require('express');        // call express
var app        = express();                 // define our app using express
var server     = require("./curl");

var port = process.env.PORT || 8080;        // 设置端口
var router = express.Router();              // 设置请求路由
router.get('/', function(req, res) {
	
	var url = "https://app.leverfun.com/timelyInfo/timelyOrderForm?stockCode=" + req.query.id;
	server.download(url, function (data) {
		if (data) {
			console.log(data);
			
			res.json({ message: data }); 

			console.log("done");
		} else {
			console.log("error");
		}
	});
});
app.use('/api', router);  //路径
app.listen(port);
console.log('Magic happens on port ' + port);



