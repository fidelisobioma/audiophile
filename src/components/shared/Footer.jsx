import { Link, NavLink } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-dark-900">
      <div className="relative bg-dark-900 max-w-[80rem] mx-auto px-6  xl:px-40 pt-[75px] pb-[48px] flex md:block flex-col justify-between items-center ">
        <div className="w-[104px] h-[4px] bg-brown absolute top-0"></div>
        <div>
          <div className=" lg:flex  justify-between items-center flex-1 pb-[2.87rem] ">
            <div className="w-[143px] h-[25px] mx-auto md:mx-0 ">
              <Link to="/">
                <img
                  src="/assets/shared/desktop/logo.svg"
                  alt="audiophile"
                  className="w-full"
                />
              </Link>
            </div>
            <ul className="flex flex-col md:flex-row items-center gap-[2.125rem] mt-12 lg:mt-0">
              <li>
                <NavLink
                  className="text-white font-manrope font-bold text-sm leading-[1.5625] tracking-[0.125rem]  hover:text-brown focus:text-brown transition"
                  to="/"
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-white font-manrope font-bold text-sm leading-[1.5625] tracking-[0.125]  hover:text-brown focus:text-brown transition"
                  to="/headphones/headphones"
                >
                  HEADPHONES
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-white font-manrope font-bold text-sm leading-[1.5625] tracking-[0.125]  hover:text-brown focus:text-brown transition"
                  to="/speakers/speakers"
                >
                  SPEAKERS
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-white font-manrope font-bold text-sm leading-[1.5625] tracking-[0.125]  hover:text-brown focus:text-brown transition"
                  to="/earphones/earphones"
                >
                  EARPHONES
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="md:flex justify-between items-center">
            <div className="xl:max-w-[500px] lg:max-w-[398px]">
              <p className="text-white text-base leading-[1.5625rem] tracking-0 text-center md:text-left">
                Audiophile is an all in one stop to fulfill your audio needs.
                We're a small team of music lovers and sound specialists who are
                devoted to helping you get the most out of personal audio. Come
                and visit our demo facility - we’re open 7 days a week.
              </p>
              <p className="text-white text-base mt-[56px] leading-[1.5625rem] tracking-0 text-center md:text-left">
                Copyright 2021. All Rights Reserved
              </p>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-4 mt-12 lg:mt-0 md:mt-32">
              <div className="w-[24px] h-[24px]  cursor-pointer">
                <img
                  src="\assets\shared\desktop\icon-facebook.svg"
                  alt="facebook"
                  className="w-full"
                />
              </div>
              <div className="w-[24px] h-[24px] cursor-pointer">
                <img
                  src="\assets\shared\desktop\icon-twitter.svg"
                  alt="twitter"
                  className="w-full "
                />
              </div>
              <div className="w-[24px] h-[24px] cursor-pointer">
                <img
                  src="\assets\shared\desktop\icon-instagram.svg"
                  alt="instagram"
                  className="w-full "
                  style={{ fill: "red" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
