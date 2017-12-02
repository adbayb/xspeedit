import React from "react";
import PropTypes from "prop-types";

const Icon = ({ name, width, height, className }) => {
	return (
		<img
			className={className}
			src={`/static/${name}.svg`}
			alt={`icon-${name}`}
			width={width}
			height={height}
		/>
	);
};

Icon.propTypes = {
	name: PropTypes.oneOf(["github", "info", "main", "twitter", "enter"]).isRequired,
	width: PropTypes.number,
	height: PropTypes.number,
	className: PropTypes.string
};

Icon.defaultProps = {
	width: 24,
	height: 24
};

export default Icon;
