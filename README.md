# react-debounce-render

react-debounce-render is a Higher Order Component that wraps your react components and debounces their render method.
It uses [lodash debounce](https://lodash.com/docs/#debounce) to debounce the render method.

Rationale:

Sometimes it's difficult, impractical or impossible to batch props before they're passed down to a react component.
As a result of that, the react component may re-render more often that actually useful to the application's user, when only the last
prop update should have been rendered, and the previous ones discarded. In these case, debouncing the render method of a react component may improve performance.

react-debounce-render is a react component that will wrap any of your react component, persist the last update that was received while discarding the previous ones,
and only rendering the wrapped component when no new updates has been received in the last few milliseconds by default. Since the debounce function used under the hood
is lodash's debounce, you may also pass in a few options such as the number of milliseconds to delay the render by, a maximum delay, or whether to call render on a leading or trailing edge of the timeout.


## Usage:

### Default usage:

```js
import debounceRender from 'react-debounce-render';

const debouncedMyReactComponent = debounceRender(MyReactComponent);

// do whatever you want with the debounced component such as connecting to a redux store:
connect(state => {
    myProp: (state) => getProp(state)
})(debouncedMyReactComponent);

```

### With options:

react-debounce-render

```js
import debounceRender from 'react-debounce-render';

const debouncedMyReactComponent = debounceRender(MyReactComponent, 100, { leading: false });
```

