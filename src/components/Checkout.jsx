import { Link, useNavigate, useOutletContext } from "react-router-dom";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Loading from "./Loading";

function Checkout() {
  const navigate = useNavigate();
  const [confirm, setConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  // const handleclickConfirm = () => {
  //   setConfirm(!confirm);
  // };

  const { cart, setCart, totalPrice } = useOutletContext();

  const [lessProduct, setLessProduct] = useState(
    cart.filter((item, index) => {
      return index === 0;
    }),
  );

  //more products
  const [more, setMore] = useState(false);
  const handleAllproduct = () => {
    setLess(true);
    setMore(false);
    setLessProduct(cart.filter((item, index) => index === 0));
  };

  const [less, setLess] = useState(true);
  const handleLessproduct = () => {
    setMore(true);
    setLess(false);
    setLessProduct(cart);
  };

  let shippingFee = cart.length === 0 ? 0 : 50;
  //payment method
  const [paymentMethod, setPaymentMethod] = useState("e-money");
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm({ defaultValues: { name: "", email: "", phone: "" } });
  const onSubmit = async (data) => {
    // console.log(data);
    const valid = await trigger();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (valid) {
        setConfirm(true);
      }
    }, 1000);
  };
  if (loading) return <Loading />;
  return (
    <div className="relative ">
      <Navbar />
      <div className="bg-[#f2f2f2] mt-[90px] lg:mt-[117px]">
        <div className="max-w-[80rem] mx-auto px-6 xl:px-40 bg-[#f2f2f2] pb-8 ">
          {confirm && (
            <div className="bg-[rgba(0,0,0,0.5)] z-50 absolute grid items-start left-0 right-0 -top-20 h-full px-6 ">
              <div className="bg-white rounded-lg h-fit max-w-[600px] p-8 mx-auto overflow-auto">
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
                    {lessProduct.map((items) => {
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
                    <hr className="text-[#979797]" />
                    {more && (
                      <button
                        className="font-manrope font-bold text-sm text-gray-500 tracking-tight mx-auto block mt-3 cursor-pointer"
                        onClick={handleAllproduct}
                      >
                        View less
                      </button>
                    )}
                    {less && (
                      <button
                        onClick={handleLessproduct}
                        className="font-manrope font-bold text-sm text-gray-500 tracking-tight  mx-auto block mt-3 cursor-pointer"
                      >
                        {` and ${cart.length - 1} other item(s)`}
                      </button>
                    )}
                  </div>
                  <div className="bg-dark-900 p-6 grid items-end">
                    <div>
                      <h3 className="font-manrope text-sm text-light-gray">
                        GRAND TOTAL
                      </h3>
                      <h3 className="text-white font-manrope font-bold text-lg mt-2">
                        $ {(shippingFee + totalPrice).toLocaleString()}
                      </h3>
                    </div>
                  </div>
                </div>
                <Link to="/" onClick={() => setCart([])}>
                  <button className="w-full hover:bg-light-brown focus:bg-light-brown transition bg-brown text-white text-center font-manrope font-semibold text-sm py-4 mt-6 tracking-[1px] rounded cursor-pointer">
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="lg:flex gap-8 ">
              <div className="bg-white rounded-lg px-6 py-8 ">
                <div>
                  <h2 className="font-manrope font-bold text-2xl tracking-[1px] mb-8">
                    CHECKOUT
                  </h2>
                  <div>
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
                            className="w-full border border-gray-400 focus:outline-brown text-manrope text-sm tracking-tight px-6 py-3 rounded-md"
                            {...register("name", {
                              required: "Input your name",
                              minLength: {
                                value: 3,
                                message: "At least three characters",
                              },
                            })}
                          />
                          {errors.name && (
                            <span className="text-[0.71rem] text-red-500 font-manrope font-[300]">
                              {errors.name.message}
                            </span>
                          )}
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
                            {...register("email", {
                              required: "Email is required",
                              pattern: {
                                value:
                                  /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                                message: "Wrong format",
                              },
                            })}
                          />
                          {errors.email && (
                            <span className="text-[0.71rem] text-red-500 font-manrope font-[300]">
                              {errors.email.message}
                            </span>
                          )}
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
                            {...register("phone", {
                              required: "Phone is required",
                              pattern: {
                                value: /^\+[1-9]\d{0,3}[0-9\s\-()]{7,}$/,
                                message: "Wrong format",
                              },
                            })}
                          />
                          {errors.phone && (
                            <span className="text-[0.71rem] text-red-500 font-manrope font-[300]">
                              {errors.phone.message}
                            </span>
                          )}
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
                            {...register("address", {
                              required: "Your address is required",
                              minLength: {
                                value: 3,
                                message: "At least three characters",
                              },
                            })}
                          />
                          {errors.address && (
                            <span className="text-[0.71rem] text-red-500 font-manrope font-[300]">
                              {errors.address.message}
                            </span>
                          )}
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
                            {...register("zipcode", {
                              required: "Required",
                              minLength: {
                                value: 3,
                                message: "Too short",
                              },
                            })}
                          />
                          {errors.zipcode && (
                            <span className="text-[0.71rem] text-red-500 font-manrope font-[300]">
                              {errors.zipcode.message}
                            </span>
                          )}
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
                            {...register("city", {
                              required: "Required",
                              minLength: {
                                value: 3,
                                message: "Too short",
                              },
                            })}
                          />
                          {errors.city && (
                            <span className="text-[0.71rem] text-red-500 font-manrope font-[300]">
                              {errors.city.message}
                            </span>
                          )}
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
                            {...register("country", {
                              required: "Required",
                              minLength: {
                                value: 3,
                                message: "Too short",
                              },
                            })}
                          />
                          {errors.country && (
                            <span className="text-[0.71rem] text-red-500 font-manrope font-[300]">
                              {errors.country.message}
                            </span>
                          )}
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
                              value="e-money"
                              className="accent-brown"
                              checked={paymentMethod === "e-money"}
                              onChange={(e) => setPaymentMethod(e.target.value)}
                            />
                            E-Money
                          </label>

                          <label className="flex gap-4 items-center mt-6 border border-gray-400 hover:border-brown  text-manrope text-sm tracking-tight px-6 py-3 rounded-md">
                            <input
                              type="radio"
                              name="payment-method"
                              value="cash"
                              className="accent-brown"
                              checked={paymentMethod === "cash"}
                              onChange={(e) => setPaymentMethod(e.target.value)}
                            />
                            Cash on Delivery
                          </label>
                        </div>
                      </div>
                      {paymentMethod === "e-money" && (
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
                              {...register("emoney", {
                                required: "Required",
                              })}
                            />
                            {errors.emoney && (
                              <span className="text-[0.71rem] text-red-500 font-manrope font-[300]">
                                {errors.emoney.message}
                              </span>
                            )}
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
                              {...register("pin", {
                                required: "Required",
                              })}
                            />
                            {errors.pin && (
                              <span className="text-[0.71rem] text-red-500 font-manrope font-[300]">
                                {errors.pin.message}
                              </span>
                            )}
                          </div>
                        </div>
                      )}

                      {paymentMethod === "cash" && (
                        <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-2 md:gap-8 mt-16 md:mt-8">
                          <div className=" w-[3rem] shrink-0 ">
                            <img
                              src="/assets/checkout/icon-cash-on-delivery.svg"
                              alt="delivery"
                              className="w-full"
                            />
                          </div>
                          <div>
                            <p className="text-gray-600 text-center lg:text-left font-manrope leading-6 text-base">
                              The ‘Cash on Delivery’ option enables you to pay
                              in cash when our delivery courier arrives at your
                              residence. Just make sure your address is correct
                              so that your order will not be cancelled.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
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
                      $ {totalPrice.toLocaleString()}
                    </h3>
                  </div>
                  <div className="flex justify-between mt-2">
                    <h3 className="font-manrope font-semibold text-gray-500 text-sm leading-6">
                      SHIPPING
                    </h3>
                    <h3 className="font-manrope font-bold text-lg text-dark-900  ">
                      $ {shippingFee}
                    </h3>
                  </div>

                  <div className="flex justify-between mt-2">
                    <h3 className="font-manrope font-semibold text-gray-500 text-sm leading-6">
                      VAT (INCLUDED)
                    </h3>
                    <h3 className="font-manrope font-bold text-lg text-dark-900  ">
                      $ {Math.floor(totalPrice * 0.2).toLocaleString()}
                    </h3>
                  </div>

                  <div className="flex justify-between mt-2">
                    <h3 className="font-manrope font-semibold text-gray-500 text-sm leading-6">
                      GRAND TOTAL
                    </h3>
                    <h3 className="font-manrope font-bold text-lg text-brown  ">
                      $ {(shippingFee + totalPrice).toLocaleString()}
                    </h3>
                  </div>
                </div>
                {cart.length > 0 ? (
                  <div className="mt-6">
                    <input
                      type="submit"
                      value=" CONTINUE & PAY"
                      className="w-full hover:bg-light-brown focus:bg-light-brown transition bg-brown text-white text-center font-manrope text-sm font-semibold py-4 px-9 tracking-[1px] rounded cursor-pointer"
                    />
                  </div>
                ) : (
                  <div>
                    <Link to="/">
                      <button className="bg-brown w-full text-white text-center font-manrope font-semibold text-[13px] py-[0.9rem] px-[1.9rem] mt-7 rounded  tracking-[1px] cursor-pointer hover:bg-light-brown focus:bg-light-brown transition">
                        Continue SHOPPING
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Checkout;
