$(function(){
	$(document).ready(function(){
		(function(){

			window.fixImgSize = function(imgObj){
				var imgWidth        = imgObj.width;
				var imgHeight       = imgObj.height;
				var parentNode      = imgObj.parentNode;
				var parentWidth     = $(parentNode).width();
				var parentHeight    = $(parentNode).height();
				var changeSizeJudge = imgWidth*parentHeight/(imgHeight*parentWidth);
				if(changeSizeJudge > 1){
					var changeImgHeight = imgHeight*parentWidth/imgWidth;
					$(imgObj).width(parentWidth);
					$(imgObj).height(changeImgHeight);
					$(imgObj).css("margin-top",(parentHeight - changeImgHeight)/2.0)
					$(imgObj).css("display","inline-block");
				}
				else{
					$(imgObj).height(parentHeight);
					$(imgObj).width(imgWidth*parentHeight/imgHeight);
					$(imgObj).css("display","inline-block");
				}
			}
		})();
	});
});