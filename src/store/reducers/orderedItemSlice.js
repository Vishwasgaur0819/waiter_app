import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';

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
                console.log("tableOrders in redux ", state.orderItems)
                return
            }
            state.orderItems[`${tableId}-${item.id}`] = { ...item,tableId,time:moment().format('hh:mm A'),   note: item.note }
            console.log(' action.payload',state.orderItems)
        },
      
        removeAllItems:(state, action) => {
            state.orderItems = {}
        },
          // ✅ Naya action jo sirf selected tableId ke orders delete karega
          removeItemsByTableId: (state, action) => {
            const tableIdsToRemove = action.payload; // Array of tableIds
            Object.keys(state.orderItems).forEach((key) => {
                const item = state.orderItems[key];
                if (tableIdsToRemove.includes(item.tableId)) {
                    delete state.orderItems[key];
                }
            });
        }
    },
});

export const {
    addItemToTableOrder,
    addItemToTakeawayOrder,
    removeAllItems,
    removeItemsByTableId
} = orderedItemSlice.actions;

export default orderedItemSlice.reducer;
