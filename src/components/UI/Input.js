import classes from "./Input.module.css";
import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    // input Component is passed as a prop to Input
    // props is passed by MealItemForm with label and input(object)
    // {{}} means object inside jsx
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
      {/* ref send by mealItem using forwarding ref from react */}
    </div>
  );
});

export default Input;
