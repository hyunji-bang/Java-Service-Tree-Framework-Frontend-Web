// --- 사이드 메뉴 -- //
$(function () {
    setSideMenu();
});

let rowData = null;

function setSideMenu() {
    setTimeout(function(){
        $('#sidebar_menu_requirement').attr("class","accordion-toggle active");
        $('#sidebar_menu_requirement').attr("aria-expanded","true");
        $('#sidebar_menu_requirement').css({'color':'lightblue'});
        $('#sidebar_menu_requirement').css({'font-weight':'900'});

        $('#requirement-elements-collapse').attr("class","panel-collapse collapse in");
        $('#requirement-elements-collapse').attr("aria-expanded","true");

        $('#sidebar_menu_requirement_review').addClass("active");
        $('#sidebar_menu_requirement_review').css({'color':'lightblue'});
        $('#sidebar_menu_requirement_review').css({'font-weight':'900'});
    },1000);
}

// --- 데이터 테이블 설정 --- //
$(function () {
    jstreeDataTableReload();
    $('.dataTables_length').find('select:eq(0)').addClass("darkBack");
    $('.dataTables_length').find('select:eq(0)').css('min-height','30px');
    //min-height: 30px;

    // $("body").find("[aria-controls='jstreeTable']").css('width', '100px');
});

function jstreeDataTableReload() {

    console.log("href: "+$(location).attr('href'));
    console.log("protocol: "+$(location).attr('protocol'));
    console.log("host: "+$(location).attr('host'));
    console.log("pathname: "+$(location).attr('pathname'));
    console.log("search: "+$(location).attr('search'));
    console.log("hostname: "+$(location).attr('hostname'));
    console.log("port: "+$(location).attr('port'));

    var isDevelopingToRoute = "/auth-user";

    var data = [
        // ['aRMS Product', 'REQ-Auth-13', 'JIRA-Dev-Backend v.1.3.1', 'ISSUE-DEV-01', 'TEST-REQ-01', 'Resolved'],
        {
            review_type: 0,
            product: "aRMS Product",
            requirements: "REQ-Auth-13",
            jira_project: "JIRA-Dev-Backend v.1.3.1",
            issue: "ISSUE-DEV-01",
            qa_test: "TEST-REQ-01",
            status: "Resolved",
            modified: "이반장",
            worker: "함수원",
            start_date: "2022-06-25",
            modify_date: "2022-07-03",
        },
        {
            review_type: 1,
            product: "aRMS Product",
            requirements: "REQ-Auth-13",
            jira_project: "JIRA-Dev-Backend v.1.3.1",
            issue: "ISSUE-DEV-01",
            qa_test: "TEST-REQ-01",
            status: "Resolved",
            modified: "이반장",
            worker: "함수원",
            start_date: "2022-06-25",
            modify_date: "2022-07-03",
        },
        {
            review_type: 2,
            product: "aRMS Product",
            requirements: "REQ-Auth-13",
            jira_project: "JIRA-Dev-Backend v.1.3.1",
            issue: "ISSUE-DEV-01",
            qa_test: "TEST-REQ-01",
            status: "Resolved",
            modified: "이반장",
            worker: "함수원",
            start_date: "2022-06-25",
            modify_date: "2022-07-03",
        },
        {
            review_type: 0,
            product: "aRMS Product",
            requirements: "REQ-Auth-13",
            jira_project: "JIRA-Dev-Backend v.1.3.1",
            issue: "ISSUE-DEV-01",
            qa_test: "TEST-REQ-01",
            status: "Resolved",
            modified: "이반장",
            worker: "함수원",
            start_date: "2022-06-25",
            modify_date: "2022-07-03",
        },
        {
            review_type: 1,
            product: "aRMS Product",
            requirements: "REQ-Auth-13",
            jira_project: "JIRA-Dev-Backend v.1.3.1",
            issue: "ISSUE-DEV-01",
            qa_test: "TEST-REQ-01",
            status: "Resolved",
            modified: "이반장",
            worker: "함수원",
            start_date: "2022-06-25",
            modify_date: "2022-07-03",
        },
        {
            review_type: 2,
            product: "aRMS Product",
            requirements: "REQ-Auth-13",
            jira_project: "JIRA-Dev-Backend v.1.3.1",
            issue: "ISSUE-DEV-01",
            qa_test: "TEST-REQ-01",
            status: "Resolved",
            modified: "이반장",
            worker: "함수원",
            start_date: "2022-06-25",
            modify_date: "2022-07-03",
        }
    ];

    var tempDataTable = $('#jstreeTable').DataTable({
        "destroy": true,
        "processing": true,
        "select": true,
        ordering: false,
        scrollX: true,
        columns: [
            {
               title: '',
               data: 'review_type',
               render: function (data, type) {
                    if (type === 'display') {
                        let icon = data ? data === 1 ? 'fa-pencil-square-o' : 'fa-exclamation-triangle' : 'fa-paper-plane-o';
                        return `<i class="fa ${icon}">`;
                    }
                    return data;
                }
            },
            {
                title: '제품(서비스)',
                data: 'product'
            },
            {
                title: '요구사항',
                data: 'product'
            },
            {
                title: 'JIRA Project',
                data: 'jira_project'
            },
            {
                title: 'Issue',
                data: 'issue'
            },
            {
                title: 'QA',
                data: 'qa_test'
            },
            {
                title: 'Status - Test',
                data: 'status'
            },
            {
                title: '생성일',
                data: 'start_date'
            },
            {
                title: '작업자',
                data: 'worker'
            },
            {
                title: '수정자',
                data: 'modified'
            },
            {
                title: '수정일',
                data: 'modify_date'
            },
        ],
        data: data,
    });

    $('#jstreeTable tbody').on('click', 'tr', function () {
        var data = tempDataTable.row( this ).data();
        console.log(tempDataTable, data);
        //alert( 'You clicked on '+ data.c_title +'\'s row' );
        rowData = data
    } );
}

// 요구사항 상세 보기 클릭 이벤트
$( "#selectView" ).click(function() {
    console.log("#### selectView click!!")
});
