import React, { Component } from 'react';
import debounce from 'lodash/debounce';
import hoistNonReactStatics from 'hoist-non-react-statics';

function debounceRender(ComponentToDebounce, ...debounceArgs) {
    class DebouncedContainer extends Component {
        updateDebounced = debounce(this.forceUpdate, ...debounceArgs);

        shouldComponentUpdate() {
            this.updateDebounced();
            return false;
        }

        componentWillUnmount() {
            this.updateDebounced.cancel();
        }

        render() {
            return <ComponentToDebounce {...this.props} />;
        }
    }
    return hoistNonReactStatics(DebouncedContainer, ComponentToDebounce);
};

export default debounceRender;
