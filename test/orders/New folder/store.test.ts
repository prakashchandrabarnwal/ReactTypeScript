import { createStore } from '../../../src/orders/store';
import { ActionTypes } from '../../../src/orders/store/actions';

describe("Test Create Store", () => {
    it("store should have initial state", () => {
        const store = createStore(jest.fn);
        expect(store.currentState).toEqual({
            amount: '1m',
            currencyPair: 'USDGBP',
            isBooking: false,
            bookingResults: null,
        });
    });

    it("store should trigger callback on action dispatch", () => {
        const stateChangeCallback = jest.fn();
        const store = createStore(stateChangeCallback);
        expect(stateChangeCallback).toHaveBeenCalledTimes(0);
        store.dispatchAction(ActionTypes.CURRENCY_PAIR_CHANGED, "USDJPY");
        expect(stateChangeCallback).toHaveBeenCalledTimes(1);
        expect(stateChangeCallback).toHaveBeenCalledWith({
            amount : '1m',
            currencyPair : 'USDJPY',
            isBooking : null,
            bookingResults : null
        })
    });
});
