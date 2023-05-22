import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const SideBarContext = createContext();

const SideBarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <SideBarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
      {children}
    </SideBarContext.Provider>
  );
};
SideBarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default SideBarProvider;
