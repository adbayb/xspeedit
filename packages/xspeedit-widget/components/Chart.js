import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Chart extends PureComponent {
	static propTypes = {
		title: PropTypes.string.isRequired,
		data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number))
	};

	colors = [
		"#FFF8E1",
		"#FFECB3",
		"#FFE082",
		"#FFD54F",
		"#FFCA28",
		"#FFC107",
		"#FFB300",
		"#FFA000",
		"#FF8F00",
		"#FF6F00"
	];

	renderObjects(objects) {
		return objects.map((object, index) => {
			return (
				object > 0 && (
					<div key={index} className="object">
						{object}
						<style jsx>{`
							.object {
								display: flex;
								flex: 1;
								color: black;
								font-size: 0.9rem;
								background-color: ${this.colors[object]};
								flex: none;
								height: ${object * 10}%;
								justify-content: center;
								align-items: center;
							}
						`}</style>
					</div>
				)
			);
		});
	}

	renderBoxes() {
		const { data } = this.props;

		return data.map((objects, index) => {
			return (
				<div key={index} className="box">
					{this.renderObjects(objects)}
					<style jsx>{`
						.box {
							display: flex;
							flex-direction: column;
							justify-content: flex-end;
							flex: none;
							width: 50px;
							margin-right: 10px;
							background-color: black;
							border: 3px solid black;
						}
					`}</style>
				</div>
			);
		});
	}

	render() {
		const { title } = this.props;

		return (
			<section>
				<h1>{title.toUpperCase()}</h1>
				<div>{this.renderBoxes()}</div>
				<style jsx>{`
					section {
						display: flex;
						flex-direction: column;
						flex: 1;
						padding: 20px 10px;
					}
					section:nth-child(2) {
						padding-bottom: 0;
					}
					h1 {
						margin: 0 0 20px 0;
						font-size: 12px;
						font-weight: bold;
					}
					div {
						display: flex;
						overflow-x: scroll;
						flex: 1;
					}
				`}</style>
			</section>
		);
	}
}

export default Chart;
