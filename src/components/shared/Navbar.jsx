import { useState } from "react";
import { Link, NavLink, useOutletContext } from "react-router-dom";
function Navbar() {
  const { cart, setCart } = useOutletContext();

  //Add mobile navbar
  const [navbar, setNavbar] = useState(false);
  const handleclickNavbar = () => {
    setNavbar(!navbar);
  };

  //Add cart
  const [overLay, setOverLay] = useState(false);
  const handleShowCart = () => {
    setOverLay(!overLay);
  };

  //clear cart
  const handleRemoveAll = () => {
    setCart([]);
  };

  //change product quantity
  const changeQty = (id, num) => {
    setCart((prevCart) =>
      prevCart
        .map((items) =>
          items.id === id
            ? { ...items, quantity: items.quantity + num }
            : items,
        )
        .filter((items) => items.quantity !== 0),
    );
  };
  //total items in the cart
  const totalQuantity = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  console.log(totalQuantity);

  //total price of items in the cart
  const totalPrice = cart.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);
  return (
    <div className=" bg-dark-900 ">
      <nav className="fixed z-50 bg-dark-900 max-w-[80rem] px-16 xl:px-40 mx-auto hidden lg:flex flex-col justify-between w-full overflow-hidden  top-0 left-0 right-0  ">
        <div className=" flex justify-between items-center flex-1 py-[2.87rem] ">
          <div className="w-[143px] h-[25px]">
            <Link to="/">
              <img
                src="/assets/shared/desktop/logo.svg"
                alt="audiophile"
                className="w-full"
              />
            </Link>
          </div>
          <ul className="flex items-center gap-[2.125rem]">
            <li>
              <NavLink
                className="text-white font-manrope font-bold text-[0.8125rem] leading-[1.5625] tracking-[0.125rem] hover:text-brown focus:text-brown transition"
                to="/"
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-white font-manrope font-bold text-[0.8125rem] leading-[1.5625] tracking-[0.125] hover:text-brown focus:text-brown transition"
                to="/headphones/headphones"
              >
                HEADPHONES
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-white font-manrope font-bold text-[0.8125rem] leading-[1.5625] tracking-[0.125] hover:text-brown focus:text-brown transition"
                to="/speakers/speakers"
              >
                SPEAKERS
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-white font-manrope font-bold text-[0.8125rem] leading-[1.5625] tracking-[0.125] hover:text-brown focus:text-brown transition"
                to="/earphones/earphones"
              >
                EARPHONES
              </NavLink>
            </li>
          </ul>

          <div onClick={handleShowCart} className="relative p-2 cursor-pointer">
            <span className="absolute bg-brown size-4 rounded-full top-0 right-0 text-white text-center text-sm leading-4">
              {totalQuantity}
            </span>
            <button>
              <img
                src="\assets\shared\desktop\icon-cart.svg"
                alt="cart"
                className="w-[23px] h-[20px] cursor-pointer"
              />
            </button>
          </div>
        </div>
        <div className="bg-dark-900">
          <img
            src="/assets/shared/desktop/Rectangle.png"
            alt="line"
            className="w-full"
          />
        </div>
      </nav>

      <nav className="lg:hidden fixed z-50 top-0 left-0 right-0  bg-dark-900">
        <div className="flex flex-col justify-between px-10">
          <div className="flex justify-between md:justify-start items-center py-8 flex-1">
            <div onClick={handleclickNavbar}>
              <img src="\assets\shared\tablet\icon-hamburger.svg" alt="menu" />
            </div>
            <div className="md:flex-1 md:ml-12">
              <NavLink to="/">
                <img src="\assets\shared\desktop\logo.svg" alt="audiophile" />
              </NavLink>
            </div>
            <div onClick={handleShowCart} className="relative p-2">
              <span className="absolute bg-brown size-4 rounded-full top-0 right-0 text-white text-center text-sm leading-4">
                {totalQuantity}
              </span>
              <button>
                <img
                  src="\assets\shared\desktop\icon-cart.svg"
                  alt="cart"
                  className="w-[23px] h-[20px]"
                />
              </button>
            </div>
          </div>

          <div>
            <img
              src="\assets\shared\desktop\Rectangle.png"
              alt="line divider"
            />
          </div>
        </div>
        {navbar && (
          <div className="bg-dark-900 h-full z-50 absolute top-0 left-0 right-0">
            <div
              onClick={handleclickNavbar}
              className="max-w-[80rem] mx-auto px-6  bg-white py-8 rounded-b-lg"
            >
              <div className="grid gap-17 md:grid-cols-3 md:gap-2.5 lg:gap-7.5 ">
                <div className="bg-light-gray rounded-md">
                  <div className="w-[79px] md:w-[103px] lg:w-[122px] -mt-6  lg:-mt-8 mx-auto ">
                    <img
                      src="\assets\shared\desktop\image-category-thumbnail-headphones.png"
                      alt="headphone"
                      className="w-full"
                    />
                  </div>
                  <div className="text-center mt-8 md:mt-1">
                    <h3 className="font-manrope font-bold text-base lg:text-lg text-dark-900 tracking-[1.2px]">
                      HEADPHONES
                    </h3>
                    <div>
                      <NavLink
                        className="space-x-1 inline-flex justify-center items-center my-4"
                        to="/headphones/headphones"
                      >
                        <span className="font-manrope font-bold text-sm text-gray-600">
                          SHOP
                        </span>
                        <img
                          src="\assets\shared\desktop\icon-arrow-right.svg"
                          alt="arrow right"
                          className=""
                        />
                      </NavLink>
                    </div>
                  </div>
                </div>

                <div className="bg-light-gray rounded-md">
                  <div className="w-[79px] md:w-[103px] lg:w-[122px] -mt-6  lg:-mt-8 mx-auto ">
                    <img
                      src="\assets\shared\desktop\image-category-thumbnail-speakers.png"
                      alt="speaker"
                      className="w-full"
                    />
                  </div>
                  <div className="text-center mt-8 md:mt-1">
                    <h3 className="font-manrope font-bold text-base lg:text-lg text-dark-900 tracking-[1.2px]">
                      SPEAKERS
                    </h3>
                    <div>
                      <NavLink
                        className="space-x-1 inline-flex justify-center items-center my-4"
                        to="/speakers/speakers"
                      >
                        <span className="font-manrope font-bold text-sm text-gray-600">
                          SHOP
                        </span>
                        <img
                          src="\assets\shared\desktop\icon-arrow-right.svg"
                          alt="arrow right"
                          className=""
                        />
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="bg-light-gray rounded-md">
                  <div className="w-[79px] md:w-[103px] lg:w-[122px] -mt-6 lg:-mt-8 mx-auto ">
                    <img
                      src="\assets\shared\desktop\image-category-thumbnail-earphones.png"
                      alt="earphones"
                      className="w-full"
                    />
                  </div>
                  <div className="text-center mt-8 md:mt-1">
                    <h3 className="font-manrope font-bold text-base lg:text-lg text-dark-900 tracking-[1.2px]">
                      EARPHONES
                    </h3>

                    <div>
                      <NavLink
                        className="space-x-1 inline-flex justify-center items-center my-4"
                        to="/earphones/earphones"
                      >
                        <span className="font-manrope font-bold text-sm text-gray-600">
                          SHOP
                        </span>
                        <img
                          src="\assets\shared\desktop\icon-arrow-right.svg"
                          alt="arrow right"
                          className=""
                        />
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {overLay && (
        <div className="fixed top-[90px] md:top-[117px] justify-center md:justify-items-end z-10 h-[calc(100vh-90px)] md:h-[calc(100vh-117px)] overflow-y-auto w-full bg-[rgba(0,0,0,0.7)] py-8 px-6  xl:px-40">
          {cart.length === 0 ? (
            <div className=" bg-white bg-whit w-full md:max-w-[23.56rem] p-8 rounded-lg grid justify-center text-center">
              <div>
                <img
                  src="/assets/shared/desktop/empty-removebg-preview.png"
                  alt="empty cart"
                  className="w-full"
                />
              </div>
              <p className="text-base font-medium font-manrope text-gray-500">
                The cart is empty
              </p>
              <button
                onClick={handleShowCart}
                className="bg-dark-900 text-center rounded p-3 mt-6 hover:bg-[#4c4c4c] focus:bg-[#4c4c4c] transition cursor-pointer text-white text-sm font-bold font-manrope tracking-[0.06rem]"
              >
                START SHOPPING
              </button>
            </div>
          ) : (
            <div className="bg-white p-8 w-full md:max-w-[23.56rem] rounded-lg ">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-lg text-dark-900 font-bold font-manrope tracking-[0.06rem]">
                  Cart({totalQuantity})
                </h3>
                <button
                  onClick={handleRemoveAll}
                  className="font-manrope font-medium text-sm text-gray-500 underline cursor-pointer hover:text-brown"
                >
                  Remove all
                </button>
              </div>
              <div>
                {cart.map((item) => (
                  <div key={item.id} className="flex items-start mt-6">
                    <div className="size-16">
                      <img
                        src={item.image.mobile}
                        alt={item.name}
                        className="w-full rounded-lg"
                      />
                    </div>
                    <div className="flex-1 ml-4">
                      <h3 className="font-bold font-manrope text-base text-dark-900 leading-[1.56rem]">
                        {item.name.split(" ").slice(0, -1).join(" ")}
                      </h3>
                      <p className="font-manrope  font-bold text-sm text-gray-500 leading-[1.56rem]">
                        ${item.price.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center justify-center gap-4  bg-light-gray font-manrope font-bold text-sm py-2 px-4  rounded tracking-[1px] ">
                        <button
                          onClick={() => changeQty(item.id, -1)}
                          className="cursor-pointer hover:text-brown"
                        >
                          -
                        </button>
                        <p>{item.quantity}</p>
                        <button
                          onClick={() => changeQty(item.id, 1)}
                          className="cursor-pointer hover:text-brown"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center mt-8">
                <div>
                  <p className="font-manrope font-medium  text-sm leading-[1.56rem] tracking-[0.06rem] text-gray-500 ">
                    TOTAL
                  </p>
                </div>
                <div>
                  <h3 className=" text-dark-900  font-manrope font-bold text-lg ">
                    ${totalPrice.toLocaleString()}
                  </h3>
                </div>
              </div>

              <div className="bg-brown text-center rounded p-3 mt-6  hover:bg-light-brown focus:bg-light-brown transition">
                <Link
                  to=""
                  className="text-white text-sm font-bold font-manrope tracking-[0.06rem]"
                >
                  CHECKOUT
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
export default Navbar;
