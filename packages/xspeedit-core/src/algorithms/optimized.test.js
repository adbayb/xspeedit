import optimizedStrategy from "./optimized";

describe("OptimizedStrategy", () => {
	it("should apply strategy algorithm correctly with batch 1", () => {
		// GIVEN: une strategy avec un packager via l'injection de dépendance:
		const data = { articles: [1, 6, 3, 8, 4, 1, 6, 8, 9, 5, 2, 5, 7, 7, 3], capacity: 10 };
		const strategy = optimizedStrategy(data);
		// WHEN: nous exécutons notre strategy:
		const ret = strategy();
		// THEN: nous vérifions quel'algorithme s'applique correctement:
		expect(ret).toEqual({
			boxes: [[9, 1], [8, 2], [8, 1], [7, 3], [7, 3], [6, 4], [6], [5, 5]]
		});
		expect(ret.boxes).toHaveLength(8);
	});

	it("should apply strategy algorithm correctly with batch 2", () => {
		// GIVEN: une strategy avec un packager via l'injection de dépendance:
		const data = { articles: [2, 2, 3, 3, 2, 2, 3, 3], capacity: 10 };
		const strategy = optimizedStrategy(data);
		// WHEN: nous exécutons notre strategy:
		const ret = strategy();
		// THEN: nous vérifions quel'algorithme s'applique correctement:
		expect(ret).toEqual({
			boxes: [[3, 3, 2, 2], [3, 3, 2, 2]]
		});
		expect(ret.boxes).toHaveLength(2);
	});

	it("should apply strategy algorithm correctly with batch 3", () => {
		// GIVEN: une strategy avec un packager via l'injection de dépendance:
		const data = { articles: [7, 8, 3, 2], capacity: 10 };
		const strategy = optimizedStrategy(data);
		// WHEN: nous exécutons notre strategy:
		const ret = strategy();
		// THEN: nous vérifions quel'algorithme s'applique correctement:
		expect(ret).toEqual({
			boxes: [[8, 2], [7, 3]]
		});
		expect(ret.boxes).toHaveLength(2);
	});

	it("should apply strategy algorithm correctly with batch 4", () => {
		// GIVEN: une strategy avec un packager via l'injection de dépendance:
		const data = { articles: [3, 1, 3, 6, 4, 3], capacity: 10 };
		const strategy = optimizedStrategy(data);
		// WHEN: nous exécutons notre strategy:
		const ret = strategy();
		// THEN: nous vérifions quel'algorithme s'applique correctement:
		expect(ret).toEqual({
			boxes: [[6, 4], [3, 3, 3, 1]]
		});
		expect(ret.boxes).toHaveLength(2);
	});
});
