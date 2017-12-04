import Box from "../box";

/**
 * Fonction définissant l'algorithme non optimisé d'empaquettage des articles dans les cartons
 * @function
 * @name unoptimizedAlgorithm
 * @param {Array} 		articles La valeur de la propriété input décrivant les articles suivant leur poids
 * @param {number} 		capacity La contenance maximale d'une boîte
 * @return {Function}			 Le callback à appeller pour lancer la résolution
 */
export default (articles, capacity) => {
	/**
	 * Algorithme unoptmizedAlgorithm
	 * Variables
	 * 	capacity: entier; // capacité maximale d'une boîte
	 * 	input: tableau; // tableau contenant l'ensemble des chiffres saisis par l'utilisateur
	 * 	boxes: tableau; // tableau vide qui contiendra l'ensemble des cartons
	 * Début
	 * 	articles <- input
	 * 	currentBox <- boxes[0]
	 * 	Pour articles allant de i=0 à articles.length
	 * 		article <- articles[i]
	 * 		Si currentBox.occupation > capacity Alors
	 *			currentBox <- Créer(article); // On créé un nouveau carton en lui affectant l'article en cours
	 *			boxes <- Ajouter(currentBox); // On affecte la dernière boîte créée à la liste des cartons
	 * 		Sinon
	 * 			currentBox <- Ajouter(article); // On ajoute le candidat valide dans le carton en cours
	 * 		Fin si
	 *	Fin pour
	 * 	Retourne boxes
	 * Fin
	 */

	return () => {
		// @note: contient la liste des cartons générés:
		let boxes = [];

		// @note: création de notre premier carton vide:
		let box = new Box(capacity);
		articles.forEach(article => {
			// @note: le carton en cours ne peut plus ajouter d'article
			if (!box.add(article)) {
				boxes = [...boxes, box.articles];
				box = new Box(capacity, article);
			}
		});
		// @note: nous ajoutons le dernier carton généré restant non remplit s'il existe:
		boxes = [...boxes, box.articles.length > 0 ? box.articles : []];

		return { boxes };
	};
};
