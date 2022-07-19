$(function () {

	//url 파라미터 파서
	var getUrlParameter = function getUrlParameter(sParam) {
		var sPageURL = window.location.search.substring(1),
			sURLVariables = sPageURL.split('&'),
			sParameterName,
			i;

		for (i = 0; i < sURLVariables.length; i++) {
			sParameterName = sURLVariables[i].split('=');

			if (sParameterName[0] === sParam) {
				return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
			}
		}
		return false;
	};

	var c_id = getUrlParameter('c_id');
	console.log(c_id);

	// ajax 처리 후 에디터 바인딩.
	$.ajax({
		url: '/auth-user/api/arms/pdservice/searchNode.do?c_id=' + c_id,
		dataType: 'json',
		async: false,
		success: function(data) {
			result = data;
			console.log(data);
		}
	});

	// --- 에디터 설정 --- //
	CKEDITOR.replace("editor");
	CKEDITOR.config.readOnly = true;
	CKEDITOR.on("instanceReady", function (ev) {
		var height = $(document).height() - 450;
		$(".cke_contents").css("height", height + "px");
	});

	setSideMenu("sidebar_menu_product", "sidebar_menu_product_list");
	$("#selectList").on("click",function(){
		location.href = "pdServiceList.html"
	})
});

