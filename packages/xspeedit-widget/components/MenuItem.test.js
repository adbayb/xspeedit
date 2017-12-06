import React from "react";
import MenuItem from "./MenuItem.js";

describe("MenuItem", () => {
	it("should render correctly when it's not active", () => {
		// GIVEN: notre composant:
		const tree = shallow(<MenuItem iconName="github" onClick={() => {}} />);
		// THEN: il doit s'afficher correctement en matchant son snapshot:
		expect(tree).toMatchSnapshot();
	});

	it("should render correctly when it's active", () => {
		// GIVEN: notre composant:
		const tree = shallow(<MenuItem iconName="github" onClick={() => {}} isActive />);
		// THEN: il doit s'afficher correctement en matchant son snapshot:
		expect(tree).toMatchSnapshot();
	});

	it("should render correctly when it's a link", () => {
		// GIVEN: notre composant:
		const tree = shallow(
			<MenuItem
				iconName="github"
				url="https://github.com/adbayb/xspeedit"
				onClick={() => {}}
				isActive
			/>
		);
		// THEN: il doit s'afficher correctement en matchant son snapshot:
		expect(tree).toMatchSnapshot();
	});
});
