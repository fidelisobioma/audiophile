import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
// import Navbar from "./components/Home/Navbar";

function App() {
  const [cart, setCart] = useState([]);
  console.log(cart);
  const [totalPrice, settotalPrice] = useState(0);
  const [QTY, setQTY] = useState(1);

  const handleIncreaseQty = () => {
    setQTY(QTY + 1);
  };
  const [showCart, setShowCart] = useState(false);
  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="relative">
      {showCart && (
        <div className=" bg-[rgba(0,0,0,0.5)] z-50 absolute left-0 right-0 top-0 h-full">
          <div className="max-w-[80rem] mx-auto px-6  xl:px-40 md:flex justify-end">
            <div
              onClick={handleShowCart}
              className=" bg-white max-w-[327px]  w-full rounded-md px-7 py-8 mt-6"
            >
              <div className="flex justify-between">
                <h2 className="font-manrope font-bold text-lg text-dark-900 tracking-[1.29px]">
                  CART(3)
                </h2>
                <button className="font-manrope font-semibold text-gray-600 text-sm leading-6">
                  Remove all
                </button>
              </div>
              {cart.map((items) => (
                <div key={items.id} className="flex gap-4 items-center my-8 ">
                  <div className="w-[64px] h-[64px]">
                    <img
                      src={items.image.mobile}
                      alt={items.name}
                      className="rounded-lg w-full"
                    />
                  </div>

                  <div className="flex-1">
                    <h2 className="font-manrope font-bold text-sm text-dark-900 leading-6">
                      {items.name}
                    </h2>
                    <p className="font-manrope font-bold text-gray-600 text-sm leading-6">
                      ${items.price}
                    </p>
                  </div>

                  <div className=" w-[96px]">
                    <div className="flex items-center justify-between  bg-light-gray font-manrope font-bold text-sm py-2 px-3  rounded tracking-[1px] ">
                      <button className="cursor-pointer font-manrope font-bold text-sm">
                        -
                      </button>
                      <p className="font-manrope font-bold text-sm">1</p>
                      <button
                        onClick={handleIncreaseQty}
                        className="cursor-pointer font-manrope font-bold text-sm"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex justify-between">
                <h3 className="font-manrope font-normal text-gray-600 text-sm leading-6">
                  Total
                </h3>
                <h3 className="font-manrope font-bold text-lg text-dark-900 tracking-[1.29px]">
                  ${totalPrice}
                </h3>
              </div>

              <div className="mt-6">
                <Link to="/checkout">
                  <div
                    onClick={handleShowCart}
                    className="bg-brown text-white text-center font-manrope text-sm font-semibold py-4 px-9 tracking-[1px] cursor-pointer"
                  >
                    CHECK OUT
                  </div>
                </Link>
              </div>
              {/* <button onClick={handleShowCart}>Close</button> */}
            </div>
          </div>
        </div>
      )}
      <Outlet
        context={{ handleShowCart, cart, setCart, totalPrice, settotalPrice }}
      />
    </div>
  );
}

export default App;
