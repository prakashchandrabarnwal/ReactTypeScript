import { OrdersViewState } from 'src/orders/store/types';
import {
    ActionTypes
  } from '../../../src/orders/store/actions';

const mockBook = jest.fn(
  (
    _currencyPair: string,
    amount: string,
    onResultsReceivedCallback: (success: boolean) => void,
  ) => {
    onResultsReceivedCallback(amount === '1m');
  },
);
jest.mock('../../../src/orders/services/ordersService', () => ({
  OrdersService: jest.fn().mockImplementation(() => {
    return {[ActionTypes.BOOK]: mockBook};
  }),
}));
import { SideEffects } from '../../../src/orders/store/sideEffects';
import { OrdersService } from '../../../src/orders/services/ordersService';


beforeEach(() => {
  (OrdersService as jest.Mock).mockClear();
  mockBook.mockClear();
});

describe('Test Store SideEffects', () => {
  let initialState: OrdersViewState;

  beforeEach(() => {
    initialState = {
      amount: '1m',
      currencyPair: "USDGBP",
      isBooking: false,
      bookingResults: null,
    };
  });

  it('[ActionTypes.BOOK] should trigger OrdersService [ActionTypes.BOOK] method with valid params', (done) => {
    SideEffects[ActionTypes.BOOK](initialState, () => {
      expect(mockBook).toHaveBeenCalledTimes(1);
      expect(mockBook.mock.calls[0][0]).toBe(initialState.currencyPair);
      expect(mockBook.mock.calls[0][1]).toBe(initialState.amount);
      done();
    });
  });

  it('[ActionTypes.BOOK] should dispatch action [ActionTypes.BOOKING_COMPLETE] with success true', (done) => {
    SideEffects[ActionTypes.BOOK](initialState, (action, isSuccess) => {
      expect(mockBook).toHaveBeenCalledTimes(1);

      expect(action).toBe(ActionTypes.BOOKING_COMPLETE);
      expect(isSuccess).toBe(true);
      done();
    });
  });

  it('[ActionTypes.BOOK] should dispatch action [ActionTypes.BOOKING_COMPLETE] with success false', (done) => {
    const newState = {...initialState, amount: '2m'};
    SideEffects[ActionTypes.BOOK](newState, (action, isSuccess) => {
      expect(mockBook).toHaveBeenCalledTimes(1);

      expect(action).toBe(ActionTypes.BOOKING_COMPLETE);
      expect(isSuccess).toBe(false);
      done();
    });
  });
});
