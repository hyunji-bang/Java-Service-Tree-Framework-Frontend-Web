$(function () {
	authUserCheck();
	includeLayout();

	/*맨위로 아이콘*/
	$("#topicon").click(function () {
		$("html, body").animate({ scrollTop: 0 }, 400);
		return false;
	});
});

function authUserCheck() {
	$.ajax({
		url: "/auth-check" + "/identity",
		type: "GET",
		timeout: 7313,
		global: false,
		statusCode: {
			200: function (n) {
				console.log(n);
			},
			401: function (n) {
				location.href = "/sso/login";
			},
		},
	});
}

function includeLayout() {
	var includeArea = $("[data-include]");
	var self, url;
	$.each(includeArea, function () {
		self = $(this);
		url = self.data("include");
		self.load(url, function () {
			self.removeAttr("data-include");
		});
	});
}

function resetToDefaults() {
	topbar.config({
		autoRun: true,
		barThickness: 3,
		barColors: {
			0: "rgba(26,  188, 156, .9)",
			".25": "rgba(52,  152, 219, .9)",
			".50": "rgba(241, 196, 15,  .9)",
			".75": "rgba(230, 126, 34,  .9)",
			"1.0": "rgba(211, 84,  0,   .9)",
		},
		shadowBlur: 10,
		shadowColor: "rgba(0,   0,   0,   .6)",
	});
}

// Page load
resetToDefaults();
topbar.show();
setTimeout(function () {
	$(".container").fadeIn("slow");
	topbar.hide();
}, 1500);

// --- 사이드 메뉴 설정 --- //
function setSideMenu(listName) {
	console.log(listName);
	setTimeout(function () {
		$("#sidebar_menu_product").attr("class", "accordion-toggle active");
		$("#sidebar_menu_product").attr("aria-expanded", "true");
		$("#sidebar_menu_product").css({ color: "lightblue" });
		$("#sidebar_menu_product").css({ "font-weight": "900" });

		$("#product-elements-collapse").attr("class", "panel-collapse collapse in");
		$("#product-elements-collapse").attr("aria-expanded", "true");

		$(`#sidebar_menu_product_${listName}`).addClass("active");
		$(`#sidebar_menu_product_${listName}`).css({ color: "lightblue" });
		$(`#sidebar_menu_product_${listName}`).css({ "font-weight": "900" });
	}, 1000);
}

// --- 데이터 테이블 설정 --- //

function setTable(tableDataUrl, dataList) {
	jstreeDataTableReload(tableDataUrl, dataList);

	//datatable 좌상단 datarow combobox style
	$(".dataTables_length").find("select:eq(0)").addClass("darkBack");
	$(".dataTables_length").find("select:eq(0)").css("min-height", "30px");
}

function jstreeDataTableReload(tableDataUrl, dataList) {
	console.log("href: " + $(location).attr("href"));
	console.log("protocol: " + $(location).attr("protocol"));
	console.log("host: " + $(location).attr("host"));
	console.log("pathname: " + $(location).attr("pathname"));
	console.log("search: " + $(location).attr("search"));
	console.log("hostname: " + $(location).attr("hostname"));
	console.log("port: " + $(location).attr("port"));

	var isDevelopingToRoute = "/auth-user";

	var tempDataTable = $("#jstreeTable").DataTable({
		ajax: {
			url: isDevelopingToRoute + tableDataUrl,
			dataSrc: "",
		},
		destroy: true,
		processing: true,
		responsive: true,
		select: true,
		columns: dataList,
	});

	$("#jstreeTable tbody").on("click", "tr", function () {
		var data = tempDataTable.row(this).data();
		console.log(data);
		//alert( 'You clicked on '+ data.c_title +'\'s row' );
	});
}
