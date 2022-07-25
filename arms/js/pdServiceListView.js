$(function () {
	//url 파라미터 파서
	var getUrlParameter = function getUrlParameter(sParam) {
		var sPageURL = window.location.search.substring(1),
			sURLVariables = sPageURL.split("&"),
			sParameterName,
			i;

		for (i = 0; i < sURLVariables.length; i++) {
			sParameterName = sURLVariables[i].split("=");

			if (sParameterName[0] === sParam) {
				return sParameterName[1] === undefined
					? true
					: decodeURIComponent(sParameterName[1]);
			}
		}
		return false;
	};

	var c_id = getUrlParameter("c_id");
	console.log(c_id);

	// --- 에디터 설정 --- //
	CKEDITOR.replace("editor");
	CKEDITOR.config.readOnly = false;
	CKEDITOR.on("instanceReady", function (ev) {
		var height = $(document).height() - 450;
		$(".cke_contents").css("height", height + "px");
	});

	// ajax 처리 후 에디터 바인딩.
	$.ajax({
		url: "/auth-user/api/arms/pdservice/getNode.do?c_id=" + c_id,
		dataType: "json",
		async: false,
		success: function (data) {
			CKEDITOR.instances.editor.setData(data.c_contents);
			var pdServiceNameplaceHolder = $("#pdServiceTitle").attr("placeholder");
			$("#pdServiceTitle").attr(
				"placeholder",
				pdServiceNameplaceHolder + " " + data.c_title
			);
		},
	});

	$("#regist").click(function () {
		CKupdate();
		var formData = $("#editor").html();
		console.log(formData);
		$.ajax({
			type: "POST",
			url: "/auth-user/api/arms/pdservice/updateContentsToNode.do",
			cache: false,
			data: { c_id: c_id, c_contents: formData },
			dataType: "json",
			success: function (res) {
				if (res == "1") {
					alert("등록이 정상적으로 되었습니다.");
					//$(location).attr('href',getContextPath()+'/main.do'); //메인화면으로 이동
					console.log(res);
				} else if (res.result == "400") {
					alert("등록이 실패하였습니다.");
				}
			},
			error: onError,
		});
	});

	//ajax on error
	function onError(data, status) {
		alert("ajax error");
	}

	//AJAX 로 폼의 데이터를 전송할 때 CKEDITOR로 변환 된 textarea값을 다시 변경해줘야 데이터가 전달된다.
	function CKupdate() {
		for (instance in CKEDITOR.instances)
			CKEDITOR.instances[instance].updateElement();
	}

	setSideMenu("sidebar_menu_product", "sidebar_menu_product_list");
});
