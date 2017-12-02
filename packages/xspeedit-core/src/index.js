import { compareAsc, flattenArray, isNumber } from "./utils.js";

class Packager {
	constructor(capacity = 10) {
		this.input = null;
		this.capacity = capacity;
	}

	resolve() {
		// @note: la signature des strategies a été faite en sorte à
		// donner un caractère idempotent aux appels à resolve()
		const { boxes: raw } = this.strategy();

		return {
			raw,
			formatted: this.format(raw)
		};
	}

	setInput(input) {
		// @note: validation de l'input utilisateur (tout en permettant d'éviter les XSS):
		if (typeof input !== "string" || !isNumber(input)) {
			throw new Error("[xspeedit-core::setInput]: Saisie invalide: vous devez saisir un nombre");
		}

		this.input = Array.from(input.toString()).map(Number);

		// @note: nous retournons l'instance pour permettre de "cascader" nos appels de méthodes:
		return this;
	}

	setStrategy(strategy) {
		if (!this.input) {
			throw new Error(
				"[xspeedit-core::setStrategy]: Vous devez effectuer une saisie avant de pouvoir affecter une stratégie"
			);
		}

		this.strategy = strategy(this);

		return this;
	}

	format(boxes) {
		return flattenArray(boxes);
	}

	sort() {
		return this.input.slice().sort(compareAsc);
	}
}

export * from "./strategies";
export default Packager;
