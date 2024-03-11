// src/redux/selectors.js
import { createSelector } from 'reselect';

const getTransactions = state => state.transactions;
const getFilter = state => state.filter;
const getSort = state => state.sort;

export const getFilteredTransactions = createSelector(
  [getTransactions, getFilter, getSort],
  (transactions, filter, sort) => {
    let filteredTransactions = transactions;

    // Применение фильтрации
    if (filter) {
      filteredTransactions = filteredTransactions.filter(transaction => {
        // Здесь должна быть ваша логика фильтрации
        // Например: return transaction.date === filter.date;
      });
    }

    // Применение сортировки
    if (sort) {
      filteredTransactions = filteredTransactions.sort((a, b) => {
        // Здесь должна быть ваша логика сортировки
        // Например: return sort === 'date' ? new Date(a.date) - new Date(b.date) : a.amount - b.amount;
      });
    }

    return filteredTransactions;
  }
);
