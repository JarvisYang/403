$(function(){
	$(document).ready(function(){
		(function(){
			function hoverBind(elementName){
				var overObj    = $("#" + elementName);
				var hoverObj   = overObj.parent().children().eq(0);
				var PObj       = null;
				var argLength  =  arguments.length;
				switch(argLength){//
					case 3:
						$("#" + arguments[2]).mouseover(function(){
							if(hoverObj.is(":animated")) {
								hoverObj.stop(false,true);
							};
							if(!-[1,]){//for IE8
								hoverObj.fadeTo(600,0.7);
							}
							else{
								hoverObj.fadeIn(400);
							};
						});
					case 2:
						$("#" + arguments[1]).mouseover(function(){
							if(hoverObj.is(":animated")) {
								hoverObj.stop(false,true);
							};
							if(!-[1,]){//for IE8
								hoverObj.fadeTo(600,0.7);
							}
							else{
								hoverObj.fadeIn(400);
							};
						});
						break;
				};

				overObj.mouseover(function(){
					hoverShow();
				});
				overObj.mouseout(function(){
					hoverHide();
				});

				function hoverHide(){
					if(hoverObj.is(":animated")) {
						hoverObj.stop(false,true);
					};
					if(!-[1,]){//for IE8
						hoverObj.fadeOut(600);
					}
					else{
						hoverObj.fadeOut(400);
					};
				};

				function hoverShow(){
					if(hoverObj.is(":animated")) {
						hoverObj.stop(false,true);
					};
					if(!-[1,]){//for IE8
						hoverObj.fadeTo(600,0.7);
					}
					else{
						hoverObj.fadeIn(400);
					};
				};

			};

			window.elementBind = function(){
				hoverBind("artCenterOver","artCenterHoverP");

				hoverBind("creativeStudioOver","creativeStudioHoverP");

				hoverBind("loginOver","loginP","regesterP");

				hoverBind("doubanOver");

				hoverBind("weiboOver");
				
				hoverBind("wechatOver");
				
				hoverBind("theaterZoneOver");
				
				hoverBind("artSpaceZoneOver");
				
				hoverBind("cafeZoneOver");
				
				hoverBind("workShopZoneOver");
				
				hoverBind("interactionOver","interactionP");
				
				hoverBind("cooperateOver","cooperateP");
				
				hoverBind("contectByMagazineOver","magazineHoverP");
				
				hoverBind("contectByPhoneOver","phoneHoverP");
				
				hoverBind("childrenZoneOver","childrenZoneHoverP");
				
				hoverBind("about403Over","about403HoverP");
			};
		})();
	});
});