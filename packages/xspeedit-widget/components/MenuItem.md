**Preview:**

```js
<MenuItem
	iconName="github"
	onClick={() => {
		console.log("Menu item clicked");
	}}
/>;
```

**Example:**

```jsx static
import React from "react";

const Example = () => {
	const handleClick = (e) => {
		console.log("Menu item clicked");
	};

	return (
		<MenuItem
			iconName="github"
			onClick={handleClick}
		/>
	);
};
```
