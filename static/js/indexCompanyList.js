$(function(){
	$(document).ready(function(){
		(function(){
			
			var companyList = new Array(
					{
						url:"../static/img/adv1.jpg"
					},
					{
						url:"../static/img/adv2.jpg"
					},
					{
						url:"../static/img/adv3.jpg"
					},
					{
						url:"../static/img/adv4.jpg"
					},
					{
						url:"../static/img/adv5.jpg"
					},
					{
						url:"../static/img/adv6.jpg"
					},
					{
						url:"../static/img/adv7.png"
					}
				);

			window.addCompanyList = function(){
				appendLength();
				function appendLength(){
					if($("#companyShow").width() < $("#companyShowBox").width()){
						$.each(companyList,function(index){
							var newNode = document.createElement("img");
							newNode.className = "eachCompany";
							$(newNode).attr("src",this.url)
							newNode.onload = function(){
								var width  = $(this).width();
								var height = $(this).height();
								$(this).height(60.0);
								$(this).width(60.0/height*width);
								$(this).css("margin-top","26px");
								$(this).css("display","inline-block")
							};

							$("#companyShow").append(newNode);
							if(index === (companyList.length-1)){
								console.log(index,companyList.length-1,$("#companyShow").width() < $("#companyShowBox").width())
								if($("#companyShow").width() < $("#companyShowBox").width()){
									//appendLength();
								};
							}
						});
					};
				};

			};

		})();
	});
});