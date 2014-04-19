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
			var UDLWidthBefore = 0;
			var UDLLeftBefore = 0;

			function hasHoverMenu(){
				return hasOverMenu
					||hasOverMenuTop
					||hasOverMenuHome
					||hasOverMenuHomeBottom
					||hasOverMenuShowBox
					||hasOverMenuShow;
			};

			function underLineBack(){
				if(!hasHoverMenu()){
					if(hasUnderLineMove){
						clearInterval(underlineMovetime);
					};
					hasUnderLineMove = true;
					var ULWidthNow = $("#menuShowUnderline").width();
					var ULLeftNow = $("#menuShowUnderline").position().left;
					var T = 30.0;
					var eachWidth = (UDLWidthBefore - ULWidthNow)/T;
					var eachLeft = (UDLLeftBefore - ULLeftNow)/T;
					var countTime = 1;
					underlineMovetime = setInterval(function(){
						if(countTime < T){
							$("#menuShowUnderline").width(ULWidthNow + eachWidth*countTime);
							$("#menuShowUnderline").css("left",ULLeftNow + eachLeft*countTime);
							countTime++;
						}
						else{
							hasUnderLineMove = false;
							$("#menuShowUnderline").css({"width":UDLWidthBefore + "px",
														"left":UDLLeftBefore + "px"});
							clearInterval(underlineMovetime);
						}
					},5);
				}
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
					var ULLeftNow = $("#menuShowUnderline").position().left;
					var ULLeft = objLeft + OBJ_MARGIN - ADD_UNDERLINE_WIDTH;
					var ULWidth = objWidth + 2*ADD_UNDERLINE_WIDTH;
					var T = 30.0;
					var eachWidth = (ULWidth - ULWidthNow)/T;
					var eachLeft = (ULLeft - ULLeftNow)/T;
					var countTime = 1;
					underlineMovetime = setInterval(function(){
						if(countTime < T){
							$("#menuShowUnderline").width(ULWidthNow + eachWidth*countTime);
							$("#menuShowUnderline").css("left",ULLeftNow + eachLeft*countTime);
							countTime++;
						}
						else{
							hasUnderLineMove = false;
							$("#menuShowUnderline").css({"width":ULWidth + "px",
														"left":ULLeft + "px"});
							clearInterval(underlineMovetime);
						}
					},5);
				});
			};

			window.bindunderlineMove = function(){
				UDLWidthBefore = $("#menuShowUnderline").width();
				UDLLeftBefore = $("#menuShowUnderline").position().left;
				console.log(UDLWidthBefore,UDLLeftBefore)
				$("#menuShow").children().each(function(){
					underlineMove($(this));
				});
			};


			$("#menu").mouseout(function(){
				hasOverMenu = false;
				underLineBack();
			});
			$("#menu").mouseover(function(){
				hasOverMenu = true;
			});
			$("#menuHome").mouseover(function(){
				hasOverMenuHome = true;
			});
			$("#menuHome").mouseout(function(){
				hasOverMenuHome = false;
				underLineBack();
			});
			$("#menuTop").mouseout(function(){
				hasOverMenuTop = false;
				underLineBack();
			});
			$("#menuTop").mouseover(function(){
				hasOverMenuTop = true;
			});
			$("#menuHomeBottom").mouseout(function(){
				hasOverMenuHomeBottom = false;
				underLineBack();
			});
			$("#menuHomeBottom").mouseover(function(){
				hasOverMenuHomeBottom = true;
			});
			$("#menuShowBox").mouseout(function(){
				hasOverMenuShowBox = false;
				underLineBack();
			});
			$("#menuShowBox").mouseover(function(){
				hasOverMenuShowBox = true;
			});
			$("#menuShow").mouseout(function(){
				hasOverMenuShow = false;
				underLineBack();
			});
			$("#menuShow").mouseover(function(){
				hasOverMenuShow = true;
			});
		})();
	});
});