import classes from './CartButton.module.css';
import {useDispatch, useSelector} from "react-redux";
import {UiActions} from "../../store/ui-slice";


const CartButton = (props) => {

    const cartQTY = useSelector(state => state.cart.totalQuantity)
    const dispatcherFn = useDispatch();


    function clickHandler(){
        dispatcherFn(UiActions.toggle())
    }

    return (
    <button className={classes.button} onClick={clickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQTY}</span>
    </button>
  );
};

export default CartButton;
