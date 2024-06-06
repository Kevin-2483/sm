import { useState, useEffect } from "react";
import Navbar1 from "./components/Navbar";
import i18n from "./i18n";
import Loading from "./components/Skeleton";
export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const dark = localStorage.getItem("dark");
    return dark ? JSON.parse(dark) : false;
  });
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <>
      <main
        className={`${
          isDarkMode ? "dark bg-dark-theme" : "bg-light-theme"
        } text-foreground bg-fixed bg-cover bg-center bg-background min-h-screen`}
        style={{ height: `calc(100vh - 64px)`, overflow: "hidden" }}
      >
        <Navbar1
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          currentLanguage={currentLanguage}
          setCurrentLanguage={setCurrentLanguage}
        />
        <div className="flex justify-center min-h-screen  backdrop-blur-[100px]">
          <Loading isDarkMode={isDarkMode} />
        </div>
      </main>
    </>
  );
}

