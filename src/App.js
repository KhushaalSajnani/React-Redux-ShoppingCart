import React from "react";
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchCartData, sendCartData} from "./store/cart-actionCreators";
import Notification from "./components/UI/Notification";


let isInitial = true;
function App() {


    const dispatchFn = useDispatch();
    const showCart = useSelector(state => state.ui.cartIsVisible);
    const cart = useSelector(state => state.cart);
    const notification = useSelector(state => state.ui.notification);

    useEffect(()=>{
        dispatchFn(fetchCartData())
    },[dispatchFn])

    useEffect(()=>{

        if(isInitial){
            isInitial = false;
            return;
        }

        // const fbdbURL = "https://react-http-realtime-db-json-default-rtdb.firebaseio.com/cart.json";
        // const sendCartData = async () => {
        //     dispatchFn(UiActions.showNotification({
        //         status:"Pending",
        //         title:"Sending",
        //         message:"Sending Cart Data"
        //     }))
        //     const response = await fetch(fbdbURL,{
        //         method:'PUT',
        //         body: JSON.stringify(cart)
        //     });
        //
        //     if(!response.ok){
        //         throw new Error('Sending cart data failed');
        //     }
        //
        //     dispatchFn(UiActions.showNotification({
        //         status:"success",
        //         title:"Success!",
        //         message:"Cart Data Sent Successfully"
        //     }))
        // }
        //
        // sendCartData().catch(e =>
        //     dispatchFn(UiActions.showNotification({
        //         status:"error",
        //         title:"Error!",
        //         message:e.message
        //     })));

        if(cart.isStateChanged){
            dispatchFn(sendCartData(cart))
        }

    },[cart,dispatchFn]);


  return (
      <React.Fragment>
          {notification && <Notification status={notification.status} title={notification.title} message={notification.title}/>}
          <Layout>
              {showCart && <Cart/>}
              <Products />
          </Layout>
      </React.Fragment>

  );
}

export default App;
