import React from "react";
import Card from "./Card.js";

describe("Card", () => {
	it("should render correctly", () => {
		// GIVEN: notre composant:
		const tree = shallow(<Card Menu={<div>Menu</div>}> Content </Card>);
		// THEN: il doit s'afficher correctement en matchant son snapshot:
		expect(tree).toMatchSnapshot();
	});
});
