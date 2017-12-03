import React, { Component, Fragment } from "react";
import Packager, { optimizedStrategy, unoptimizedStrategy } from "xspeedit-core";

import Chart from "../components/Chart";
import Input from "../components/Input";

class MainPanel extends Component {
	static isInputValid = input => {
		return input && input.length > 0 && /^\d+$/.test(input);
	};

	state = {
		optiBoxes: [],
		unoptiBoxes: [],
		formattedOptiBoxes: [],
		formattedUnoptiBoxes: []
	};
	packager = new Packager(10);

	handleInputSubmit = input => {
		this.packager.setInput(input);

		const { raw: optiBoxes, formatted: formattedOptiBoxes } = this.packager
			.setStrategy(optimizedStrategy)
			.resolve();
		const { raw: unoptiBoxes, formatted: formattedUnoptiBoxes } = this.packager
			.setStrategy(unoptimizedStrategy)
			.resolve();

		this.setState(() => ({ optiBoxes, unoptiBoxes, formattedOptiBoxes, formattedUnoptiBoxes }));
	};

	render() {
		const { optiBoxes, unoptiBoxes, formattedOptiBoxes, formattedUnoptiBoxes } = this.state;

		return (
			<Fragment>
				<Input
					label="Objets"
					onValidate={MainPanel.isInputValid}
					onSubmit={this.handleInputSubmit}
				/>
				{unoptiBoxes &&
					unoptiBoxes.length > 0 && (
						<Chart
							key="main-actual"
							title={`Non optimisé: ${unoptiBoxes.length} carton(s) => ${formattedUnoptiBoxes} `}
							data={unoptiBoxes}
						/>
					)}
				{optiBoxes &&
					optiBoxes.length > 0 && (
						<Chart
							key="main-optimized"
							title={`Optimisé: ${optiBoxes.length} carton(s) => ${formattedOptiBoxes}`}
							data={optiBoxes}
						/>
					)}
			</Fragment>
		);
	}
}

export default MainPanel;
