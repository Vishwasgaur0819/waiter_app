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
      
        removeAllItems:(state, action) => {
            state.orderItems = {}
        }
       
    },
});

export const {
    addItemToTableOrder,
    addItemToTakeawayOrder,
    removeAllItems
} = orderedItemSlice.actions;

export default orderedItemSlice.reducer;
