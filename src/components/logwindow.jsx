import React from "react";
import {
  Modal,
  
} from "@nextui-org/react";

import PropTypes from "prop-types";
import Login from "./login";
import Register from "./signup";

function Window({
  isDarkMode,
  isOpen,
  onOpenChange,
  isLogin,
  setLoged,
}) {
  return (
    <>
      <Modal
        size="4xl"
        isOpen={isOpen}
        backdrop="blur"
        onOpenChange={onOpenChange}
        placement="top-center"
        className={`${isDarkMode ? "dark" : ""} text-foreground bg-background`}
      >
        {`${isLogin}` == "login" ? (
          <Login setLoged={setLoged} />
        ) : (
          <Register />
        )}
      </Modal>
    </>
  );
}

Window.propTypes = {
  isOpen: PropTypes.bool,
  onOpenChange: PropTypes.func,
  isDarkMode: PropTypes.bool,
  isLogin: PropTypes.string,
  setLoged: PropTypes.func,
};
    
export default Window;