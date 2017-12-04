import Box from "../box";

export class Tree {
	constructor(capacity) {
		this.capacityPerNode = capacity;
	}

	createRootNode(article) {
		this.current = new Box(this.capacityPerNode, article);
		this.best = this.current;
	}

	check(candidate, ...subdomain) {
		// @note: heuristique si taille === 10 <=> on ne peut pas trouver de meilleur candidat:
		if (this.best.size === this.best.capacity || subdomain.length === 0) {
			return this.best.articles;
		}

		const isAdded = this.current.add(subdomain[0]);

		if (isAdded && this.current.size > this.best.size) {
			this.best = this.current;
			this.current = new Box(this.capacityPerNode, candidate);
		}

		return this.check(...subdomain);
	}
}

/**
 * Fonction définissant l'algorithme optimisé d'empaquettage des articles dans les cartons
 * @function
 * @name optimizedAlgorithm
 * @param {Array} 		articles La valeur de la propriété input décrivant les articles suivant leur poids
 * @param {number} 		capacity La contenance maximale d'une boîte
 * @return {Function}	Le callback à appeller pour lancer la résolution
 */
export default (articles, capacity) => {
	/**
	 * Algorithme optmizedAlgorithm
	 * Variables
	 * 	capacity: entier; // capacité maximale d'une boîte
	 * 	input: tableau; // tableau contenant l'ensemble des chiffres saisis par l'utilisateur
	 * 	boxes: tableau; // tableau vide qui contiendra l'ensemble des cartons
	 * Début
	 * 	articles <- input.sort(); // On trie les chiffres de manière décroissante
	 *
	 * 	Pour articles allant de 0 à candidateArticles.length
	 * 		[article, ...candidateArticles] <- articles; // On extrait la première entrée comme candidat valide et récupérons les autres articles dans le tableau candidateArticles;
	 * 		box <- Créer(article); // On créé un nouveau carton en lui affectant l'article en cours
	 * 		validCandidateArticles <- filter(candidateArticles); // On cherche les articles pouvant entrer dans le carton suivant sa capacité
	 * 		box <- validCandidateArticles; // On ajoute les candidats valides dans le carton en cours
	 * 		articles <- Retirer(validCandidateArticles);
	 * 		boxes <- Ajouter(box);
	 *	Fin pour
	 * 	Retourne boxes
	 * Fin
	 */

	return () => {
		let boxes = [];
		const tree = new Tree(capacity);

		articles.reduce(accu => {
			if (accu.length === 0) {
				//@note: plus de candidats
				return [];
			}

			const [candidateArticle, ...others] = accu;
			tree.createRootNode(candidateArticle);
			const best = tree.check(candidateArticle, ...others);
			boxes = [...boxes, best];

			best.forEach(entry => {
				accu.splice(accu.indexOf(entry), 1);
			});

			// return sous-espaces restants:
			return [...accu];
		}, articles);

		return { boxes };
	};
};
