import React, { Component } from "react";
import PropTypes from "prop-types";

import Icon from "../components/Icon";

class Input extends Component {
	static propTypes = {
		label: PropTypes.string,
		onSubmit: PropTypes.func.isRequired,
		onValidate: PropTypes.func.isRequired
	};

	state = {
		input: ""
	};

	handleSubmit = e => {
		e.preventDefault();

		const { onValidate, onSubmit } = this.props;
		const { input } = this.state;

		if (!onValidate(input)) {
			return false;
		}

		onSubmit(input);
		this.setState(() => ({ input: "" }));

		return false;
	};

	handleChange = e => {
		const name = e.target.name;

		if (!name) {
			return false;
		}

		this.setState({ [name]: e.target.value });
		return true;
	};

	render() {
		const { label, onValidate } = this.props;
		const { input } = this.state;

		return (
			<form onSubmit={this.handleSubmit}>
				{label && <label htmlFor="boxesInput">{label}</label>}
				<input
					id="boxesInput"
					name="input"
					value={input}
					type="number"
					placeholder="Saisissez vos objets"
					onChange={this.handleChange}
				/>
				<button type="submit" disabled={!onValidate(input)}>
					<Icon className="button" name="enter" />
				</button>
				<style jsx>{`
					form {
						display: flex;
						flex: none;
						justify-content: space-between;
						background-color: #6c727f;
					}
					input {
						width: calc(100% - 50px);
						font-size: 0.9rem;
						margin: 0 0.5rem;
						-webkit-appearance: none;
						-moz-appearance: textfield;
						appearance: none;
						border: 0;
						background-color: transparent;
						color: white;
					}
					input::placeholder {
						color: currentColor;
					}
					button {
						padding: 0 20px;
						background: none;
						border: none;
						border-radius: 0;
					}
					button:not([disabled]) {
						background-color: #34b7b6;
					}
					label {
						display: flex;
						background-color: #565b68;
						margin: 0;
						padding: 1rem;
						align-items: center;
						justify-content: center;
					}
				`}</style>
			</form>
		);
	}
}

export default Input;
