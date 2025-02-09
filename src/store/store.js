import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import orderedItemSlice from './reducers/orderedItemSlice';
import orderListSlice from './reducers/orderListSlice';

// Define slices that need to be persisted
const slicesToPersist = ['orderedItems'];

// Define the reducers
const rootReducer = combineReducers({
    orderedItems: orderedItemSlice,
    orderList:orderListSlice
    // Add other slices here if needed
});

// Create a persisted reducer
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: slicesToPersist, // Specify slices to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Disable serializable checks for redux-persist
        }),
});

// Create a persistor
const persistor = persistStore(store);

export { store, persistor };
