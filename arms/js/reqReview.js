const data = [
	{
		review_type: 0,
		product: "aRMS Product",
		requirements: "REQ-Auth-13",
		jira_project: "JIRA-Dev-Backend v.1.3.1",
		issue: "ISSUE-DEV-01",
		qa_test: "TEST-REQ-01",
		status: "Resolved",
		modified: "이반장",
		worker: "함수원",
		start_date: "2022-06-25",
		modify_date: "2022-07-03",
	},
	{
		review_type: 1,
		product: "aRMS Product",
		requirements: "REQ-Auth-13",
		jira_project: "JIRA-Dev-Backend v.1.3.1",
		issue: "ISSUE-DEV-01",
		qa_test: "TEST-REQ-01",
		status: "Resolved",
		modified: "이반장",
		worker: "함수원",
		start_date: "2022-06-25",
		modify_date: "2022-07-03",
	},
	{
		review_type: 2,
		product: "aRMS Product",
		requirements: "REQ-Auth-13",
		jira_project: "JIRA-Dev-Backend v.1.3.1",
		issue: "ISSUE-DEV-01",
		qa_test: "TEST-REQ-01",
		status: "Resolved",
		modified: "이반장",
		worker: "함수원",
		start_date: "2022-06-25",
		modify_date: "2022-07-03",
	},
	{
		review_type: 0,
		product: "aRMS Product",
		requirements: "REQ-Auth-13",
		jira_project: "JIRA-Dev-Backend v.1.3.1",
		issue: "ISSUE-DEV-01",
		qa_test: "TEST-REQ-01",
		status: "Resolved",
		modified: "이반장",
		worker: "함수원",
		start_date: "2022-06-25",
		modify_date: "2022-07-03",
	},
	{
		review_type: 1,
		product: "aRMS Product",
		requirements: "REQ-Auth-13",
		jira_project: "JIRA-Dev-Backend v.1.3.1",
		issue: "ISSUE-DEV-01",
		qa_test: "TEST-REQ-01",
		status: "Resolved",
		modified: "이반장",
		worker: "함수원",
		start_date: "2022-06-25",
		modify_date: "2022-07-03",
	},
	{
		review_type: 2,
		product: "aRMS Product",
		requirements: "REQ-Auth-13",
		jira_project: "JIRA-Dev-Backend v.1.3.1",
		issue: "ISSUE-DEV-01",
		qa_test: "TEST-REQ-01",
		status: "Resolved",
		modified: "이반장",
		worker: "함수원",
		start_date: "2022-06-25",
		modify_date: "2022-07-03",
	},
];
const tableOptions = {
	destroy: true,
	processing: true,
	select: true,
	ordering: false,
	scrollX: true,
	columns: [
		{
			title: "",
			data: "review_type",
			render: function (data, type) {
				if (type === "display") {
					let icon = data
						? data === 1
							? "fa-pencil-square-o"
							: "fa-exclamation-triangle"
						: "fa-paper-plane-o";
					return `<i class="fa ${icon}">`;
				}
				return data;
			},
		},
		{
			title: "제품(서비스)",
			data: "product",
		},
		{
			title: "요구사항",
			data: "product",
		},
		{
			title: "JIRA Project",
			data: "jira_project",
		},
		{
			title: "Issue",
			data: "issue",
		},
		{
			title: "QA",
			data: "qa_test",
		},
		{
			title: "Status - Test",
			data: "status",
		},
		{
			title: "생성일",
			data: "start_date",
		},
		{
			title: "작업자",
			data: "worker",
		},
		{
			title: "수정자",
			data: "modified",
		},
		{
			title: "수정일",
			data: "modify_date",
		},
	],
	data,
};

// --- 사이드 메뉴 -- //
$(function () {
	setSideMenu(
		"sidebar_menu_requirement",
		"sidebar_menu_requirement_review",
		"requirement-elements-collapse"
	);
	setTable("", [], tableOptions);
});

// 요구사항 상세 보기 클릭 이벤트
$("#selectView").click(function () {
	location.href = "reqReviewDetail.html";
});
