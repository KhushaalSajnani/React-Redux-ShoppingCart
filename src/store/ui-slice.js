import {createSlice} from '@reduxjs/toolkit'


const uiSlice = createSlice({
    name: 'uiSlice',
    initialState: {cartIsVisible: false,notification:null},
    reducers:{
        // toggle is a ui action!
        toggle(state){
            state.cartIsVisible = !state.cartIsVisible;
        },
        showNotification(state,action){
            state.notification = {
                statue:action.payload.status,
                title:action.payload.title,
                message:action.payload.message,
            };
        }
    }
})


export const UiActions = uiSlice.actions;
export default uiSlice;