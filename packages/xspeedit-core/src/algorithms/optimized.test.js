import optimizedStrategy from "./optimized";

describe("OptimizedStrategy", () => {
	const data = { articles: [1, 6, 3, 8, 4, 1, 6, 8, 9, 5, 2, 5, 7, 7, 3], capacity: 10 };

	it("should apply strategy algorithm correctly", () => {
		// GIVEN: une strategy avec un packager via l'injection de dépendance:
		const strategy = optimizedStrategy(data);
		// WHEN: nous exécutons notre strategy:
		const ret = strategy();
		// THEN: nous vérifions quel'algorithme s'applique correctement:
		expect(ret).toEqual({
			boxes: [[1, 6, 3], [5, 5], [8, 2], [1, 8], [4, 6], [9], [7], [7, 3]]
		});
		expect(ret.boxes).toHaveLength(8);
	});
});
