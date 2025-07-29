import { NavLink } from "react-router-dom";
function Categories() {
  return (
    <>
      <div className="bg-white ">
        <div className="max-w-[80rem] mx-auto px-6 xl:px-40">
          <div className="grid md:grid-cols-3 md:gap-2.5 lg:gap-7.5 mb-30">
            <div className="bg-light-gray mt-16 lg:mt-32 rounded-md">
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

            <div className="bg-light-gray mt-16 lg:mt-32 rounded-md">
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
            <div className="bg-light-gray mt-16 lg:mt-32 rounded-md">
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
    </>
  );
}
export default Categories;
