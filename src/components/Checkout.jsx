import { Link, useNavigate, useOutletContext } from "react-router-dom";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import { useState } from "react";

function Checkout() {
  const navigate = useNavigate();
  const [confirm, setConfirm] = useState(false);
  const handleclickConfirm = () => {
    setConfirm(!confirm);
  };

  // const { cart, totalPrice } = useOutletContext();

  let shippingFee = 50;

  return (
    <div className="relative ">
      <Navbar />
      <div className="bg-[#f2f2f2] mt-[90px] lg:mt-[117px]">
        <div className="max-w-[80rem] mx-auto px-6 xl:px-40 bg-[#f2f2f2] pb-8 ">
          {confirm && (
            <div className="bg-[rgba(0,0,0,0.5)] z-50 fixed grid items-center left-0 right-0 top-0 h-full px-6 ">
              <div className="bg-white rounded-lg  max-w-[600px] p-8 mx-auto">
                <div className="size-16 mb-6">
                  <img
                    src="\assets\checkout\icon-order-confirmation.svg"
                    alt="confirmerd"
                    className="w-full"
                  />
                </div>
                <h2 className="font-manrope font-bold text-2xl text-dark-900 leading-7 tracking-[0.26px]">
                  THANK YOU FOR YOUR ORDER
                </h2>
                <p className="font-manrope text-gray-600 text-sm leading-6 my-6">
                  You will receive an email confirmation shortly.
                </p>
                <div className="rounded-lg overflow-hidden mt-6 md:grid grid-cols-2 ">
                  <div className="bg-light-gray p-6 ">
                    <div className="flex gap-4 mb-3">
                      <div className="w-[64px] h-[64px]">
                        <img
                          src={cart[0].image.mobile}
                          alt={cart[0].name}
                          className="rounded-lg w-full"
                        />
                      </div>

                      <div className="flex-1">
                        <h2 className="font-manrope font-bold text-sm text-dark-900 leading-6">
                          {cart[0].name}
                        </h2>
                        <p className="font-manrope font-normal text-gray-500 text-sm leading-6">
                          ${cart[0].price}
                        </p>
                      </div>
                      <p className="font-manrope font-bold text-sm text-gray-500">
                        x{cart[0].quantity}
                      </p>
                    </div>

                    <hr className="text-[#979797]" />
                    <p className="font-manrope font-bold text-sm text-gray-500 tracking-tight text-center mt-3">
                      {` and ${cart.length - 1} other item(s)`}
                    </p>
                  </div>
                  <div className="bg-dark-900 p-6 grid items-end">
                    <div>
                      <h3 className="font-manrope text-sm text-light-gray">
                        GRAND TOTAL
                      </h3>
                      <h3 className="text-white font-manrope font-bold text-lg mt-2">
                        {/* {Math.floor(totalPrice * 0.2) +
                          shippingFee +
                          totalPrice} */}
                      </h3>
                    </div>
                  </div>
                </div>
                <Link to="/">
                  <button className="w-full hover:bg-light-brown focus:bg-light-brown transition bg-brown text-white text-center font-manrope font-semibold text-sm py-4 mt-6 tracking-[1px] cursor-pointer">
                    BACK TO HOME
                  </button>
                </Link>
              </div>
            </div>
          )}

          <button
            onClick={() => navigate(-1)}
            className="font-manrope font-semibold text-sm leading-6 mt-8 mb-6 cursor-pointer"
          >
            Go Back
          </button>
          <div className="lg:flex gap-8">
            <div className="bg-white rounded-lg px-6 py-8 ">
              <div>
                <h2 className="font-manrope font-bold text-2xl tracking-[1px] mb-8">
                  CHECKOUT
                </h2>
                <form>
                  <div>
                    <h2 className="text-brown font-manrope text-sm leading-6 tracking-[0.93px] uppercase mb-4">
                      Billing details
                    </h2>
                    <div className="md:grid grid-cols-2 gap-4">
                      <div className="mt-6 md:mt-0">
                        <label
                          htmlFor="name"
                          className="font-manrope font-bold text-sm tracking-tight "
                        >
                          Name
                        </label>
                        <br />
                        <input
                          type="text"
                          id="name"
                          placeholder="Alexei Ward"
                          className="w-full border border-gray-400 focus:outline-brown  text-manrope text-sm tracking-tight px-6 py-3 rounded-md"
                        />
                      </div>
                      <div className="mt-6 md:mt-0">
                        <label
                          htmlFor="email"
                          className="font-manrope font-bold text-sm tracking-tight "
                        >
                          Email Address
                        </label>
                        <br />
                        <input
                          type="email"
                          id="email"
                          placeholder="alexei@mail.com"
                          className="w-full border border-gray-400 focus:outline-brown  text-manrope text-sm tracking-tight px-6 py-3 rounded-md"
                        />
                      </div>
                      <div className="mt-6 md:mt-0">
                        <label
                          htmlFor="phone"
                          className="font-manrope font-bold text-sm tracking-tight "
                        >
                          Phone Number
                        </label>
                        <br />
                        <input
                          type="tel"
                          id="phone"
                          placeholder="+1 202-555-0136"
                          className="w-full border border-gray-400 focus:outline-brown  text-manrope text-sm tracking-tight px-6 py-3 rounded-md"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h2 className="text-brown font-manrope text-sm leading-6 tracking-[0.93px] uppercase mb-4">
                      shipping info
                    </h2>
                    <div className="md:grid grid-cols-2 gap-4">
                      <div className="mt-6 md:mt-0 col-start-1 col-end-4">
                        <label
                          htmlFor="name"
                          className="font-manrope font-bold text-sm tracking-tight "
                        >
                          Your Address
                        </label>
                        <br />
                        <input
                          type="text"
                          placeholder="1137 Williams Avenue"
                          className="w-full border border-gray-400 focus:outline-brown  text-manrope text-sm tracking-tight px-6 py-3 rounded-md"
                        />
                      </div>
                      <div className="mt-6 md:mt-0 col-start-1 col-end-2">
                        <label
                          htmlFor="name"
                          className="font-manrope font-bold text-sm tracking-tight "
                        >
                          Zip Code
                        </label>
                        <br />
                        <input
                          type="text"
                          placeholder="10001"
                          className="w-full border border-gray-400 focus:outline-brown  text-manrope text-sm tracking-tight px-6 py-3 rounded-md"
                        />
                      </div>
                      <div className="mt-6 md:mt-0 col-start-2 col-end-4">
                        <label
                          htmlFor="name"
                          className="font-manrope font-bold text-sm tracking-tight "
                        >
                          City
                        </label>
                        <br />
                        <input
                          type="text"
                          placeholder="New York"
                          className="w-full border border-gray-400 focus:outline-brown  text-manrope text-sm tracking-tight px-6 py-3 rounded-md"
                        />
                      </div>
                      <div className="mt-6 md:mt-0">
                        <label
                          htmlFor="name"
                          className="font-manrope font-bold text-sm tracking-tight "
                        >
                          Country
                        </label>
                        <br />
                        <input
                          type="text"
                          placeholder="United States"
                          className="w-full border border-gray-400 focus:outline-brown  text-manrope text-sm tracking-tight px-6 py-3 rounded-md"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h2 className="text-brown font-manrope text-sm leading-6 tracking-[0.93px] uppercase mb-4">
                      payment details
                    </h2>
                    <div className="md:grid grid-cols-2">
                      <h3 className="font-manrope font-bold text-sm tracking-tight">
                        Payment Method
                      </h3>
                      <div>
                        <label className="flex gap-4 items-center mt-4 border border-gray-400 hover:border-brown   text-manrope text-sm tracking-tight px-6 py-3 rounded-md">
                          <input
                            type="radio"
                            name="payment-method"
                            value=" e-Money"
                            className="accent-brown"
                          />
                          e-Money
                        </label>
                        <label className="flex gap-4 items-center mt-6 border border-gray-400 hover:border-brown  text-manrope text-sm tracking-tight px-6 py-3 rounded-md">
                          <input
                            type="radio"
                            name="payment-method"
                            value=" Cash-on-Delivery"
                            className="accent-brown"
                          />
                          Cash on Delivery
                        </label>
                      </div>
                    </div>

                    <div className="md:grid grid-cols-2 gap-2">
                      <div className="mt-8 md:mt-6">
                        <label
                          htmlFor="name"
                          className="font-manrope font-bold text-sm tracking-tight "
                        >
                          e-Money Number
                        </label>
                        <br />
                        <input
                          type="text"
                          placeholder="238521993"
                          className="w-full border border-gray-400 focus:outline-brown  text-manrope text-sm tracking-tight px-6 py-3 rounded-md"
                        />
                      </div>
                      <div className="mt-6 md:mt-6">
                        <label
                          htmlFor="name"
                          className="font-manrope font-bold text-sm tracking-tight "
                        >
                          e-Money PIN
                        </label>
                        <br />
                        <input
                          type="text"
                          placeholder="6891"
                          className="w-full border border-gray-400 focus:outline-brown  text-manrope text-sm tracking-tight px-6 py-3 rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="h-fit mx-auto lg:mx-0 bg-white lg:max-w-[327px] w-full rounded-md px-6 py-8 mt-6 lg:mt-0">
              <h2 className="uppercase font-manrope font-bold text-lg text-dark-900 tracking-[1.29px]">
                Summary
              </h2>
              {cart.map((items) => {
                return (
                  <div key={items.id} className="flex gap-4  mt-8 mb-6">
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
                      <p className="font-manrope font-normal text-gray-500 text-sm leading-6">
                        ${items.price}
                      </p>
                    </div>
                    <p className="font-manrope font-bold text-sm text-gray-500">
                      x{items.quantity}
                    </p>
                  </div>
                );
              })}

              <div className="mt-8">
                <div className="flex justify-between">
                  <h3 className="font-manrope font-semibold text-gray-500 text-sm leading-6">
                    Total
                  </h3>
                  <h3 className="font-manrope font-bold text-lg text-dark-900 ">
                    {/* $ {totalPrice} */}
                  </h3>
                </div>
                <div className="flex justify-between mt-2">
                  <h3 className="font-manrope font-semibold text-gray-500 text-sm leading-6">
                    SHIPPING
                  </h3>
                  <h3 className="font-manrope font-bold text-lg text-dark-900  ">
                    $ {cart.length === 0 ? 0 : shippingFee}
                  </h3>
                </div>

                <div className="flex justify-between mt-2">
                  <h3 className="font-manrope font-semibold text-gray-500 text-sm leading-6">
                    VAT (INCLUDED)
                  </h3>
                  <h3 className="font-manrope font-bold text-lg text-dark-900  ">
                    $ {Math.floor(totalPrice * 0.2)}
                  </h3>
                </div>

                <div className="flex justify-between mt-2">
                  <h3 className="font-manrope font-semibold text-gray-500 text-sm leading-6">
                    GRAND TOTAL
                  </h3>
                  <h3 className="font-manrope font-bold text-lg text-brown  ">
                    {/* $ {Math.floor(totalPrice * 0.2) + shippingFee + totalPrice} */}
                  </h3>
                </div>
              </div>

              <div className="mt-6">
                <button
                  onClick={handleclickConfirm}
                  className="w-full hover:bg-light-brown focus:bg-light-brown transition bg-brown text-white text-center font-manrope text-sm font-semibold py-4 px-9 tracking-[1px] cursor-pointer"
                >
                  CONTINUE & PAY
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Checkout;
