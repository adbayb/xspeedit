import React from "react";
import Input from "./Input.js";

describe("Input", () => {
	it("should render correctly", () => {
		// GIVEN: notre composant:
		const tree = shallow(<Input label="My input" onSubmit={() => true} onValidate={() => true} />);
		// THEN: il doit s'afficher correctement en matchant son snapshot:
		expect(tree).toMatchSnapshot();
	});

	it("should handle submit correctly when submitted a valid value", () => {
		// GIVEN: notre composant:
		const tree = shallow(<Input label="My input" onSubmit={() => true} onValidate={() => true} />);
		const event = { preventDefault: jest.fn() };
		const instance = tree.instance();
		// WHEN: nous envoyons notre input:
		const ret = instance.handleSubmit(event);
		// THEN: le retour de fonction doit se faire correctement:
		expect(ret).toBe(false);
	});

	it("should handle submit correctly when submitted an invalid value", () => {
		// GIVEN: notre composant:
		const tree = shallow(<Input label="My input" onSubmit={() => true} onValidate={() => false} />);
		const event = { preventDefault: jest.fn() };
		const instance = tree.instance();
		// WHEN: nous envoyons notre input:
		const ret = instance.handleSubmit(event);
		// THEN: le retour de fonction doit se faire correctement:
		expect(ret).toBe(false);
	});

	it("should handle a valid change correctly", () => {
		// GIVEN: notre composant:
		const tree = shallow(<Input label="My input" onSubmit={() => true} onValidate={() => true} />);
		const value = "value";
		const event = { target: { name: "name", value } };
		const instance = tree.instance();
		// WHEN: nous envoyons notre input:
		const ret = instance.handleChange(event);
		// THEN: le state doit-être mis à jour correctement:
		expect(instance.state.name).toBe(value);
		expect(ret).toBe(true);
	});

	it("should handle an invalid change correctly", () => {
		// GIVEN: notre composant:
		const tree = shallow(<Input label="My input" onSubmit={() => true} onValidate={() => true} />);
		const event = { target: {} };
		const instance = tree.instance();
		// WHEN: nous envoyons notre input:
		const ret = instance.handleChange(event);
		// THEN: le state doit-être mis à jour correctement:
		expect(instance.state.name).toBe(undefined);
		expect(ret).toBe(false);
	});
});
