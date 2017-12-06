import React from "react";
import ContentSwitcher from "./ContentSwitcher.js";

describe("ContentSwitcher", () => {
	it("should render correctly when it's not active", () => {
		// GIVEN: notre composant:
		const tree = shallow(<ContentSwitcher> Content </ContentSwitcher>);
		// THEN: il doit s'afficher correctement en matchant son snapshot:
		expect(tree).toMatchSnapshot();
	});

	it("should render correctly when it's active", () => {
		// GIVEN: notre composant:
		const tree = shallow(<ContentSwitcher isActive> Content </ContentSwitcher>);
		// THEN: il doit s'afficher correctement en matchant son snapshot:
		expect(tree).toMatchSnapshot();
	});
});
