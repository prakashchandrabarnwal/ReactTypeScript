import * as React from 'react';
import { Store } from '../infrastructure/store';
import { OrdersViewState } from '../store/types';
import { createStore } from '../store';
import { ActionTypes } from '../store/actions';

const styles = {
    fontSize: 20 , 
    fontWeight: 'bold'
} as React.CSSProperties

interface AppProps  {

}

export default class OrdersView extends React.Component<AppProps, OrdersViewState> {
    private store: Store<OrdersViewState>;

    constructor(props: AppProps) {
        super(props);
   
        this.store = createStore((nextState) => {
            this.setState(nextState)
        })
  
        // set initial state
        this.state = {...this.store.currentState};
    }

    onAmountChanged = (amount: string): void => {
        this.store.dispatchAction(ActionTypes.AMOUNT_CHANGED, amount);
    };

    onCurrencyPairChanged = (ccyPair: string):void => {
        this.store.dispatchAction(ActionTypes.CURRENCY_PAIR_CHANGED, ccyPair);
    };

    onBookRequested = () : void => {
        this.store.dispatchAction(ActionTypes.BOOK);
    };

    renderBookingStatus = () : string => {
        let status = "";
        if(this.state.isBooking) return "Booking In Progress";
        if(this.state.bookingResults !== null){
            status = this.state.bookingResults ? "Booking Success" : "Booking Failed"
        }
        return status;
    }
    render() {

        return (
            <div>
                <h1>OrdersList</h1>
                Amount: <input type="text" value={this.state.amount}
                               onChange={(e) => this.onAmountChanged(e.target.value)}/>
                <br/>
                Currency:
                <select value={this.state.currencyPair} onChange={(e) => this.onCurrencyPairChanged(e.target.value)}>
                    <option value="EURUSD">EURUSD</option>
                    <option value="USDJPY">USDJPY</option>
                    <option value="USDGBP">USDGBP</option>
                </select>
                <br/>
                Order summary: <br/>
                Amount({this.state.amount})
                <br/>
                <button onClick={(e) => this.onBookRequested()}>
                    book
                </button>
                <br/>
                <span style={{...styles}}>{this.renderBookingStatus()}</span>
            </div>
        );
    }
}
