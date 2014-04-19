$(function(){
	$(document).ready(function(){
		(function(){
			var companyListLoop = 0;
			var advMoveTime = null;
			var advToLeftTime = null;
			var advToRightTime = null;
			var companyShowWidth = 0;
			var turnAroundLeft = 0;
			var companyList = new Array(
					{
						url:"../static/img/comList1.jpg"
					},
					{
						url:"../static/img/comList2.jpg"
					},
					{
						url:"../static/img/comList3.jpg"
					},
					{
						url:"../static/img/comList4.jpg"
					},
					{
						url:"../static/img/comList5.jpg"
					},
					{
						url:"../static/img/comList6.jpg"
					},
					{
						url:"../static/img/comList7.png"
					}
				);

			window.addCompanyList = function(){
				appendLength();
				function appendLength(){
					if($("#companyShow").width() < $("#companyShowBox").width()){
						$.each(companyList,function(index){
							var newNode = document.createElement("img");
							newNode.className = "eachCompany";
							$(newNode).attr("src",this.url)
							newNode.onload = function(){
								var width  = $(this).width();
								var height = $(this).height();
								$(this).height(60.0);
								$(this).width(60.0/height*width);
								var appendCompanyShowWidth = $("#companyShow").width() + $(this).width() + 24;
								$(this).css("display","inline-block");

								$("#companyShow").width(appendCompanyShowWidth);

								if(index === (companyList.length-1)){
									if(appendCompanyShowWidth < $("#companyShowBox").width()){
										appendLength();
									}
									else{
										companyShowWidth = $("#companyShow").width()*2;
										turnAroundLeft = 0 - $("#companyShow").width();
										$("#companyShow").width(companyShowWidth);
										$("#companyShow").html($("#companyShow").html() + $("#companyShow").html());
										advMove();
									};
								}
							};
							$("#companyShow").append(newNode);
						});
					};
				};

			};

			function advMove(){
				advMoveTime = setInterval(function(){

					var eachMove = 1;
					var companyShowLeftNow = $("#companyShow").position().left;
					var changeLeft = companyShowLeftNow - eachMove;
					if(changeLeft > turnAroundLeft){
						$("#companyShow").css("left",changeLeft + "px")
					}
					else{
						$("#companyShow").css("left",0)
					};

				},50);
			};

			$("#advShow").mouseenter(function(){
				clearInterval(advMoveTime);
			});

			$("#advShow").mouseleave(function(){
				advMove();
			});

			$("#toLeft").click(function(){
				clearInterval(advToLeftTime);
				var countTime = 1;
				var T = 100;
				var a1 = 500/(T*T);
				var a2 = 1000/(3*T*T);
				var t1 = 0.4*T;//加速时间
				var t2 = 0.6*T;//减速时间
				var v  = 200/T;
				var eachMove = 1;
				advToLeftTime = setInterval(function(){
					if(countTime <= t1){
					    eachMove = a1*countTime;
					}
					else{
						eachMove = v - a2*(countTime - t1)
					};
					var companyShowLeftNow = $("#companyShow").position().left;
					var changeLeft = companyShowLeftNow - eachMove;
					if(changeLeft > turnAroundLeft){
						$("#companyShow").css("left",changeLeft + "px")
					}
					else{
						$("#companyShow").css("left",0)
					};

					if(countTime < T){
						countTime++;
					}
					else{
						clearInterval(advToLeftTime);
					};
				},2);
			});

			$("#toRight").click(function(){
				clearInterval(advToRightTime);
				var countTime = 1;
				var T = 100;
				var a1 = 500/(T*T);
				var a2 = 1000/(3*T*T);
				var t1 = 0.4*T;//加速时间
				var t2 = 0.6*T;//减速时间
				var v  = 200/T;
				var eachMove = 1;
				advToRightTime = setInterval(function(){
					if(countTime <= t1){
					    eachMove = a1*countTime;
					}
					else{
						eachMove = v - a2*(countTime - t1)
					};
					var companyShowLeftNow = $("#companyShow").position().left;
					var changeLeft = companyShowLeftNow + eachMove;
					if(changeLeft < 0){
						$("#companyShow").css("left",changeLeft + "px")
					}
					else{
						$("#companyShow").css("left",turnAroundLeft)
					};

					if(countTime < T){
						countTime++;
					}
					else{
						clearInterval(advToLeftTime);
					};
				},2);
			});
		})();
	});
});