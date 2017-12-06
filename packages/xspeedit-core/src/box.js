/** Classe (modèle) représentant un carton */
class Box {
	/**
	 * Créé un carton
	 * @param {number} capacity	La capacité maximale d'une boîte
	 * @param {number} article 	L'article à ajouter lors de la création du carton (l'article est représenté par sa taille)
	 */
	constructor(capacity = 10, article = null) {
		this.capacity = capacity;
		this.create(article);
	}

	/**
	 * Fonction fabrique permettant la création d'un carton
	 * @param  {number}  article  L'article à ajouter lors de la création du carton (l'article est représenté par sa taille)
	 * @return {Box}     L'instance Box (permettant le cascade design pattern)
	 */
	create(article) {
		this.articles = [];
		this.size = 0;

		if (article) {
			this.add(article);
		}

		return this;
	}

	/**
	 * Ajoute un article dans le carton
	 * @param  {number}  article  L'article à ajouter (l'article est représenté par sa taille)
	 * @return {boolean} true si l'article a bien été ajouté, false autrement
	 */
	add(article) {
		if (!Number.isInteger(article)) return false;

		const candidateSize = this.size + article;
		if (candidateSize > this.capacity) return false;

		this.articles = [...this.articles, article];
		this.size = candidateSize;

		return true;
	}
}

export default Box;
