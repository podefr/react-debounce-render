import React, { Component } from 'react';

export default class DisplayCount extends Component {
    constructor(props) {
        super(props);

        this.renderCount = 0;
    }

    render() {
        this.renderCount++;

        return <p className="display-count">
            DisplayCount.render() was called : <b className="render-count">{ this.renderCount }</b> times.
            And data.length is <b className="data-length">{ this.props.data.length }</b>.
        </p>;
    }
}