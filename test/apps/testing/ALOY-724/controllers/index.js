var currentTab;
function doClick(e) {
	alert('tab ' + currentTab + ': ' + e.source.title);
}

function setCurrentTab(e) {
	currentTab = e.index;
}

$.index.open();