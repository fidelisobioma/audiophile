import { useState } from "react";
import { Link, NavLink, useOutletContext } from "react-router-dom";
function Navbar() {
  const { handleShowCart } = useOutletContext();
  const [navbar, setNavbar] = useState(false);
  const handleclickNavbar = () => {
    setNavbar(!navbar);
  };
  return (
    <div className=" bg-dark-900 ">
      <nav className="max-w-[80rem] px-16 xl:px-40 mx-auto hidden lg:flex flex-col justify-between w-full overflow-hidden">
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
                className="text-white font-manrope font-bold text-[0.8125rem] leading-[1.5625] tracking-[0.125rem]"
                to="/"
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-white font-manrope font-bold text-[0.8125rem] leading-[1.5625] tracking-[0.125]"
                to="/headphones/headphones"
              >
                HEADPHONES
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-white font-manrope font-bold text-[0.8125rem] leading-[1.5625] tracking-[0.125]"
                to="/speakers/speakers"
              >
                SPEAKERS
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-white font-manrope font-bold text-[0.8125rem] leading-[1.5625] tracking-[0.125]"
                to="/earphones/earphones"
              >
                EARPHONES
              </NavLink>
            </li>
          </ul>
          <div className="w-[23.33px] h-[15.83px]">
            <button onClick={handleShowCart}>
              <img
                src="/assets/shared/desktop/icon-cart.svg"
                alt="cart"
                className="w-full cursor-pointer"
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

      <nav className="lg:hidden">
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
            <div>
              <button onClick={handleShowCart}>
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
          <div className="bg-[rgba(0,0,0,0.5)] h-full z-50 absolute top-0 left-0 right-0">
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
    </div>
  );
}
export default Navbar;
