import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orders: 0
}

export const counterSLice = createSlice({
    name: 'toggle',
    initialState,
    reducers: {
        setOrders: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setOrders } = counterSLice.actions;

export default counterSLice.reducer