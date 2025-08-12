import { NavLink } from "react-router-dom";
function Categories() {
  return (
    <>
      <div className="bg-white ">
        <div className="max-w-[80rem] mx-auto px-6 xl:px-40">
          <div className="grid justify-center md:grid-cols-3 md:gap-2.5 lg:gap-7.5 mb-30">
            <div className="bg-light-gray mt-16 lg:mt-32 w-[300px] md:w-auto rounded-md">
              <div className="w-[5.00rem] md:w-[103px] lg:w-[122px] -mt-6  lg:-mt-8 mx-auto ">
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
                  <NavLink className="" to="/headphones/headphones">
                    <span className=" my-4  gap-1 inline-flex justify-center items-center font-manrope font-bold text-sm text-gray-600 hover:text-light-brown focus:text-light-brown  transition">
                      SHOP
                      <img
                        src="\assets\shared\desktop\icon-arrow-right.svg"
                        alt="arrow right"
                        className=""
                      />
                    </span>
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="bg-light-gray mt-16 lg:mt-32  w-[300px] md:w-auto rounded-md">
              <div className="w-[5.00rem] md:w-[103px] lg:w-[122px] -mt-6  lg:-mt-8 mx-auto ">
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
                  <NavLink to="/speakers/speakers">
                    <span className="my-4 gap-1 inline-flex justify-center items-center font-manrope font-bold text-sm text-gray-600 hover:text-light-brown focus:text-light-brown transition">
                      SHOP
                      <img
                        src="\assets\shared\desktop\icon-arrow-right.svg"
                        alt="arrow right"
                        className=""
                      />
                    </span>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="bg-light-gray mt-16 lg:mt-32  w-[300px] md:w-auto rounded-md">
              <div className="w-[5.00rem] md:w-[103px] lg:w-[122px] -mt-6 lg:-mt-8 mx-auto ">
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
                  <NavLink to="/earphones/earphones">
                    <span className="gap-1 inline-flex justify-center items-center my-4 font-manrope font-bold text-sm text-gray-600 hover:text-light-brown focus:text-light-brown transition">
                      SHOP
                      <img
                        src="\assets\shared\desktop\icon-arrow-right.svg"
                        alt="arrow right"
                        className=""
                      />
                    </span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Categories;
