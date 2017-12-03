import { flattenArray, isNumber } from "./utils.js";

/** Classe centrale implémentant la logique de packaging */
class Packager {
	/**
	 * Créé un packager
	 * @param {number} capacity - La capacité maximale d'une boîte
	 */
	constructor(capacity = 10) {
		/** @private */
		this._input = null;
		/** @private */
		this._capacity = capacity;
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

	/**
	 * Affecte l'input utilisateur à l'instance Packager
	 * @param  {string} input      L'entrée utilisateur représentant les objets à mettre dans les cartons (leur valeur décrivent leur poids)
	 * @return {Packager}          L'instance Packager (permettant le cascade design pattern)
	 */
	setInput(input) {
		this.input = input;

		// @note: nous retournons l'instance pour permettre de "cascader" nos appels de méthodes:
		return this;
	}

	/**
	 * Affecte un algorithme à l'instance Packager
	 * @param  {Function} strategy Le Factory strategy décrivant l'algorithme de résolution du problème
	 * @return {Packager}          L'instance Packager (permettant le cascade design pattern)
	 */
	setStrategy(strategy) {
		this.strategy = strategy;

		return this;
	}

	/**
	 * Getter: Récupère la valeur de la propriété input (tableau décrivant les objets à emballer)
	 * @return {Array} La valeur de la propriété input
	 */
	get input() {
		return this._input;
	}

	/**
	 * Getter: Récupère la valeur de la propriété strategy (fonction décrivant l'algorithme de résolution)
	 * @return {Function} La valeur de la propriété strategy
	 */
	get strategy() {
		return this._strategy;
	}

	/**
	 * Getter: Récupère la valeur de la propriété capacity (capacité maximale d'une boîte)
	 * @return {Array} La valeur de la propriété capacity
	 */
	get capacity() {
		return this._capacity;
	}

	/**
	 * Setter: Assigne une entrée utilisateur et la transforme en un format compréhensible par Packager (string -> array)
	 * @param {string} inp - L'entrée utilisateur (chaîne de caractère)
	 * @throws 		   Erreur si l'input utilisateur ne contient pas uniquement des chiffres
	 */
	set input(inp) {
		// @note: validation de l'input utilisateur (tout en permettant d'éviter les XSS):
		if (typeof inp !== "string" || !isNumber(inp)) {
			throw new Error("[xspeedit-core::setInput]: Saisie invalide: vous devez saisir un nombre");
		}

		this._input = Array.from(inp.toString()).map(Number);
	}

	/**
	 * Setter: Assigne un algorithme à la propriété strategy
	 * @param  {Function} strategy Le Factory strategy décrivant l'algorithme de résolution du problème
	 * @throws 			  Erreur si l'input n'a pas encore été défini
	 */
	set strategy(stra) {
		if (!Array.isArray(this.input)) {
			throw new Error(
				"[xspeedit-core::setStrategy]: Vous devez effectuer une saisie avant de pouvoir affecter une stratégie"
			);
		}

		this._strategy = stra(this);
	}

	/**
	 * Setter: Assigne une capacité maximale à la propriété capacity
	 * @param  {number} cap La contenance maximale d'une boîte
	 */
	set capacity(cap) {
		this._capacity = cap;
	}
}

export default Packager;
