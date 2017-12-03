import { sumReducer } from "../utils.js";

/**
 * Fonction définissant la stratégie algorithmique non optimisée d'empaquettage des articles dans les cartons
 * @function
 * @name unoptimizedStrategy
 * @param {Packager}	packager - Une instance Packager (dependency injection)
 * @return {Function}	Le callback à appeller pour lancer la résolution
 */
export default packager => {
	/**
	 * Algorithme unoptmizedStrategy
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
	const PACKAGER_CAPACITY = packager.capacity;

	return () => {
		const articles = packager.input;
		const boxes = [];
		let boxIndex = 0;

		articles.forEach(article => {
			let box = boxes[boxIndex] || [];
			const boxSize = box.reduce(...sumReducer(article));

			if (boxSize > PACKAGER_CAPACITY) {
				// @note: créé un nouveau carton:
				boxIndex++;
				boxes[boxIndex] = [article];
			} else {
				boxes[boxIndex] = [...box, article];
			}
		});

		return { boxes };
	};
};
