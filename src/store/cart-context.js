import { createContext } from "react";

// creating a context for the cart
// this context will be used in the Cart component
// to access the cart state and methods this context will be used in the CartProvider component
const CartContext = createContext({
  item: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});
// create context uses only object as a parameter and returns the current context value for that context
// default value is an empty object

export default CartContext;
