var tableUrl = "/api/arms/pdjira/getMonitor.do";
var dataList = [
	{ data: "c_id" },
	{ data: "c_parentid" },
	{ data: "c_position" },
	{ data: "c_left" },
	{ data: "c_right" },
	{ data: "c_level" },
	{ data: "c_title" },
	{ data: "c_type" },
	{ data: "c_pdjira_detail" },
	{ data: "c_pdjira_con_name" },
	{ data: "c_pdjira_con_user" },
	{ data: "c_pdjira_con_pass" },
	{ data: "c_pdjira_con_token" },
	{ data: "c_pdjira_con_jql" },
	{ data: "jiraConPassMode" },
];
$(function () {
	setSideMenu("jira_list");
	setTable(tableUrl, dataList);
});

// 제품 상세 보기 클릭 이벤트
$("#selectView").click(function () {
	location.href = "pdServiceJiraListView.html";
});
