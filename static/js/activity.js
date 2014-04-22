$(function(){
	$(document).ready(function(){
		(function(){

			$("#activityListBody").children().each(function(){
				$(this).mouseover(function(){
					var funBoxObj = $(this).find(".actListFunBox");
					if(funBoxObj.is(":animated")) {
						funBoxObj.stop(true,false).animate({"margin-top":"8px"},100);;
					}
					else{
						funBoxObj.animate({"margin-top":"8px"},100);
					};
				});

				$(this).mouseout(function(){
					var funBoxObj = $(this).find(".actListFunBox");
					if(funBoxObj.is(":animated")) {
						funBoxObj.stop(true,false).animate({"margin-top":"38px"},100);
					}
					else{
						funBoxObj.animate({"margin-top":"38px"},100);
					};
				});
			});

		})();
	});
});