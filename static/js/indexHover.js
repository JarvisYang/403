$(function(){
	$(document).ready(function(){
/*
		function hoverShow(elementName,T){
			console.log(3)
			$("#" + elementName).mouseover(function(){
				var hoverObj = $("#" + elementName).parent().children().eq(0);
				if(hoverObj.is(":animated")) {
					hoverObj.stop();
				};
				var hoverObjHeight = hoverObj.height();
				var moveV = hoverObjHeight/T;
				var moveTime = Math.abs(parseFloat(hoverObj.css("top")))/moveV;
				hoverObj.animate({top:"0px"},moveTime);
			});
		};

		function hoverHide(elementName,T){
			console.log(4)
			$("#" + elementName).mouseout(function(){
				var hoverObj = $("#" + elementName).parent().children().eq(0);
				if(hoverObj.is(":animated")) {
					hoverObj.stop();
				};
				var hoverObjHeight = hoverObj.height();
				var moveV = hoverObjHeight/T;
				var moveTime = Math.abs(hoverObjHeight + parseFloat(hoverObj.css("top")))/moveV;
				hoverObj.animate({top:"-" + hoverObjHeight + "px"},moveTime);
			});
		};
*/
		function hoverShow(elementName){
			console.log(3)
			$("#" + elementName).mouseover(function(){
				var hoverObj = $("#" + elementName).parent().children().eq(0);
				if(hoverObj.is(":animated")) {
					hoverObj.stop();
				};
				if(!-[1,]){
					hoverObj.fadeTo(600,0.7);
				}
				else{
					hoverObj.fadeIn(400);
				};
			});
		};

		function hoverHide(elementName){
			console.log(4)
			$("#" + elementName).mouseout(function(){
				var hoverObj = $("#" + elementName).parent().children().eq(0);
				if(hoverObj.is(":animated")) {
					hoverObj.stop();
				};
				if(!-[1,]){
					hoverObj.fadeOut(600);
				}
				else{
					hoverObj.fadeOut(400);
				};
			});
		};
		function elementBind(){
			hoverShow("artCenterOver");
			hoverHide("artCenterOver");

			hoverShow("creativeStudioOver");
			hoverHide("creativeStudioOver");

			hoverShow("loginOver");
			hoverHide("loginOver");

			hoverShow("doubanOver");
			hoverHide("doubanOver");

			hoverShow("weiboOver");
			hoverHide("weiboOver");
			
			hoverShow("wechatOver");
			hoverHide("wechatOver");
			
			hoverShow("theaterZoneOver");
			hoverHide("theaterZoneOver");
			
			hoverShow("artSpaceZoneOver");
			hoverHide("artSpaceZoneOver");
			
			hoverShow("cafeZoneOver");
			hoverHide("cafeZoneOver");
			
			hoverShow("workShopZoneOver");
			hoverHide("workShopZoneOver");
			
			hoverShow("interactionOver");
			hoverHide("interactionOver");
			
			hoverShow("cooperateOver");
			hoverHide("cooperateOver");
			
			hoverShow("contectByMagazineOver");
			hoverHide("contectByMagazineOver");
			
			hoverShow("contectByPhoneOver");
			hoverHide("contectByPhoneOver");
			
			hoverShow("childrenZoneOver");
			hoverHide("childrenZoneOver");
			
			hoverShow("about403Over");
			hoverHide("about403Over");

			console.log(2);
		};


		elementBind();

	});
});