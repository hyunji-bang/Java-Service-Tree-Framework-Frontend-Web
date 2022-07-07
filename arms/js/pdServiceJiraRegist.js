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
	setSideMenu("sidebar_menu_product", "sidebar_menu_product_jira_regist");
	setTable(tableUrl, dataList);
	jsTreeBuild("#pdServiceTree")
	$("body").find("[aria-controls='jstreeTable']").css("width", "100px");
});

// --- jstree 설정 -- //
function jsTreeClick(selectedNodeID) {
	console.log(selectedNodeID);
}

// --- select2 설정 --- //
$(".js-data-example-ajax").select2({
	ajax: {
		url: "https://api.github.com/search/repositories",
		dataType: "json",
		delay: 250,
		data: function (params) {
			return {
				q: params.term, // search term
				page: params.page,
			};
		},
		processResults: function (data, params) {
			// parse the results into the format expected by Select2
			// since we are using custom formatting functions we do not need to
			// alter the remote JSON data, except to indicate that infinite
			// scrolling can be used
			params.page = params.page || 1;

			return {
				results: data.items,
				pagination: {
					more: params.page * 30 < data.total_count,
				},
			};
		},
		cache: true,
	},
	placeholder: "제품(서비스)의 Default 리뷰어를 등록해 주세요",
	minimumInputLength: 1,
	templateResult: formatRepo,
	templateSelection: formatRepoSelection,
});

function formatRepo(repo) {
	if (repo.loading) {
		return repo.text;
	}

	var $container = $(
		"<div class='select2-result-repository clearfix'>" +
			"<div class='select2-result-repository__meta'>" +
			"<div class='select2-result-repository__title'></div>" +
			"<div class='select2-result-repository__description'></div>" +
			"<div class='select2-result-repository__statistics'>" +
			"<div class='select2-result-repository__forks'><i class='fa fa-flash'></i> </div>" +
			"<div class='select2-result-repository__stargazers'><i class='fa fa-star'></i> </div>" +
			"<div class='select2-result-repository__watchers'><i class='fa fa-eye'></i> </div>" +
			"</div>" +
			"</div>" +
			"</div>"
	);

	$container.find(".select2-result-repository__title").text(repo.full_name);
	$container
		.find(".select2-result-repository__description")
		.text(repo.description);
	$container
		.find(".select2-result-repository__forks")
		.append(repo.forks_count + " Forks");
	$container
		.find(".select2-result-repository__stargazers")
		.append(repo.stargazers_count + " Stars");
	$container
		.find(".select2-result-repository__watchers")
		.append(repo.watchers_count + " Watchers");

	return $container;
}

function formatRepoSelection(repo) {
	return repo.full_name || repo.text;
}
// Code for the menu buttons
