import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { Button } from "@nextui-org/react";

export const ToggleButton = ({ isDarkMode, isOpen, setIsOpen }) => {
  return (
    <Button
      onClick={() => setIsOpen((prev) => !prev)}
      radius="full"
      className={`${
        isDarkMode
          ? "bg-gradient-to-tr from-pink-500 to-blue-500"
          : "bg-gradient-to-tr from-yellow-500 to-pink-500"
      } m-4 text-white shadow-lg`}
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          strokeWidth="3"
          stroke={isDarkMode ? "white" : "black"}
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
          animate={isOpen ? "open" : "closed"}
        />
        <motion.path
          strokeWidth="3"
          stroke={isDarkMode ? "white" : "black"}
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          animate={isOpen ? "open" : "closed"}
        />
        <motion.path
          strokeWidth="3"
          stroke={isDarkMode ? "white" : "black"}
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
          animate={isOpen ? "open" : "closed"}
        />
      </svg>
    </Button>
  );
};

ToggleButton.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};
