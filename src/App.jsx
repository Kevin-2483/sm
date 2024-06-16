import { useState, useEffect } from "react";
import Navbar1 from "./components/Navbar";
import i18n from "./i18n";
// import Loading from "./components/Skeleton";
import { motion, AnimatePresence } from "framer-motion";
import {
  CloseCircleOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
  ShoppingFilled,
  ShoppingOutlined,
  TagFilled,
  TagsOutlined,
} from "@ant-design/icons";
import { Input, Skeleton, Button } from "@nextui-org/react";
// import {
//   Table,
//   TableHeader,
//   TableColumn,
//   TableBody,
//   TableRow,
//   TableCell,
//   Tooltip,
// } from "@nextui-org/react";
import { message } from "antd";
import Warehouse from "./components/warehouse";
export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const dark = localStorage.getItem("dark");
    return dark ? JSON.parse(dark) : false;
  });
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const [isLeftHovered, setIsLeftHovered] = useState(false);
  const [isRightHovered, setIsRightHovered] = useState(false);
  const [open, setOpen] = useState(false);
  

  
  const info1 = () => {
    message.info("add cart successfully!");
  };
  

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <>
      <main
        className={`${
          isDarkMode ? "dark bg-dark-theme" : "bg-light-theme"
        } text-foreground bg-fixed bg-cover bg-center bg-background min-h-screen`}
        style={{ height: `calc(100vh - 64px)`, overflow: "auto" }}
      >
        <Navbar1
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          currentLanguage={currentLanguage}
          setCurrentLanguage={setCurrentLanguage}
        />
        <div className="flex justify-center min-h-screen  backdrop-blur-[100px]"></div>

        <motion.button
          initial={{ height: 50, width: 50, x: 0 }}
          whileHover={{ height: 50, width: 150, x: -10 }}
          transition={{ duration: 0.3 }}
          className={`${
            isDarkMode ? "bg-black bg-opacity-80" : "bg-white bg-opacity-80"
          } text-foreground shadow-lg rounded-full fixed bottom-8 right-8 flex items-center z-40`}
          onMouseEnter={() => setIsRightHovered(true)}
          onMouseLeave={() => setIsRightHovered(false)}
          onClick={() => {
            setOpen(true);
          }}
        >
          {open == false ? (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center"
                style={{ position: "absolute", right: "10px" }}
              >
                <ShoppingOutlined
                  style={{
                    fontSize: "32px",
                    color: `${isDarkMode ? "white" : "black"}`,
                  }}
                />
              </motion.div>
              {isRightHovered && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="ml-4"
                >
                  查看购物车
                </motion.div>
              )}
            </>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center"
                style={{ position: "absolute", right: "10px" }}
              >
                <ShoppingFilled
                  style={{
                    fontSize: "32px",
                    color: `${isDarkMode ? "white" : "black"}`,
                  }}
                />
              </motion.div>
              {isRightHovered && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="ml-4"
                >
                  {/* {isCart == false ? "添加购物车" : "关闭购物车"} */}
                </motion.div>
              )}
            </>
          )}
        </motion.button>
        <motion.button
          initial={{ height: 50, width: 50, x: 0 }}
          whileHover={{ height: 50, width: 150, x: 10 }}
          transition={{ duration: 0.3 }}
          className={`${
            isDarkMode ? "bg-black bg-opacity-80" : "bg-white bg-opacity-80"
          } text-foreground shadow-lg rounded-full fixed bottom-24 right-8 flex items-center z-40`}
          onMouseEnter={() => setIsLeftHovered(true)}
          onMouseLeave={() => setIsLeftHovered(false)}
        >
          {open == false ? (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center"
                style={{ position: "absolute", right: "10px" }}
              >
                <TagsOutlined
                  style={{
                    fontSize: "32px",
                    color: `${isDarkMode ? "white" : "black"}`,
                  }}
                />
              </motion.div>
              {isLeftHovered && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="ml-4"
                  style={{ position: "absolute", left: "10px" }}
                >
                  立即结算
                </motion.div>
              )}
            </>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center"
                style={{ position: "absolute", right: "10px" }}
              >
                <TagFilled
                  style={{
                    fontSize: "32px",
                    color: `${isDarkMode ? "white" : "black"}`,
                  }}
                />
              </motion.div>
              {isLeftHovered && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="ml-4"
                  style={{ position: "absolute", left: "10px" }}
                >
                  {/* {isCart == false ? "立即购买" : "立即结算"} */}
                </motion.div>
              )}
            </>
          )}
        </motion.button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: "64px" }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.5 }}
              className={`${
                isDarkMode ? "bg-black" : "bg-white"
              } text-foreground shadow-lg rounded-3xl fixed bottom-0 h-full w-full left-0 flex z-20 flex flex-col justify-start items-start p-4 space-y-[50px]`}
            >
              <div className="h-100px">
                <Button
                  onClick={() => setOpen(false)}
                  isIconOnly
                  radius="full"
                  color="danger"
                  className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center focus:outline-none"
                >
                  X
                </Button>
              </div>
              <div className="h-[500px] w-full">
                <Warehouse />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}
