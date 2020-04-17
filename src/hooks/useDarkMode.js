import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (key) => {
  const [dark, setDark] = useLocalStorage(key);
  useEffect(() => {
    const body = document.querySelector("body");
    if (dark) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [dark]);

  return [dark, setDark];
};
