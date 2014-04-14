$(function(){
	$(document).ready(function(){
		(function(){
			function hoverShow(elementName){
				$("#" + elementName).mouseover(function(){
					var hoverObj = $("#" + elementName).parent().children().eq(0);
					if(hoverObj.is(":animated")) {
						hoverObj.stop(false,true);
					};
					hoverObj.fadeIn(400);
				});
			};

			function hoverHide(elementName){
				$("#" + elementName).mouseout(function(){
					var hoverObj = $("#" + elementName).parent().children().eq(0);
					if(hoverObj.is(":animated")) {
						hoverObj.stop(false,true);
					};
					hoverObj.fadeOut(400);
				});
			};
			window.elementBind = function(){
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
			};
		})();
	});
});