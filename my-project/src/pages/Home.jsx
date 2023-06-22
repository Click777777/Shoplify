import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import Hero from "../components/Hero";
import ScrollToTop from "../ScrollToTop";
import Alert from "../components/Alert";

const Home = () => {
  const { products } = useContext(ProductContext);

  const filterProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });

  return (
    <>
      <ScrollToTop />
      <Hero />
      <section id="productSection" className="py-16">
        <div className=" container mx-auto">
          <div className="cursor-default text-center">
            <h1 className=" text-shadow mb-8 inline-block text-center text-[30px] font-medium text-black transition-all duration-700 ease-in-out">
              Our Proucts
            </h1>
          </div>
          <div className="mx-auto grid max-w-sm grid-cols-1 gap-8 md:mx-0 md:max-w-none md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {filterProducts.map((item) => (
              <Product key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
      <Alert />
    </>
  );
};

export default Home;
