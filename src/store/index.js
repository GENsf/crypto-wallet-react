import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cryptoCurrencyReducer from './slices/cryptoCurrencySlice';
import walletReducer from './slices/walletSlice';
import modalReducer from './slices/modalSlice';

const rootReducer = combineReducers({
  currency: cryptoCurrencyReducer,
  wallet: walletReducer,
  modal: modalReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['currency', 'modal'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;