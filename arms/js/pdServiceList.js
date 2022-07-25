var tableDataUrl = "/api/arms/pdservice/getMonitor.do";
var dataList = [
	{ data: "c_id" },
	{ data: "c_parentid" },
	{ data: "c_position" },
	{ data: "c_left" },
	{ data: "c_right" },
	{ data: "c_level" },
	{ data: "c_title" },
	{ data: "c_type" },
];

$(function () {
	setTable(tableDataUrl, dataList, null, "pdServiceListView");
	setSideMenu("sidebar_menu_product", "sidebar_menu_product_list");
});
