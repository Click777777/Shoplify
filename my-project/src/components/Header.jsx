import { useContext, useState, useEffect } from "react";
import { SideBarContext } from "../contexts/SideBarContext";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CardContext } from "../contexts/CardContext";
import { Link } from "react-router-dom";
import Logo from "../img/logo.svg";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SideBarContext);
  const { itemAmount } = useContext(CardContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-xl" : "bg-transparent py-6"
      } fixed z-10 w-full transition-all`}
    >
      <div className="container mx-auto flex h-full items-center justify-between">
        <Link to={"/"}>
          <img src={Logo} alt="Logo" className="w-[40px]" />
        </Link>
        <div
          className="relative cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div>
            <HiOutlineShoppingBag className=" text-2xl" />
          </div>
          <div className="absolute -bottom-2 -right-3 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-red-500 text-[12px] text-white">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
