import {
  Link,
  useParams,
  useNavigate,
  useOutletContext,
} from "react-router-dom";
import data from "../data.json";
import Navbar from "./shared/Navbar";
import Categories from "./shared/Categories";
import Audiophile from "./shared/Audiophile";
import Footer from "./shared/Footer";
import { useEffect, useState } from "react";

function Productdetail() {
  const params = useParams();
  const navigate = useNavigate();
  const { slug } = params;

  const { setCart } = useOutletContext();

  const productDetail = data.filter((productName) => productName.slug === slug);

  const [products, setProducts] = useState(productDetail);

  useEffect(() => {
    const result = data.filter((productName) => productName.slug === slug);
    setProducts(result);
  }, [slug]);

  const increase = (id) => {
    setProducts((prevP) =>
      prevP.map((items) =>
        items.id === id ? { ...items, quantity: items.quantity + 1 } : items,
      ),
    );
  };
  const decrease = (id) => {
    setProducts((prevP) =>
      prevP.map((items) =>
        items.id === id
          ? { ...items, quantity: Math.max(1, items.quantity - 1) }
          : items,
      ),
    );
  };

  const addToCart = (newProduct) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (items) => items.id === newProduct.id,
      );
      if (existingProduct) {
        return prevCart.map((items) =>
          items.id === newProduct.id
            ? { ...items, quantity: items.quantity + newProduct.quantity }
            : items,
        );
      } else {
        return [...prevCart, newProduct];
      }
    });

    setProducts((prev) =>
      prev.map((items) =>
        items.id === newProduct.id ? { ...items, quantity: 1 } : items,
      ),
    );
  };
  return (
    <div>
      <Navbar />
      <div className="bg-white mt-[90px] lg:mt-[117px] ">
        <div className="max-w-[80rem] mx-auto px-6  xl:px-40">
          <button
            onClick={() => navigate(-1)}
            className="font-manrope font-semibold text-sm leading-6 mt-8 cursor-pointer"
          >
            Go Back
          </button>
          <div>
            {products.map((product) => {
              return (
                <div key={product.id}>
                  <div className="mt-6 md:grid items-center grid-cols-2 gap-17 lg:gap-31">
                    <div>
                      <img
                        src={product.image.mobile}
                        alt={product.name}
                        className="md:hidden rounded-lg"
                      />
                      <img
                        src={product.image.tablet}
                        alt={product.name}
                        className="hidden md:block lg:hidden rounded-lg "
                      />
                      <img
                        src={product.image.desktop}
                        alt={product.name}
                        className="hidden lg:block rounded-lg w-full"
                      />
                    </div>
                    <div>
                      <h2 className="text-brown font-manrope font-normal text-sm tracking-[10px] mt-8 md:mt-0">
                        {product.new == true && "NEW PRODUCT"}
                      </h2>
                      <h2 className="text-dark-900 font-manrope font-bold text-2xl lg:text-4xl tracking-[1px] my-6">
                        {product.name}
                      </h2>
                      <p className="text-gray-600 lg:text-left font-manrope text-sm md:text-base leading-6">
                        {product.description}
                      </p>
                      <p className="mt-6 font-manrope font-bold text-lg tracking-[1.29px]">
                        ${product.price.toLocaleString()}
                      </p>
                      <div className="flex gap-4 mt-8">
                        <div>
                          <div className="flex items-center justify-center gap-4 w-[120px] bg-light-gray font-manrope font-bold text-sm p-4  rounded tracking-[1px] ">
                            <button
                              onClick={() => decrease(product.id)}
                              className="cursor-pointer hover:text-brown"
                            >
                              -
                            </button>
                            <p>{product.quantity}</p>
                            <button
                              onClick={() => increase(product.id)}
                              className="cursor-pointer hover:text-brown"
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="shrink-0">
                          <button
                            onClick={() => addToCart(product)}
                            className=" bg-brown text-white hover:bg-light-brown focus:bg-light-brown transition font-manrope font-bold text-sm p-4 rounded tracking-[1px] cursor-pointer"
                          >
                            ADD TO CART
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:flex gap-31.5  lg:mt-40 ">
                    <div className="mt-22 lg:mt-0 lg:max-w-[600px]">
                      <h2 className="font-manrope font-bold text-2xl leading-9 text-dark-900">
                        FEATURES
                      </h2>
                      <p className="text-gray-600 font-manrope text-sm md:text-base leading-6 mt-6">
                        {product.features}
                      </p>
                    </div>
                    <div className="lg:max-w-[300px] mt-22 lg:mt-0 md:flex lg:flex-col items-center lg:items-start gap-32 lg:gap-0">
                      <h2 className="font-manrope font-bold text-2xl leading-9 text-dark-900">
                        IN THE BOX
                      </h2>
                      <div className="mt-6">
                        {product.includes.map((item, index) => (
                          <div className="space-x-6" key={index}>
                            <p className="text-brown inline-block font-manrope text-sm md:text-base leading-6">
                              <span>{item.quantity}</span>
                              <span className="text-sm">x</span>
                            </p>
                            <p className="inline-block text-gray-600 font-manrope text-sm md:text-base leading-6 ">
                              {item.item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="my-22 lg:my-40 grid md:grid-cols-2 justify-center gap-5">
                    <div className="grid justify-center gap-5">
                      <div>
                        <img
                          src={product.gallery.first.mobile}
                          alt="gallery"
                          className="rounded-lg w-full "
                        />
                      </div>
                      <div>
                        <img
                          src={product.gallery.second.mobile}
                          alt="gallery"
                          className="rounded-lg w-full"
                        />
                      </div>
                    </div>
                    <div>
                      <img
                        src={product.gallery.third.mobile}
                        alt="gallery"
                        className="rounded-lg w-full"
                      />
                    </div>
                  </div>
                  <div>
                    <h2 className="font-manrope font-bold leading-9 text-2xl md:text-3xl tracking-[0.86px] text-center text-dark-900">
                      YOU MAY ALSO LIKE
                    </h2>
                    <div className="mt-10 grid justify-center md:grid-cols-3 gap-3">
                      {product.others.map((other, index) => (
                        <div key={index} className="text-center w-[300px]">
                          <img
                            src={other.image.mobile}
                            alt={other.name}
                            className="rounded-lg md:hidden w-full"
                          />
                          <img
                            src={other.image.tablet}
                            alt={other.name}
                            className="rounded-lg hidden md:block lg:hidden"
                          />
                          <img
                            src={other.image.desktop}
                            alt={other.name}
                            className="rounded-lg hidden lg:block"
                          />
                          <h2 className="font-manrope font-bold text-2xl my-8 tracking-[1.71px] text-center text-dark-900">
                            {other.name}
                          </h2>
                          <div>
                            <Link to={`/productdetail/${other.slug}`}>
                              <button className="bg-brown text-white text-sm text-center hover:bg-light-brown focus:bg-light-brown transition font-manrope font-semibold py-4 px-7  rounded tracking-[1px] cursor-pointer mb-14">
                                SEE PRODUCT
                              </button>
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Categories />
      <Audiophile />
      <Footer />
    </div>
  );
}
export default Productdetail;
