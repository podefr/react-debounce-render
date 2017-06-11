# react-debounce-render

(WIP)

react-debounce-render is a Higher Order Component which will wrap a React Component which render function should be debounced.
It uses lodash's debounce under the hood.

## Usage:

### Default usage:

```js
import debounce from 'react-debounce-render';

const debouncedMyReactComponent = debounce(MyReactComponent);

```

### With options:

```js
import debounce from 'react-debounce-render';

const debouncedMyReactComponent = debounce(MyReactComponent, 100, { leading: false });
```

