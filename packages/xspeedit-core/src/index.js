const compareAsc = (a, b) => {
	if (a > b) return -1;
	if (a < b) return 1;
	return 0;
};

export default class Packager {
	// @todo: test inputs!!!
	// @todo: rename input en boxes?
	// @todo: setInput au lieu set input?
	constructor(input, capacity = 10) {
		this.capacity = capacity;
		this.input = input;
	}

	sort() {
		return this._input.slice().sort(compareAsc);
	}

	setStrategy(strategy) {
		this._strategy = strategy(this);

		return this;
	}

	resolve() {
		// @note: la signature des strategies a été faite en sorte de
		// donner le caractère idempotent aux appels à resolve()
		const { boxes } = this._strategy();
		// @todo: output write result via format /:
		console.log("RESULTS", boxes, boxes.length);

		return boxes;
	}

	// @section: getters et setters:

	get input() {
		return this._input;
	}

	get capacity() {
		return this._capacity;
	}

	set input(input) {
		if (typeof input !== "string") {
			this._input = "";
		}

		this._input = Array.from(input.toString()).map(Number);
	}

	set capacity(capacity) {
		this._capacity = capacity;
	}
}

const sumReducer = initSize => [(prevSize, currentSize) => prevSize + currentSize, initSize];

export const actualStrategy = packager => {
	const PACKAGER_CAPACITY = packager.capacity;

	return () => {
		const articles = packager.input;
		const boxes = [];
		let boxIndex = 0;

		articles.forEach(article => {
			let box = boxes[boxIndex] || [];
			const boxSize = box.reduce(...sumReducer(article));

			if (boxSize > PACKAGER_CAPACITY) {
				// @note: create new box:
				boxIndex++;
				boxes[boxIndex] = [article];
			} else {
				boxes[boxIndex] = [...box, article];
			}
		});

		return {
			boxes
		};
	};
};

export const optimizedStrategy = packager => {
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
