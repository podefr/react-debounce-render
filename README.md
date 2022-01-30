![npm](https://img.shields.io/npm/dw/react-debounce-render)
![Actively Maintained](https://img.shields.io/badge/Maintenance%20Level-Actively%20Maintained-green.svg)

# react-debounce-render

`react-debounce-render` is a Higher Order Component that wraps your react components and debounces their rendering.

This method can be used to prevent extra renders when a react component rapidly receives new props by delaying the triggering of the render until updates become less frequent. Doing so will improve the overall rendering time of the application, thus improve the user experience.

It uses [lodash debounce](https://lodash.com/docs/#debounce) under the hood, which means that it can be configured just like lodash debounce.

### Rationale:

Sometimes it's difficult, impractical or impossible to batch props updates before they're passed down to a react component, resulting in a react component being rendered too often while only the last
props update might have been useful and should have triggered a rendering of the component. In these cases, debouncing the rendering of a react component may be the only solution to improve performance.

`react-debounce-render` is a react component that will wrap any of your react components, persist the last props update that was received while discarding the previous ones,
and only rendering the wrapped component when no new updates has been received in the last few milliseconds by default. Since the debounce function used under the hood
is lodash's debounce, you may also pass in a few options such as the number of milliseconds to delay the render by, a maximum delay, or whether to call render on a leading or trailing edge of the timeout.

## Usage:

### Default usage:

```js
import debounceRender from "react-debounce-render";

const debouncedMyReactComponent = debounceRender(MyReactComponent);

// do whatever you want with the debounced component such as connecting to a redux store:
connect((state) => {
  myProp: (state) => getProp(state);
})(debouncedMyReactComponent);
```

### With options:

See [lodash debounce](https://lodash.com/docs/#debounce) for all options. Debounce render takes its parameters similarily to lodash debounce:

To trigger the debounce on the leader edge:

```js
import debounceRender from "react-debounce-render";

const debouncedMyReactComponent = debounceRender(MyReactComponent, 100, {
  leading: true,
});
```

Or to ensure that at least one refresh happens every second:

```js
import debounceRender from "react-debounce-render";

const debouncedMyReactComponent = debounceRender(MyReactComponent, 100, {
  maxWait: 1000,
});
```

### Compose with other HOCs:

Use `debounce` instead of `debounceRender` to compose with other HOCs and some compose utility function.
[maximizing composability convention](https://reactjs.org/docs/higher-order-components.html#convention-maximizing-composability)

```js
import { debounce } from "react-debounce-render";
import { withStyles } from "@material-ui/core/styles";
import { compose } from "ramda";

// ...

export default compose(
  withStyles(styles),
  debounce(200, { maxWait: 400 })
)(MyReactComponent);
```

# Changelog

### 8.0.0 - JAN 29 2022

- Rewrite using TypeScript
- Fixes #28, #24, #18, #14

### 7.0.1 - JAN 23 2022

- Upgrade dependencies to fix a number of security issues

### 7.0.0 - AUG 22 2020

- Introduce the `debounce` higher order function as 2nd export for use in redux/compose patterns. See [maximizing composability convention](https://reactjs.org/docs/higher-order-components.html#convention-maximizing-composability) for more info. Thanks [CurriedFloat](https://github.com/CurriedFloat) for the contribution!
- No breaking changes

### 6.1.0 - JUNE 23 2020

- Fix import of lodash.debounce. See [PR #20](https://github.com/podefr/react-debounce-render/pull/20). Thanks [ReinAkane](https://github.com/ReinAkane) for the contribution!

### 6.0.0 - FEB 04 2020

- Add support for hoisting non-react statics. See [PR #16](https://github.com/podefr/react-debounce-render/pull/16) for more details. Thanks [Thomas0c](https://github.com/Thomas0c) for the contribution!
- Update e2e tests to use the most recent React version
- Drop supports for React <= 15

### 5.0.0 - OCT 04 2018

There is no breaking change in this version despite the major version change, this is only to highlight the fact that most of the internal implementation has changed since PR #12.

- Removes unused `lodash` dependency since we're using `lodash/debounce`. Thanks [@yched](https://github.com/yched) for raising the issue!
- Using [@yched](https://github.com/yched) cleaner implementation which doesn't use the deprecated lifecycle methods nor trigger any warning. See Issue [#11](https://github.com/podefr/react-debounce-render/issues/11).

### 4.0.3 - JULY 19 2018

- Revert 4.0.2 change and use latest lodash version again, though importing `lodash/debounce` directly. Thanks [@faizrr](https://github.com/faizrr) for raising the issue!

### 4.0.2 - JULY 6 2018

- Use lodash.debounce instead of lodash to reduce built package size. Thanks [@faizrr](https://github.com/faizrr) for raising the issue!

### 4.0.1 - APRIL 3 2018

- Ensure that debounce is properly canceled when the component is unmounted which removes the "Warning: Can only update a mounted or mounting component." warning.
  Resolves [Issue #5](https://github.com/podefr/react-debounce-render/issues/5). Thanks [@mjhm](https://github.com/mjhm) for the fix.

### 4.0.0 - NOVEMBER 20 2017

- Move react to the `peerDependencies` in package.json and accept major versions greater than 15. Resolves [Issue #4](https://github.com/podefr/react-debounce-render/issues/4). Thanks [@TheSharpieOne](https://github.com/TheSharpieOne) for raising the issue.

### 3.0.0 - AUGUST 16 2017

- `import debounceRender from 'react-debounce-render'` should now consistently work. See [Issue #2](https://github.com/podefr/react-debounce-render/issues/2). Thanks [@CameronAckermanSEL](https://github.com/CameronAckermanSEL) for raising the issue.
  As a result, using a destructuring assignment in the import statement (`import { debounceRender } from 'react-debounce-render''`) shouldn't accidentally work anymore which is a potential breaking change.

### 2.0.0 - JULY 31 2017

- Module isn't built as standalone before being published to npm, resulting in a cleaner and lighter package. Also removes non lib related files from the package. See [PR #1](https://github.com/podefr/react-debounce-render/pull/1). Thanks [@wbazant](https://github.com/wbazant) for the contribution.

### 1.0.0 - JUNE 25 2017

- debounces a React component's render method()
- includes e2e tests and documentation
