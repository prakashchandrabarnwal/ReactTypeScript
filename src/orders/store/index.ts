import { OrdersViewState } from './types';
import {Store} from '../infrastructure/store';
import {Reducers} from './reducers';
import {SideEffects} from './sideEffects';

export const createStore = ( onStateChange : (state : OrdersViewState) => void) =>{
    const initialState: OrdersViewState = {
        amount: '1m',
        currencyPair: 'USDGBP',
        isBooking: false,
        bookingResults: null,
    };

    const store = new Store<OrdersViewState>(
        initialState,
        Reducers,
        SideEffects,
        onStateChange
    );
    
    return store;
}
