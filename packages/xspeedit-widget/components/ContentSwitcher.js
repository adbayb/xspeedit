import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

const ContentSwitcher = ({ children, isActive }) => {
	return (
		<div className={cn({ active: isActive })}>
			{children}
			<style jsx>{`
				div {
					display: flex;
					flex-direction: column;
					position: absolute;
					top: 0;
					bottom: 0;
					left: 0;
					right: 0;
					background-color: #2d2e31;
					transition: all 500ms;
					background: linear-gradient(to top, #232526, #414345);
					overflow-y: auto;
				}
				.active {
					transform: translate3d(0, 0, 0);
					opacity: 1;
					visibility: visible;
				}
				:not(.active) {
					transform: translate3d(0, 50px, 0);
					opacity: 0;
					visibility: hidden;
				}
			`}</style>
		</div>
	);
};

ContentSwitcher.propTypes = {
	isActive: PropTypes.bool.isRequired,
	children: PropTypes.node
};

export default ContentSwitcher;
