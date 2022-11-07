let selectId; // 제품 아이디
let selectName; // 제품 이름
let versionList; // 선택한 제품 리스트
let selectVersion; // 선택한 버전 아이디

// --- 에디터 설정 --- //
CKEDITOR.replace("input_pdservice_editor");
CKEDITOR.replace("modal-editor");

// --- 팝업 띄울때 사이즈 조정 -- //
$("#modalPopupId").click(function () {
	var height = $(document).height() - 600;
	console.log("height -> " + height);
	$(".modal-body")
		.find(".cke_contents:eq(0)")
		.css("height", height + "px");
});

// --- select2 설정 --- //
$(".js-data-example-ajax").select2({
	maximumSelectionLength: 5,
	width: 'resolve',
	ajax: {
		url: function (params) {
			return '/auth-check/getUsers/' + params.term;
		},
        dataType: "json",
        delay: 250,
        //data: function (params) {
        //    return {
        //        q: params.term, // search term
        //        page: params.page,
        //    };
        //},
        processResults: function (data, params) {
            // parse the results into the format expected by Select2
            // since we are using custom formatting functions we do not need to
            // alter the remote JSON data, except to indicate that infinite
            // scrolling can be used
            params.page = params.page || 1;

            return {
                results: data,
                pagination: {
                    more: params.page * 30 < data.total_count,
                },
            };
        },
        cache: true,
    },
    placeholder: "리뷰어 설정을 위한 계정명을 입력해 주세요",
    minimumInputLength: 1,
    templateResult: formatUser,
    templateSelection: formatRepoSelection,
});

function formatUser(jsonData) {
	var $container = $(
		"<div class='select2-result-jsonData clearfix'>" +
		"<div class='select2-result-jsonData__meta'>" +
		"<div class='select2-result-jsonData__username'><i class='fa fa-flash'></i></div>" +
		"<div class='select2-result-jsonData__id'><i class='fa fa-star'></i></div>" +
		"</div>" +
		"</div>"
	);

	$container.find(".select2-result-jsonData__username").text(jsonData.username);
	$container
		.find(".select2-result-jsonData__id")
		.text(jsonData.id);

	return $container;
}

function formatRepoSelection(jsonData) {

	if( jsonData.id == '' ){
		jsonData.text = "placeholder";
	}else{

		if(jsonData.username == undefined){
			jsonData.text = jsonData.id;
		}else{
			jsonData.text = "[" + jsonData.username + "] - "+ jsonData.id;
		}

	}
	return jsonData.text;
}

$('#popup-editView-pdService-reviewer').on('select2:selecting', function (e) {
	var heightValue = $('#popup-editView-pdService-reviewer').height();
	var resultValue = heightValue + 20;
	$('#popup-editView-pdService-reviewer').css('height',resultValue+'px');
	var data = e.params.data;
	console.log(data);
});

$('#editView-pdService-reviewers').on('select2:selecting', function (e) {
	var heightValue = $('#editView-pdService-reviewer').height();
	var resultValue = heightValue + 20;
	$('#editView-pdService-reviewer').css('height',resultValue+'px');
	var data = e.params.data;
	console.log(data);
});
// Code for the menu buttons

// 신규 버전 등록 버튼
$("#regist-pdService").click(function () {
	console.log("save btn");
	var reviewers01 = "none";
	var reviewers02 = "none";
	var reviewers03 = "none";
	var reviewers04 = "none";
	var reviewers05 = "none";
	if($('#editView-pdService-reviewers').select2('data')[0] != undefined){
		reviewers01 = $('#editView-pdService-reviewers').select2('data')[0].text;
	}
	if($('#editView-pdService-reviewers').select2('data')[1] != undefined){
		reviewers02 = $('#editView-pdService-reviewers').select2('data')[1].text;
	}
	if($('#editView-pdService-reviewers').select2('data')[2] != undefined){
		reviewers03 = $('#editView-pdService-reviewers').select2('data')[2].text;
	}
	if($('#editView-pdService-reviewers').select2('data')[3] != undefined){
		reviewers04 = $('#editView-pdService-reviewers').select2('data')[3].text;
	}
	if($('#editView-pdService-reviewers').select2('data')[4] != undefined){
		reviewers05 = $('#editView-pdService-reviewers').select2('data')[4].text;
	}

	$.ajax({
		url: "/auth-user/api/arms/pdservice/addNode.do",
		type: "POST",
		data: {
			ref: 2,
			c_title: $("#popup-editView-pdService-name").val(),
			c_type: "default",
			c_owner: $('#popup-editView-pdService-owner').select2('data')[0].text,
			c_reviewer01: reviewers01,
			c_reviewer02: reviewers02,
			c_reviewer03: reviewers03,
			c_reviewer04: reviewers04,
			c_reviewer05: reviewers05,
			c_contents: CKEDITOR.instances["modal-editor"].getData(),
		},
		statusCode: {
			200: function () {
				console.log("성공!");
				//모달 팝업 끝내고
				$('#close-pdService').trigger('click');
				//버전 데이터 재 로드
			},
		},
	});
});

// document ready
$(function () {

	// 사이드 메뉴 색상 설정
	setSideMenu("sidebar_menu_product", "sidebar_menu_product_manage");

	// 파일 업로드 관련 레이어 숨김 처리
	$('.body-middle').hide();

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

// 탭 클릭 이벤트
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
	var target = $(e.target).attr("href") // activated tab

	console.log("selectId - " + selectId);

	if( target == "#dropdown1"){
		$('.body-middle').hide();
	}else{
		if( selectId == undefined ){
			$('.body-middle').hide();
		}else{
			$('.body-middle').show();
		}
	}
});

// 데이터 테이블 구성 이후 꼭 구현해야 할 메소드 : 열 클릭시 이벤트
function dataTableClick(selectedData){
	selectId = selectedData.c_id;
	$('#fileIdLink').val(selectedData.c_id);
	console.log("selectedData.c_id -> " + selectedData.c_id);
	selectName = selectedData.c_title;
	pdServiceDataTableClick(selectedData.c_id);

	//파일 업로드 관련 레이어 보이기 처리
	$('.body-middle').show();

	// Load existing files:
	var $fileupload = $('#fileupload');
	// Load existing files:
	$.ajax({
		// Uncomment the following to send cross-domain cookies:
		//xhrFields: {withCredentials: true},
		url: '/auth-user/api/arms/fileRepository/getFilesByNode.do',
		data: { c_id: 1, fileIdLink: selectId },
		dataType: 'json',
		context: $fileupload[0]
	}).done(function (result) {
		$(this).fileupload('option', 'done').call(this, null, {result: result});
	});

}

//제품(서비스) 클릭할 때 동작하는 함수
//1. 상세보기 데이터 바인딩
//2. 편집하기 데이터 바인딩
function pdServiceDataTableClick(c_id) {

	selectVersion = c_id;

	$.ajax({
		url: "/auth-user/api/arms/pdservice/getNode.do", // 클라이언트가 HTTP 요청을 보낼 서버의 URL 주소
		data: { c_id: c_id }, // HTTP 요청과 함께 서버로 보낼 데이터
		method: "GET", // HTTP 요청 메소드(GET, POST 등)
		dataType: "json", // 서버에서 보내줄 데이터의 타입
	})
	// HTTP 요청이 성공하면 요청한 데이터가 done() 메소드로 전달됨.
		.done(function (json) {
			console.log(" -> " + json.c_contents);

			$("#detailView-pdService-name").text(json.c_title);
			$("#detailView-pdService-owner").text(json.c_owner);
			$("#detailView-pdService-reviewer01").text(json.c_reviewer01);
			$("#detailView-pdService-reviewer02").text(json.c_reviewer02);
			$("#detailView-pdService-reviewer03").text(json.c_reviewer03);
			$("#detailView-pdService-reviewer04").text(json.c_reviewer04);
			$("#detailView-pdService-reviewer05").text(json.c_reviewer05);
			$("#detailView-pdService-contents").html(json.c_contents);

			$("#editView-pdService-name").val(json.c_title);

			//clear
			$('#editView-pdService-owner').val(null).trigger('change');
			//owner 바인딩
			var newOption = new Option(json.c_owner, json.c_owner, true, true);
			$('#editView-pdService-owner').append(newOption).trigger('change');

			//clear
			$('#editView-pdService-reviewers').val(null).trigger('change');
			var reviewer01Option = new Option(json.c_reviewer01, json.c_reviewer01, true, true);
			var reviewer02Option = new Option(json.c_reviewer02, json.c_reviewer02, true, true);
			var reviewer03Option = new Option(json.c_reviewer03, json.c_reviewer03, true, true);
			var reviewer04Option = new Option(json.c_reviewer04, json.c_reviewer04, true, true);
			var reviewer05Option = new Option(json.c_reviewer05, json.c_reviewer05, true, true);

			var multifyValue = 1;
			console.log(json.c_reviewer03);
			if(json.c_reviewer01 != "none"){
				multifyValue = multifyValue + 1;
				$('#editView-pdService-reviewers').append(reviewer01Option);
			}
			if(json.c_reviewer02 != "none"){
				multifyValue = multifyValue + 1;
				$('#editView-pdService-reviewers').append(reviewer02Option);
			}
			if(json.c_reviewer03 != "none"){
				multifyValue = multifyValue + 1;
				$('#editView-pdService-reviewers').append(reviewer03Option);
			}
			if(json.c_reviewer04 != "none"){
				multifyValue = multifyValue + 1;
				$('#editView-pdService-reviewers').append(reviewer04Option);
			}
			if(json.c_reviewer05 != "none"){
				multifyValue = multifyValue + 1;
				$('#editView-pdService-reviewers').append(reviewer05Option);
			}

			$('#editView-pdService-reviewers')
				.trigger('change');

			CKEDITOR.instances.input_pdservice_editor.setData(json.c_contents);

            $('#editView-pdService-reviewer').css('height','20px');
            setTimeout(function () {
                var heightValue = $('#editView-pdService-reviewer').height();
                console.log("multifyValue ==" + multifyValue);
                var resultValue = heightValue + ( 20 * multifyValue );
                console.log("resultValue == " + resultValue);
                $('#editView-pdService-reviewer').css('height',resultValue+'px');
            }, 250);
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

// 제품(서비스) 변경 저장 버튼
$("#pdServiceUpdate").click(function () {

	var reviewers01 = "none";
	var reviewers02 = "none";
	var reviewers03 = "none";
	var reviewers04 = "none";
	var reviewers05 = "none";
	if($('#editView-pdService-reviewers').select2('data')[0] != undefined){
		reviewers01 = $('#editView-pdService-reviewers').select2('data')[0].text;
	}
	if($('#editView-pdService-reviewers').select2('data')[1] != undefined){
		reviewers02 = $('#editView-pdService-reviewers').select2('data')[1].text;
	}
	if($('#editView-pdService-reviewers').select2('data')[2] != undefined){
		reviewers03 = $('#editView-pdService-reviewers').select2('data')[2].text;
	}
	if($('#editView-pdService-reviewers').select2('data')[3] != undefined){
		reviewers04 = $('#editView-pdService-reviewers').select2('data')[3].text;
	}
	if($('#editView-pdService-reviewers').select2('data')[4] != undefined){
		reviewers05 = $('#editView-pdService-reviewers').select2('data')[4].text;
	}

	$.ajax({
		url: "/auth-user/api/arms/pdservice/updatePdServiceNode.do",
		type: "POST",
		data: {
			c_id: $('#pdserviceTable').DataTable().rows('.selected').data()[0].c_id,
			c_title: $("#editView-pdService-name").val(),
			c_owner: $('#editView-pdService-owner').select2('data')[0].text,
            c_reviewer01: reviewers01,
			c_reviewer02: reviewers02,
			c_reviewer03: reviewers03,
			c_reviewer04: reviewers04,
			c_reviewer05: reviewers05,
			c_contents: CKEDITOR.instances["input_pdservice_editor"].getData(),
		},
		statusCode: {
			200: function () {
				console.log("성공!");
				//모달 팝업 끝내고
			},
		},
	});
});


/** file upload **/
$(function () {
	'use strict';

	// Initialize the jQuery File Upload widget:
	var $fileupload = $('#fileupload');
	$fileupload.fileupload({
		// Uncomment the following to send cross-domain cookies:
		//xhrFields: {withCredentials: true},
		autoUpload: true,
		url: '/auth-user/api/arms/pdservice/uploadFileToNode.do',
		dropZone: $('#dropzone')
	});

	// Enable iframe cross-domain access via redirect option:
	$fileupload.fileupload(
		'option',
		'redirect',
		window.location.href.replace(
			/\/[^\/]*$/,
			'/cors/result.html?%s'
		)
	);

	// Load existing files:
	$.ajax({
		// Uncomment the following to send cross-domain cookies:
		//xhrFields: {withCredentials: true},
		url: $fileupload.fileupload('option', 'url'),
		dataType: 'json',
		context: $fileupload[0]
	}).done(function (result) {
		$(this).fileupload('option', 'done').call(this, null, {result: result});
	});

});

$('#fileupload').bind('fileuploadsubmit', function (e, data) {
	// The example input, doesn't have to be part of the upload form:
	var input = $('#fileIdLink');
	data.formData = {fileIdLink: input.val()};
	if (!data.formData.fileIdLink) {
		data.context.find('button').prop('disabled', false);
		input.focus();
		return false;
	}
});