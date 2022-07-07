// --- 사이드 메뉴 -- //
$(function () {
    setSideMenu();
});

function setSideMenu() {
    console.log("===============");
    setTimeout(function(){
        $('#sidebar_menu_wizard').addClass("active");
        $('#sidebar_menu_wizard').css({'color':'lightblue'});

        $('.progress-bar-inverse').css({'background-image':'linear-gradient(to bottom, lightblue 0%, lightblue 100%)'});
    },1000);
}