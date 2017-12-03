**Preview:**

```js
<Card Menu={<div style={{ backgroundColor: "lightgreen", flex: 1 }}>Menu</div>}>
	<p style={{ color: "white" }}> Content </p>
</Card>;
```

**Example:**

```jsx static
import React from "react";

const Example = () => {
	return (
		<Card
			Menu={<div style={{ backgroundColor: "lightgreen", flex: 1 }}>Menu</div>}
		>
			<p style={{ color: "white" }}> Content </p>
		</Card>
	);
};
```
