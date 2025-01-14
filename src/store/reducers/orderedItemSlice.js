import { createSlice } from '@reduxjs/toolkit';

const orderedItemSlice = createSlice({
    name: 'orderedItems',
    initialState: {
        orderItems: {},
    },
    reducers: {
        addItemToTableOrder: (state, action) => {
            const { tableId, item} = action.payload;
            if (item?.quantity == 0) {
                delete state.orderItems[`${tableId}-${item.id}`]
                // console.log("tableOrders in redux ", state.orderItems)
                return
            }
            state.orderItems[`${tableId}-${item.id}`] = { ...item,tableId }
            console.log("tableOrders in redux ", state.orderItems)
        },
        addItemToTakeawayOrder: (state, action) => {
            const { item } = action.payload;
            const existingItem = state.takeawayOrders.find(
                (orderItem) => orderItem.id === item.id
            );
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.takeawayOrders.push({ ...item, quantity: 1 });
            }
        },
       
       
    },
});

export const {
    addItemToTableOrder,
    addItemToTakeawayOrder,
    updateItemQuantity,
    removeItem,
    clearOrder,
} = orderedItemSlice.actions;

export default orderedItemSlice.reducer;
