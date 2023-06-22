import { useContext } from "react";
import { CardContext } from "../contexts/CardContext";

const Alert = () => {
  const { isAlert } = useContext(CardContext);

  return (
    <div
      className={` ${
        isAlert
          ? "fixed bottom-0 right-[5%] opacity-100 transition-all duration-300"
          : "-right-[50%] opacity-0"
      }`}
    >
      <div
        id="toast-success"
        className="mb-4 flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-green-500 shadow-lg shadow-gray-500"
        role="alert"
      >
        <div className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500">
          <svg
            aria-hidden="true"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Check icon</span>
        </div>
        <div className="ml-3 text-sm font-normal">Item added successfully.</div>
      </div>
    </div>
  );
};

export default Alert;
