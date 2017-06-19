import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('Given App is rendered', () => {
  let div;

  beforeEach(() => {
    div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  describe('When receiving 10 updates in less than 100ms', () => {
    it('Then only renders once', () => {
      expect(div.querySelector(".count").innerText).toBe(2);
    });
  });

  describe('When receiving 10 updates in less than 100ms', () => {
    it('Then renders 10 times', () => {
      expect(div.querySelector(".count").innerText).toBe(10);
    });
  });
});


