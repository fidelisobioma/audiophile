import { Link, NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className=" bg-dark-900">
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
            <NavLink to="">
              <img
                src="/assets/shared/desktop/icon-cart.svg"
                alt="cart"
                className="w-full"
              />
            </NavLink>
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
            <div>
              <img src="\assets\shared\tablet\icon-hamburger.svg" alt="menu" />
            </div>
            <div className="md:flex-1 md:ml-12">
              <NavLink to="/">
                <img src="\assets\shared\desktop\logo.svg" alt="audiophile" />
              </NavLink>
            </div>

            <div>
              <img src="\assets\shared\desktop\icon-cart.svg" alt="cart" />
            </div>
          </div>

          <div>
            <img
              src="\assets\shared\desktop\Rectangle.png"
              alt="line divider"
            />
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
