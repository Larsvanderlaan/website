var xhr = new XMLHttpRequest();
xhr.open('GET', '_data/publications.bib', true);
xhr.onreadystatechange = function() {
	if (this.readyState === 4 && this.status === 200) {
		var parser = new BibtexParser();
		parser.setInput(this.responseText);
		parser.bibtex();

		var ul = document.getElementById("publications");
		for (var i = 0; i < parser.entries.length; i++) {
			var entry = parser.entries[i];
			var li = document.createElement("li");
			li.innerHTML = entry.entryTags.title + ". " + entry.entryTags.journal + ", " + entry.entryTags.year;
			ul.appendChild(li);
		}
	}
};
xhr.send();
