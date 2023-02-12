import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
    noOfItems: 1
}

export const counterSLice = createSlice({
    name: 'toggle',
    initialState,
    reducers: {
        toggle: (state) => {
            state.value = !(state.value)
        },
        noOfItems: (state, action) => {
            state.noOfItems = action.payload
        }
    }
})

export const { toggle, noOfItems } = counterSLice.actions;

export default counterSLice.reducer