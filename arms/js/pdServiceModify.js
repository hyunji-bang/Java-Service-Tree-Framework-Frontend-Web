// make review list
const makeReviewList = function (profile) {
	const wrap = document.getElementById("service-reviewers");
	let reviewer = "";
	profile.forEach(
		(item) =>
			(reviewer += `
		<a>
			<span class="profile-image"><img src="${item.image}"></span>
			<span class="name">${item.name}</td>
		</a>
	`)
	);

	wrap.innerHTML = reviewer;
};

$(function () {

	makeReviewList([
		{
			name: "Finees Lund",
			image: "../reference/light-blue/img/1.jpg",
		},
		{
			name: "Frans Garey",
			image: "../reference/light-blue/img/13.jpg",
		},
	]);
});

function jstreeDataTableReload() {
	console.log("href: " + $(location).attr("href"));
	console.log("protocol: " + $(location).attr("protocol"));
	console.log("host: " + $(location).attr("host"));
	console.log("pathname: " + $(location).attr("pathname"));
	console.log("search: " + $(location).attr("search"));
	console.log("hostname: " + $(location).attr("hostname"));
	console.log("port: " + $(location).attr("port"));

	var isDevelopingToRoute = "/auth-user";

	var tempDataTable = $("#pdserviceTable").DataTable({
		ajax: {
			url: isDevelopingToRoute + "/api/arms/pdservice/getMonitor.do",
			dataSrc: "",
		},
		destroy: true,
		processing: true,
		responsive: false,
		columns: [{ data: "c_id" }, { data: "c_title" }],
		columnDefs: [
			{
				targets: -1,
				className: "dt-body-left",
			},
		],
	});

	$("#pdserviceTable tbody").on("click", "tr", function () {
		$(this).toggleClass("selected");
		var data = tempDataTable.row(this).data();
		console.log(data);
		//alert( 'You clicked on '+ data.c_title +'\'s row' );
	});
}

$(function () {
	jstreeDataTableReload();
	$(".dataTables_length").find("select:eq(0)").addClass("darkBack");
	$(".dataTables_length").find("select:eq(0)").css("min-height", "30px");
	//min-height: 30px;

	$("body").find("[aria-controls='pdserviceTable']").css("width", "100px");
	$("select[name=pdserviceTable_length]").css("width", "50px");
});

// --- 에디터 설정 --- //
//CKEDITOR.replace("editor");
//CKEDITOR.replace("modal-editor");

// --- 팝업 띄울때 사이즈 조정 -- //
$("#modalPopupId").click(function () {
	var height = $(document).height() - 400;
	$(".modal-body")
		.find(".cke_contents:eq(0)")
		.css("height", height + "px");
});

function jsTreeClick(selectedNode) {
	console.log("-->" + selectedNode.attr("id").replace("node_", ""));
	console.log(
		"->" +
			selectedNode.find("a.jstree-clicked").siblings(".jstree-icon").text() +
			"<-"
	);
	var tempNode = selectedNode.find("a.jstree-clicked").siblings(".jstree-icon");
	tempNode.trigger("click");
	console.log("여기:" + tempNode);
	var getSelectedText = selectedNode.find("a.jstree-clicked").text().trimStart();
	console.log(getSelectedText);
	$("#prepended-input").val(getSelectedText);

	checkEqualSelectedNode(selectedNode);
	dataLoad(selectedNode.attr("id").replace("node_", ""));
}

function dataLoad(getSelectedText) {
	// ajax 처리 후 에디터 바인딩.
	console.log(getSelectedText);
	$.ajax({
		url: "/auth-user/api/arms/pdservice/getNode.do?c_id=" + getSelectedText,
		dataType: "json",
		async: false,
		success: function (data) {
			//CKEDITOR.instances.editor.setData(data.c_contents);
			$("#editor").html(data.c_contents);
			var pdServiceNameplaceHolder = $("#pdServiceTitle").attr("placeholder");
			$("#pdServiceTitle").attr(
				"placeholder",
				pdServiceNameplaceHolder + " " + data.c_title
			);
		},
	});
}

function checkEqualSelectedNode(selectedNode) {
	var getSelectedText = selectedNode.find("a.jstree-clicked").text().trimStart();
	var inputText = $("#prepended-input").val();
	if (getSelectedText == inputText) {
		console.log("동일하다 선택된 값이다.");
		$(".updatemode").click();
	} else {
		console.log("값이 틀리다.");
		$(".newmode").click();
	}
}

$(".newmode").click(function () {
	$("#prepended-input").val("");
	$("#owner_select2").val(null).trigger("change");
	$("#reviewer_select2").val(null).trigger("change");
});

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

$("#service-modify").click(function (ev) {
	ev.preventDefault();

	location.href = `pdServiceModify.html?service=${123}`;
});
