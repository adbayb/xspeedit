import React, { Component, Fragment } from "react";
import Packager, { optimizedAlgorithm, unoptimizedAlgorithm } from "xspeedit-core";

import Chart from "../components/Chart";
import Input from "../components/Input";
import Icon from "../components/Icon";

class MainPanel extends Component {
	static isInputValid = input => {
		return input && input.length > 0 && /^[1-9]+$/.test(input);
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

		const { raw: optiBoxes, formatted: formattedOptiBoxes } = new Packager(10)
			.setInput(input)
			.setStrategy(optimizedAlgorithm)
			.resolve();
		const { raw: unoptiBoxes, formatted: formattedUnoptiBoxes } = new Packager(10)
			.setInput(input)
			.setStrategy(unoptimizedAlgorithm)
			.resolve();

		this.setState(() => ({ optiBoxes, unoptiBoxes, formattedOptiBoxes, formattedUnoptiBoxes }));
	};

	render() {
		const { optiBoxes, unoptiBoxes, formattedOptiBoxes, formattedUnoptiBoxes } = this.state;
		const isEmptyResult =
			unoptiBoxes && unoptiBoxes.length === 0 && optiBoxes && optiBoxes.length === 0;

		return (
			<Fragment>
				<Input
					label="Articles"
					placeholder="Saississez les tailles [1-9]"
					onValidate={MainPanel.isInputValid}
					onSubmit={this.handleInputSubmit}
				/>
				{!isEmptyResult ? (
					<Fragment>
						<Chart
							key="main-actual"
							title={`Non optimisé: ${unoptiBoxes.length} carton(s) => ${formattedUnoptiBoxes} `}
							data={unoptiBoxes}
						/>
						<Chart
							key="main-optimized"
							title={`Optimisé: ${optiBoxes.length} carton(s) => ${formattedOptiBoxes}`}
							data={optiBoxes}
						/>
					</Fragment>
				) : (
					<section>
						<Icon name="chevrons-up" width={100} height={100} />
						<style jsx>{`
							section {
								display: flex;
								flex: 1;
								justify-content: center;
							}
							section :global(img) {
								animation-duration: 0.75s;
								animation-name: slideup;
								animation-direction: alternate;
								animation-iteration-count: infinite;

								@keyframes slideup {
									from {
										transform: translate3d(0, 100px, 0);
									}

									to {
										transform: translate3d(0, 50px, 0);
									}
								}
							}
						`}</style>
					</section>
				)}
			</Fragment>
		);
	}
}

export default MainPanel;
