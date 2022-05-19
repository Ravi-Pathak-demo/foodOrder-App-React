import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
// default state of cart is empty

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedAmount =
      state.totalAmount + action.item.price * action.item.amount;
    // adding the price of the item to the total amount

    const existingItemIndex = state.items.findIndex(
      (items) => items.id === action.item.id
    );
    // finding the index of the item in the cart if it exists

    const existingCartItem = state.items[existingItemIndex];
    // if item exists, it will be assigned to existingCartItem

    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
        // if item exists in cart, amount is increased by the amount of the item added
      };
      updatedItems = [...state.items];
      // if item exists in cart, update the amount of the item
      updatedItems[existingItemIndex] = updatedItem;
      // update the item in the cart
    } else {
      updatedItems = state.items.concat(action.item);
      // adding the item to the cart
    }

    return {
      items: updatedItems,
      totalAmount: updatedAmount,
      // adding new item in cart with type and item value
    };
  }

  if (action.type === "REMOVE") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    // finding the index of the item in the cart if it exists to remove

    const existingItem = state.items[existingItemIndex];
    // if item exists, it will be assigned to existingCartItem

    const updatedAmount = state.totalAmount - existingItem.price;
    // if item exists in cart, amount is decreased by the price of the item removed

    let updatedItems;

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
      // if item amount is 1, remove the item from the cart
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      // if item exists in cart, update the amount of the item

      updatedItems[existingItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }

  return defaultCartState;
};
// reducer has current state and the action we want to perform , when state changes
// it returns the new state

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  // useReducer returns an array with the current state and the dispatch function
  // dispatch function is used to dispatch actions
  // cartReducer is the reducer function and defaultCartState is the initial state

  // function to add item to cart
  const addItemFromCardHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
    //   adding new item in cart with type and item value
  };

  //   function to remove item from cart
  const removeItemFromCardHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  //   function to calculate total amount of items in cart
  const cartContext = {
    item: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemFromCardHandler,
    // addItem calls the addItemFromCardHandler function
    removeItem: removeItemFromCardHandler,
    // removeItem calls the removeItemFromCardHandler function
  };

  return (
    //  The current context value is determined by the value prop of the
    //  nearest <MyContext.Provider> above the calling component in the tree
    // if value is not provided, it will default to an empty object
    // if value changes in the context, the component that rendered the context will re-render

    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
