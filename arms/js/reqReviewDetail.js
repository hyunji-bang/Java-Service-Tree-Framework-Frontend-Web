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
			updated: new Date().toISOString(),
			description: "history summary 1",
			value: 1,
		},
		{
			updated: new Date().toISOString(),
			description: "history summary 2",
			value: 2,
		},
		{
			updated: new Date().toISOString(),
			description: "history summary 3",
			value: 3,
		},
		{
			updated: new Date().toISOString(),
			description: "history summary 4",
			value: 4,
		},
		{
			updated: new Date().toISOString(),
			description: "history summary 5",
			value: 5,
		},
	],
};

function makeHistory() {
	const historys = document.querySelector(".review-history");

	let lists = "";

	info.history.forEach((item) => {
		lists += `
			<li class="dd-item" data-id="${item.value}">
                <div class="dd-handle">${item.description}</div>
                <time>${item.updated}</time>
            </li>
		`;
	});

	historys.innerHTML = lists;
}

makeHistory();
