import React from "react";
import InfoPanel from "./InfoPanel.js";

describe("InfoPanel", () => {
	it("should render correctly", () => {
		// GIVEN: notre composant:
		const tree = shallow(<InfoPanel />);
		// THEN: il doit s'afficher correctement en matchant son snapshot:
		expect(tree).toMatchSnapshot();
	});
});
