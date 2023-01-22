import {createSlice} from '@reduxjs/toolkit'


const uiSlice = createSlice({
    name: 'uiSlice',
    initialState: {cartIsVisible: false},
    reducers:{
        // toggle is a ui action!
        toggle(state){
            state.cartIsVisible = !state.cartIsVisible;
        }
    }
})

export const UiActions = uiSlice.actions;
export default uiSlice;