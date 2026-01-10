import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "./ThemeIcons"; // We'll define these

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
      setIsLight(true);
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      setIsLight(false);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isLight ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setIsLight(!isLight);
  };

  return (
    <div className="theme-toggle-wrapper">

      <button
        className={`theme-switch ${isLight ? "light" : ""}`}
        onClick={toggleTheme}
        aria-label="Toggle dark and light mode"
      >
        <span className="switch-thumb">
          <span className="icon">{isLight ? <SunIcon /> : <MoonIcon />}</span>
        </span>
      </button>
    </div>
  );
}
