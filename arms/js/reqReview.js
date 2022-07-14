// --- 사이드 메뉴 -- //
$(function () {
    setSideMenu(
        "sidebar_menu_requirement",
        "sidebar_menu_requirement_review",
        "requirement-elements-collapse"
    );
});

// 요구사항 상세 보기 클릭 이벤트
$("#selectView").click(function () {
    location.href = "reqReviewDetail.html";
});