import Footer from "./shared/Footer";
import Categories from "./shared/Categories";
import Audiophile from "./shared/Audiophile";
import Navbar from "./shared/Navbar";
import { Link } from "react-router-dom";
function Home() {
  const xxmarktwo = "xx99-mark-two-headphones";
  const zx9 = "zx9-speaker";
  const zx7 = "zx7-speaker";
  const yx1 = "yx1-earphones";
  return (
    <div>
      <div className="bg-dark-900 ">
        <Navbar />
        <div className="max-w-[80rem] mx-auto flex gap-[36px] justify-center mt-[90px] lg:mt-[117px]  bg-dark-900 bg-[url(/assets/home/mobile/headphone.png)] md:bg-[public/assets/home/tablet/image-header.jpg] lg:bg-none bg-no-repeat bg-center bg-contain md:bg-auto min-h-[510px] md:min-h-[600px] lg:min-h-[700px]  w-full overflow-hidden px-6 xl:px-40">
          <div className=" max-w-[328px] md:max-w-[400px] text-center lg:text-left mt-[150px] md:mt-[180px] lg:mt-[128px]">
            <h1 className="text-white opacity-[49.64%] text-center lg:text-left font-manrope font-[400px] text-[14px] tracking-[10px]">
              NEW PRODUCT
            </h1>
            <h1 className="text-white text-center lg:text-left font-manrope font-bold text-[2.25rem] md:text-[3.5rem] leading-[46px] md:leading-[58px] md:text-5xl tracking-[1.29px] md:tracking-[2px] mt-4 uppercase">
              XX99 Mark II HeadphoneS
            </h1>
            <p className="body-text text-white mt-6">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <div>
              <Link to={`/productdetail/${xxmarktwo}`}>
                <button className="bg-brown text-white text-center font-manrope font-semibold text-[13px] py-[0.9rem] px-[1.9rem] mt-7 rounded  tracking-[1px] cursor-pointer hover:bg-light-brown focus:bg-light-brown transition">
                  SEE PRODUCT
                </button>
              </Link>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <img src="\assets\home\desktop\Bitmap (1).png" alt="headphone" />
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "radial-gradient(transparent, #101010)",
              }}
            ></div>
          </div>
        </div>
      </div>

      <Categories />

      <div className="bg-white">
        <div className="max-w-[80rem] mx-auto px-6 xl:px-40">
          <div className="bg-brown bg-[url(/assets/home/desktop/pattern-circles.svg)] bg-no-repeat bg-center bg-cover flex flex-col lg:flex-row justify-center lg:justify-between py-14 lg:pt-24 lg-pb-0 lg:pb-0 px-6 lg:px-24 mb-6 rounded-lg overflow-hidden">
            <div className="max-w-[172px] lg:max-w-[410.23px] mx-auto lg:mx-0">
              <img
                src="\assets\home\mobile\image-speaker-zx9.png"
                alt="speaker"
                className="lg:-mb-4"
              />
            </div>
            <div className="text-center lg:text-left max-w-[349px] mx-auto lg:mx-0">
              <h1 className="text-white text-center lg:text-left font-manrope font-bold text-4xl md:text-5xl tracking-[1.29px] md:tracking-[2px] my-8 lg:mt-0 uppercase">
                ZX9 SPEAKER
              </h1>
              <p className="text-light-gray text-center lg:text-left font-manrope text-base">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <div>
                <Link to={`/productdetail/${zx9}`}>
                  <button className="bg-dark-900 hover:bg-[#4c4c4c] focus:bg-[#4c4c4c] transition text-white text-center font-manrope font-semibold py-4 px-9 mt-6 rounded tracking-[1px] cursor-pointer">
                    SEE PRODUCT
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-[80rem] mx-auto px-6  xl:px-40">
          <div className="w-full flex justify-items-start items-center h-[320px] bg-[url(/assets/home/mobile/image-speaker-zx7.jpg)] md:bg-[url(/assets/home/tablet/image-speaker-zx7.jpg)]  bg-center bg-cover bg-no-repeat rounded-lg px-6 md:px-8 mb-6">
            <div>
              <h2 className="text-dark-900 font-manrope font-bold text-2xl tracking-[2px]">
                ZX7 SPEAKER
              </h2>
              <div>
                <Link to={`/productdetail/${zx7}`}>
                  <button className="bg-transparent hover:bg-dark-900  focus:text-white transition focus:bg-dark-900 hover:text-white border border-dark-900 text-dark-900 text-center font-manrope font-semibold py-4 px-8 mt-6 rounded text-sm tracking-[1px] cursor-pointer">
                    SEE PRODUCT
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className=" max-w-[80rem] mx-auto px-6  xl:px-40">
          <div className="grid md:grid-cols-2  gap-6 mb-30">
            <div>
              <img
                src="\assets\home\mobile\image-earphones-yx1.jpg"
                alt="earphones"
                className="rounded-lg"
              />
            </div>
            <div className="bg-light-gray px-6 md:px-24 py-10 rounded-md md:grid items-center">
              <div>
                <h2 className="text-dark-900 font-manrope font-bold text-2xl tracking-[2px]">
                  YX1 EARPHONES
                </h2>
                <Link to={`/productdetail/${yx1}`}>
                  <button className="bg-transparent hover:bg-dark-900  focus:text-white transition focus:bg-dark-900 hover:text-white border border-dark-900 text-dark-900 text-center font-manrope font-semibold py-4 px-8 mt-6 rounded text-sm tracking-[1px] cursor-pointer ">
                    SEE PRODUCT
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Audiophile />
      <Footer />
    </div>
  );
}
export default Home;
