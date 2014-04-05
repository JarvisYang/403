(function(){
	var ACMoveTime;
	var hasOverMenu = false;
	var hasOverMenuTop = false;
	var hasOverMenuHome = false;
	var hasOverMenuHomeBottom = false;
	var hasOverMenuShowBox = false;
	var hasOverMenuShow = false;
	var canUnderlineMove = false;
	var canHDRightMove = true;
	var HDRightMoveTime = null;

	function $(id){
	    return document.getElementById(id);
	};

	function hoverShow(obj,T){
		var moveTime;
		var hasObjOver = true;
		var hasObjParentOver = false;
		move();
		function move(){
			clearInterval(moveTime);
			var EACH_MOVE1 = 100.0/T;
			var topNow = parseFloat(_(obj).getCss("top"))/parseFloat(_(obj).getCss("height"))*100;
			var countTime = 1;
			obj.parentNode.onmouseover = function(){};
			moveTime = setInterval(function(){  
			    obj.style.top = (topNow + EACH_MOVE1*countTime) + "%"
			    if(parseFloat(_(obj).getCss("top")) < 0){
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

				var objHeight    = parseFloat(_(obj).getCss("height"));
				var topNow       = parseFloat(_(obj).getCss("top"))/objHeight*100;
				var countTime    = 1;
				var EACH_MOVE2 = 100.0/T;

				moveTime = setInterval(function(){  
				    obj.style.top = (topNow - EACH_MOVE2*countTime) + "%";
				    if((0 - parseFloat(_(obj).getCss("top"))) < objHeight){
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

	function hasMenuShow(){
		return hasOverMenu
			||hasOverMenuTop
			||hasOverMenuHome
			||hasOverMenuHomeBottom
			||hasOverMenuShowBox
			||hasOverMenuShow;
	};

	function menuShow(){
		setTimeout(function(){
			$("menu").onmouseover = function(){
				menuShow()
			};
			var obj1      = $("menuHomeBottom");
			var obj2      = $("menuShow");
			var obj3      = $("menuShowBox");
			var objWidth1 = parseFloat(_(obj1).getCss("width"));
			var objWidth2 = parseFloat(_(obj2).getCss("width"));
			var objWidth3  = parseFloat(_(obj3).getCss("width"));
			var countTime = 1;
			var extendLength;
			var T = 30.0;
			var EACH_MOVE  = objWidth2/T;

			var moveTime1 = setInterval(function(){  
			    if(!hasMenuShow()){
			    	clearInterval(moveTime1);
			    }
			    else{
			        var extendLength = objWidth1 + EACH_MOVE*countTime;
			        obj1.style.width  = extendLength + "px";
			        if(extendLength < 30){
			            ++countTime;
			        }
			        else{
			        	countTime = 1;
			            obj1.style.width = "30px";
			            var moveTime2 = setInterval(function(){  
			    			var extendLength     = (objWidth3 + EACH_MOVE*countTime);
			    			obj3.style.width = (extendLength) + "px";
			                if(!hasMenuShow()){
			                	clearInterval(moveTime1);
			                	clearInterval(moveTime2);
			                };
			                if(extendLength < objWidth2){
			                    ++countTime;
			                }
			                else{
			                	canUnderlineMove = true;
			                    obj3.style.width = objWidth2 + "px";
			                    clearInterval(moveTime2);
			                };
			            },8);
			            clearInterval(moveTime1);
			        };
			    };
			},8);
		},30);
	};

	function underlineMove(obj){
		if(canUnderlineMove){
			var OBJ_MARGIN = 10;
			var objWidth = parseFloat(_(obj).getCss("width"));
			var objRight = 970 - obj.offsetLeft - objWidth - OBJ_MARGIN;
			console.log(objRight)
			$("menuShowUnderline").style.width = (objWidth + OBJ_MARGIN*2) + "px";
			$("menuShowUnderline").style.right = objRight + "px";
		};
	};

	function hdRightMove(){
		var shopShowNum = 0;
		var shopObj = $("hdRight").children;
		setTimeout(function(){
			move();
		},10000);
		function move(){
			var T = 15;
			var eachMove = 100.0/T;_(shopObj[shopShowNum]).getCss("width")
			var countTime = 1;
			var objWidth = parseFloat(_(shopObj[shopShowNum]).getCss("width"));
			HDRightMoveTime = setInterval(function(){
				if(eachMove > 0){
					var changeWidth = objWidth - countTime*eachMove;
					if(changeWidth > 0){
						countTime++;
						shopObj[shopShowNum].style.width = changeWidth + "px";
					}
					else{
						countTime = 1;
						shopObj[shopShowNum].style.width = "0px";
						eachMove *= -1;
						shopShowNum = shopShowNum?0:1;
					};
				}
				else{
					var changeWidth = 0 - countTime*eachMove;
					if(changeWidth < 120){
						countTime++;
						shopObj[shopShowNum].style.width = changeWidth + "px";
					}
					else{
						countTime = 1;
						shopObj[shopShowNum].style.width = "120px";
						eachMove *= -1;
						clearInterval(HDRightMoveTime);
						
						setTimeout(function(){
							move();
						},10000);
					};
				};
				
			},8);
		};
	};

	function eventBind(){
		var menuShowChild = $("menuShow").children;
		var menuShowChildLength = menuShowChild.length;
		var i = 0;
		var blindTime = setInterval(function(){
			if(i < menuShowChildLength){
				menuShowChild[i].onmouseover = function(){
					underlineMove(this);
				};
				i++;
			}
			else{
				clearInterval(blindTime);
			};
		},0);
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
	$("menuHome").onmouseover = function(){
		hasOverMenuHome = true;
		menuShow();
	};

	$("menu").onmouseout = function(){
		hasOverMenu = false;
		setTimeout(function(){
			if(!hasMenuShow()){
				var obj1 = $("menuHomeBottom");
				var obj2 = $("menuShow");
				var obj3 = $("menuShowBox");
				var objWidth1 = parseFloat(_(obj1).getCss("width"));
				var objWidth2 = parseFloat(_(obj2).getCss("width"));
				var objWidth3 = parseFloat(_(obj3).getCss("width"));
				var countTime    = 1;
				var extendLength;
				var T = 30.0;
				var EACH_MOVE  = objWidth2/T;

				var moveTime1 = setInterval(function(){  
				    var extendLength = (objWidth3 - EACH_MOVE*countTime);
				    obj3.style.width = extendLength + "px";
				    if(hasMenuShow()){
				    	clearInterval(moveTime1);
				    }
				    else{
				    	if(extendLength > 0){
				    	    ++countTime;
				    	}
				    	else{
				    	    obj3.style.width = "0px";

				    		countTime = 1;
				    		var moveTime2 = setInterval(function(){
				    			if(hasMenuShow()){
				    				clearInterval(moveTime1);
				    				clearInterval(moveTime2);
				    			};
				    			var extendLength = objWidth1 - EACH_MOVE*countTime;
				    			obj1.style.width  = extendLength + "px";
				    			if(extendLength > 0){
				    			    ++countTime;
				    			}
				    			else{
				    				canUnderlineMove = false;
				    				$("menuShowUnderline").style.width = "0px";
				    				$("menuShowUnderline").style.right = "0px";

				    				$("menu").onmouseover = function(){};
				    				obj1.style.width = "0px";
				    				clearInterval(moveTime2);
				    			}
				    		},8);

				    	    clearInterval(moveTime1);
				    	};
				    };
				},8);
			};
		},30);		
	};

	$("menu").onmouseover = function(){
		hasOverMenu = true;
	};
	$("menuTop").onmouseover = function(){
		hasOverMenuTop = true;
	};
	$("menuHomeBottom").onmouseover = function(){
		hasOverMenuHomeBottom = true;
	};
	$("menuShowBox").onmouseover = function(){
		hasOverMenuShowBox = true;
	};
	$("menuShow").onmouseover = function(){
		hasOverMenuShow = true;
	};

	$("menuTop").onmouseout = function(){
		hasOverMenuTop = false;
	};
	$("menuHome").onmouseout = function(){
		hasOverMenuHome = false;
	};
	$("menuHomeBottom").onmouseout = function(){
		hasOverMenuHomeBottom = false;
	};
	$("menuShowBox").onmouseout = function(){
		hasOverMenuShowBox = false;
	};
	$("menuShow").onmouseout = function(){
		hasOverMenuShow = false;
	};

	window.onload = function(){
		eventBind();
		hdRightMove();
	};
})()