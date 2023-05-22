import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useContext } from "react";
import { CardContext } from "../contexts/CardContext";

const CardItem = ({ item }) => {
  const { removeCartItem, reduceItem, addItem } = useContext(CardContext);

  return (
    <div className="flex flex-col">
      <div className="w-full gap-x-4 border-b border-gray-200 py-2 font-light text-gray-500 ">
        <div className="flex min-h-[150px] w-full items-center justify-between gap-x-4">
          <Link to={`/product/${item.id}`}>
            <img src={item.image} alt="item.title" className=" max-w-[80px]" />
          </Link>

          <div className="flex w-full flex-col">
            <div className="mb-2 flex justify-between">
              <Link
                to={`/product/${item.id}`}
                className="max-w-[240px] text-sm font-medium uppercase text-primary hover:underline"
              >
                {item.title}
              </Link>
              <div
                className=" cursor-pointer text-lg"
                onClick={() => removeCartItem(item.id)}
              >
                <RxCross2 className="text-gray-500 transition-all duration-100 hover:text-red-500" />
              </div>
            </div>

            <div className="flex h-[36px] gap-x-2  text-sm">
              <div className="flex h-full max-w-[100px] flex-1 items-center border font-medium text-primary">
                <div
                  className="flex h-full flex-1 cursor-pointer items-center justify-center text-xs"
                  onClick={() => reduceItem(item.id)}
                >
                  <AiOutlineMinus />
                </div>
                <div className="flex h-full items-center justify-center px-2 text-sm font-medium">
                  {item.amount}
                </div>
                <div
                  className="flex h-full flex-1 cursor-pointer items-center justify-center text-xs"
                  onClick={() => addItem(item, item.id)}
                >
                  <AiOutlinePlus />
                </div>
              </div>

              <div className="flex flex-1 items-center justify-center">
                $ {item.price}
              </div>
              <div className="flex flex-1 items-center justify-end font-medium text-primary">
                $ {(item.amount * item.price).toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CardItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CardItem;
