import React from "react";
import Chart from "./Chart.js";

describe("Chart", () => {
	it("should render correctly", () => {
		// GIVEN: notre composant:
		const tree = shallow(<Chart title="Chart" data={[[1, 2], [3, 4]]} />);
		// THEN: il doit s'afficher correctement en matchant son snapshot:
		expect(tree).toMatchSnapshot();
	});
});
