import { configureStore } from '@reduxjs/toolkit';
import orderedItemSlice from './reducers/orderedItemSlice';

const store = configureStore({
    reducer: {
        orderedItems: orderedItemSlice, // Add your slices here
    },
});

export default store;
