import { compareAsc, flattenArray, isValidNumber } from "./utils.js";

describe("Utils", () => {
	describe("isValidNumber", () => {
		it("should check correctly", () => {
			// GIVEN: deux chaines de caractères:
			const valid = "122234";
			const invalid = "12/b5";
			// WHEN: nous exécutons notre fonction utilitaire:
			const retValid = isValidNumber(valid);
			const retInvalid = isValidNumber(invalid);
			// THEN: nous vérifions qu'ils retournent bien que des nombres ou non:
			expect(retValid).toBe(true);
			expect(retInvalid).toBe(false);
		});
	});

	describe("flattenArray", () => {
		it("should flatten correctly", () => {
			// GIVEN: un tableau à deux dimensions:
			const arr = [[1, 2], [3]];
			// WHEN: nous exécutons notre fonction utilitaire:
			const ret = flattenArray(arr);
			// THEN: nous remplissons notre cas de test:
			expect(ret).toBe("12/3");
		});

		it("should return an empty string when argument is not an array", () => {
			// GIVEN: un argument null:
			const arr = null;
			// WHEN: nous exécutons notre fonction utilitaire:
			const ret = flattenArray(arr);
			// THEN: nous remplissons notre cas de test:
			expect(ret).toBe("");
		});

		it("should return an empty string when an inner value is not an array", () => {
			// GIVEN: un tableau à deux dimensions avec une valeur internet de type non Array:
			const arr = [[1, 2], null];
			// WHEN: nous exécutons notre fonction utilitaire:
			const ret = flattenArray(arr);
			// THEN: nous remplissons notre cas de test:
			expect(ret).toBe("12/");
		});
	});

	describe("compareAsc", () => {
		it("should return -1 when a > b", () => {
			// GIVEN: deux entrées dummy a et b:
			const a = 2;
			const b = 1;
			// WHEN: nous exécutons notre fonction utilitaire:
			const ret = compareAsc(a, b);
			// THEN: nous remplissons notre cas de test:
			expect(ret).toBe(-1);
		});

		it("should return 1 when a < b", () => {
			// GIVEN: deux entrées dummy a et b:
			const a = 1;
			const b = 2;
			// WHEN: nous exécutons notre fonction utilitaire:
			const ret = compareAsc(a, b);
			// THEN: nous remplissons notre cas de test:
			expect(ret).toBe(1);
		});

		it("should return 0 when a = b", () => {
			// GIVEN: deux entrées dummy a et b:
			const a = 1;
			const b = 1;
			// WHEN: nous exécutons notre fonction utilitaire:
			const ret = compareAsc(a, b);
			// THEN: nous remplissons notre cas de test:
			expect(ret).toBe(0);
		});
	});
});
