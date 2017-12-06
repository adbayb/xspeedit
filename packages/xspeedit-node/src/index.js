import Packager, { optimizedAlgorithm, unoptimizedAlgorithm } from "xspeedit-core";
import readline from "readline";

// @note: nous instancions notre robot empaqueteur:
const packager = new Packager(10);
// @note: nous créons l'interface de lecture de l'input (sur buffer STDIN):
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

// @note: nous attendons la saisie utilisateur via question() readline api:
rl.question("Articles      : ", answer => {
	const { raw: rawOptiBoxes, formatted: optiOutput } = packager
		.setInput(answer)
		.setStrategy(optimizedAlgorithm)
		.resolve();
	const { raw: rawUnoptiBoxes, formatted: unoptiOutput } = packager
		.setInput(answer)
		.setStrategy(unoptimizedAlgorithm)
		.resolve();

	console.log(`Robot actuel  : ${unoptiOutput} => ${rawUnoptiBoxes.length} cartons utilisés`);
	console.log(`Robot optimisé: ${optiOutput} => ${rawOptiBoxes.length} cartons utilisés`);

	// @note: nous fermons et nettoyons notre interface:
	rl.close();
});
