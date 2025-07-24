function Home() {
  return (
    <div className="">
      <div className="bg-dark-950">
        <div className="max-w-[80rem] mx-auto bg-dark-950 px-[10rem] h-[600px]">
          <div className="w-full overflow-hidden h-[600px] grid  items-center grid-cols-[1fr_4fr]  border-amber-900">
            <div className="z-10">
              <h1 className="text-white font-manrope text-[0.875rem] font-bold tracking-[0.625rem] mb-[1.5rem] text-left leading-auto">
                NEW PRODUCT
              </h1>
              <h1 className="text-white font-manrope text-[3.5rem] font-bold tracking-[0.125rem] leading-[3.625rem] mb-[1.5rem] text-left">
                XX9 MARK II HEADPHONES
              </h1>
              <p className="text-white text-[0.9375rem] leading-[1.5625rem] tracking-0">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
              <button className="bg-brown font-manrope font-bold tracking-[0.0625rem] text-[0.8125rem] text-white mt-[2.5rem] py-[0.9375rem] px-[2.21875rem] ">
                SEE PRODUCT
              </button>
            </div>

            <div className="relative origin-right translate-x-[-40%] w-[165%]  border-amber-300">
              <img
                src="/assets/home/desktop/image-hero.jpg"
                alt="headphone"
                className="w-full"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse , transparent 15%, #000000 80% )",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-[80rem] mx-auto bg-white px-[10rem] pt-[7.5rem]">
          <div className="grid grid-cols-3 gap-[1.9rem]">
            <div className="bg-light-gray flex flex-col items-center h-[204px] rounded-[8px]">
              <div className="w-[122.95px] h-[160px] -mt-10">
                <img
                  src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
                  alt="headphones"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3 className="font-manrope font-bold text-[1.125rem] tracking-[0.08rem] text-dark-950">
                  HEADPHONES
                </h3>
                <button className="flex gap-[4px] items-center justify-center mt-[0.9375]">
                  <p className="font-manrope font-bold text-[0.8125rem] tracking-[1px]">
                    SHOP
                  </p>
                  <div className="w-[5px] h-[10px]">
                    <img
                      src="/assets/shared/desktop/icon-arrow-right.svg"
                      alt="arrow"
                      className="w-full"
                    />
                  </div>
                </button>
              </div>
            </div>
            <div className="bg-light-gray flex flex-col items-center h-[204px] rounded-[8px]">
              <div className="w-[122.95px] h-[160px] -mt-10">
                <img
                  src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
                  alt="speaker"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3 className="font-manrope font-bold text-[1.125rem] tracking-[0.08rem] text-dark-950">
                  SPEAKERS
                </h3>
                <button className="flex gap-[4px] items-center justify-center mt-[0.9375]">
                  <p className="font-manrope font-bold text-[0.8125rem] tracking-[1px]">
                    SHOP
                  </p>
                  <div className="w-[5px] h-[10px]">
                    <img
                      src="/assets/shared/desktop/icon-arrow-right.svg"
                      alt="arrow"
                      className="w-full"
                    />
                  </div>
                </button>
              </div>
            </div>
            <div className="bg-light-gray flex flex-col items-center h-[204px] rounded-[8px]">
              <div className="w-[122.95px] h-[160px] -mt-10">
                <img
                  src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
                  alt="earphones"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3 className="font-manrope font-bold text-[1.125rem] tracking-[0.08rem] text-dark-950">
                  EARPHONES
                </h3>
                <button className="flex gap-[4px] items-center justify-center mt-[0.9375]">
                  <p className="font-manrope font-bold text-[0.8125rem] tracking-[1px]">
                    SHOP
                  </p>
                  <div className="w-[5px] h-[10px]">
                    <img
                      src="/assets/shared/desktop/icon-arrow-right.svg"
                      alt="arrow"
                      className="w-full"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-[80rem] mx-auto bg-white px-[10rem] py-[7.5rem]">
          <div className="grid grid-cols-2 bg-brown overflow-hidden px-[6rem]">
            <div className="w-[410px] h-[493px] pt-[96px]">
              <img
                src="/assets/home/desktop/image-speaker-zx9.png"
                alt="speaker"
                className="w-full"
              />
            </div>
            <div className="z-10 pt-[96px]">
              <h1 className="text-white font-manrope text-[3.5rem] font-bold tracking-[0.125rem] leading-[3.625rem] text-left">
                ZX9
              </h1>
              <h1 className="text-white font-manrope text-[3.5rem] font-bold tracking-[0.125rem] leading-[3.625rem] mb-[1.5rem] text-left">
                SPEAKER
              </h1>
              <p className="text-white text-[0.9375rem] leading-[1.5625rem] tracking-0">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
              <button className="bg-dark-950 font-manrope font-bold tracking-[0.0625rem] text-[0.8125rem] text-white mt-[2.5rem] py-[0.9375rem] px-[2.21875rem] ">
                SEE PRODUCT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
