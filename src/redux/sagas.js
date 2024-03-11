// src/redux/sagas.js
import { takeEvery, put, call } from 'redux-saga/effects';
import { ADD_TRANSACTION_ASYNC, addTransaction } from './actions';

function* saveTransactionApi(transaction) {
    try {
      const response = yield fetch('https://your-api-url/transactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(transaction),
      });
      if (!response.ok) {
        throw new Error('Ошибка при сохранении транзакции');
      }
      // Здесь можно вернуть результат или обработать данные
    } catch (error) {
      // Обработка ошибки
      console.error('Ошибка при выполнении запроса:', error);
    }
  }
  

// Сага для обработки асинхронного добавления транзакции
function* saveTransactionSaga(action) {
  try {
    yield call(saveTransactionApi, action.payload);
    yield put(addTransaction(action.payload));
  } catch (e) {
    // Обработка ошибок
  }
}

// Главная сага для прослушивания действий
export default function* watchSaveTransaction() {
  yield takeEvery(ADD_TRANSACTION_ASYNC, saveTransactionSaga);
}
