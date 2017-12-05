import Packager from "./packager.js";

describe("Packager", () => {
	let packager;

	beforeEach(() => {
		// @note: nous instancions Packager avant chaque test:
		packager = new Packager();
	});

	afterEach(() => {
		// @note: nous nettoyons notre instance après chaque test:
		packager = null;
	});

	it("should set input correctly", () => {
		// GIVEN: un input respectant les contraintes:
		const input = "1234";
		// WHEN: nous affectons l'input:
		packager.setInput(input);
		// THEN: la propriété input doit être affecté correctement:
		expect(packager.input).toEqual([1, 2, 3, 4]);
	});

	it("should not set input when it doesn't match constraints", () => {
		// GIVEN: un input ne respectant pas les contraintes:
		const input = "0/1234";
		// WHEN: nous affectons l'input:
		const thrower = () => packager.setInput(input);
		// THEN: une erreur doit être capturée:
		expect(thrower).toThrowError(/Saisie invalide: vous devez saisir un nombre/);
	});

	it("should set algorithm correctly", () => {
		// GIVEN: une strategie respectant les contraintes sur sa signature de fonction:
		const expectedOutput = () => {};
		const algorithm = () => expectedOutput;
		// WHEN: nous affectons la algorithm:
		packager.setInput("1234");
		packager.setStrategy(algorithm);
		// THEN: la propriété algorithm doit être affecté correctement:
		expect(packager.algorithm).toBe(expectedOutput);
	});

	it("should not set algorithm when input is not valid", () => {
		// GIVEN: une strategie respectant les contraintes sur sa signature de fonction:
		const expectedOutput = () => {};
		const algorithm = () => expectedOutput;
		// WHEN: nous affectons la algorithm sans avoir affecté d'input (eg. null):
		const thrower = () => packager.setStrategy(algorithm);
		// THEN: une erreur doit être capturée:
		expect(thrower).toThrowError(
			/Vous devez effectuer une saisie avant de pouvoir affecter une stratégie/
		);
	});

	it("should not set algorithm when it doesn't match function signature", () => {
		// GIVEN: une strategie ne respectant pas les contraintes sur sa signature de fonction:
		const algorithm = "toto";
		// WHEN: nous affectons la algorithm:
		packager.setInput("1234");
		const thrower = () => packager.setStrategy(algorithm);
		// THEN: une erreur doit être capturée:
		expect(thrower).toThrowError(/is not a function/);
	});

	it("should resolve correctly", () => {
		// GIVEN: une strategie ne respectant pas les contraintes sur sa signature de fonction:
		const algorithm = () => () => ({ boxes: [[1, 2], [3, 4]] });
		// WHEN: nous affectons la algorithm:
		packager.setInput("1234");
		packager.setStrategy(algorithm);
		// THEN: une erreur doit être capturée:
		expect(packager.resolve()).toEqual({ raw: [[1, 2], [3, 4]], formatted: "12/34" });
	});

	it("should set capacity correctly", () => {
		// GIVEN: une capacité:
		const capacity = 25;
		// WHEN: nous affectons la capacité à l'instance Packager:
		packager.capacity = capacity;
		// THEN: la propriété capacity a bien été affectée:
		expect(packager.capacity).toBe(25);
	});

	describe("contructor", () => {
		it("should instanciate correctly without argument", () => {
			// GIVEN: une instance packager:
			const packager = new Packager();
			// THEN: les propriétés de l'instance doivent être affectés correctement:
			expect(packager.capacity).toBe(10);
			expect(packager.input).toBe(null);
		});

		it("should instanciate correctly with argument", () => {
			// GIVEN: une instance packager:
			const packager = new Packager(25);
			// THEN: les propriétés de l'instance doivent être affectés correctement:
			expect(packager.capacity).toBe(25);
			expect(packager.input).toBe(null);
		});
	});
});
