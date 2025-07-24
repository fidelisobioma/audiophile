import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-dark-950 ">
      <nav className="max-w-[80rem] flex flex-col justify-between mx-auto bg-dark-950 px-[10.3125rem] w-full overflow-hidden">
        <div className="bg-dark-950 flex justify-between items-center flex-1 py-[2.87rem] ">
          <div className="w-[143px] h-[25px]">
            <Link to="/">
              <img
                src="./assets/shared/desktop/logo.svg"
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
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-white font-manrope font-bold text-[0.8125rem] leading-[1.5625] tracking-[0.125]"
                to="/headphones"
              >
                HEADPHONES
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-white font-manrope font-bold text-[0.8125rem] leading-[1.5625] tracking-[0.125]"
                to="/speakers"
              >
                SPEAKERS
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-white font-manrope font-bold text-[0.8125rem] leading-[1.5625] tracking-[0.125]"
                to="/earphones"
              >
                EARPHONES
              </NavLink>
            </li>
          </ul>
          <div className="w-[23.33px] h-[15.83px]">
            <NavLink to="/cart">
              <img
                src="./assets/shared/desktop/icon-cart.svg"
                alt="cart"
                className="w-full"
              />
            </NavLink>
          </div>
        </div>
        <div className="w-full ">
          <img
            src="/assets/shared/desktop/Rectangle.png"
            alt="line"
            className="w-full h-[1px]"
          />
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
