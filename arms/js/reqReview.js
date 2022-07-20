// --- 사이드 메뉴 -- //
$(function () {
	setSideMenu(
		"sidebar_menu_requirement",
		"sidebar_menu_requirement_review",
		"requirement-elements-collapse"
	);

	makeReviewClassify();
	makeReviewContents();
});
async function makeReviewClassify() {
	const data = await getData("./js/reviewClassify.do");
	makeClassifyMenus(data);
}
function makeClassifyMenus(data) {
	const reviewClassify = document.getElementById("review-classify");
	let menus = "";
	data.forEach(
		(item) =>
			(menus += `
		<li class="${item.current ? "active" : ""}" data-order="${item.order}">
			<a href="#">${item.name}</a>
		</li>
	`)
	);
	reviewClassify.innerHTML = menus;
}
// review list define
async function makeReviewContents() {
	const data = await getData("./js/reviewList.do");
	makeReviewList(data);
}
const getData = (url) => {
	const data = fetch(url).then((response) => {
		return response.json();
	});

	return data;
};
function makeReviewList(data) {
	const reviewList = document.getElementById("review-list");
	let list = "";
	data.forEach(
		(item) =>
			(list += `
		<tr data-id="${item.id}">
		<td class="tiny-column"><i class="fa fa-star"></i></td>
		<td class="name">${item.register}</td>
		<td>${item.requirements}</td>
		<td class="date">${dateFormat(item.timestamp)}</td>
		</tr>
	`)
	);

	reviewList.innerHTML = list;
}

const dateFormat = (time = 0) => {
	let date = time ? new Date(time).toISOString() : new Date().toISOString();
	return date.split("T")[0];
};

// reviwe click
$("#review-list").click(function (ev) {
	const row = ev.target.parentNode.dataset;
	location.href = `reqReviewDetail.html?id=${row.id}`;
});

// side menu click
$("#review-classify").click(async function (ev) {
	for (const item of ev.currentTarget.children) {
		item.classList.remove("active");
	}

	ev.target.parentNode.classList.add("active");

	// const data = await getReviewList("./js/reviewList.do");
});
