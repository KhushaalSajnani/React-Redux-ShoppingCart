import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    itemsInCart: [],
    totalQuantity: 0,
    isStateChanged:false,
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        replaceCart(state,action){
            state.totalQuantity = action.payload.totalQuantity;
            state.itemsInCart = action.payload.itemsInCart;
        },
        addItemToCart(state,action){
            const newItem = action.payload;
            const isExistingInItemsArray= state.itemsInCart.find((item)=>item.id === newItem.id);
            state.totalQuantity+=1;
            state.isStateChanged=true;
            if(!isExistingInItemsArray){
                state.itemsInCart.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity:1,
                    totalPrice: newItem.price,
                    title:newItem.title
                });

                console.log(newItem)
            }else{
                isExistingInItemsArray.quantity+=1;
                isExistingInItemsArray.totalPrice+=newItem.price;
            }
        },
        removeItemFromCart(state,action){
            state.totalQuantity-=1;
            const id = action.payload;
            const existingInItemsArray= state.itemsInCart.find((item)=>item.id === id);
            state.isStateChanged=true;
            if(existingInItemsArray === 1){
                state.itemsInCart = state.itemsInCart.filter(item => item.id !== id);
            }else{
                existingInItemsArray.quantity-=1;
                existingInItemsArray.totalPrice = existingInItemsArray.totalPrice - existingInItemsArray.price;
            }
        }
    }
})

export const CartActions = cartSlice.actions;

export default cartSlice;