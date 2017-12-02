import Packager, { optimizedStrategy, unoptimizedStrategy } from "xspeedit-core";
import readline from "readline";

const packager = new Packager(10);
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question("Articles      : ", answer => {
	const { raw: rawOptiBoxes, formatted: optiOutput } = packager
		.setInput(answer)
		.setStrategy(optimizedStrategy)
		.resolve();
	const { raw: rawUnoptiBoxes, formatted: unoptiOutput } = packager
		.setInput(answer)
		.setStrategy(unoptimizedStrategy)
		.resolve();

	console.log(`Robot actuel  : ${unoptiOutput} => ${rawUnoptiBoxes.length} cartons utilisés`);
	console.log(`Robot optimisé: ${optiOutput} => ${rawOptiBoxes.length} cartons utilisés`);

	rl.close();
});
