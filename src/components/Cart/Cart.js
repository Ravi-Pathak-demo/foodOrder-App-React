import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCxt = useContext(CartContext);
  // assigning cartCxt to cartItems to use in CartItem component

  const totalAmount = `Rs. ${cartCxt.totalAmount.toFixed(2)}`;
  // items prices are added up and then toFixed(2) is used to round the price to 2 decimal places
  const hasItems = cartCxt.item.length > 0;
  // checks if cart has items

  const cartItemRemoveHandler = (id) => {
    cartCxt.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCxt.addItem({ ...item, amount: 1 });
    // adding item to cart (item is passed from CartItem component)
  };

  // add cart items to the cart (dummy)
  // [{ id: "c1", name: "sushi", amount: 2, price: 500 }]
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCxt.item.map((item) => (
        <li>
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
          {/* adds and removes items on the basis of the functions provided */}
        </li>
      ))}
    </ul>
  );

  return (
    // rendering the Modal component
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {/* onClick function works on onClose function passed by App.js to close the cart on click */}
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
