function Audiophile() {
  return (
    <>
      <div className="bg-white">
        <div className="max-w-[80rem] mx-auto px-6  xl:px-40 mb-30">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="md:hidden lg:block lg:order-2">
              <img
                src="\assets\shared\mobile\image-best-gear.jpg"
                alt="best gear"
                className="rounded-lg"
              />
            </div>
            <div className="hidden md:block lg:hidden ">
              <img
                src="\assets\shared\tablet\image-best-gear.jpg"
                alt="best gear"
                className="rounded-lg"
              />
            </div>
            <div className="lg:order-1 md:max-w-[572px] mx-auto">
              <h2 className="uppercase font-manrope font-bold text-dark-900 text-3xl md:leading-11 md:text-4xl tracking-[1px] md:tracking-[1.43px] text-center lg:text-left">
                Bringing you the <strong className="text-brown"> best</strong>
                audio gear
              </h2>
              <p className="text-gray-600 text-center lg:text-left font-manrope leading-6 text-base mt-8">
                Located at the heart of New York City, Audiophile is the premier
                store for high end headphones, earphones, speakers, and audio
                accessories. We have a large showroom and luxury demonstration
                rooms available for you to browse and experience a wide range of
                our products. Stop by our store to meet some of the fantastic
                people who make Audiophile the best place to buy your portable
                audio equipment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Audiophile;
