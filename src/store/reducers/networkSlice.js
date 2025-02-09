import { createSlice } from '@reduxjs/toolkit';

const networkSlice = createSlice({
    name: 'network',
    initialState: {
        network: false,
    },
    reducers: {
        addNetworkStatus: (state, action) => {
           state.network = action.payload
        },
    },
});

export const {
   addNetworkStatus
} = networkSlice.actions;

export default networkSlice.reducer;
