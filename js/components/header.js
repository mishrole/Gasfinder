'use strict';

const Header = (update) => {

	const header = $("<header></header>");
	const container = $("<div class='container'></div>");
	const title = $("<span>Gas Finder</span>");
	const icon = $('<i class="fa fa-chevron-left" aria-hidden="true"></i>');

	container.append(title);
	container.append(searcher());
	header.append(container);

	return header;
}
