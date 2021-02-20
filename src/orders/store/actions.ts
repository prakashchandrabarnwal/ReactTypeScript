export enum ActionTypes {
    AMOUNT_CHANGED,
    CURRENCY_PAIR_CHANGED,
    BOOK,
    BOOKING_COMPLETE
}

export type Action = ActionTypes.AMOUNT_CHANGED | ActionTypes.BOOK | ActionTypes.BOOKING_COMPLETE | ActionTypes.CURRENCY_PAIR_CHANGED;
