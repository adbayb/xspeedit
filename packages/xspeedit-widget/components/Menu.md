Preview:

```js
<div style={{ display: "flex", height: 100 }}>
	<Menu
		entries={[
			{ iconName: "main", view: "main" },
			{ iconName: "github", url: "https://github.com/adbayb/xspeedit" }
		]}
		renderEntry={({ iconName, view, url }) => (
			<MenuItem
				key={iconName}
				iconName={iconName}
				isActive={view === "main"}
				url={url}
				onClick={() => {}}
			/>
		)}
	/>
</div>;
```

**Example:**

```jsx static
import React from "react";

const Example = () => {
	const handleClick = (e) => {
		console.log("click", e);
	};

	return (
		<Menu
			entries={[
				{ iconName: "main", view: "main" },
				{ iconName: "github", url: "https://github.com/adbayb/xspeedit" }
			]}
			renderEntry={({ iconName, view, url }) => (
				<MenuItem
					key={iconName}
					iconName={iconName}
					isActive={view === "main"}
					url={url}
					onClick={handleClick}
				/>
			)}
		/>
	);
};
```
