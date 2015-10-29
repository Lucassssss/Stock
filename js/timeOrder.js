var url;
$(".J_getStockNum").on("click", function() {
	var num = $(this).parents("div").find("input").val();
	var url = "https://app.leverfun.com/timelyInfo/timelyOrderForm?stockCode=" + num;

	get_data(url);
	setInterval(function() {
		get_data(url);
	},2000); 
})


function get_data(url) {
	
	$.ajax({
		url: url,
		type: "GET",
      	dataType: "json",
		crossDomain: true,
		contentType: "application/json",
		success: function (data) {
			/*console.log(data)*/
			if (data.success == true) {
				console.log("get data success!")
				var dataSell = {
					sell1: data.data.sellPankou[0],
					sell2: data.data.sellPankou[1],
					sell3: data.data.sellPankou[2],
					sell4: data.data.sellPankou[3],
					sell5: data.data.sellPankou[4],
					sell6: data.data.sellPankou[5],
					sell7: data.data.sellPankou[6],
					sell8: data.data.sellPankou[7],
					sell9: data.data.sellPankou[8],
					sell10: data.data.sellPankou[9],
					buy1: data.data.buyPankou[0],
					buy2: data.data.buyPankou[1],
					buy3: data.data.buyPankou[2],
					buy4: data.data.buyPankou[3],
					buy5: data.data.buyPankou[4],
					buy6: data.data.buyPankou[5],
					buy7: data.data.buyPankou[6],
					buy8: data.data.buyPankou[7],
					buy9: data.data.buyPankou[8],
					buy10: data.data.buyPankou[9]
				}
				var sourceSell = $("#sellTimeOrderTmp").html();
				var templateSell = Handlebars.compile(sourceSell);
				var html = templateSell(dataSell);
				$(".time_order_main").html(html);
				
			} else {
				console.log("get data erro!");
			}
		},
		 error : function(httpReq,status,exception){
			console.log("erro");
		}
	});
}


$(".J_stockVal").blur(function() {
	var val = $(this).val();
	if(val == "") {
		$(".typeErro").text("请输入代码");
		$(".typeErro").show();
	} else{
		$(".typeErro").hide();
	}
})


