var tableUrl = "/api/arms/pdservice/getMonitor.do";
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
	setSideMenu("list");
	setTable(tableUrl, dataList);
});

// 제품 상세 보기 클릭 이벤트
$("#selectView").click(function () {
	location.href = "pdServiceListView.html";
});
