import React from "react";
import {
  Modal
} from "@nextui-org/react";
import PropTypes from "prop-types";
import Login from "./login";
import Register from "./signup";

function Window({ isDarkMode, isOpen, onOpenChange, isLogin }) {
  return (
    <>
      <Modal
        size="4xl"
        isOpen={isOpen}
        backdrop="blur"
        onOpenChange={onOpenChange}
        placement="top-center"
        className={`${isDarkMode ? "dark" : ""} text-foreground bg-background`}
        
      >{isLogin ? <Login /> : <Register />}
      </Modal>
    </>
  );
}

Window.propTypes = {
  isOpen: PropTypes.bool,
  onOpenChange: PropTypes.func,
  isDarkMode: PropTypes.bool,
  isLogin: PropTypes.bool,
};
    
export default Window;