import Box from "../box";

/**
 * Fonction définissant l'algorithme non optimisé d'empaquetage des articles dans les cartons
 * @function
 * @name unoptimizedAlgorithm
 * @param {Object} 		data { articles: La valeur de la propriété input décrivant les articles suivant leur taille, capacity: La contenance maximale d'une boîte }
 * @return {Function}	Le callback permettant de lancer la résolution
 */
export default ({ articles, capacity }) => {
	/**
	 * Algorithme unoptmizedAlgorithm
	 * Variables
	 * 	capacity: entier; // capacité maximale d'une boîte
	 * 	articles: Array; // tableau contenant l'ensemble des articles saisis par l'utilisateur
	 * 	boxes: Array; // tableau vide qui contiendra la solution représentant l'ensemble des cartons générés
	 * Début
	 * 	currentBox <- Créer(); // Création d'un carton vide
	 * 	Pour articles allant de i=0 à articles.length
	 * 		article <- articles[i]
	 * 		Si currentBox.occupation <= capacity Alors
	 * 			currentBox <- Ajouter(article); // On ajoute le candidat valide dans le carton en cours
	 * 		Sinon
	 *			currentBox <- Créer(article); // On créé un nouveau carton en lui affectant l'article en cours
	 *			boxes <- Ajouter(currentBox); // On affecte la dernière boîte créée à la liste des cartons
	 * 		Fin si
	 *	Fin pour
	 * 	boxes <- Ajouter(currentBox); // On ajoute le dernier carton généré restant (non totalement remplit).
	 * 	Retourne boxes
	 * Fin
	 */

	return () => {
		// @note: contient la liste des cartons générés:
		let boxes = [];

		let box = new Box(capacity);
		articles.forEach(article => {
			// @note: le carton en cours ne peut plus ajouter d'article
			if (!box.add(article)) {
				boxes = [...boxes, box.articles];
				box = new Box(capacity, article);
			}
		});
		boxes = [...boxes, box.articles];

		return { boxes };
	};
};
