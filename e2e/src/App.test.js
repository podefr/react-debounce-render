import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('Given App is rendered', () => {
    beforeEach(() => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });

    describe('When 10 updates were received, 10 ms apart', () => {
        it('Then DisplayCount is only rendered once', (done) => {
            setTimeout(() => {
                expect(document.querySelector("b.render-count").innerText).toBe(2);
                done();
            }, 2000);
        });
    });
});


