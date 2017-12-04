import optimizedStrategy from "./optimized";

describe("OptimizedStrategy", () => {
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
		const strategy = optimizedStrategy(packager);
		// WHEN: nous exécutons notre strategy:
		const ret = strategy();
		// THEN: nous vérifions quel'algorithme s'applique correctement:
		expect(ret).toEqual({
			boxes: [[9, 1], [8, 2], [8, 1], [7, 3], [7, 3], [6, 4], [6], [5, 5]]
		});
		expect(ret.boxes).toHaveLength(8);
	});
});
