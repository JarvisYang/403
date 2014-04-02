(function(){
	var ACMoveTime;

	function $(id){
	    return document.getElementById(id);
	};

	function getCss(obj){
	    return window.getComputedStyle(obj,false);
	};

	function hoverShow(obj,T){
		var moveTime;
		move();
		function move(){
			clearInterval(moveTime);
			const EACH_MOVE1 = 100.0/T;
			var topNow = parseFloat(getCss(obj).top)/parseFloat(getCss(obj).height)*100;
			var countTime = 1;
			obj.parentNode.onmouseover = function(){};
			moveTime = setInterval(function(){  
			    obj.style.top = (topNow + EACH_MOVE1*countTime) + "%"
			    if(parseFloat(getCss(obj).top) < 0){
			        ++countTime;
			    }
			    else{
			        obj.style.top = "0%";
			        clearInterval(moveTime);
			    }
			},8);

			obj.parentNode.onmouseout = function(){
				clearInterval(moveTime);
				obj.parentNode.onmouseout = function(){};
				obj.parentNode.onmouseover = function(){
					move()
				};

				var objHeight    = parseFloat(getCss(obj).height);
				var topNow       = parseFloat(getCss(obj).top)/objHeight*100;
				var countTime    = 1;
				const EACH_MOVE2 = 100.0/T;

				moveTime = setInterval(function(){  
				    obj.style.top = (topNow - EACH_MOVE2*countTime) + "%";
				    if((0 - parseFloat(getCss(obj).top)) < objHeight){
				        ++countTime;
				    }
				    else{
				        obj.style.top = "-100%";
				        clearInterval(moveTime);
				    }
				},8);
			};
		};
	};

	$("artCenter").onmouseover = function(){
		hoverShow($("artCenterHover"),25);
	};
	$("creativeStudio").onmouseover = function(){
		hoverShow($("creativeStudioHover"),25);
	};
	$("artCenter").onmouseover = function(){
		hoverShow($("artCenterHover"),25);
	};
	$("login").onmouseover = function(){
		hoverShow($("loginHover"),25);
	};
	$("douban").onmouseover = function(){
		hoverShow($("doubanHover"),25);
	};
	$("weibo").onmouseover = function(){
		hoverShow($("weiboHover"),25);
	};
	$("wechat").onmouseover = function(){
		hoverShow($("wechatHover"),25);
	};
	$("theaterZone").onmouseover = function(){
		hoverShow($("theaterZoneHover"),30);
	};
	$("artSpaceZone").onmouseover = function(){
		hoverShow($("artSpaceZoneHover"),30);
	};
	$("cafeZone").onmouseover = function(){
		hoverShow($("cafeZoneHover"),30);
	};
	$("workShopZone").onmouseover = function(){
		hoverShow($("workShopZoneHover"),30);
	};
	$("interaction").onmouseover = function(){
		hoverShow($("interactionHover"),20);
	};
	$("cooperate").onmouseover = function(){
		hoverShow($("cooperateHover"),20);
	};
	$("contectByMagazine").onmouseover = function(){
		hoverShow($("magazineHover"),10);
	};
	$("contectByPhone").onmouseover = function(){
		hoverShow($("phoneHover"),10);
	};
	$("childrenZone").onmouseover = function(){
		hoverShow($("childrenZoneHover"),25);
	};
	$("about403").onmouseover = function(){
		hoverShow($("about403Hover"),20);
	};
})()