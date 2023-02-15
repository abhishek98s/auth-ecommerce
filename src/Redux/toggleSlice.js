import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
    noOfItems: 0,
    items: [],
    signin: false,
    admin: false,
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
        },
        setSignin: (state) => {
            state.signin = !(state.signin)
        },
        setAdmin: (state) => {
            state.admin = !(state.admin)
        }
    }
})

export const { toggle, noOfItems, setApiData, setSignin, setAdmin } = counterSLice.actions;

export default counterSLice.reducer