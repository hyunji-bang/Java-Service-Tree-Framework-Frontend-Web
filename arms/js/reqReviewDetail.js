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
			title: "history summary 5",
			label: "success",
			status: "success",
			value: 5,
		},
		{
			updated: "2022-06-29 14:08",
			title: "history summary 4",
			label: "important",
			status: "important",
			value: 4,
		},
		{
			updated: "2022-06-01 18:37",
			title: "history summary 3",
			label: "info",
			status: "info",
			value: 3,
		},
		{
			updated: "2022-05-27 11:59",
			title: "history summary 2",
			label: "warning",
			status: "warning",
			value: 2,
		},
		{
			updated: "2022-05-07 10:23",
			title: "history summary15",
			label: "inverse",
			status: "등록",
			value: 1,
		},
	],
};

function makeHistory() {
	const historys = document.querySelector(".review-history");

	let lists = "";

	info.history.forEach((item, index) => {
		const uid = createdUUID();
		lists += `
			<li class="timeline-item" data-value="${item.value}">
					<span class="timeline-icon label label-${item.label}">${item.status}</span>
					<h5 class="fw-bold">${item.title}</h5>
					<p class="text-muted mb-2 fw-bold">${item.updated}</p>

					<p class="text-muted">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
						necessitatibus adipisci, ad alias, voluptate pariatur officia repellendus
						repellat inventore fugit perferendis totam dolor voluptas et corrupti
						distinctio maxime corporis optio?
					</p>
				</li>
		`;
	});

	historys.innerHTML = lists;
}

makeHistory();
