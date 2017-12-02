export const sumReducer = initSize => [(prevSize, currentSize) => prevSize + currentSize, initSize];

export const compareAsc = (a, b) => {
	if (a > b) return -1;
	if (a < b) return 1;
	return 0;
};

export const isNumber = str => /^\d+$/.test(str);

export const flattenArray = arr => {
	if (!Array.isArray(arr)) return "";

	return arr
		.map(a => {
			if (!Array.isArray(a)) return "";

			return a.join("");
		})
		.join("/");
};
