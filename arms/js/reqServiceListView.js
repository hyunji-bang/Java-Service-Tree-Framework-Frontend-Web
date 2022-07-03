$(function () {
	// --- 에디터 설정 --- //
	CKEDITOR.replace("editor");
	CKEDITOR.config.readOnly = true;
	CKEDITOR.on("instanceReady", function (ev) {
		var height = $(document).height() - 450;
		$(".cke_contents").css("height", height + "px");
	});

	setSideMenu("sidebar_menu_requirement", "sidebar_menu_requirement_list");
});

// 요구사항 조회 돌아가기 클릭 이벤트
$("#selectList").click(function () {
	location.href = "reqServiceList.html";
});
