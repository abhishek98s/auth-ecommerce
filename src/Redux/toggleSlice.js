import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
}

export const counterSLice = createSlice({
    name: 'toggle',
    initialState,
    reducers: {
        toggle: (state) => {
            state.value = !(state.value)
        }
    }
})

export const { toggle } = counterSLice.actions;

export default counterSLice.reducer