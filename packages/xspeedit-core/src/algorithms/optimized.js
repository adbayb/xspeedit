import Box from "../box";
import { compareAsc } from "../utils.js";

/**
 * Fonction définissant l'algorithme optimisé d'empaquetage des articles dans les cartons
 * @function
 * @name optimizedAlgorithm
 * @param {Object} 		data { articles: La valeur de la propriété input décrivant les articles suivant leur taille, capacity: La contenance maximale d'une boîte }
 * @return {Function}	Le callback permettant de lancer la résolution
 */
export default ({ articles, capacity }) => {
	/**
	 * Algorithme optmizedAlgorithm
	 * Variables
	 * 	capacity: entier; // capacité maximale d'une boîte
	 * 	articles: Array; // tableau contenant l'ensemble des articles saisis par l'utilisateur
	 * 	boxes: Array; // tableau vide qui contiendra la solution représentant l'ensemble des cartons générés
	 * 	currentNode: Box; // dummy carton permettant la prise de décision
	 * 	bestNode: Box; // carton stockant la meilleur combinaison d'article
	 * 	sousDomaine: Array; // tableau vide qui contiendra le sous-ensemble de recherche
	 * Début
	 * 	Pour articles allant de i=0 à articles.length
	 * 		article <- articles[i]; // On extrait l'article en cours
	 * 		currentNode <- CréerNoeud(article); // On créé notre dummy node en lui affecter l'article en cours
	 * 		bestNode <- currentNode; // Le meilleur noeud correspond au départ au currentNode
	 * 		sousDomaine <- ExtractSousDomaine(); On récupère notre sous-domaine de recherche (correspond aux articles restants sans l'article en cours).
	 *
	 * 		Tantque Existe(sousDomaine)
	 *			Si bestNode.occupation === capacity Alors // Il ne peut y avoir de meilleure solution, on retourne la solution
	 *					Retourne bestNode;
	 *			Fin si
	 *
	 *			Si currentNode.occupation > bestNode.occupation Alors
	 *				bestNode <- currentNode; // Une meilleure solution est trouvée: on met à jour bestNode en le permuttant avec currentNode
	 *			Fin si
	 *
	 *			currentNode <- Ajouter(article);
	 *
	 *			Retourne sousDomaine <- ExtractSousDomaine();
	 *		Fin Tantque
	 *
	 *		solution <- RécupérerArticles(bestNode);
	 * 		boxes <- Ajouter(solution);  // On récupère la meilleur combinaison d'articles et l'ajoutons dans boxes
	 * 		articles <- RetirerArticles(solution); // Nous retirons les articles solutionnés de notre ensemble d'articles
	 *	Fin pour
	 *
	 * 	Retourne boxes
	 * Fin
	 */
	let currentNode;
	let bestNode;

	const permuteNode = () => {
		bestNode = currentNode;
	};

	const findSolution = (article, ...subdomain) => {
		// @note: taille === 10 <=> on ne peut pas trouver de meilleur candidat
		// (on retourne dans ce cas, le meilleur noeud candidat):
		if (bestNode.size === capacity || subdomain.length === 0) {
			return bestNode.articles;
		}

		currentNode = new Box(capacity, article);

		for (let i = 0; i < subdomain.length; i++) {
			const candidateArticle = subdomain[i];

			currentNode.add(candidateArticle);
			if (currentNode.size > bestNode.size) {
				permuteNode();
			}
		}

		// eslint-disable-next-line no-unused-vars
		const [excludeCandidate, ...newSubdomain] = subdomain;

		return findSolution(article, ...newSubdomain);
	};

	return () => {
		let boxes = [];
		// @note:  [...articles].sort(compareAsc) comme valeur initialenous trions
		// nos articles par taille décroissante pour que notre bestNode
		// corresponde, à l'initialisation, à la borne supérieure:
		const sortedArticles = [...articles].sort(compareAsc);

		sortedArticles.reduce(remainingArticles => {
			if (remainingArticles.length === 0) {
				//@note: plus de candidats
				return [];
			}

			const [candidateArticle, ...others] = remainingArticles;
			// @note: nous définissons la borne supérieure avant d'effectuer la recherche de
			// solution (correspondant à l'article (triée par ordre décroissant dans articles)):
			bestNode = new Box(capacity, candidateArticle);
			const solution = findSolution(candidateArticle, ...others);
			boxes = [...boxes, solution];

			const nextRemainingArticles = [...remainingArticles];
			solution.forEach(entry => {
				nextRemainingArticles.splice(nextRemainingArticles.indexOf(entry), 1);
			});

			// @note: retourne les sous-domaines de recherche restants:
			return nextRemainingArticles;
		}, sortedArticles);

		return { boxes };
	};
};
