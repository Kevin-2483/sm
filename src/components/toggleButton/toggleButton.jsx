import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { Button } from "@nextui-org/react";
import { useEffect, useRef } from "react";
import { ArrowRightOutlined } from "@ant-design/icons";

export const ToggleButton = ({
  isDarkMode,
  isOpen,
  setIsOpen,
  setSelectedCard,
}) => {
  const buttonRef = useRef(null);

  // 监听 IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            setIsOpen(false);
          } else {
            const storedIsSidebarOpen = localStorage.getItem("isSidebarOpen");
            if (storedIsSidebarOpen !== null) {
              setIsOpen(JSON.parse(storedIsSidebarOpen));
            }
          }
        });
      },
      { threshold: 0 }
    );

    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }

    return () => {
      if (buttonRef.current) {
        observer.unobserve(buttonRef.current);
      }
    };
  }, [setIsOpen]);

  // 点击按钮时处理函数
  const handleButtonClick = () => {
    setIsOpen((prev) => {
      const newIsOpen = !prev;
      localStorage.setItem("isSidebarOpen", JSON.stringify(newIsOpen));
      return newIsOpen;
    });
  };

  return (
    <div className="absolute inset-0 flex justify-between  bg-transparent">
      <Button
        onClick={handleButtonClick}
        ref={buttonRef}
        radius="full"
        className={`${
          isDarkMode
            ? "bg-gradient-to-tr from-pink-500 to-blue-500"
            : "bg-gradient-to-tr from-yellow-500 to-pink-500"
        } m-4 text-white shadow-lg hidden lg:flex`}
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
      <Button
        onClick={() => {
          setSelectedCard(null);
        }}
        radius="full"
        className={`${
          isDarkMode
            ? "bg-gradient-to-tr from-pink-500 to-blue-500"
            : "bg-gradient-to-tr from-yellow-500 to-pink-500"
        } m-4 text-white shadow-lg ml-auto`}
      >
        <ArrowRightOutlined
          style={{
            fontSize: "24px",
            color: `${isDarkMode ? "white" : "black"}`,
          }}
        />
      </Button>
    </div>
  );
};

ToggleButton.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
  setSelectedCard: PropTypes.func.isRequired,
};
