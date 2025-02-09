import { createSlice } from '@reduxjs/toolkit';

const orderListSlice = createSlice({
    name: 'orderList',
    initialState: {
        orders: [],
    },
    reducers: {
        addAllOrders: (state, action) => {
            state.orders = action.payload
        },

        removeAllOrders: (state, action) => {
            state.orders = {}
        },
    }
});

export const {
    addAllOrders,
    removeAllOrders,
} = orderListSlice.actions;

export default orderListSlice.reducer;
