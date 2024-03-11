// src/redux/reducer.js
import { ADD_TRANSACTION, DELETE_TRANSACTION, SET_FILTER, SORT_TRANSACTIONS } from "./actions";

const initialState = {
    transactions: [],
    filter: null,
    sort: null // Можно использовать объект для более сложной сортировки
};

const expenseTrackerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TRANSACTION:
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            };
        case DELETE_TRANSACTION:
            return {
                ...state,
                transactions: state.transactions.filter((transaction) => transaction.id !== action.payload)
            };
        case SET_FILTER:
            return {
                ...state,
                filter: action.payload
            };
        case SORT_TRANSACTIONS:
            return {
                ...state,
                sort: action.payload
            };
        default:
            return state;
    }
};

export default expenseTrackerReducer;
