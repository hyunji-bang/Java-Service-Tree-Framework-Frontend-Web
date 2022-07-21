// --- 사이드 메뉴 -- //
$(function () {
	setSideMenu(
		"sidebar_menu_requirement",
		"sidebar_menu_requirement_review",
		"requirement-elements-collapse"
	);

	makeTemplate("./js/reviewClassify.do", makeClassifyMenus);
	makeTemplate("./js/reviewList.do", makeReviewList);
});

function makeTemplate(url, bindTemplate) {
	getData(url).then((data) => bindTemplate(data));
}

const getData = (url) => {
	const data = fetch(url).then((response) => {
		return response.json();
	});

	return data;
};

// make review classify menu
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

// make review list
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
	const li = ev.target.parentNode;
	for (const item of ev.currentTarget.children) {
		item.classList.remove("active");
	}

	li.classList.add("active");

	// 서버에서 필터 될 때 사용
	// makeTemplate("./js/reviewList.do", makeReviewList);

	// 분류 예제 코드
	const data = await getData("./js/reviewList.do");
	const order = Number(li.dataset.order);
	makeReviewList(
		order ? data.filter((item) => item.order === Number(li.dataset.order)) : data
	);
});
