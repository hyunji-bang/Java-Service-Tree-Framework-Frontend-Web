let selectId; // 제품 아이디
let selectName; // 제품 이름
let versionList; // 선택한 제품 리스트
let selectVersion; // 선택한 버전 아이디

// --- 에디터 설정 --- //
//CKEDITOR.replace("editor");
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

	setSideMenu("sidebar_menu_product", "sidebar_menu_product_manage");

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
	selectId = selectedData.c_id;
	selectName = selectedData.c_title;
	console.log(selectedData.c_id);
	pdServiceDataTableClick(selectedData.c_id);
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
			$("#editView-pdService-owner").val(json.c_owner);
			$("#editView-pdService-reviewer01").val(json.c_reviewer01);
			$("#editView-pdService-reviewer02").val(json.c_reviewer02);
			$("#editView-pdService-reviewer03").val(json.c_reviewer03);
			$("#editView-pdService-reviewer04").val(json.c_reviewer04);
			$("#editView-pdService-reviewer05").val(json.c_reviewer05);

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