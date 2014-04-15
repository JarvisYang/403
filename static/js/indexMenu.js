$(function(){
	$(document).ready(function(){
		(function(){
			var hasOverMenu = false;
			var hasOverMenuTop = false;
			var hasOverMenuHome = false;
			var hasOverMenuHomeBottom = false;
			var hasOverMenuShowBox = false;
			var hasOverMenuShow = false;
			var hasUnderLineMove = false;
			var underlineMovetime = null;

			function menuShow(){
				if($("#menuShowBox").is(":animated")) {
					$("#menuShowBox").stop();
				};
				if($("#menuHomeBottom").is(":animated")){
					$("#menuHomeBottom").stop();
				};

				var v = 4.0;
				var momeBottomTime = (30 - $("#menuHomeBottom").width())/v;
				var showBoxTime = (970 - $("#menuShowBox").width())/v;
				$("#menuHomeBottom").animate({width:'30px'},momeBottomTime,function(){
					$("#menuShowBox").animate({width:'970px'},showBoxTime);
				});
			};

			function menuHide(){
				if(!hasMenuShow()){
					if($("#menuShowBox").is(":animated")) {
						$("#menuShowBox").stop();
					};
					if($("#menuHomeBottom").is(":animated")){
						$("#menuHomeBottom").stop();
					};
					bindMenuOver();

					var v = 4.0;
					var momeBottomTime = $("#menuHomeBottom").width()/v;
					var showBoxTime = $("#menuShowBox").width()/v;
					$("#menuShowBox").animate({width:'0px'},showBoxTime,function(){
						$("#menuHomeBottom").animate({width:'0px'},momeBottomTime,function(){
							$("#menuShowUnderline").width(0);
							$("#menuShowUnderline").css("right","970px");
							unbindMenu();
						});
					});
				};
			};

			function bindMenuOver(){
				$("#menu").bind("mouseover",function(){
					hasOverMenu = true;
					menuShow();
				});
				$("#menuTop").bind("mouseover",function(){
					hasOverMenu = true;
					menuShow();
				});
				$("#menuHomeBottom").bind("mouseover",function(){
					hasOverMenu = true;
					menuShow();
				});
				$("#menuShowBox").bind("mouseover",function(){
					hasOverMenu = true;
					menuShow();
				});
				$("#menuShow").bind("mouseover",function(){
					hasOverMenu = true;
					menuShow();
				});
			};

			function unbindMenu(){
				$("#menu").unbind("mouseover");
				$("#menuTop").unbind("mouseover");
				$("#menuHomeBottom").unbind("mouseover");
				$("#menuShowBox").unbind("mouseover");
				$("#menuShow").unbind("mouseover");
			};

			function hasMenuShow(){
				return hasOverMenu
					||hasOverMenuTop
					||hasOverMenuHome
					||hasOverMenuHomeBottom
					||hasOverMenuShowBox
					||hasOverMenuShow;
			};

			function underlineMove(obj){
				//if(canUnderlineMove){
				obj.mouseover(function(){
					if(hasUnderLineMove){
						clearInterval(underlineMovetime);
					};
					hasUnderLineMove = true;
					var OBJ_MARGIN = 34;
					var ADD_UNDERLINE_WIDTH = 10;
					var objWidth = obj.width();
					var objLeft = obj.position().left;
					var ULWidthNow = $("#menuShowUnderline").width();
					var ULRightNow = 970 - $("#menuShowUnderline").position().left - ULWidthNow;
					var ULRight = 970 - objLeft - objWidth - OBJ_MARGIN - ADD_UNDERLINE_WIDTH;
					var ULWidth = objWidth + 2*ADD_UNDERLINE_WIDTH;
					var T = 30.0;
					var eachWidth = (ULWidth - ULWidthNow)/T;
					var eachRight = (ULRight - ULRightNow)/T;
					var countTime = 1;
					underlineMovetime = setInterval(function(){
						if(countTime < T){
							$("#menuShowUnderline").width(ULWidthNow + eachWidth*countTime);
							$("#menuShowUnderline").css("right",ULRightNow + eachRight*countTime);
							countTime++;
						}
						else{
							hasUnderLineMove = false;
							$("#menuShowUnderline").css({"width":ULWidth + "px",
														"right":ULRight + "px"});
							clearInterval(underlineMovetime);
						}
					},5);
					/*
						if($("#menuShowUnderline").is(":animated")) {
							$("#menuShowUnderline").stop(true,false);
						};
						$("#menuShowUnderline").animate({right:ULRight,
														width:ULWidth},300);*/
					//$("#menuShowUnderline").css("right",objRight);
				});
				//};
			};

			window.bindunderlineMove = function(){
				$("#menuShow").children().each(function(){
					underlineMove($(this));
				});
			};

			$("#menuHome").mouseover(function(){
				hasOverMenuHome = true;
				menuShow();
			});

			$("#menu").mouseout(function(){
				hasOverMenu = false;
				menuHide()
			});
			$("#menuTop").mouseout(function(){
				hasOverMenuTop = false;
				menuHide()
			});
			$("#menuHomeBottom").mouseout(function(){
				hasOverMenuHomeBottom = false;
				menuHide()
			});
			$("#menuHome").mouseout(function(){
				hasOverMenuHome = false;
				menuHide()
			});
			$("#menuShowBox").mouseout(function(){
				hasOverMenuShowBox = false;
				menuHide()
			});
			$("#menuShow").mouseout(function(){
				hasOverMenuShowBox = false;
				menuHide()
			});
		})();
	});
});