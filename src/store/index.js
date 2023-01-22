import {configureStore} from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import CartSlice from "./cart-slice";

export const store = configureStore({
    reducer:{
        ui:uiSlice.reducer,
        cart:CartSlice.reducer
    }
})