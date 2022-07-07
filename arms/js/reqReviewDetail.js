// --- 사이드 메뉴 -- //
$(function () {
	setSideMenu(
		"sidebar_menu_requirement",
		"sidebar_menu_requirement_review",
		"requirement-elements-collapse"
	);
});

const info = {
	title: "리뷰 bla bla bla bla bla",
	history: [
		{
			updated: "2022-07-07 23:18",
			description: "history summary 5",
			value: 5,
		},
		{
			updated: "2022-06-29 14:08",
			description: "history summary 4",
			value: 4,
		},
		{
			updated: "2022-06-01 18:37",
			description: "history summary 3",
			value: 3,
		},
		{
			updated: "2022-05-27 11:59",
			description: "history summary 2",
			value: 2,
		},
		{
			updated: "2022-05-07 10:23",
			description: "history summary15",
			value: 1,
		},
	],
};

function makeHistory() {
	const historys = document.querySelector(".review-history");

	let lists = "";

	info.history.forEach((item) => {
		lists += `
			<li class="mt-xs mb-xs" data-id="${item.value}">
                <div>${item.description}</div>
                <time>${item.updated}</time>
            </li>
		`;
	});

	historys.innerHTML = lists;
}

makeHistory();
