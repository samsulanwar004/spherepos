import React, {createContext, useReducer} from "react";
import combineReducers from 'react-combine-reducers';
import {Auth, Cart} from './Reducer';

const initialAuth = {
    account: null,
    isLogin: false,
    isLoading: true
};

const initialCart = {
    bags: Array(),
};

const [globalReducer, initialGlobal] = combineReducers({
    auth: [Auth, initialAuth],
    cart: [Cart, initialCart],
});

const Store = ({children}) => {

    const [state, dispatch] = useReducer(globalReducer, initialGlobal);

    console.log(state);

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(initialGlobal);
export default Store;