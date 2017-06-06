const searcher = () => {
	const parent = $('<div class="searcher"></div>');
	const form = $('<form></form>');
	const divSearcher = $('<div class="input-field">');
	const input = $('<input id="search" type="search" required>');
	const label = $('<label class="label-icon" for="search"</label>');
	const icon = $('<i class="material-icons">search</i>');

	label.append(icon);
	divSearcher.append(input);
	divSearcher.append(label);
	form.append(divSearcher);
	parent.append(form);

	return parent;
}