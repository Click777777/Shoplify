import axios from "axios";
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios("https://fakestoreapi.com/products");
      const data = res.data;
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductProvider;
