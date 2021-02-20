import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import OrdersView from '../../../src/orders/views/ordersView';

describe("<OrderView />", () => {
    let container: HTMLDivElement;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container = null;
    });

    it("should render correctly", () => {
        expect(() => ReactDOM.render(<OrdersView />, container)).not.toThrowError();
    });

    it("Should render with initial data", () => {
        act(() => {
            ReactDOM.render(<OrdersView />, container);
        });
        const amount: HTMLInputElement = container.querySelector('input[type="text"]');
        const currencyPair: HTMLSelectElement = container.querySelector('select');
        expect(amount.value).toBe('1m');
        expect(currencyPair.value).toBe("USDGBP");
    });

    it("can render booking status while clicking book button" , () => {
        // Test first render
        act(() => {
            ReactDOM.render(<OrdersView />, container);
        });
        const button: HTMLButtonElement = container.querySelector('button');
        expect(button.textContent).toBe('book');
        const h1: HTMLHeadingElement  = container.querySelector('h1');
        expect(h1.textContent).toBe('OrdersList');
        // Test second render
        
        act(() => {
            button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
        });
        const span: HTMLSpanElement = container.querySelector('span');
        expect(span.textContent).toBe('Booking In Progress');
    });
});
