/*
var Xray = require('x-ray');
var x = Xray();

x('https://app.leverfun.com/timelyInfo/timelyOrderForm?stockCode=002561', 'html', {
	content: 'body'}
)
  .paginate('')
  .limit(3)
  .write('results.json')
*/

var cheerio = require("cheerio");
var fs = require("fs");
var server = require("./curl");

var url = "https://app.leverfun.com/timelyInfo/timelyOrderForm?stockCode=002561"

server.download(url, function (data) {
	if (data) {
		console.log(data);

		fs.open("results.json", "w", 0644, function (e, fd) {
			if (e) throw e;
			fs.write(fd, data, 0, 'utf8', function (e) {
				if (e) throw e;
				fs.closeSync(fd);
			})
		});

		/*var $ = cheerio.load(data);
		$("a.downbtn").each(function (i, e) {
			console.log($(e).attr("href"));
		});*/
		
		return data;
		
		console.log("done");
	} else {
		console.log("error");
	}
});