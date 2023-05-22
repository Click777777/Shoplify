import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ProductProvider from "./contexts/ProductContext.jsx";
import SideBarProvider from "./contexts/SideBarContext.jsx";
import CardProvider from "./contexts/CardContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CardProvider>
    <SideBarProvider>
      <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductProvider>
    </SideBarProvider>
  </CardProvider>
);
