import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import Home from "./pages/Home";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        <SideBar />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
