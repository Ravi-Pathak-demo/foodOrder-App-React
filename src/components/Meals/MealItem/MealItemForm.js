import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useRef, useState } from "react";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();
  // useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue).

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    // amountInputRef.current.value is the value of the input (always string)

    const enteredAmountNumber = Number(enteredAmount);
    // Number() converts string to number

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
      // if enteredAmount is empty or less than 1 or more than 5, return nothing
    }

    props.onAddToCart(enteredAmountNumber);
    // props.onAddToCart is the function passed from MealItem
    // add item to cart if amount is valid
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        ref={amountInputRef}
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid Amount Between 1 to 5</p>}
      {/* error message if amount is invalid */}
    </form>
  );
};

export default MealItemForm;
