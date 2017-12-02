React component example:

```js
<div>
	<Icon name="enter" />
	<Icon name="info" />
	<Icon name="github" />
	<Icon name="twitter" />
</div>;
```

You can add a custom props to an example wrapper:

```js { "props": { "className": "checks" } }
<Icon name="info" />;
```

Or disable an editor by passing a `noeditor` modifier:

```jsx noeditor
<Icon name="main" />;
```

To render an example as highlighted source code add a `static` modifier:

```jsx static
import React from 'react';
```
