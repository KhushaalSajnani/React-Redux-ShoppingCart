import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import {useSelector} from "react-redux";

const Cart = () => {

  const items = useSelector(state => state.cart.itemsInCart)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
          {items.map((item)=>
              <CartItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  quantity={item.quantity}
                  total={item.totalPrice}
                  price={item.price}
              />
          )}
      </ul>
    </Card>
  );
};

export default Cart;
