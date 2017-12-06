import React from "react";
import MainPanel from "./MainPanel.js";

describe("MainPanel", () => {
	it("should render correctly", () => {
		// GIVEN: notre composant:
		// @note: mount à la place de shallow lié à l'issue Fragment avec enzyme (https://github.com/airbnb/enzyme/issues/1213):
		const tree = mount(<MainPanel />);
		const instance = tree.instance();
		// WHEN: nous envoyons un input:
		instance.handleInputSubmit("123456789");
		// THEN: il doit s'afficher correctement en matchant son snapshot:
		expect(tree).toMatchSnapshot();
	});

	it("should check input correctly", () => {
		expect(MainPanel.isInputValid("12364444")).toBe(true);
	});
});
