let selectId; // 제품 아이디
let selectName; // 제품 이름
let versionList; // 선택한 제품 리스트
let selectVersion; // 선택한 버전 아이디

// document ready
$(function () {
	
	//사이드 메뉴 처리
	setSideMenu("sidebar_menu_product", "sidebar_menu_version_manage");

});

// --- 데이터 테이블 설정 --- //
$(function () {
	var columnList = [
		{ data: "c_id" },
		{ data: "c_title" },
	];
	dataTableBuild("#pdserviceTable","pdservice", columnList);

	//datatable 좌상단 datarow combobox style
	$(".dataTables_length").find("select:eq(0)").addClass("darkBack");
	$(".dataTables_length").find("select:eq(0)").css("min-height", "30px");
	//min-height: 30px;

	$("body").find("[aria-controls='pdserviceTable']").css("width", "100px");
	$("select[name=pdserviceTable_length]").css("width", "50px");
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
		$("#versionContents").html("");
		if ($(this).hasClass("selected")) {
			$(this).removeClass("selected");
		} else {
			tempDataTable.$("tr.selected").removeClass("selected");
			$(this).addClass("selected");
		}

		var data = tempDataTable.row(this).data();
		selectId = data.c_id;
		selectName = data.c_title;
		console.log(data.c_id);
		dataLoad(data.c_id, data.c_title);
	});
}

$("#delVersion").click(function () {
	console.log("delete btn");
	$.ajax({
		url: "/auth-user/api/arms/pdversion/removeNode.do",
		type: "POST",
		data: {
			c_id: selectVersion
		},
		statusCode: {
			200: function () {
				console.log("성공!");
				//모달 팝업 끝내고
				$('#close-version').trigger('click');
				//버전 데이터 재 로드
				dataLoad(selectId, selectName);
			},
		},
	});
});

$("#versionUpdate").click(function () {
    console.log("update btn");
    $.ajax({
        url: "/auth-user/api/arms/pdversion/updateVersionNode.do",
        type: "POST",
        data: {
            c_id: selectVersion,
            c_title: $("#input_pdserviceVersion").val(),
            c_contents: CKEDITOR.instances["input_pdservice_editor"].getData(),
            c_start_date: $("#input_pdservice_start_date").val(),
            c_end_date: $("#input_pdservice_end_date").val(),
        },
        statusCode: {
            200: function () {
                console.log("성공!");
                //모달 팝업 끝내고
                $('#close-version').trigger('click');
                //버전 데이터 재 로드
                dataLoad(selectId, selectName);
            },
        },
    });
});

$("#regist-version").click(function () {
	console.log("save btn");
	$.ajax({
		url: "/auth-user/api/arms/pdversion/addNode.do",
		type: "POST",
		data: {
			ref: 2,
			c_title: $("#tooltip-enabled-service-version").val(),
			c_type: "default",
			c_pdservice_link: $('#pdserviceTable').DataTable().rows('.selected').data()[0].c_id,
			c_contents: CKEDITOR.instances["modal-editor"].getData(),
			c_start_date: $("#btn-enabled-date").val(),
			c_end_date: $("#btn-end-date").val(),
		},
		statusCode: {
			200: function () {
				console.log("성공!");
				//모달 팝업 끝내고
                $('#close-version').trigger('click');
                //버전 데이터 재 로드
                dataLoad(selectId, selectName);
			},
		},
	});
});

// --- 에디터 설정 --- //
CKEDITOR.replace("input_pdservice_editor");
CKEDITOR.replace("modal-editor");

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
	$("#product-input").val(getSelectedText);

	checkEqualSelectedNode(selectedNode);
	dataLoad(selectedNode.attr("id").replace("node_", ""), getSelectedText);
}

function checkEqualSelectedNode(selectedNode) {
	var getSelectedText = selectedNode.find("a.jstree-clicked").text().trimStart();

	var inputText = $("#product-input").val();
	if (getSelectedText == inputText) {
		console.log("동일하다 선택된 값이다.");
		$(".updatemode").click();
	} else {
		console.log("값이 틀리다.");
		$(".newmode").click();
	}
}

function dataLoad(getSelectedText, selectedText) {

	//데이터 로드를 사용자에게 알리기
	Messenger().post({
		message: 'Launching thermonuclear war...',
		actions: {
			cancel: {
				label: 'cancel launch',
				action: function() {
					return msg.update({
						message: 'Thermonuclear war averted',
						type: 'success',
						actions: false
					});
				}
			}
		}
	});

	// ajax 처리 후 에디터 바인딩.
	console.log(getSelectedText);
	$.ajax("/auth-user/api/arms/pdversion/getVersion.do?c_id=" + getSelectedText)
		.done(function (json) {
			console.log("success", json);
			$("#versionAccordion").jsonMenu("set", json, { speed: 5000 });
			versionList = json;
			//version text setting
			$(".list-group-item").text(selectedText);
			$("#tooltip-enabled-service-name").val(selectedText);

			Messenger().post({
				message: 'Version Data 조회를 완료하였습니다.',
				type: 'success',
				showCloseButton: true
			});
		})
		.fail(function (jqXHR) {
			console.log("error");
		})
		.always(function (jqXHR) {
			console.log("finished");
		});
}

// 초기 개발 및 확인 용도
// versionlist 노출
(function ($) {
	let menu;
	$.fn.jsonMenu = function (action, items, options) {
		$(this).addClass("json-menu");
		if (action == "add") {
			menu.body.push(items);
			draw($(this), menu);
		} else if (action == "set") {
			menu = items;
			draw($(this), menu);
		}
		return this;
	};
})(jQuery);

//version list html 삽입
function draw(main, menu) {
	main.html("");

	let data = `
						   <li class='list-group-item json-menu-header'>
							   <strong>product service name</strong>
						   </li>
						   <button
					type="button"
					class="btn btn-danger btn-block"
					id="modalPopupId"
					data-toggle="modal"
					data-target="#myModal2"
				>신규 버전 등록하기</button>`;

	for (let i = 0; i < menu.length; i++) {
		data += `
						   <div class="panel">
							   <div class="panel-heading">
								   <a class="accordion-toggle collapsed" data-toggle="collapse" href="" onclick="versionClick(${menu[i].c_id}); return false;">
									   ${menu[i].c_title}
								   </a>
							   </div>
						   </div>
					   `;
	}

	main.html(data);
}

//버전 클릭할 때 동작하는 함수
//1. 상세보기 데이터 바인딩
//2. 편집하기 데이터 바인딩
function versionClick(c_id) {

	selectVersion = c_id;

	$.ajax({
		url: "/auth-user/api/arms/pdversion/getNode.do", // 클라이언트가 HTTP 요청을 보낼 서버의 URL 주소
		data: { c_id: c_id }, // HTTP 요청과 함께 서버로 보낼 데이터
		method: "GET", // HTTP 요청 메소드(GET, POST 등)
		dataType: "json", // 서버에서 보내줄 데이터의 타입
	})
		// HTTP 요청이 성공하면 요청한 데이터가 done() 메소드로 전달됨.
		.done(function (json) {
			console.log(" -> " + json.c_contents);
			$("#pdServiceName").text($(".list-group-item").text());
			$("#pdServiceVersion").text(json.c_title);
			$("#versionStartDate").text(json.c_start_date);
			$("#versionEndDate").text(json.c_end_date);
			$("#versionContents").html(json.c_contents);

			$("#input_pdserviceName").val($(".list-group-item").text());
			$("#input_pdserviceVersion").val(json.c_title);
			$("#input_pdservice_start_date").val(json.c_start_date);
			$("#input_pdservice_end_date").val(json.c_end_date);
			CKEDITOR.instances.input_pdservice_editor.setData(json.c_contents);
		})
		// HTTP 요청이 실패하면 오류와 상태에 관한 정보가 fail() 메소드로 전달됨.
		.fail(function (xhr, status, errorThrown) {
			console.log(xhr + status + errorThrown);
		})
		//
		.always(function (xhr, status) {
			$("#text").html("요청이 완료되었습니다!");
			console.log(xhr + status);
		});
}

// 초기 개발 및 확인 용도
// version 기간 체크
$(function () {
	$(".date-picker").datepicker({
		autoclose: true,
	});
	//datepicker 만들기
	const makeDatePicker = (calender) => {
		calender
			.datepicker({
				autoclose: true,
			})
			.on("changeDate", function (ev) {
				const Input = $(this).parent().prev();
				Input.val(calender.data("date"));
				if (Input.attr("id") === "input_pdservice_start_date") {
					$("#versionStartDate").text(calender.data("date"));
				} else if (Input.attr("id") === "input_pdservice_end_date") {
					$("#versionEndDate").text(calender.data("date"));
				}
				calender.datepicker("hide");
			});
	};

	const $btnCalendar = $("#btn-select-calendar");
	const $btnEndCalendar = $("#btn-end-calendar");
	const $btnCalendarPopup = $("#btn-select-calendar-popup");
	const $btnEndCalendarPopup = $("#btn-end-calendar-popup");

	makeDatePicker($btnCalendar);
	makeDatePicker($btnEndCalendar);
	makeDatePicker($btnCalendarPopup);
	makeDatePicker($btnEndCalendarPopup);
});

$(".form-control").on("input", function () {
	const value = $(this).val();
	if ($(this).attr("id") === "input_pdserviceName") {
		$("#pdServiceName").text(value);
	} else if ($(this).attr("id") === "input_pdserviceVersion") {
		$("#pdServiceVersion").text(value);
	}
});

//ckeditor contents 추가
CKEDITOR.instances.input_pdservice_editor.on("change", function () {
	$("#versionContents").html(
		CKEDITOR.instances.input_pdservice_editor.getData()
	);
});

$("#regist-version").on("click", function () {
	console.log(selectId, versionList);
	const addVersion = () => {
		/* post payload data list?? */
		//$.ajax({
		//	url: "/auth-user/api/arms/pdversion/addNode.do",
		//	type: "POST",
		//	data: {
		//		ref: selectId,
		//		c_position: versionList.length,
		//		c_title: $("#tooltip-enabled").val(),
		//		c_type: "default",
		//		c_title: $("#tooltip-enabled-service-version").val(),
		//		c_contents: CKEDITOR.instances["modal-editor"].getData(),
		//		c_start_date: $("#btn-enabled-date").val(),
		//		c_end_date: $("#btn-end-date").val(),
		//	},
		//	statusCode: {
		//		200: function () {
		//			console.log("성공!");
		//		},
		//	},
		//});
	};
	checkVaildation(addVersion);
});

function checkVaildation(addVersion) {
	//popup validation test
	const dateReg = /^\d{4}\/(0[1-9]|1[012])\/(0[1-9]|[12][0-9]|3[01])$/;

	if (
		!$("#tooltip-enabled-service-name").val() ||
		$("#tooltip-enabled-service-name").val().trim() === ""
	) {
		alert("Please write service name!");
		$("#tooltip-enabled-service-name").focus();
	} else if (
		!$("#tooltip-enabled-service-version").val() ||
		$("#tooltip-enabled-service-version").val().trim() === ""
	) {
		alert("Please write service version!");
		$("#tooltip-enabled-service-version").focus();
	} else if (
		!$("#btn-enabled-date").val() ||
		$("#btn-enabled-date").val().trim() === "" ||
		!$("#btn-enabled-date").val().match(dateReg)
	) {
		alert("Please check start date!");
		$("#btn-enabled-date").focus();
	} else if (
		!$("#btn-end-date").val() ||
		$("#btn-end-date").val().trim() === "" ||
		!$("#btn-end-date").val().match(dateReg)
	) {
		alert("Please check end date!");
		$("#btn-end-date").focus();
	} else if (!CKEDITOR.instances["modal-editor"].getData()) {
		alert("Please write contents!");
		CKEDITOR.instances["modal-editor"].focus();
	} else if (
		new Date($("#btn-enabled-date").val()).getTime() >
		new Date($("#btn-end-date").val()).getTime()
	) {
		alert("Please check date!");
		$("#btn-enabled-date").focus();
	} else {
		addVersion();
	}
}
