import {
  Button,
  ScrollShadow,
  Card,
  CardHeader,
  CardBody,
} from "@nextui-org/react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ToggleButton } from "./toggleButton/toggleButton";
import { ArrowRightOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import FetchComponent from "./cardsPage";
import useImage from "./useImage";

export default function Loading({ isDarkMode }) {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  //const [isLoaded, setLoaded] = useState(false);

  const items = [1, 2, 3, 4, 5];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleCardClick = (item) => {
    setSelectedCard(item === selectedCard ? null : item);
    console.log("Selected card", item);
  };
  const imageFileUrl = "../../public/图片URL.jpg"; // 替换为实际图片文件路径
  const {
    imageData: imageUrl,
    loading: imageLoading,
    error: imageError,
    dimensions,
  } = useImage(imageFileUrl);

  return (
    <>
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            layout
            initial={{ width: "100%" }}
            animate={{ width: selectedCard ? "25%" : "100%" }}
            transition={{ duration: 0.2 }}
            style={{ height: `calc(100vh - 64px)`, overflow: "hidden" }} // 设置高度和溢出隐藏
            className="flex justify-center  backdrop-blur-[100px]"
          >
            <motion.div
              layout
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="flex flex-col items-center w-full h-full max-w-screen-xl"
              style={{ height: `calc(100vh - 64px)`, overflow: "auto" }} // 设置子div可滚动
            >
              <ScrollShadow size={100} hideScrollBar style={{ width: "95%" }}>
                {items.map((item) => (
                  <motion.div
                    layout
                    key={item}
                    variants={itemVariants}
                    className="flex justify-center w-full"
                  >
                    <Card
                      className={`w-full p-4 m-3 cursor-pointer 
                      ${selectedCard === item ? "border-4" : ""}
                      ${isDarkMode ? "border-blue-500" : "border-pink-500"}
                      `}
                      radius="lg"
                      onPress={() => handleCardClick(item)}
                      isHoverable={true}
                      isBlurred={0}
                      isPressable={true}
                    >
                      <h2>Card {item}</h2>
                    </Card>
                  </motion.div>
                ))}
              </ScrollShadow>
            </motion.div>
          </motion.div>
        )}

        {selectedCard && (
          <motion.div
            layout
            key="selected"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "75%", height: `calc(100vh - 88px)`, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex justify-center"
          >
            <Card className="w-full h-full m-3 relative" radius="lg">
              <CardHeader className="absolute z-40">
                <div className="absolute inset-0 flex justify-between  bg-transparent">
                  <ToggleButton
                    setIsOpen={setIsSidebarOpen}
                    isOpen={isSidebarOpen}
                    isDarkMode={isDarkMode}
                  />
                  <Button
                    onClick={() => {
                      setSelectedCard(null);
                      setIsSidebarOpen(true);
                    }}
                    radius="full"
                    className={`${
                      isDarkMode
                        ? "bg-gradient-to-tr from-pink-500 to-blue-500"
                        : "bg-gradient-to-tr from-yellow-500 to-pink-500"
                    } m-4 text-white shadow-lg`}
                  >
                    <ArrowRightOutlined />
                  </Button>
                </div>
              </CardHeader>
              {imageUrl && (
                <img
                  src={imageFileUrl}
                  alt="random"
                  width="100%"
                  height="auto"
                  className="absolute inset-0 z-10"
                />
              )}
              <CardBody className="p-0 overflow-auto z-30">
                <FetchComponent isDarkMode={isDarkMode} />
              </CardBody>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

Loading.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};
