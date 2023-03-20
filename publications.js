var publications = new BibtexParser();
publications.setInput(`@article{my_article,
    author = {Lars van der Laan},
    title = {My Article},
    journal = {Journal of Statistics},
    year = {2023},
    volume = {1},
    pages = {1--10}
}`);

publications.bibtex();

var ul = document.getElementById("publications");
for (var i = 0; i < publications.entries.length; i++) {
	var entry = publications.entries[i];
	var li = document.createElement("li");
	li.innerHTML = entry.entryTags.title + ". " + entry.entryTags.journal + ", " + entry.entryTags.year;
	ul.appendChild(li);
}
