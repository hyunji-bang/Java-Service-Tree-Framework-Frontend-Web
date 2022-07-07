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
// --- 사이드 메뉴 -- //
$(function () {
	setSideMenu(
		"sidebar_menu_requirement",
		"sidebar_menu_requirement_list",
		"requirement-elements-collapse"
	);
	setTable(tableUrl, dataList);
	jsTreeBuild("#pdServiceTree")
});

// --- jstree 설정 -- //
function jsTreeClick(selectedNodeID) {
	console.log(selectedNodeID);
}


// 요구사항 상세 보기 클릭 이벤트
$("#selectView").click(function () {
	location.href = "reqServiceListView.html";
});
