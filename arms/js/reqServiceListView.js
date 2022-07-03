$(function () {
    // --- 에디터 설정 --- //
    CKEDITOR.replace( 'editor' );
    CKEDITOR.config.readOnly = true;
    CKEDITOR.on('instanceReady', function(ev) {
        var height = $( document ).height() -450;
        $('.cke_contents').css('height',height+'px');
    });

    setSideMenu();

});

function setSideMenu() {
    setTimeout(function(){
        $('#sidebar_menu_requirement').attr("class","accordion-toggle active");
        $('#sidebar_menu_requirement').attr("aria-expanded","true");
        $('#sidebar_menu_requirement').css({'color':'lightblue'});
        $('#sidebar_menu_requirement').css({'font-weight':'900'});

        $('#requirement-elements-collapse').attr("class","panel-collapse collapse in");
        $('#requirement-elements-collapse').attr("aria-expanded","true");

        $('#sidebar_menu_requirement_list').addClass("active");
        $('#sidebar_menu_requirement_list').css({'color':'lightblue'});
        $('#sidebar_menu_requirement_list').css({'font-weight':'900'});
    },1000);
}

// 요구사항 조회 돌아가기 클릭 이벤트
$('#selectList').click(function () {
    location.href="reqServiceList.html";
})