import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  // fixing price to 2 decimal places
  const cartCtx = useContext(CartContext);

  const price = `Rs. ${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        {/* props from AvailableMeals with id and meal(spread) {should have same name as passing value} */}
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        {/* rendering mealItem Form */}
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
        {/*  */}
        {/* passing id to mealItemForm  */}
      </div>
    </li>
  );
};

export default MealItem;
