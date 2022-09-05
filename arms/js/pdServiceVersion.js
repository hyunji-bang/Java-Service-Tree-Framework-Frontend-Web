$(function () {
    setSideMenu("sidebar_menu_product", "sidebar_menu_version_manage");
});

// --- 데이터 테이블 설정 --- //
$(function () {
    jstreeDataTableReload();
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
        columns: [
            { data: "c_id" },
            { data: "c_title" }
        ],
        columnDefs: [
            {
                targets: -1,
                className: 'dt-body-left'
            }
        ]
    });

    $("#pdserviceTable tbody").on("click", "tr", function () {

        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        } else {
            tempDataTable.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }

        var data = tempDataTable.row(this).data();
        console.log(data.c_id);
        dataLoad(data.c_id, data.c_title);
    });
}

// --- 에디터 설정 --- //
//CKEDITOR.replace("editor");
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