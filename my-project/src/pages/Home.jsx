import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import Hero from "../components/Hero";

const Home = () => {
  const { products } = useContext(ProductContext);

  const filterProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });
  // console.log(filterProducts);

  return (
    <>
      <Hero />
      <section className="py-16">
        <div className=" container mx-auto">
          <div className="mx-auto grid max-w-sm grid-cols-1 gap-8 md:mx-0 md:max-w-none md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {filterProducts.map((item) => (
              <Product key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;