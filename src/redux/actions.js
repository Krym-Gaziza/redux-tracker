// src/redux/actions.js

// Определение и экспорт констант действий
export const ADD_TRANSACTION_ASYNC = 'ADD_TRANSACTION_ASYNC';
export const ADD_TRANSACTION = 'ADD_TRANSACTION';
export const DELETE_TRANSACTION = 'DELETE_TRANSACTION';
export const SET_FILTER = 'SET_FILTER';
export const SORT_TRANSACTIONS = 'SORT_TRANSACTIONS';

// Экспорт действий
export const addTransactionAsync = transaction => ({
    type: ADD_TRANSACTION_ASYNC,
    payload: transaction
});

export const addTransaction = transaction => ({
    type: ADD_TRANSACTION,
    payload: transaction
});

export const deleteTransaction = transactionId => ({
    type: DELETE_TRANSACTION,
    payload: transactionId
});

export const setFilter = filter => ({
    type: SET_FILTER,
    payload: filter
});

export const sortTransactions = sortCriteria => ({
    type: SORT_TRANSACTIONS,
    payload: sortCriteria
});

