import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer';
import watchSaveTransaction from './sagas';

// Настройка Redux Persist
const persistConfig = {
  key: 'root',
  storage,
};

// Создание Saga Middleware
const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Создание хранилища с Saga и Redux Persist
const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));

// Запуск Saga Middleware
sagaMiddleware.run(watchSaveTransaction);

export const persistor = persistStore(store);

export default store;

