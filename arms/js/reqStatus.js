const data = [
	[
		"aRMS Product",
		"REQ-Auth-13",
		"JIRA-Dev-Backend v.1.3.1",
		"ISSUE-DEV-01",
		"TEST-REQ-01",
		"Resolved",
	],
	[
		"aRMS Product",
		"REQ-Auth-13",
		"JIRA-Dev-Backend v.11.9.15",
		"ISSUE-DEV-16",
		"TEST-REQ-01",
		"Closed",
	],
	[
		"aRMS Product",
		"REQ-Auth-13",
		"JIRA-Design-Front v.12.93.1",
		"ISSUE-DES-193",
		"TEST-REQ-01",
		"Open",
	],
	[
		"aRMS Product",
		"REQ-Auth-13",
		"JIRA-Oper-DB v.1.3.1",
		"ISSUE-DB-163",
		"TEST-REQ-01",
		"Progress",
	],
	[
		"aRMS Product",
		"REQ-Auth-13",
		"JIRA-Oper-SYS v.0.3.0",
		"ISSUE-SYS-213",
		"TEST-REQ-01",
		"Progress",
	],
	[
		"aRMS Product",
		"REQ-Auth-13",
		"JIRA-Oper-SYS v.3.9.11",
		"ISSUE-SYS-863",
		"TEST-REQ-01",
		"Progress",
	],
	[
		"aRMS Product",
		"REQ-Auth-13",
		"JIRA-Oper-SYS v.15.3.1",
		"ISSUE-DO-10",
		"TEST-REQ-01",
		"Progress",
	],

	[
		"aRMS Product",
		"REQ-Auth-19",
		"JIRA-Dev-Backend v.1.3.9",
		"ISSUE-DEV-101",
		"TEST-REQ-13",
		"Resolved",
	],
	[
		"aRMS Product",
		"REQ-Auth-19",
		"JIRA-Dev-Backend v.1.2.91",
		"ISSUE-DEV-136",
		"TEST-REQ-13",
		"Closed",
	],
	[
		"aRMS Product",
		"REQ-Auth-19",
		"JIRA-Design-Front v.4.9.1",
		"ISSUE-DES-143",
		"TEST-REQ-13",
		"Open",
	],
	[
		"aRMS Product",
		"REQ-Auth-19",
		"JIRA-Oper-DB v.61.3.1",
		"ISSUE-DB-763",
		"TEST-REQ-13",
		"Progress",
	],
	[
		"aRMS Product",
		"REQ-Auth-19",
		"JIRA-Oper-SYS v.1.39.10",
		"ISSUE-SYS-913",
		"TEST-REQ-13",
		"Progress",
	],
	[
		"aRMS Product",
		"REQ-Auth-21",
		"JIRA-Oper-SYS v.14.3.1",
		"ISSUE-SYS-263",
		"TEST-REQ-313",
		"Progress",
	],
	[
		"aRMS Product",
		"REQ-Auth-21",
		"JIRA-Oper-SYS v.1.9.1",
		"ISSUE-DO-40",
		"TEST-REQ-313",
		"Progress",
	],
];
const tableOptions = {
	destroy: true,
	processing: true,
	responsive: true,
	select: true,
	columns: [
		{
			name: "first",
			title: "제품(서비스)",
		},
		{
			name: "second",
			title: "요구사항",
		},
		{
			title: "JIRA Project",
		},
		{
			title: "Issue",
		},
		{
			name: "third",
			title: "QA",
		},
		{
			title: "Status - Test",
		},
	],
	data,
	rowsGroup: [
		// Always the array (!) of the column-selectors in specified order to which rows groupping is applied
		// (column-selector could be any of specified in https://datatables.net/reference/type/column-selector)
		"first:name",
		"second:name",
		"third:name",
		0,
		2,
	],
};
// --- 사이드 메뉴 -- //
$(function () {
	setSideMenu(
		"sidebar_menu_requirement",
		"sidebar_menu_requirement_status",
		"requirement-elements-collapse"
	);
	setTable("", [], tableOptions);
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
