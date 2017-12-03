import React from "react";
import Icon from "./Icon.js";

describe("Icon", () => {
	it("should render correctly", () => {
		// GIVEN: notre composant:
		const tree = shallow(<Icon name="enter" />);
		// THEN: il doit s'afficher correctement en matchant son snapshot:
		expect(tree).toMatchSnapshot();
	});
});
