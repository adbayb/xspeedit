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
		const input = "01234";
		// WHEN: nous affectons l'input:
		packager.setInput(input);
		// THEN: la propriété input doit être affecté correctement:
		expect(packager.input).toEqual([0, 1, 2, 3, 4]);
	});

	it("should not set input when it doesn't match constraints", () => {
		// GIVEN: un input ne respectant pas les contraintes:
		const input = "0/1234";
		// WHEN: nous affectons l'input:
		const thrower = () => packager.setInput(input);
		// THEN: une erreur doit être capturée:
		expect(thrower).toThrowError(/Saisie invalide: vous devez saisir un nombre/);
	});

	it("should set strategy correctly", () => {
		// GIVEN: une strategie respectant les contraintes sur sa signature de fonction:
		const expectedOutput = () => {};
		const strategy = () => expectedOutput;
		// WHEN: nous affectons la strategy:
		packager.setInput("01234");
		packager.setStrategy(strategy);
		// THEN: la propriété strategy doit être affecté correctement:
		expect(packager.strategy).toBe(expectedOutput);
	});

	it("should not set strategy when input is not valid", () => {
		// GIVEN: une strategie respectant les contraintes sur sa signature de fonction:
		const expectedOutput = () => {};
		const strategy = () => expectedOutput;
		// WHEN: nous affectons la strategy sans avoir affecté d'input (eg. null):
		const thrower = () => packager.setStrategy(strategy);
		// THEN: une erreur doit être capturée:
		expect(thrower).toThrowError(
			/Vous devez effectuer une saisie avant de pouvoir affecter une stratégie/
		);
	});

	it("should not set strategy when it doesn't match function signature", () => {
		// GIVEN: une strategie ne respectant pas les contraintes sur sa signature de fonction:
		const strategy = "toto";
		// WHEN: nous affectons la strategy:
		packager.setInput("01234");
		const thrower = () => packager.setStrategy(strategy);
		// THEN: une erreur doit être capturée:
		expect(thrower).toThrowError(/strategy is not a function/);
	});

	it("should resolve correctly", () => {
		// GIVEN: une strategie ne respectant pas les contraintes sur sa signature de fonction:
		const strategy = () => () => ({ boxes: [[1, 2], [3, 4]] });
		// WHEN: nous affectons la strategy:
		packager.setInput("1234");
		packager.setStrategy(strategy);
		// THEN: une erreur doit être capturée:
		expect(packager.resolve()).toEqual({ raw: [[1, 2], [3, 4]], formatted: "12/34" });
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
