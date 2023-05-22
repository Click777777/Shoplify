import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { CardContext } from "../contexts/CardContext";

const ProductDetail = () => {
  const { id } = useParams();

  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CardContext);
  const cartItem = products.find((item) => item.id === Number(id));
  // console.log(cartItem);

  return (
    <section>
      {!cartItem ? (
        <div className="flex h-screen items-center justify-center">
          Loading...
        </div>
      ) : (
        <div className="min-h-screen pb-12 pt-24 lg:py-32">
          <div className="container mx-auto flex h-full flex-col items-center justify-center lg:flex-row">
            <div className="mb-8 flex flex-1 items-center justify-center lg:mb-0 ">
              <img
                src={cartItem.image}
                alt={cartItem.title}
                className="max-w-[200px] lg:max-w-sm"
              />
            </div>

            <div className="flex-1 text-center lg:text-left">
              <h1 className="mx-auto mb-2 max-w-[450px] text-[26px] font-medium lg:mx-0">
                {cartItem.title}
              </h1>
              <div className="mb-6 text-xl font-medium text-red-500">
                $ {cartItem.price}
              </div>
              <p className="mb-8">{cartItem.description}</p>
              <button
                className="bg-primary px-8 py-4 uppercase text-white"
                onClick={() => addToCart(cartItem, cartItem.id)}
              >
                add to cart
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductDetail;
