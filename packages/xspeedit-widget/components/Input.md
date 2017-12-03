**Preview:**

```js
<Input
	label="My input"
	onSubmit={value => console.log("Submitted value = ", value)}
	onValidate={value => Boolean(value)}
/>;
```

**Example:**

```jsx static
import React from "react";

const Example = () => {
	const handleSubmit = (value) => {
		console.log("Submitted value = ", value);
	};

	const handleValidate = (value) => {
		return Boolean(value);
	};

	return (
		<Input label="My input" onSubmit={handleSubmit} onValidate={handleValidate} />
	);
};
```
