import { compareAsc, sumReducer } from "../utils.js";

/**
 * Fonction définissant la stratégie algorithmique optimisée d'empaquettage des articles dans les cartons
 * @function
 * @name optimizedStrategy
 * @param {Packager}	packager - Une instance Packager (dependency injection)
 * @return {Function}	Le callback à appeller pour lancer la résolution
 */
export default packager => {
	/**
	 * Algorithme optmizedStrategy
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
	const PACKAGER_CAPACITY = packager.capacity;

	return () => {
		let boxes = [];
		const articles = packager.input.slice().sort(compareAsc);

		articles.reduce(accuArticles => {
			if (accuArticles.length === 0) {
				return accuArticles;
			}

			const [currentArticle, ...candidateArticles] = accuArticles;
			let box = [currentArticle];
			// @note: nous filtrons uniquement les candidats qui ne répondent
			// pas aux critères de taille pour les prochaines itérations
			const invalidCandidateArticles = candidateArticles.filter(candidateArticle => {
				// @note: on calcule la taille totale de notre carton avec la taille du candidat:
				const candidateBoxSize = box.reduce(...sumReducer(candidateArticle));

				if (candidateBoxSize > PACKAGER_CAPACITY) {
					return true;
				}

				box = [...box, candidateArticle];
				return false;
			});

			boxes = [...boxes, box];
			return invalidCandidateArticles;
		}, articles);

		return { boxes };
	};
};
