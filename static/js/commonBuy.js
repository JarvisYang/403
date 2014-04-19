$(function(){
	$(document).ready(function(){
		(function(){

			var hdRightMoveTime = null;
			window.hdRightMove = function(){
				var shopShowNum = 0;
				var widthV = 1.0;
				var leftV = widthV/2.0;
				move();
				function move(){
					hdRightMoveTime = setTimeout(function(){
						var moveTime = 120.0/(widthV);
						$("#hdRightShop" + shopShowNum).animate({width:'0px',left:"60px"},moveTime,function(){
							shopShowNum = shopShowNum?0:1;
							$("#hdRightShop" + shopShowNum).animate({width:'120px',left:"0px"},moveTime,function(){
								move();
							});
						});
					},10000);
				};
			};

		})();
	});
});