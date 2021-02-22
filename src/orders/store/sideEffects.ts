import { OrdersService } from "../services/ordersService";
import { OrdersViewState } from '../store/types';
import { ActionTypes } from '../store/actions';

const ordersService = new OrdersService();

export const SideEffects = {
    [ActionTypes.BOOK](
        state: OrdersViewState,
        onDone:  (doneAction: ActionTypes.BOOKING_COMPLETE, isSuccess : boolean) => void) {
        const {currencyPair ,amount  } = state;
        ordersService[ActionTypes.BOOK](currencyPair,amount, (isSuccess:boolean) => {
            onDone(ActionTypes.BOOKING_COMPLETE, isSuccess);
        })
    },
};
