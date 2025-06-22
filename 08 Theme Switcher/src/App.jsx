import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./context/theme";
import ThemeBtn from "./components/ThemeButton";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div
        className={`
          min-h-screen flex items-center justify-center 
          transition-all duration-500 
          ${
            themeMode === "light"
              ? "bg-gradient-to-r from-blue-100 via-white to-pink-100"
              : "bg-gradient-to-br from-gray-900 via-gray-800 to-black"
          }
        `}
      >
        <div className="w-full max-w-sm mx-auto">
          <div className="flex justify-end mb-4">
            <ThemeBtn />
          </div>
          <Card />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
