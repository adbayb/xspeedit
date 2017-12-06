import React from "react";
import PropTypes from "prop-types";

import { BREAKPOINT } from "../constants/index";

const Card = ({ children, Menu }) => {
	return (
		<article>
			{children && <div>{children}</div>}
			{Menu && <footer>{Menu}</footer>}
			<style jsx>{`
				article {
					display: flex;
					flex: 1;
					flex-direction: column;
					background-color: #2d2e31;
					box-shadow: 3px -1px 6px 0px rgba(0, 0, 0, 0.3);
					overflow: hidden;
				}
				div,
				footer {
					display: flex;
					position: relative;
				}
				footer {
					flex: 2;
				}
				div {
					flex: 12;
				}

				@media (max-width: ${BREAKPOINT}px) {
					article {
						align-self: stretch;
					}
				}
				@media (min-width: ${BREAKPOINT}px) {
					article {
						max-width: 400px;
						height: 600px;
					}
				}
			`}</style>
		</article>
	);
};

Card.propTypes = {
	children: PropTypes.node.isRequired,
	Menu: PropTypes.node.isRequired
};

export default Card;
