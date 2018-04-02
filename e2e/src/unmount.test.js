import React from 'react';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';

enzyme.configure({ adapter: new Adapter() });

describe('Given App is rendered and unmounted before final debounced render', () => {
    let wrapper;

    beforeEach(() => {
        jest.useFakeTimers();
        wrapper = enzyme.mount(<App />);
    });

    it('does not throw an unmounted component error', async () => {
        return new Promise((resolve) => {
            // unmount after debounced execution is queued, but before it gets executed.
            setTimeout(() => {
                wrapper.unmount();
            }, 95);

            setTimeout(() => {
                resolve()
            }, 110);
            jest.runAllTimers();
        });
    })
});


