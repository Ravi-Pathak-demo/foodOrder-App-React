import classes from "./HeaderCard.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import { useContext, useEffect, useState } from "react";

const HeaderCard = (props) => {
  const [btnHighlighted, setBtnHighlighted] = useState(false);
  // setting the state to false (not highlighted)

  // using the cartContext to access the cart state and methods
  const cartCtx = useContext(CartContext);

  const { item } = cartCtx;

  const numberOdCartItems = item.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  // 0 is the initial value of curNumber(cause of reduce method)
  // we use reduce to get the number of items in the cart

  const btnClasses = `${classes.button} ${btnHighlighted ? classes.bump : ""}`;
  // adding classes to the button (bump) on new cart item adding

  useEffect(() => {
    // using the useEffect hook to add classes to the button
    // when new cart item is added

    if (item.length === 0) {
      return;
    }

    setBtnHighlighted(true);
    // setting the state to true (highlighted)

    const timer = setTimeout(() => {
      setBtnHighlighted(false);
      // setting the state to false (not highlighted)
    }, 300);
    // setting the timer to 300ms (300ms after the cart item is added)

    return () => {
      clearTimeout(timer);
      // clearing the timer
    };
  }, [item]);

  return (
    // cart Component is passed as a prop to HeaderCard
    <button className={btnClasses} onClick={props.onClick}>
      {/*the built in onClick function works on onClick(custom function) passed by Header component  */}
      <span className={classes.icon}>
        {/* rendering cartIcon from cart */}
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOdCartItems}</span>
    </button>
  );
};

export default HeaderCard;
