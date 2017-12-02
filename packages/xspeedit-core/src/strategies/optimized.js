import { sumReducer } from "../utils.js";

export default packager => {
	const PACKAGER_CAPACITY = packager.capacity;

	return () => {
		let boxes = [];
		const articles = packager.sort();

		articles.reduce(accuArticles => {
			if (accuArticles.length === 0) {
				return accuArticles;
			}

			// @note: slice since we access to the first item of the array via article inside reducer
			const [article, ...remainingArticles] = accuArticles;
			let box = [article];
			// @note: nous filtrons uniquement les candidats qui ne répondent
			// pas aux critères de taille pour les prochaines itérations
			const invalidCandidateArticles = remainingArticles.filter(candidateArticle => {
				// @note: on calcule la taille totale de notre carton avec la taille du candidat:
				const candidateBoxSize = box.reduce(...sumReducer(candidateArticle));

				if (candidateBoxSize > PACKAGER_CAPACITY) {
					return true;
				}

				box = [...box, candidateArticle];
				return false;
			});

			boxes = [...boxes, box];
			// packager.addBox(box); // @note: we can have an addBox public method but it's better to have pure function (so instead return boxes)
			return invalidCandidateArticles;
		}, articles);

		return {
			boxes
		};
	};
};
