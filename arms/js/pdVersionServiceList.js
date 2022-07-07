var tableUrl = "/api/arms/pdversion/getMonitor.do";
var dataList = [
	{ data: "c_id" },
	{ data: "c_parentid" },
	{ data: "c_position" },
	{ data: "c_left" },
	{ data: "c_right" },
	{ data: "c_level" },
	{ data: "c_title" },
	{ data: "c_type" },
	{ data: "c_pdservice_link" },
];
$(function () {
	setSideMenu("sidebar_menu_product", "sidebar_menu_product_version_list");
	setTable(tableUrl, dataList);
	jsTreeBuild("#productTree");
});

function jsTreeClick(selectedNodeID) {
	console.log(selectedNodeID);
	$(".dataTables_filter input").val(selectedNodeID).keyup();
}

