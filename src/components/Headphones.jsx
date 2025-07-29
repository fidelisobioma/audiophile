import Audiophile from "./shared/Audiophile";
import Categories from "./shared/Categories";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";
import { Link, useParams } from "react-router-dom";
import data from "../data.json";

function Headphones() {
  const params = useParams();
  const { id } = params;
  const categories = data.filter((data) => data.category === id);
  return (
    <>
      <div className="bg-dark-900">
        <Navbar />
        <div className="max-w-[80rem] mx-auto bg-dark-900">
          <div className="bg-dark-900 py-8 md:py-24 ">
            <h2 className="font-manrope font-bold text-2xl md:text-6xl text-center tracking-[2px] md:tracking-[1.43px] md:leading-11 text-white">
              HEADPHONES
            </h2>
          </div>
        </div>
      </div>

      <div className="bg-white ">
        <div className="max-w-[80rem] mx-auto px-6  xl:px-40">
          {categories.map((product, index) => {
            return (
              <div
                key={product.id}
                className="lg:grid grid-cols-2 gap-31 items-center mt-16"
              >
                <div
                  className={`${index % 2 !== 0 && "order-2"} mx-auto lg:mx-0`}
                >
                  <img
                    src={product.image.desktop}
                    alt={product.name}
                    className="rounded-lg"
                  />
                </div>

                <div className="text-center lg:text-left mt-8 lg:mt-0 md:max-w-[572px] mx-auto">
                  <h2 className="text-brown text-center lg:text-left font-manrope font-normal text-base tracking-[10px] mb-6">
                    {product.new == true && "NEW PRODUCT"}
                  </h2>
                  <h2 className="uppercase text-dark-900 font-manrope font-bold text-center lg:text-left  text-2xl md:text-4xl tracking-[1px]">
                    {product.name}
                  </h2>

                  <p className="text-gray-600 text-center lg:text-left font-manrope leading-6 text-base mt-8">
                    {product.description}
                  </p>
                  <div>
                    <Link to={`/productdetail/${product.slug}`}>
                      <button className="bg-brown text-white text-center font-manrope font-semibold py-4 px-9 mt-6 rounded tracking-[1px] cursor-pointer">
                        SEE PRODUCT
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Categories />
      <Audiophile />
      <Footer />
    </>
  );
}
export default Headphones;
