$(function () {
    setSideMenu("sidebar_menu_product", "sidebar_menu_version_manage");
    jsTreeBuild("#productTree", "pdservice");
    $(".btn-info").click(function () {
        var index = $("label.btn-sm.active").index();
        index === 0
            ? registNewServie("pdversion", "#productTree")
            : updateServie("pdversion", "#productTree");
    });
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

function jsTreeClick(selectedNode) {
    console.log("-->" + selectedNode.attr("id").replace("node_", ""));
    console.log("->" + selectedNode.find("a.jstree-clicked").siblings('.jstree-icon').text() + "<-");
    var tempNode = selectedNode.find("a.jstree-clicked").siblings('.jstree-icon');
    tempNode.trigger('click');
    console.log("여기:" + tempNode);
    var getSelectedText = selectedNode.find("a.jstree-clicked").text().trimStart();
    console.log(getSelectedText);
    $("#product-input").val(getSelectedText);

    checkEqualSelectedNode(selectedNode);
    dataLoad(selectedNode.attr("id").replace("node_", ""), getSelectedText);
}

function checkEqualSelectedNode(selectedNode){
    var getSelectedText = selectedNode.find("a.jstree-clicked").text().trimStart();

    var inputText = $("#product-input").val();
    if(getSelectedText == inputText){
        console.log("동일하다 선택된 값이다.");
        $('.updatemode').click();
    }else{
        console.log("값이 틀리다.");
        $('.newmode').click();
    }
}

function dataLoad(getSelectedText, selectedText) {
    // ajax 처리 후 에디터 바인딩.
    console.log(getSelectedText);
    $.ajax("/auth-user/api/arms/pdversion/getVersion.do?c_id=" + getSelectedText)
        .done(function (json) {
            console.log(json);
            $("#versionAccordion").jsonMenu("set", json, { speed: 5000 });
            //version text setting
            $(".list-group-item").text(selectedText);
        })
        .fail(function (jqXHR) {
            console.log("error");
        })
        .always(function (jqXHR) {
            console.log("finished");
        });
}