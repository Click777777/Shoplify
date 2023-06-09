import { useContext } from "react";
import PropTypes from "prop-types";
import { BsFillEyeFill } from "react-icons/bs";
import { MdOutlineAddCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import { CardContext } from "../contexts/CardContext";

const Product = ({ item }) => {
  const { addToCart } = useContext(CardContext);
  return (
    <div>
      <div className=" group relative mb-2 overflow-hidden border border-gray-200">
        <div className="flex h-72 w-full items-center justify-center">
          <Link to={`/product/${item.id}`}>
            <img
              src={item.image}
              alt={item.title}
              className="max-h-[160px] transition-all duration-300 group-hover:scale-110"
            />
          </Link>
        </div>

        <div className="absolute -right-20 top-0 hidden flex-col gap-y-2 p-2 opacity-0 transition-all duration-300 group-hover:right-0 group-hover:opacity-100 lg:flex">
          <button onClick={() => addToCart(item, item.id)}>
            <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-red-500 text-white drop-shadow-xl">
              <MdOutlineAddCircle />
            </div>
          </button>
          <Link to={`/product/${item.id}`}>
            <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-white text-primary drop-shadow-xl">
              <BsFillEyeFill />
            </div>
          </Link>
        </div>
      </div>

      <div>
        <div className="mb-2 text-sm capitalize text-gray-500">
          {item.category}
        </div>
        <Link>
          <h2 className="mb-1 font-semibold">{item.title}</h2>
        </Link>
        <div className=" font-medium">$ {item.price}</div>
      </div>
    </div>
  );
};

Product.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Product;
