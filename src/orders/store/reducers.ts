import { ActionTypes } from './actions';
import { OrdersViewState } from './types';

export const Reducers = {
    [ActionTypes.AMOUNT_CHANGED](state: OrdersViewState, amount: string): OrdersViewState {
        console.log(`Amount changed from ${state.amount} to ${amount}`);
        return {
            ...state,
            amount,
            bookingResults : null,
            isBooking : null
        };
    },

    [ActionTypes.CURRENCY_PAIR_CHANGED](state: OrdersViewState, currencyPair: string): OrdersViewState {
        console.log(`currencyPair changed from ${state.currencyPair} to ${currencyPair}`);
        return {
            ...state,
            currencyPair,
            bookingResults : null,
            isBooking : null
        };
    },

    [ActionTypes.BOOK](state: OrdersViewState): OrdersViewState {
        return {
            ...state,
            bookingResults : null,
            isBooking : true
        }
    },

    [ActionTypes.BOOKING_COMPLETE](state: OrdersViewState, bookingResults: boolean): OrdersViewState {
        return {
            ...state,
            isBooking : false,
            bookingResults 
        }
    },
};
