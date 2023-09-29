import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState("light");

  const setDarkMode = () => {
    console.log("Setting dark mode...");
    setThemeMode("dark");
  };

  const setLightMode = () => {
    console.log("Setting light mode...");
    setThemeMode("light");
  };

  useEffect(() => {
    console.log("Use-effect running...")
    const html = document.querySelector("html");
    html.classList.remove("light", "dark");
    html.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={{ themeMode, setDarkMode, setLightMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
