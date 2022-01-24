import React, { Component } from 'react';

import debounceRender, { debounce } from 'react-debounce-render';
import { compose } from 'ramda';
import  DisplayCount from './DisplayCount';

import './App.css';

const DebouncedDisplayCount = debounceRender(DisplayCount, 100);
const ComposedDebouncedDisplayCount = compose(
    debounce(100)
    )(DisplayCount)

class App extends Component<{}, { data: any[] }> {
    renderCount: number;

    constructor(props: {}) {
        super(props);

        this.state = {
            data: []
        };
        this.renderCount = 0;
    }

    componentDidMount() {
        this.simulateFastDataStream();
    }

    simulateFastDataStream() {
        new Array(10)
            .fill(1)
            .forEach((value, index) => {
                setTimeout(() => {
                    this.setState({
                        data: [...this.state.data, index]
                    });
                }, index * 10);
            });
    }

    render() {
        this.renderCount++;

        return <div className="App">
            <p>
                App.render() was called : <b className="app-render-count">{ this.renderCount }</b> times.
            </p>
            <DisplayCount className="lol" data={ this.state.data } />
            <DebouncedDisplayCount className="hoc" data={ this.state.data }/>
            <ComposedDebouncedDisplayCount className="composable" data={ this.state.data } />
        </div>;
    }
}

export default App;
