import { OrdersService } from "../services/ordersService";
import { OrdersViewState } from '../store/types';
import { ActionTypes } from '../store/actions';

const ordersService = new OrdersService();

export const SideEffects = {
    [ActionTypes.BOOK](state: OrdersViewState, onDone:  (doneAction: ActionTypes.BOOKING_COMPLETE, ...args: any) => void) {
        ordersService[ActionTypes.BOOK](state.currencyPair,state.amount, (success:boolean) => {
            onDone(ActionTypes.BOOKING_COMPLETE, success);
        })
    },
};
