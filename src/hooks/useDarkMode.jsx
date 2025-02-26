import { useEffect } from "react";
import { useStorage } from "./useStorage";
export default function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useStorage("darkMode", false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);
  return [isDarkMode, setIsDarkMode];
}