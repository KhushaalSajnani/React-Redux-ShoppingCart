import {UiActions} from "./ui-slice";
import {CartActions} from "./cart-slice";

export const fetchCartData = () => {
    return async dispatchFn =>{
        const fetchedData = async() =>{
            const response = await fetch("https://react-http-realtime-db-json-default-rtdb.firebaseio.com/cart.json");

            if(!response.ok){
                throw new Error('Error in fetch')
            }

            const data = await response.json()
            return data;
        }
        try{
            const cartData = await fetchedData()
            console.log(cartData)
            dispatchFn(CartActions.replaceCart(cartData));
        }catch (e) {
            dispatchFn(UiActions.showNotification({
                status: "error",
                title: "Error!",
                message: e.message
            }));
        }
    }
}
export const sendCartData = (cart) => {

    return async (dispatchFn) => {
        dispatchFn(UiActions.showNotification({
            status: "Pending",
            title: "Sending",
            message: "Sending Cart Data"
        }))

        const sendCartRequest = async () => {
            const response = await fetch("https://react-http-realtime-db-json-default-rtdb.firebaseio.com/cart.json", {
                method: 'PUT',
                body: JSON.stringify({itemsInCart:cart.itemsInCart,totalQuantity:cart.totalQuantity})
            });

            if (!response.ok) {
                throw new Error('Sending cart data failed');
            }

            dispatchFn(UiActions.showNotification({
                status: "success",
                title: "Success!",
                message: "Cart Data Sent Successfully"
            }))
        }

        try {
            await sendCartRequest();
        } catch (e) {
            dispatchFn(UiActions.showNotification({
                status: "error",
                title: "Error!",
                message: e.message
            }));
        }

    }
}