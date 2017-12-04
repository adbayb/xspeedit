import unoptimizedStrategy from "./unoptimized.js";

describe("UnoptimizedStrategy", () => {
	let packager;

	beforeEach(() => {
		// @note: dummy packager avec toutes les propriétés mockés nécessaires:
		packager = { capacity: 10, input: [1, 6, 3, 8, 4, 1, 6, 8, 9, 5, 2, 5, 7, 7, 3] };
	});

	afterEach(() => {
		// @note: nous nettoyons notre instance après chaque test:
		packager = null;
	});

	it("should apply strategy algorithm correctly", () => {
		// GIVEN: une strategy avec un packager via l'injection de dépendance:
		const strategy = unoptimizedStrategy(packager);
		// WHEN: nous exécutons notre strategy:
		const ret = strategy();
		// THEN: nous vérifions quel'algorithme s'applique correctement:
		expect(ret).toEqual({
			boxes: [[1, 6, 3], [8], [4, 1], [6], [8], [9], [5, 2], [5], [7], [7, 3]]
		});
		expect(ret.boxes).toHaveLength(10);
	});
});
