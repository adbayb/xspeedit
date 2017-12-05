import Packager from "./packager.js";

import { optimizedAlgorithm } from "./algorithms";
const packager = new Packager();
const output = packager
	.setInput("163841689525773")
	.setStrategy(optimizedAlgorithm)
	.resolve();

console.log(output, "OUTPUT");

export * from "./algorithms";
export default Packager;
