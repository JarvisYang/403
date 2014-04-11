$(function(){
	$(document).ready(function(){
		(function(){
			/************************************/
			function setEachPos(objName){
				var obj             = $("#" + objName);
				var objParent       = obj.parent();
				var objHeight       = obj.height();
				var objParentHeight = objParent.height();

				obj.css("top",(objParentHeight - objHeight)/2.0);
			};

			window.setCss = function(){
				setEachPos("creativeStudioHoverP");
				setEachPos("interactionP");
				setEachPos("cooperateP");
				setEachPos("childrenZoneHoverP");
				setEachPos("about403HoverP");
				setEachPos("phoneHoverP");
			};
			/************************************/
		})();
	});
});