$(function () {
	setSideMenu("sidebar_menu_product", "sidebar_menu_product_version_regist");
	jsTreeBuild("#productTree", "pdversion");
	$(".btn-info").click(function () {
		var index = $("label.btn-sm.active").index();
		index === 0
			? registNewServie("pdversion", "#productTree")
			: updateServie("pdversion", "#productTree");
	});
});

// --- 에디터 설정 --- //
CKEDITOR.replace("editor");
CKEDITOR.replace("modal-editor");

// --- 팝업 띄울때 사이즈 조정 -- //
$("#modalPopupId").click(function () {
	var height = $(document).height() - 400;
	$(".modal-body")
		.find(".cke_contents:eq(0)")
		.css("height", height + "px");
});

function jsTreeClick(selectedNode) {
	console.log(selectedNode);
}
