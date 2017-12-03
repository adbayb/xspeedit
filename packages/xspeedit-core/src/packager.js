import { flattenArray, isNumber } from "./utils.js";

/** Classe représentant le robot */
class Packager {
	/**
	 * Créé un packager
	 * @param {number} capacity - La capacité maximal d'une boîte
	 */
	constructor(capacity = 10) {
		this.input = null;
		this.capacity = capacity;
	}

	/**
	 * Résoud la problématique de packaging suivant une stratégie et un input donnés
	 * @return {{raw:Array, formatted:string}} La représentation de la résolution sous forme d'un objet du type {raw, formatted}: raw (du type [[1,2], [3,4]]) et formatted (du type "12/34")
	 */
	resolve() {
		// @note: la signature des strategies a été faite en sorte à
		// donner un caractère idempotent aux appels à resolve()
		const { boxes: raw } = this.strategy();

		return { raw, formatted: flattenArray(raw) };
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
		if (!Array.isArray(this.input)) {
			throw new Error(
				"[xspeedit-core::setStrategy]: Vous devez effectuer une saisie avant de pouvoir affecter une stratégie"
			);
		}

		this.strategy = strategy(this);

		return this;
	}

	get input() {
		return this._input;
	}

	get strategy() {
		return this._strategy;
	}

	get capacity() {
		return this._capacity;
	}

	set input(inp) {
		this._input = inp;
	}

	set strategy(stra) {
		this._strategy = stra;
	}

	set capacity(cap) {
		this._capacity = cap;
	}
}

export default Packager;
