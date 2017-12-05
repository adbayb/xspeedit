/**
 * Module définissant les fonctions utilitaires
 * @module Utils
 */

/**
 * Fonction permettant de vérifier si une chaîne de caractère contient uniquement des chiffres
 * @function
 * @param {string}		str - La chaîne de caractère à vérifier
 * @return {boolean}	true si la chaîne de caractère contient uniquement des chiffres compris entre 1 et 9 / false autrement
 */
export const isValidNumber = str => /^[1-9]+$/.test(str);

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
