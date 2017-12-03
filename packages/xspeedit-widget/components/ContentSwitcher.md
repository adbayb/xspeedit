**Preview:**

```js
class Example extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			view: true
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(prevState => ({
			view: !prevState.view
		}));
	}

	render() {
		const { view } = this.state;

		return (
			<div style={{ display: "flex", position: "relative", backgroundColor: "black", height: 200 }}>
				<ContentSwitcher isActive={view}>
					<div style={{ position: "relative", backgroundColor: "lightblue", flex: 1 }} />
				</ContentSwitcher>
				<ContentSwitcher isActive={!view}>
					<div style={{ position: "relative", backgroundColor: "red", flex: 1 }} />
				</ContentSwitcher>
				<button style={{ position: "absolute" }} onClick={this.handleClick}>
					Switch
				</button>
			</div>
		);
	}
}

<Example />;
```

**Example:**

```jsx static
import React from "react";

const Example = () => {
	return (
		<Fragment>
			<ContentSwitcher isActive={true}>
				<div>Content A</div>
			</ContentSwitcher>
			<ContentSwitcher isActive={false}>
				<div>Content B</div>
			</ContentSwitcher>
		</Fragment>
	);
};
```
