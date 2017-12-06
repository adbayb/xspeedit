import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import Icon from "./Icon";

const MenuItem = ({ iconName, url, isActive, onClick }) => {
	const image = <Icon name={iconName} />;

	return (
		<a
			className={cn({ active: isActive })}
			href={url}
			target={url && "_blank"}
			role={url ? undefined : "button"}
			onClick={url ? undefined : onClick}
		>
			{image}
			<style jsx>{`
				a {
					display: flex;
					flex: 1;
					cursor: pointer;
					transition: background-color 500ms;
					justify-content: center;
					align-items: center;
				}
				.active {
					background-color: #34b7b6;
				}
			`}</style>
		</a>
	);
};

MenuItem.propTypes = {
	iconName: PropTypes.string.isRequired,
	isActive: PropTypes.bool,
	url: PropTypes.string,
	onClick: PropTypes.func
};

export default MenuItem;
