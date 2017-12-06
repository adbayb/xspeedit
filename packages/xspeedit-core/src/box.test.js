import Box from "./box.js";

describe("Box", () => {
	it("should create a new instance correctly with a default constructor (no arguments)", () => {
		// GIVEN: une instance de Box:
		const box = new Box();
		// THEN: les propriétés doivent être initialisées correctement:
		expect(box.capacity).toBe(10);
		expect(box.size).toBe(0);
		expect(box.articles).toEqual([]);
	});

	it("should create a new instance correctly when no article is given", () => {
		// GIVEN: une instance de Box:
		const box = new Box(25);
		// THEN: les propriétés doivent être initialisées correctement:
		expect(box.capacity).toBe(25);
		expect(box.size).toBe(0);
		expect(box.articles).toEqual([]);
	});

	it("should add an article correctly", () => {
		// GIVEN: une instance de Box:
		const box = new Box();
		// WHEN: nous ajoutons un article:
		const ret = box.add(2);
		// THEN: les propriétés doivent être affectées correctement:
		expect(box.size).toBe(2);
		expect(box.articles).toEqual([2]);
		expect(ret).toBe(true);
	});

	it("should not add an article when argument is not a number", () => {
		// GIVEN: une instance de Box:
		const box = new Box();
		// WHEN: nous ajoutons un article:
		const ret = box.add(null);
		// THEN: les propriétés doivent être affectées correctement:
		expect(box.size).toBe(0);
		expect(box.articles).toEqual([]);
		expect(ret).toBe(false);
	});

	it("should not add an article when it size exceed box's available capacity", () => {
		// GIVEN: une instance de Box:
		const box = new Box(12);
		// WHEN: nous ajoutons un article:
		const ret = box.add(100);
		// THEN: les propriétés doivent être affectées correctement:
		expect(box.size).toBe(0);
		expect(box.articles).toEqual([]);
		expect(ret).toBe(false);
	});
});
