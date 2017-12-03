import React from "react";
import MainPanel from "./MainPanel.js";

describe("MainPanel", () => {
	it("should render correctly", () => {
		// GIVEN: notre composant:
		const tree = shallow(<MainPanel />);
		const instance = tree.instance();
		// @note: issue Fragment avec enzyme (https://github.com/airbnb/enzyme/issues/1213):
		const fragment = instance.render();
		// WHEN: nous envoyons un input:
		instance.handleInputSubmit("0123456789");
		// THEN: il doit s'afficher correctement en matchant son snapshot:
		expect(shallow(<div>{fragment}</div>).getElement()).toMatchSnapshot();
	});

	it("should check input correctly", () => {
		// GIVEN: notre composant:
		// WHEN: nous appellons le validateur d'input:
		// THEN: il doit s'afficher correctement en matchant son snapshot:
		expect(MainPanel.isInputValid("012364444")).toBe(true);
	});
});
