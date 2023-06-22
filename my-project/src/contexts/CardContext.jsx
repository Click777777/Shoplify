import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const CardContext = createContext();

const CardProvider = ({ children }) => {
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);
  const [isAlert, setIsAlert] = useState(false);
  // console.log("cart", cart);
  console.log(isAlert);

  useEffect(() => {
    const reduceFun = (accumulator, cartItem) => {
      return accumulator + cartItem.amount;
    };
    if (cart) {
      const amount = cart.reduce(reduceFun, 0);
      setItemAmount(amount);
    }
  }, [cart]);

  useEffect(() => {
    const reduceFun = (accumulator, cartItem) => {
      return accumulator + cartItem.price * cartItem.amount;
    };
    if (cart) {
      const amount = cart.reduce(reduceFun, 0);
      setTotal(amount.toFixed(2));
    }
  }, [cart]);

  const addToCart = (item, itemId) => {
    const newItem = { ...item, amount: 1 };
    const cartItem = cart.find((findItem) => findItem.id === itemId);

    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === itemId) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }

    setIsAlert(true);
    setTimeout(() => {
      setIsAlert(false);
    }, 2000);
  };

  const removeCartItem = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    console.log("after filtered ", newCart);
    setCart(newCart);
  };

  const addItem = (item, itemId) => {
    addToCart(item, itemId);
  };

  const reduceItem = (id) => {
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      const newItem = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: item.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newItem);
    }

    if (cartItem.amount === 1) {
      removeCartItem(cartItem.id);
    }
  };

  const removeAllItem = () => {
    setCart([]);
  };

  return (
    <CardContext.Provider
      value={{
        cart,
        itemAmount,
        total,
        addToCart,
        removeCartItem,
        reduceItem,
        addItem,
        removeAllItem,
        isAlert,
        setIsAlert,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

CardProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default CardProvider;
