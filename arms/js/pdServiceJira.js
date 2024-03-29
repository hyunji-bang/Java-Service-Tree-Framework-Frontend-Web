let selectId; // 제품 아이디
let selectName; // 제품 이름
let selectedIndex; // 데이터테이블 선택한 인덱스
let selectedPage; // 데이터테이블 선택한 인덱스
let selectVersion; // 선택한 버전 아이디
let selectVersionName; // 선택한 버전 이름
let dataTableRef; // 데이터테이블 참조 변수
let selectConnectID; // 제품(서비스) - 버전 - 지라 연결 정보 아이디
let versionList;

$(function () {

	setSideMenu("sidebar_menu_product", "sidebar_menu_product_jira_connect");

	dataTableLoad();

});

// --- 데이터 테이블 설정 --- //
function dataTableLoad() {
	// 데이터 테이블 컬럼 및 열그룹 구성
	var columnList = [
		{ data: "c_id" },
		{ data: "c_title" },
	];
	var rowsGroupList = [];
	dataTableRef = dataTableBuild("#pdserviceTable","pdservice", "/getPdServiceMonitor.do",columnList, rowsGroupList);

	// ----- 데이터 테이블 빌드 이후 별도 스타일 구성 ------ //
	//datatable 좌상단 datarow combobox style
	$("body").find("[aria-controls='pdserviceTable']").css("width", "100px");
	$("select[name=pdserviceTable_length]").css("width", "50px");
}

// 데이터 테이블 구성 이후 꼭 구현해야 할 메소드 : 열 클릭시 이벤트
function dataTableClick(selectedData){
	selectedIndex = selectedData.selectedIndex;
	selectedPage = selectedData.selectedPage;
	selectId = selectedData.c_id;
	selectName = selectedData.c_title;
	$("#versionContents").html("");
	
	// 연계 이벤트 - 버전 리스트 로드
	dataLoad(selectedData.c_id, selectedData.c_title);

	// D3 업데이트
	updateD3ByDataTable();
}

// 버전 리스트를 재로드하는 함수 ( 버전 추가, 갱신, 삭제 시 호출 )
function dataLoad(getSelectedText, selectedText) {

	// ajax 처리 후 에디터 바인딩.
	console.log("dataLoad :: getSelectedID -> " + getSelectedText);
	$.ajax("/auth-user/api/arms/pdversion/getVersion.do?c_id=" + getSelectedText)
		.done(function (json) {
			console.log("dataLoad :: success -> ", json);
			versionList = json;
			$("#versionAccordion").jsonMenu("set", json, { speed: 5000 });
			//version text setting
			$(".list-group-item").text(selectedText);
			$("#tooltip-enabled-service-name").val(selectedText);

			updateD3ByVersionList();

			//데이터 로드를 사용자에게 알리기
			Messenger().post({
				message: 'Version Data 조회를 완료하였습니다.',
				type: 'success',
				showCloseButton: true
			});
		});


}

// versionlist 이니셜라이즈
(function ($) {
	let menu;
	$.fn.jsonMenu = function (action, items, options) {
		$(this).addClass("json-menu");
		if (action == "add") {
			menu.body.push(items);
			draw($(this), menu);
		} else if (action == "set") {
			menu = items;
			draw($(this), menu);
		}
		return this;
	};
})(jQuery);

// version list html 삽입
function draw(main, menu) {
	main.html("");

	let data = `
			   <li class='list-group-item json-menu-header'>
				   <strong>product service name</strong>
			   </li>`;

	for (let i = 0; i < menu.length; i++) {
		data += `
			   <div class="panel">
				   <div class="panel-heading">
					   <a class="accordion-toggle collapsed" data-toggle="collapse" href="" onclick="versionClick(${menu[i].c_id}, '${menu[i].c_title}'); return false;">
						   ${menu[i].c_title}
					   </a>
				   </div>
			   </div>`;
	}

	main.html(data);
}

//버전 클릭할 때 동작하는 함수
function versionClick(c_id, c_title) {
	selectVersion = c_id;
	selectVersionName= c_title;
 console.log("selectVersion" + selectVersion);
	$(".searchable").multiSelect('deselect_all');

	// 이미 등록된 제품(서비스)-버전-지라 연결 정보가 있는지 확인
	$.ajax({
		url: "/auth-user/api/arms/pdServiceConnect/getExistNode.do",
		type: "GET",
		data: {
			c_pdservice_id: $('#pdserviceTable').DataTable().rows('.selected').data()[0].c_id,
			c_pdservice_version_id: c_id
		},
		contentType: "application/json;charset=UTF-8",
		dataType : "json",
		progress: true
	}).done(function(data) {

		var versionClickData = [];
		for(var k in data){
			var obj = data[k];
			//var jira_name = obj.c_title;
			selectConnectID = obj.c_id;
			versionClickData.push(obj);
		}

		if(versionClickData.length == 0){
			$("#pdServiceConnect").removeClass("btn-success");
			$("#pdServiceConnect").addClass("btn-primary");
			$("#pdServiceConnect").text("제품(서비스) Jira 연결 등록");
			updateD3ByMultiSelect();
		}else{
			$("#pdServiceConnect").removeClass("btn-primary");
			$("#pdServiceConnect").addClass("btn-success");
			$("#pdServiceConnect").text("제품(서비스) Jira 연결 변경");

			console.log("jsonData[0].c_pdservice_jira_ids - " + versionClickData[0].c_pdservice_jira_ids);
			$('#multiselect').multiSelect('select', versionClickData[0].c_pdservice_jira_ids.split(","));
			updateD3ByMultiSelect();
		}


	}).fail(function(e) {
		console.log("fail call");
	}).always(function() {
		console.log("always call");
	});

}

// 제품(서비스)-버전-지라 저장
$("#pdServiceConnect").click(function () {

	if($("#pdServiceConnect").hasClass("btn-primary") === true) {

		// data가 존재하지 않음.
		$.ajax({
			url: "/auth-user/api/arms/pdServiceConnect/addNode.do",
			type: "POST",
			data: {
				ref: 2,
				c_title: "a-RMS pdService-Version-Jira Connect Data",
				c_type: "default",
				c_pdservice_id: $('#pdserviceTable').DataTable().rows('.selected').data()[0].c_id,
				c_pdservice_version_id: selectVersion,
				c_pdservice_jira_ids: JSON.stringify($('#multiselect').val()),
			},
			progress: true
		}).done(function(data) {
			versionClick(selectVersion);
		}).fail(function(e) {
			console.log("fail call");
		}).always(function() {
			console.log("always call");
		});
	} else if($("#pdServiceConnect").hasClass("btn-success") === true) {
		// data가 이미 있음
		$.ajax({
			url: "/auth-user/api/arms/pdServiceConnect/updateNode.do",
			type: "POST",
			data: {
				c_id: selectConnectID,
				c_title: "a-RMS pdService-Version-Jira Connect Data",
				c_type: "default",
				c_pdservice_id: $('#pdserviceTable').DataTable().rows('.selected').data()[0].c_id,
				c_pdservice_version_id: selectVersion,
				c_pdservice_jira_ids: JSON.stringify($('#multiselect').val()),
			},
			progress: true
		}).done(function(data) {
			versionClick(selectVersion);
		}).fail(function(e) {
			console.log("fail call");
		}).always(function() {
			console.log("always call");
		});
	} else {
		jError("who are you?");
	}
});

/* ---------------------------------------- d3 config ------------------------------------ */
/* d3 */
var treeData = {
	name: "1.제품(서비스) 선택 → 2.Version 선택 → 3.JIRA 프로젝트 선택",
	type: "a-RMS",
};
//treeJSON = d3.json(flare_data, function(error, treeData) {

// Calculate total nodes, max label length
var totalNodes = 0;
var maxLabelLength = 0;
// variables for drag/drop
var selectedNode = null;
var draggingNode = null;
// panning variables
var panSpeed = 200;
var panBoundary = 20; // Within 20px from edges will pan when dragging.
// Misc. variables
var i = 0;
var duration = 750;
var root;

// size of the diagram
//edit 313devops
//var viewerWidth = $(document).width();
//var viewerHeight = $(document).height();
var viewerWidth = $("#tree-container").outerHeight();
var viewerHeight = 295;

var tree = d3.layout.tree().size([viewerHeight, viewerWidth]);

// define a d3 diagonal projection for use by the node paths later on.
var diagonal = d3.svg.diagonal().projection(function (d) {
	return [d.y, d.x];
});

// A recursive helper function for performing some setup by walking through all nodes
function visit(parent, visitFn, childrenFn) {
	if (!parent) return;

	visitFn(parent);

	var children = childrenFn(parent);
	if (children) {
		var count = children.length;
		for (var i = 0; i < count; i++) {
			visit(children[i], visitFn, childrenFn);
		}
	}
}

// Call visit function to establish maxLabelLength
visit(
	treeData,
	function (d) {
		totalNodes++;
		maxLabelLength = Math.max(d.name.length, maxLabelLength);
	},
	function (d) {
		return d.children && d.children.length > 0 ? d.children : null;
	}
);

// sort the tree according to the node names
function sortTree() {
	tree.sort(function (a, b) {
		return b.name.toLowerCase() < a.name.toLowerCase() ? 1 : -1;
	});
}
// Sort the tree initially incase the JSON isn't in a sorted order.
sortTree();

// TODO: Pan function, can be better implemented.
function pan(domNode, direction) {
	var speed = panSpeed;
	if (panTimer) {
		clearTimeout(panTimer);
		translateCoords = d3.transform(svgGroup.attr("transform"));
		if (direction == "left" || direction == "right") {
			translateX =
				direction == "left"
					? translateCoords.translate[0] + speed
					: translateCoords.translate[0] - speed;
			translateY = translateCoords.translate[1];
		} else if (direction == "up" || direction == "down") {
			translateX = translateCoords.translate[0];
			translateY =
				direction == "up"
					? translateCoords.translate[1] + speed
					: translateCoords.translate[1] - speed;
		}
		scaleX = translateCoords.scale[0];
		scaleY = translateCoords.scale[1];
		scale = zoomListener.scale();
		svgGroup
			.transition()
			.attr(
				"transform",
				"translate(" + translateX + "," + translateY + ")scale(" + scale + ")"
			);
		d3
			.select(domNode)
			.select("g.node")
			.attr("transform", "translate(" + translateX + "," + translateY + ")");
		zoomListener.scale(zoomListener.scale());
		zoomListener.translate([translateX, translateY]);
		panTimer = setTimeout(function () {
			pan(domNode, speed, direction);
		}, 50);
	}
}

// Define the zoom function for the zoomable tree
function zoom() {
	//edit 313devops
	svgGroup.attr(
		"transform",
		"translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")"
	);
	//svgGroup.attr("transform", "translate(" + "221,79" + ")scale(" + 1.5 + ")");
}

// define the zoomListener which calls the zoom function on the "zoom" event constrained within the scaleExtents
var zoomListener = d3.behavior.zoom().scaleExtent([0.1, 3]).on("zoom", zoom);

function initiateDrag(d, domNode) {
	draggingNode = d;
	d3.select(domNode).select(".ghostCircle").attr("pointer-events", "none");
	d3.selectAll(".ghostCircle").attr("class", "ghostCircle show");
	d3.select(domNode).attr("class", "node activeDrag");

	svgGroup.selectAll("g.node").sort(function (a, b) {
		// select the parent and sort the path's
		if (a.id != draggingNode.id)
			return 1; // a is not the hovered element, send "a" to the back
		else return -1; // a is the hovered element, bring "a" to the front
	});
	// if nodes has children, remove the links and nodes
	if (nodes.length > 1) {
		// remove link paths
		links = tree.links(nodes);
		nodePaths = svgGroup
			.selectAll("path.link")
			.data(links, function (d) {
				return d.target.id;
			})
			.remove();
		// remove child nodes
		nodesExit = svgGroup
			.selectAll("g.node")
			.data(nodes, function (d) {
				return d.id;
			})
			.filter(function (d, i) {
				if (d.id == draggingNode.id) {
					return false;
				}
				return true;
			})
			.remove();
	}

	// remove parent link
	parentLink = tree.links(tree.nodes(draggingNode.parent));
	svgGroup
		.selectAll("path.link")
		.filter(function (d, i) {
			if (d.target.id == draggingNode.id) {
				return true;
			}
			return false;
		})
		.remove();

	dragStarted = null;
}

// define the baseSvg, attaching a class for styling and the zoomListener
var baseSvg = d3
	.select("#tree-container")
	.append("svg")
	.attr("width", viewerWidth)
	.attr("height", viewerHeight)
	.attr("class", "overlay")
	.call(zoomListener);

// Define the drag listeners for drag/drop behaviour of nodes.
dragListener = d3.behavior
	.drag()
	.on("dragstart", function (d) {
		if (d == root) {
			return;
		}
		dragStarted = true;
		nodes = tree.nodes(d);
		d3.event.sourceEvent.stopPropagation();
		// it's important that we suppress the mouseover event on the node being dragged. Otherwise it will absorb the mouseover event and the underlying node will not detect it d3.select(this).attr('pointer-events', 'none');
	})
	.on("drag", function (d) {
		if (d == root) {
			return;
		}
		if (dragStarted) {
			domNode = this;
			initiateDrag(d, domNode);
		}

		// get coords of mouseEvent relative to svg container to allow for panning
		relCoords = d3.mouse($("svg").get(0));
		if (relCoords[0] < panBoundary) {
			panTimer = true;
			pan(this, "left");
		} else if (relCoords[0] > $("svg").width() - panBoundary) {
			panTimer = true;
			pan(this, "right");
		} else if (relCoords[1] < panBoundary) {
			panTimer = true;
			pan(this, "up");
		} else if (relCoords[1] > $("svg").height() - panBoundary) {
			panTimer = true;
			pan(this, "down");
		} else {
			try {
				clearTimeout(panTimer);
			} catch (e) { }
		}

		d.x0 += d3.event.dy;
		d.y0 += d3.event.dx;
		var node = d3.select(this);
		node.attr("transform", "translate(" + d.y0 + "," + d.x0 + ")");
		updateTempConnector();
	})
	.on("dragend", function (d) {
		if (d == root) {
			return;
		}
		domNode = this;
		if (selectedNode) {
			// now remove the element from the parent, and insert it into the new elements children
			var index = draggingNode.parent.children.indexOf(draggingNode);
			if (index > -1) {
				draggingNode.parent.children.splice(index, 1);
			}
			if (
				typeof selectedNode.children !== "undefined" ||
				typeof selectedNode._children !== "undefined"
			) {
				if (typeof selectedNode.children !== "undefined") {
					selectedNode.children.push(draggingNode);
				} else {
					selectedNode._children.push(draggingNode);
				}
			} else {
				selectedNode.children = [];
				selectedNode.children.push(draggingNode);
			}
			// Make sure that the node being added to is expanded so user can see added node is correctly moved
			expand(selectedNode);
			sortTree();
			endDrag();
		} else {
			endDrag();
		}
	});

function endDrag() {
	selectedNode = null;
	d3.selectAll(".ghostCircle").attr("class", "ghostCircle");
	d3.select(domNode).attr("class", "node");
	// now restore the mouseover event or we won't be able to drag a 2nd time
	d3.select(domNode).select(".ghostCircle").attr("pointer-events", "");
	updateTempConnector();
	if (draggingNode !== null) {
		update(root);
		centerNode(draggingNode);
		draggingNode = null;
	}
}

// Helper functions for collapsing and expanding nodes.
function collapse(d) {
	if (d.children) {
		d._children = d.children;
		d._children.forEach(collapse);
		d.children = null;
	}
}

function expand(d) {
	if (d._children) {
		d.children = d._children;
		d.children.forEach(expand);
		d._children = null;
	}
}

var overCircle = function (d) {
	selectedNode = d;
	updateTempConnector();
};
var outCircle = function (d) {
	selectedNode = null;
	updateTempConnector();
};

// Function to update the temporary connector indicating dragging affiliation
var updateTempConnector = function () {
	var data = [];
	if (draggingNode !== null && selectedNode !== null) {
		// have to flip the source coordinates since we did this for the existing connectors on the original tree
		data = [
			{
				source: {
					x: selectedNode.y0,
					y: selectedNode.x0,
				},
				target: {
					x: draggingNode.y0,
					y: draggingNode.x0,
				},
			},
		];
	}
	var link = svgGroup.selectAll(".templink").data(data);

	link
		.enter()
		.append("path")
		.attr("class", "templink")
		.attr("d", d3.svg.diagonal())
		.attr("pointer-events", "none");

	link.attr("d", d3.svg.diagonal());

	link.exit().remove();
};

// Function to center node when clicked/dropped so node doesn't get lost when collapsing/moving with large amount of children.
function centerNode(source) {
	scale = zoomListener.scale();
	scale = 1.5;
	x = -source.y0;
	y = -source.x0;
	x = x * scale + viewerWidth / 2;
	y = y * scale + viewerHeight / 2;

	//edit 313devops
	x = x + 200;
	//x = $("#tree-container").outerWidth() / 3;
	//y = $("#tree-container").outerHeight() / 3;

	d3
		.select("g")
		.transition()
		.duration(duration)
		.attr("transform", "translate(" + x + "," + y + ")scale(" + scale + ")");
	zoomListener.scale(scale);
	zoomListener.translate([x, y]);
}

// Toggle children function
function toggleChildren(d) {
	if (d.children) {
		d._children = d.children;
		d.children = null;
	} else if (d._children) {
		d.children = d._children;
		d._children = null;
	}
	return d;
}

// Toggle children on click.
function click(d) {
	console.log('clickEvent', d)
	if (d3.event.defaultPrevented) return; // click suppressed
	d = toggleChildren(d);
	update(d);
	centerNode(d);
}

function update(source) {
	// Compute the new height, function counts total children of root node and sets tree height accordingly.
	// This prevents the layout looking squashed when new nodes are made visible or looking sparse when nodes are removed
	// This makes the layout more consistent.
	var levelWidth = [1];
	var childCount = function (level, n) {
		if (n.children && n.children.length > 0) {
			if (levelWidth.length <= level + 1) levelWidth.push(0);

			levelWidth[level + 1] += n.children.length;
			n.children.forEach(function (d) {
				childCount(level + 1, d);
			});
		}
	};
	childCount(0, root);
	var newHeight = d3.max(levelWidth) * 25; // 25 pixels per line
	tree = tree.size([newHeight, viewerWidth]);

	// Compute the new tree layout.
	var nodes = tree.nodes(root).reverse(),
		links = tree.links(nodes);

	// Set widths between levels based on maxLabelLength.
	nodes.forEach(function (d) {
		d.y = d.depth * (maxLabelLength * 10); //maxLabelLength * 10px
		// alternatively to keep a fixed scale one can set a fixed depth per level
		// Normalize for fixed-depth by commenting out below line
		// d.y = (d.depth * 500); //500px per level.
	});

	// Update the nodes…
	node = svgGroup.selectAll("g.node").data(nodes, function (d) {
		return d.id || (d.id = ++i);
	});

	// Enter any new nodes at the parent's previous position.
	var nodeEnter = node
		.enter()
		.append("g")
		.call(dragListener)
		.attr("class", "node")
		.attr("transform", function (d) {
			return "translate(" + source.y0 + "," + source.x0 + ")";
		})
		.on("click", click);

	nodeEnter
		.append("circle")
		.attr("class", "nodeCircle")
		.attr("r", 0)
		.style("fill", function (d) {
			return d._children ? "lightsteelblue" : "#fff";
		});

	nodeEnter
		.append("text")
		.attr("x", function (d) {
			return d.children || d._children ? -10 : 10;
		})
		.attr("dy", ".35em")
		.attr("class", "nodeText")
		.attr("text-anchor", function (d) {
			return d.children || d._children ? "end" : "start";
		})
		.text(function (d) {
			return d.name;
		})
		.style("fill-opacity", 0);

	nodeEnter
		.append("text")
		.attr("x", function (d) {
			return -15;
		})
		.attr("y", function (d) {
			return 15;
		})
		.text(function (d) {
			return d.type;
		})
		.on("click", function (d) {
			window.location = d.url;
		})
		.style("font-size", "8px");

	// phantom node to give us mouseover in a radius around it
	nodeEnter
		.append("circle")
		.attr("class", "ghostCircle")
		.attr("r", 30)
		.attr("opacity", 0.2) // change this to zero to hide the target area
		.style("fill", "red")
		.attr("pointer-events", "mouseover")
		.on("mouseover", function (node) {
			overCircle(node);
		})
		.on("mouseout", function (node) {
			outCircle(node);
		});

	// Update the text to reflect whether node has children or not.
	node
		.select("text")
		.attr("x", function (d) {
			return d.children || d._children ? -10 : 10;
		})
		.attr("text-anchor", function (d) {
			return d.children || d._children ? "end" : "start";
		})
		.text(function (d) {
			return d.name;
		});

	// Change the circle fill depending on whether it has children and is collapsed
	node
		.select("circle.nodeCircle")
		.attr("r", 4.5)
		.style("fill", function (d) {
			return d._children ? "lightsteelblue" : "#fff";
		});

	// Transition nodes to their new position.
	var nodeUpdate = node
		.transition()
		.duration(duration)
		.attr("transform", function (d) {
			return "translate(" + d.y + "," + d.x + ")";
		});

	// Fade the text in
	nodeUpdate.select("text").style("fill-opacity", 1);

	// Transition exiting nodes to the parent's new position.
	var nodeExit = node
		.exit()
		.transition()
		.duration(duration)
		.attr("transform", function (d) {
			return "translate(" + source.y + "," + source.x + ")";
		})
		.remove();

	nodeExit.select("circle").attr("r", 0);

	nodeExit.select("text").style("fill-opacity", 0);

	// Update the links…
	var link = svgGroup.selectAll("path.link").data(links, function (d) {
		return d.target.id;
	});

	// Enter any new links at the parent's previous position.
	link
		.enter()
		.insert("path", "g")
		.attr("class", "link")
		.attr("d", function (d) {
			var o = {
				x: source.x0,
				y: source.y0,
			};
			return diagonal({
				source: o,
				target: o,
			});
		});

	// Transition links to their new position.
	link.transition().duration(duration).attr("d", diagonal);

	// Transition exiting nodes to the parent's new position.
	link
		.exit()
		.transition()
		.duration(duration)
		.attr("d", function (d) {
			var o = {
				x: source.x,
				y: source.y,
			};
			return diagonal({
				source: o,
				target: o,
			});
		})
		.remove();

	// Stash the old positions for transition.
	nodes.forEach(function (d) {
		d.x0 = d.x;
		d.y0 = d.y;
	});
}

// Append a group which holds all nodes and which the zoom Listener can act upon.
var svgGroup = baseSvg.append("g");

// Define the root
root = treeData;
root.x0 = viewerHeight / 2;
root.y0 = 0;

// Layout the tree initially and center on the root node.
update(root);
centerNode(root);

/* --------------------------- multi select & slim scroll ---------------------------------- */
$(function () {

	// JIRA 프로젝트 데이터 로드 후 멀티 셀렉트 빌드 하고 슬림스크롤 적용
	$.ajax({
		url: "/auth-user/api/arms/pdServiceJira/getChildNode.do?c_id=2",
		type: "GET",
		contentType: "application/json;charset=UTF-8",
		dataType : "json",
		progress: true
	}).done(function(data) {

		var optionData = [];
		for(var k in data){
			var obj = data[k];
			var jira_name = obj.c_title;
			var jira_idx = obj.c_id;

			optionData.push("<option value='" + jira_idx + "'>" + jira_name + "</option>");
		}

		$(".searchable").html(optionData.join(""));

		////////////////////////////////////////////////
		// 멀티 셀렉트 빌드
		buildMultiSelect();
		////////////////////////////////////////////////

	}).fail(function(e) {
		console.log("fail call");
	}).always(function() {
		console.log("always call");
	});


	//slim scroll
	$(".ms-list").slimscroll();
});

// 멀티 셀렉트 초기화 함수
function buildMultiSelect() {

	//multiselect
	$(".searchable").multiSelect({
		selectableHeader:
			"<input type='text' class='search-input' autocomplete='off' placeholder='try \"12\"'>",
		selectionHeader:
			"<input type='text' class='search-input' autocomplete='off' placeholder='try \"4\"'>",
		afterInit: function (ms) {
			var that = this,
				$selectableSearch = that.$selectableUl.prev(),
				$selectionSearch = that.$selectionUl.prev(),
				selectableSearchString =
					"#" +
					that.$container.attr("id") +
					" .ms-elem-selectable:not(.ms-selected)",
				selectionSearchString =
					"#" + that.$container.attr("id") + " .ms-elem-selection.ms-selected";

			that.qs1 = $selectableSearch
				.quicksearch(selectableSearchString)
				.on("keydown", function (e) {
					if (e.which === 40) {
						that.$selectableUl.focus();
						return false;
					}
				});

			that.qs2 = $selectionSearch
				.quicksearch(selectionSearchString)
				.on("keydown", function (e) {
					if (e.which == 40) {
						that.$selectionUl.focus();
						return false;
					}
				});
		},
		afterSelect: function (value, text) {
			this.qs1.cache();
			this.qs2.cache();
			//d3Update();
		},
		afterDeselect: function (value, text) {
			this.qs1.cache();
			this.qs2.cache();
			//d3Update();
		},
	});
}

/* ----------------------- click action ------------------------- */
// var treeData = {
// 	name: "product service name",
// 	type: "Product(service)",
// 	children: [
// 		{
// 			name: "Visualization",
// 			type: "Jira JQL",
// 			children: [
// 				{
// 					name: "test",
// 					type: "Jira JQL",
// 				},
// 			],
// 		},
// 	],
// };
function updateD3ByDataTable() {
	treeData.children = [];

	treeData.name = selectName;
	treeData.type = "product(service)";

	update(treeData);
}

function updateD3ByVersionList() {
	console.log("versionList - " + versionList);

	treeData.children = [];
	for(var k in versionList){
		var obj = versionList[k];
		var item = {};
		item["name"] = obj.c_title;
		item["type"] = "version";
		item.children = [];
		treeData.children.push(item);
	}
	update(treeData);
}

function updateD3ByMultiSelect() {

	treeData.children = [];
	var item = {};
	item["name"] = selectVersionName;
	item["type"] = "version";
	item.children = [];
	treeData.children.push(item);

	var test = $("#multiselect :selected").val();
	console.log("test-----" + test);
	if($("#multiselect :selected").val() == undefined){
		console.log("test-----");
		item.children = [];
	}
	$("#multiselect :selected").each(function (i,sel) {
		var temp = {};
		temp["name"] = $(sel).text();
		temp["type"] = "jira";
		item.children.push(temp);
	});

	update(treeData);
}

function d3Update() {
	if (
		typeof treeData.children == "undefined" ||
		treeData.children == "" ||
		treeData.children == null
	) {
		console.log("it is not inner element");
		treeData.children = [];
	} else {
		treeData.children.splice(0, treeData.children.length);
	}

	$("#sampleMultiTest :selected").each(function () {
		item = {};
		item["name"] = this.text;
		item["type"] = "Jira JQL";
		treeData.children.push(item);
	});
	update(root);
}