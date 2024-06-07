import { useEffect, useState, type FC, type ReactElement } from "react";
import MoonIcon from "./icons/Moon";
import SunIcon from "./icons/Sun";

const ToggleTheme: FC = (): ReactElement => {
  const [toggle, setToggle] = useState<boolean>(false);
  const toggleTheme = () => {
    const element = document.querySelector("html");
    if (element) {
      element.classList.toggle("dark");
      setToggle(element.classList.contains("dark"));
      localStorage.setItem(
        "theme",
        element.classList.contains("dark") ? "dark" : "light"
      );
    }
  };

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const theme = localStorage.getItem("theme");
      if (theme === "dark") {
        setToggle(true);
      } else {
        setToggle(false);
      }
    }
  }, []);

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      title="Toggle Theme">
      {toggle ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export default ToggleTheme;
