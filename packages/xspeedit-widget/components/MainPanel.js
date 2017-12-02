import React, { Component, Fragment } from "react";
import Packager, { optimizedStrategy, actualStrategy } from "xspeedit-core";

import Chart from "../components/Chart";
import Input from "../components/Input";

class MainPanel extends Component {
	state = {
		optimizedBoxes: [],
		unoptimizedBoxes: []
	};
	packager = new Packager("", 10);

	handleInputSubmit = input => {
		this.packager.input = input;
		this.setState(
			() => ({
				optimizedBoxes: this.packager.setStrategy(optimizedStrategy).resolve(),
				unoptimizedBoxes: this.packager.setStrategy(actualStrategy).resolve()
			}),
			() => {
				console.log(this.state, "STATE");
			}
		);
		console.log("isInputValid: here result", input, this.packager);
	};

	isInputValid = input => {
		return input && input.length > 0 && /^\d+$/.test(input);
	};

	render() {
		const { optimizedBoxes, unoptimizedBoxes } = this.state;

		return (
			<Fragment>
				<Input label="Objets" onValidate={this.isInputValid} onSubmit={this.handleInputSubmit} />
				{unoptimizedBoxes &&
					unoptimizedBoxes.length > 0 && (
						<Chart
							key="main-actual"
							title={`Rangement non optimisé: ${unoptimizedBoxes.length} carton(s)`}
							data={unoptimizedBoxes}
						/>
					)}
				{optimizedBoxes &&
					optimizedBoxes.length > 0 && (
						<Chart
							key="main-optimized"
							title={`Rangement optimisé: ${optimizedBoxes.length} carton(s)`}
							data={optimizedBoxes}
						/>
					)}
			</Fragment>
		);
	}
}

export default MainPanel;
