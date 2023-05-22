import { useContext } from "react";
import { SideBarContext } from "../contexts/SideBarContext";
import { MdOutlineArrowForward } from "react-icons/md";
import { CardContext } from "../contexts/CardContext";
import { IoMdTrash } from "react-icons/io";
import CardItem from "./CardItem";

const SideBar = () => {
  const { isOpen, handleClose } = useContext(SideBarContext);
  const { cart, total, removeAllItem } = useContext(CardContext);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } fixed top-0 z-20 flex h-full w-full flex-col justify-between bg-white px-4 shadow-2xl transition-all duration-300 md:w-[50vw] lg:w-[40vw] lg:px-9 xl:w-[30vw]`}
    >
      <div className="flex items-center justify-between border-b py-6">
        <div className="text-sm font-semibold uppercase">Shopping Bag (0)</div>
        <div
          className="flex h-8 w-8 cursor-pointer items-center justify-center"
          onClick={handleClose}
        >
          <MdOutlineArrowForward className="text-xl" />
        </div>
      </div>

      <div className=" flex flex-1 flex-col gap-y-2 overflow-y-auto overscroll-contain border-b scrollbar-hide ">
        {cart.map((item) => (
          <CardItem key={item.id} item={item} />
        ))}
      </div>

      <div className="mt-3 py-8">
        <div className="flex h-10 w-full items-center justify-between ">
          <div className="text-sm font-semibold uppercase">
            Total: $ {total}
          </div>
          <div
            className="cursor-pointer text-2xl hover:text-red-600"
            onClick={removeAllItem}
          >
            <IoMdTrash />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
