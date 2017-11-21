import React from 'react';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';

enzyme.configure({ adapter: new Adapter() });

describe('Given App is rendered', () => {
    let wrapper;

    beforeEach(() => {
        jest.useFakeTimers();

        wrapper = enzyme.mount(<App />);
    });

    describe('When 10 updates were received, 10 ms apart', () => {
        beforeEach(() => {
            jest.runAllTimers();
        });

        it('Then DisplayCount is only rendered once after the initial rendering', () => {
            expect(+wrapper.find(".render-count").text()).toBe(2);
        });
    });
});


