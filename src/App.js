import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import { useState } from "react";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  // adding state to cart component to track modal close and open
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    // setting the cartIsShown state to true (open the cart)
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    // setting the cartIsShown state to false (close the cart)
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {/* rendering Cart Component that is the modal */}
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      {/* onClose is a custom function working for hideCartHandler to close cart */}
      {/* works if cartIsShown  is true and closes if false*/}

      {/* Header Component */}
      <Header onCartClick={showCartHandler} />
      <main>
        {/* Meals Component */}
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
