import React from "react";
import Card from "./Card.js";

describe("Card", () => {
	it("should render correctly", () => {
		const tree = shallow(<Card Menu={<div>Menu</div>}> Content </Card>);
		expect(tree).toMatchSnapshot();
	});
});
