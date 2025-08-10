import { useState } from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/Scrolltop";

function App() {
  // const location = useLocation();
  const [cart, setCart] = useState([]);
  //total items in the cart
  const totalQuantity = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  //total price of items in the cart
  const totalPrice = cart.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  return (
    <>
      <ScrollToTop />
      <Outlet
        context={{
          cart,
          setCart,
          totalQuantity,
          totalPrice,
        }}
      />
    </>
  );
}

export default App;
