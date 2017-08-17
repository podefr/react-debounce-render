import React, { Component } from 'react';
import { debounce } from 'lodash';

export default function debounceRender(ComponentToDebounce, ...debounceArgs) {
    return class DebouncedContainer extends Component {
        constructor(props) {
            super(props);

            this.state = props;
            this.shouldRender = false;
        }

        componentWillReceiveProps(props) {
            this.shouldRender = false;
            this.updateState(props);
        }

        updateState = debounce(props => {
            this.shouldRender = true;
            this.setState(props);
        }, ...debounceArgs);

        shouldComponentUpdate() {
            return this.shouldRender;
        }

        render() {
            return <ComponentToDebounce { ...this.state } />;
        }
    }
};