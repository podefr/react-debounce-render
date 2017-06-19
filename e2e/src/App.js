import React, { Component } from 'react';
import debounceRender from 'react-debounce-render';

import  DisplayCount from './DisplayCount';

import './App.css';

const DebouncedDisplayCount = debounceRender(DisplayCount, 100);

class App extends Component {
    constructor(props) {
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
            <DebouncedDisplayCount data={ this.state.data }/>
        </div>;
    }
}

export default App;
