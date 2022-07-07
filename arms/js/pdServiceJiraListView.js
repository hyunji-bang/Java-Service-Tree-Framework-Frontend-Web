$(function () {
	// --- 에디터 설정 --- //
	CKEDITOR.replace("editor");
	CKEDITOR.config.readOnly = true;
	CKEDITOR.on("instanceReady", function (ev) {
		var height = $(document).height() - 450;
		$(".cke_contents").css("height", height + "px");
	});

	setSideMenu("sidebar_menu_product", "sidebar_menu_product_jira_list");
	$("#selectList").on("click",function(){
		location.href = "pdServiceJiraList.html"
	})
});
