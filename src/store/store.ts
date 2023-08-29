import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import {storesSlice} from './reducers/stores';
import {productSlice} from './reducers/products';
import {orderSlice} from './reducers/getOrders';
import AsyncStorage from '@react-native-async-storage/async-storage';
const rootReducer = combineReducers({
  stores: storesSlice.reducer,
  products: productSlice.reducer,
  orders: orderSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
