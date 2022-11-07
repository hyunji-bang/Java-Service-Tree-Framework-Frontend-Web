let selectId; // 제품 아이디
let selectName; // 제품 이름
let versionList; // 선택한 제품 리스트
let selectVersion; // 선택한 버전 아이디

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

// document ready
$(function () {

	//사이드 메뉴 처리
	setSideMenu("sidebar_menu_product", "sidebar_menu_version_manage");

    // DataPicker 처리 부분 ( 팝업 레이어 )
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

// --- 데이터 테이블 설정 --- //
$(function () {

	// 데이터 테이블 컬럼 및 열그룹 구성
	var columnList = [
		{ data: "c_id" },
		{ data: "c_title" },
	];
	var rowsGroupList = [];
	dataTableBuild("#pdserviceTable","pdservice", columnList, rowsGroupList);

	// ----- 데이터 테이블 빌드 이후 별도 스타일 구성 ------ //
	//datatable 좌상단 datarow combobox style
	$("body").find("[aria-controls='pdserviceTable']").css("width", "100px");
	$("select[name=pdserviceTable_length]").css("width", "50px");
});

// 데이터 테이블 구성 이후 꼭 구현해야 할 메소드 : 열 클릭시 이벤트
function dataTableClick(selectedData){
	$("#versionContents").html("");
	selectId = selectedData.c_id;
	selectName = selectedData.c_title;
	console.log(selectedData.c_id);
	dataLoad(selectedData.c_id, selectedData.c_title);
}

// 버전 삭제 버튼
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

// 버전 업데이트 저장 버튼
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


// 신규 버전 등록 버튼
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

//버전 리스트를 재로드하는 함수 ( 버전 추가, 갱신, 삭제 시 호출 )
function dataLoad(getSelectedText, selectedText) {

	// ajax 처리 후 에디터 바인딩.
	console.log("dataLoad :: getSelectedID -> " + getSelectedText);
	$.ajax("/auth-user/api/arms/pdversion/getVersion.do?c_id=" + getSelectedText)
		.done(function (json) {
			console.log("dataLoad :: success -> ", json);
			$("#versionAccordion").jsonMenu("set", json, { speed: 5000 });
			versionList = json;
			//version text setting
			$(".list-group-item").text(selectedText);
			$("#tooltip-enabled-service-name").val(selectedText);

            //데이터 로드를 사용자에게 알리기
			Messenger().post({
				message: 'Version Data 조회를 완료하였습니다.',
				type: 'success',
				showCloseButton: true
			});
		});
}

// versionlist 이니셜라이즈
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
			   </div>`;
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