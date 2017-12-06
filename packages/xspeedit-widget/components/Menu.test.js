import React from "react";
import Menu from "./Menu.js";

describe("Menu", () => {
	it("should render correctly", () => {
		// GIVEN: notre composant:
		const tree = shallow(
			<Menu
				entries={[
					{ iconName: "main", view: "main" },
					{ iconName: "github", url: "https://github.com/adbayb/xspeedit" }
				]}
				renderEntry={(entry, index) => <div key={index}> {entry.iconName} </div>}
			/>
		);
		// THEN: il doit s'afficher correctement en matchant son snapshot:
		expect(tree).toMatchSnapshot();
	});
});
