import React, { Component } from "react";
import Head from "next/head";

import Card from "../components/Card";
import Menu from "../components/Menu";
import MenuItem from "../components/MenuItem";
import ContentSwitcher from "../components/ContentSwitcher";
import MainPanel from "../components/MainPanel";
import InfoPanel from "../components/InfoPanel";

import { BREAKPOINT } from "../constants/index";

class Widget extends Component {
	state = {
		currentView: "main"
	};

	handleMenuClick = view => {
		const { currentView } = this.state;

		if (currentView === view) {
			return;
		}

		this.setState(() => ({
			currentView: view
		}));
	};

	renderMenuEntry = ({ iconName, view, url }) => {
		const { currentView } = this.state;

		return (
			<MenuItem
				key={iconName}
				iconName={iconName}
				isActive={currentView === view}
				url={url}
				onClick={e => this.handleMenuClick(view, e)}
			/>
		);
	};

	render() {
		const { currentView } = this.state;

		return (
			<main>
				<Head>
					<title>xspeedit</title>
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
					<meta name="mobile-web-app-capable" content="yes" />
				</Head>
				<Card
					Menu={
						<Menu
							entries={[
								{ iconName: "main", view: "main" },
								{ iconName: "info", view: "info" },
								{ iconName: "github", url: "https://github.com/adbayb/xspeedit" },
								{ iconName: "twitter", url: "https://twitter.com/adbayb" }
							]}
							renderEntry={this.renderMenuEntry}
						/>
					}
				>
					<ContentSwitcher isActive={currentView === "main"}>
						<MainPanel />
					</ContentSwitcher>
					<ContentSwitcher isActive={currentView === "info"}>
						<InfoPanel />
					</ContentSwitcher>
				</Card>
				<style jsx>{`
					main {
						width: 100vw;
						height: 100vh;
						display: flex;
						flex: 1;
						justify-content: center;
						align-items: center;
					}
				`}</style>
				<style global jsx>{`
					@font-face {
						font-family: "Aleo";
						font-display: swap;
						font-weight: normal;
						font-style: normal;
						src: url("/static/font/HKGrotesk-Bold.eot");
						src: url("/static/font/HKGrotesk-Bold.eot?#iefix") format("embedded-opentype"),
							url("/static/font/HKGrotesk-Bold.woff2") format("woff2"),
							url("/static/font/HKGrotesk-Bold.woff") format("woff"),
							url("/static/font/HKGrotesk-Bold.ttf") format("truetype"),
							url("/static/font/HKGrotesk-Bold.svg#svgFontName") format("svg");
					}
					* {
						box-sizing: border-box;
					}
					html,
					body {
						font-family: Aleo, sans-serif;
						margin: 0;
						padding: 0;
						color: lightgrey;
						background: linear-gradient(45deg, #475278, #466e7d);
					}

					@media (min-width: ${BREAKPOINT}px) {
						::-webkit-scrollbar {
							position: absolute;
							top: -50px;
							width: 7px;
							height: 7px;
							background-color: transparent;
						}
						::-webkit-scrollbar-thumb {
							top: -50px;
							background-color: rgba(0, 0, 0, 0.5);
						}
						::-webkit-resizer,
						::-webkit-scrollbar-button,
						::-webkit-scrollbar-corner {
							display: none;
						}
					}
				`}</style>
			</main>
		);
	}
}

export default Widget;
