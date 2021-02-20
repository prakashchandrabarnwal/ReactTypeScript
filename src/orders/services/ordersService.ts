import { ActionTypes } from '../store/actions';

export class OrdersService {
    [ActionTypes.BOOK](currencyPair: string, amount: string, onResultsReceivedCallback: (success: boolean) => void) {
        setTimeout(() => {
                const bookingSuccess = amount === "1m";
                onResultsReceivedCallback(bookingSuccess);
            },
            2000
        )
    }
}
