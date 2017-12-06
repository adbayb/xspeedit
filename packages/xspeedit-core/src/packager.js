import { flattenArray, isValidNumber } from "./utils.js";

/** Classe représentant le robot empaqueteur (i.e. implémentant la logique de packaging) */
class Packager {
	/**
	 * Créé un robot empaqueteur
	 * @param {number} capacity	La capacité maximale des cartons
	 */
	constructor(capacity = 10) {
		/** @private */
		this._capacity = capacity;
		/** @private */
		this._input = null;
		/** @private */
		this._algorithm = null;
	}

	/**
	 * Résoud la problématique d'empaquetage suivant une stratégie et un input donnés
	 * @return {{raw:Array, formatted:string}} La représentation de la résolution sous forme d'un objet {raw, formatted}. raw (du type [[1,2], [3,4]]) et formatted (du type "12/34")
	 */
	resolve() {
		// @note: la signature des strategies a été faite en sorte à
		// donner un caractère idempotent aux appels à resolve()
		const { boxes: raw } = this.algorithm();

		return { raw, formatted: flattenArray(raw) };
	}

	/**
	 * Affecte l'input utilisateur à l'instance Packager
	 * @param  {string} input      L'entrée utilisateur représentant les objets à mettre dans les cartons (leur valeur décrit leur taille)
	 * @return {Packager}          L'instance Packager (permettant le cascade design pattern)
	 */
	setInput(input) {
		this.input = input;

		// @note: nous retournons l'instance pour permettre de "cascader" nos appels de méthodes:
		return this;
	}

	/**
	 * Affecte un algorithme de résolution à l'instance Packager
	 * @param  {Function} algorithm Le Factory algorithm() décrivant l'algorithme de résolution du problème
	 * @return {Packager}          	L'instance Packager (permettant le cascade design pattern)
	 */
	setStrategy(algorithm) {
		this.algorithm = algorithm;

		return this;
	}

	/**
	 * Getter: Récupère la valeur du tableau décrivant les objets à emballer
	 * @return {Array} La valeur de la propriété input
	 */
	get input() {
		return this._input;
	}

	/**
	 * Getter: Récupère la fonction décrivant l'algorithme de résolution
	 * @return {Function} La valeur de la propriété algorithm
	 */
	get algorithm() {
		return this._algorithm;
	}

	/**
	 * Getter: Récupère la valeur de la contanance maximale des cartons
	 * @return {Array} La valeur de la propriété capacity
	 */
	get capacity() {
		return this._capacity;
	}

	/**
	 * Setter: Assigne une entrée utilisateur et la transforme en un format compréhensible par Packager (string -> array)
	 * @param {string} inp - L'entrée utilisateur (nombre avec des tailles comprises entre 1 et 9)
	 * @throws 		   Erreur si l'input utilisateur ne contient pas uniquement des chiffres
	 */
	set input(inp) {
		// @note: validation de l'input utilisateur (tout en permettant d'éviter les XSS):
		if (typeof inp !== "string" || !isValidNumber(inp)) {
			throw new Error(
				"[xspeedit-core::setInput]: Saisie invalide: vous devez saisir un nombre constitué de chiffre compris entre 1 et 9 (chaîne de caractère et 0 non tolérés"
			);
		}

		this._input = Array.from(inp.toString()).map(Number);
	}

	/**
	 * Setter: Assigne un algorithme à la propriété algorithm
	 * @param  {Function} algorithm Le Factory algorithm décrivant l'algorithme de résolution du problème
	 * @throws 			  Erreur si l'input n'a pas encore été défini
	 */
	set algorithm(algo) {
		if (!Array.isArray(this.input)) {
			throw new Error(
				"[xspeedit-core::setStrategy]: Vous devez effectuer une saisie avant de pouvoir affecter une stratégie"
			);
		}

		// @note: Renforcement de l'immutabilité en envoyant une copie (shallow) de l'input
		// pour être sûr que les algorithmes n'altèrent pas directement la propriété input de l'instance Packager
		this._algorithm = algo({ articles: [...this.input], capacity: this.capacity });
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
