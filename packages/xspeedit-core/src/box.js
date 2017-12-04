class Box {
	constructor(capacity = 10, article = null) {
		this.capacity = capacity;
		this.create(article);
	}

	create(article) {
		this.articles = [];
		this.size = 0;

		if (article) {
			this.add(article);
		}

		return this;
	}

	add(article) {
		if (Number.isNaN(article)) return false;

		const candidateSize = this.size + article;
		if (candidateSize > this.capacity) return false;

		this.articles = [...this.articles, article];
		this.size = candidateSize;

		return true;
	}
}

export default Box;
