$(function () {
	setSideMenu("sidebar_menu_product", "sidebar_menu_product_regist");
	jsTreeBuild("#demo");
	//서비스 등록
	$(".btn-info").on("click", registNewServie);
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


function jsTreeClick(selectedNodeID) {
	console.log(selectedNodeID);
}

// --- select2 설정 --- //
$(".js-example-basic-multiple-limit").select2({
	maximumSelectionLength: 2,
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
	placeholder: "제품(서비스)의 오너를 등록해 주세요",
	minimumInputLength: 1,
	templateResult: formatRepo,
	templateSelection: formatRepoSelection,
});

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
 function registNewServie ()  {
	 var refNum;
	var checkedService = $("#demo").find("a.jstree-clicked").parent()
	checkedService.attr("rel") === "default" ? refNum = checkedService.parent().closest("li") : refNum = checkedService;
	var positionIndex = refNum.children().find("li").length;
	refNum = refNum.attr("id").replace("node_", "").replace("copy_", "");

	if (!$("#prepended-input").val() || $("#prepended-input").val().trim() === "") {
		alert("Please write service name!");
		$("#prepended-input").focus();
	} else {
		$.ajax({
			url: "http://localhost:9999/auth-user/api/arms/pdservice/addNode.do",
			type: "POST",
			data: {
				ref: refNum,
				c_position: positionIndex,
				c_title: $("#prepended-input").val(),
				c_type: "default",
			},
			statusCode: {
				200: function () {
					console.log("성공!")
					jsTreeBuild("#demo")
				},
				400:function() {}
			}

		})

	}

}