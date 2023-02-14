import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
    noOfItems: 0,
    items: [],
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
        },
        setApiData: (state, action) => {
            state.items = action.payload
        }
    }
})

export const { toggle, noOfItems, setApiData } = counterSLice.actions;

export default counterSLice.reducer