import React, { Component } from 'react';
import { debounce } from 'lodash';

export default function debounceRender(ComponentToDebounce, ...debounceArgs) {
    return class DebouncedContainer extends Component {
        constructor(props) {
            super(props);
            this._isMounted = true;
            this.state = props;
            this.shouldRender = false;
        }

        componentWillReceiveProps(props) {
            this.shouldRender = false;
            this.updateState(props);
        }

        componentWillUnmount() {
            this._isMounted = false;
        }

        updateState = debounce(props => {
            this.shouldRender = true;
            if (this._isMounted) {
                this.setState(props);
            }
        }, ...debounceArgs);

        shouldComponentUpdate() {
            return this.shouldRender && this._isMounted;
        }

        render() {
            return <ComponentToDebounce { ...this.state } />;
        }
    }
};