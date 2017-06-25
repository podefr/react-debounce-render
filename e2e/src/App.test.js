const React = require('react');
const App = require('./App').default;
const enzyme = require('enzyme');

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


