import { legacy_createStore as createStore } from 'redux'

import CombinedReducers from "./reducers";


const InitialState = {

}

const Store = createStore(
    CombinedReducers,
    InitialState,
    // composeWithDevTools(applyMiddleware(thunk as any))
);

(window as any).Store = Store as any;
(window as any ).getState = Store.getState

export default Store