/**
 * Module définissant les fonctions utilitaires
 * @module Utils
 */

/**
 * Fonction définissant une somme en tant que reducer (utilisation avec Array.prototype.reduce())
 * @function
 * @param {number}		initSize - La valeur initiale lors du premier appel au reducer
 * @return {Array}		Les paramètres à envoyer à Array.prototype.reduce()
 */
export const sumReducer = initSize => [(prevSize, currentSize) => prevSize + currentSize, initSize];

/**
 * Fonction définissant l'ordre de tri (utilisation avec Array.prototype.sort())
 * @function
 * @param {number}		a - Première valeur à comparer
 * @param {number}		b - Seconde valeur à comparer
 * @return {number}		-1 || 0 || 1 (cf. Array.prototype.sort() doc)
 */
export const compareAsc = (a, b) => {
	if (a > b) return -1;
	if (a < b) return 1;
	return 0;
};

/**
 * Fonction permettant de vérifier si une chaîne de caractère contient uniquement des chiffres
 * @function
 * @param {string}		str - La chaîne de caractère à vérifier
 * @return {boolean}	true si la chaîne de caractère contient uniquement des chiffres / false, autrement
 */
export const isNumber = str => /^\d+$/.test(str);

/**
 * Fonction permettant d'aplatir un tableau à deux dimensions
 * @function
 * @param {Array}		arr - Le tableau à deux dimensions à aplatir
 * @return {string}		Le tableau aplatit sous forme de chaîne de caractères (chaque sous-tableau est joint par "/")
 */
export const flattenArray = arr => {
	if (!Array.isArray(arr)) return "";

	return arr
		.map(a => {
			if (!Array.isArray(a)) return "";

			return a.join("");
		})
		.join("/");
};
