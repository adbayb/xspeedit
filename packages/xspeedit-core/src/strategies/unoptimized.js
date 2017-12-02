import { sumReducer } from "../utils.js";

export default packager => {
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
