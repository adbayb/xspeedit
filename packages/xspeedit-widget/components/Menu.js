import React, { Component } from "react";
import PropTypes from "prop-types";

class Menu extends Component {
	static propTypes = {
		entries: PropTypes.array,
		renderEntry: PropTypes.func
	};
	static defaultProps = {
		entries: []
	};

	renderItems() {
		const { entries, renderEntry } = this.props;

		return entries.map(renderEntry);
	}

	render() {
		return (
			<nav>
				{this.renderItems()}
				<style jsx>{`
					nav {
						display: flex;
						flex: 1;
						background-color: #303034;
						box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.2);
					}
				`}</style>
			</nav>
		);
	}
}

export default Menu;
