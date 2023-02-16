import { combineReducers, configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./toggleSlice";
import orderReducer from "./OrderSlice";


import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    toggle: toggleReducer,
    notes: orderReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

export const persistor = persistStore(store)