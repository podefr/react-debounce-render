import React, { Component, ComponentType } from 'react';
import _debounce from 'lodash.debounce';
import { DebounceSettings } from 'lodash';

import hoistNonReactStatics from 'hoist-non-react-statics';

function debounceRender<T>(ComponentToDebounce: ComponentType<T>, wait?: number, debounceArgs?: DebounceSettings): ComponentType<T> {
    class DebouncedContainer extends Component<T> {
        displayName = `debounceRender(${ ComponentToDebounce.displayName || ComponentToDebounce.name || 'Component' })`;
        updateDebounced = _debounce(this.forceUpdate, wait, debounceArgs);

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

export const debounce = (wait?: number, debounceArgs?: DebounceSettings) => <T extends unknown>(ComponentToDebounce: ComponentType<T>) =>
  debounceRender(ComponentToDebounce, wait, debounceArgs);

export default debounceRender;
