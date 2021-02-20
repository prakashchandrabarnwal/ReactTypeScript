import { OrdersViewState } from '../../../src/orders/store/types';
import { ActionTypes } from '../../../src/orders/store/actions';
import { Reducers } from '../../../src/orders/store/reducers';

describe("Test store reducer", () => {
    let state : OrdersViewState;

    beforeEach(()=>{
        state = {
            amount : "1m",
            currencyPair : "USDGBP",
            isBooking : false,
            bookingResults : null
        }
    });
    it('Test amount change reducer', () => {
        expect(Reducers[ActionTypes.AMOUNT_CHANGED](state, '3m')).toEqual({
          ...state,
          bookingResults:null,
          isBooking : null,
          amount: '3m',
        });
      });

      it('Test currency change reducer', () => {
        expect(Reducers[ActionTypes.CURRENCY_PAIR_CHANGED](state, 'USDJPY')).toEqual({
          ...state,
          bookingResults:null,
          isBooking : null,
          currencyPair :"USDJPY"
        });
      });

      it('Test isBooking change reducer', () => {
        expect(Reducers[ActionTypes.BOOK](state)).toEqual({
          ...state,
          bookingResults:null,
          isBooking : true,
        });
      });

      it('Test Booking Complete success change reducer', () => {
        expect(Reducers[ActionTypes.BOOKING_COMPLETE](state, true)).toEqual({
          ...state,
          bookingResults:true,
          isBooking : false,
        });
      });

      it('Test Booking Complete failer change reducer', () => {
        expect(Reducers[ActionTypes.BOOKING_COMPLETE](state, false)).toEqual({
          ...state,
          bookingResults:false,
          isBooking : false,
        });
      });

});
