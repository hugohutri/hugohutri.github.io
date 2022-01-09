import { ChangeEvent, useState } from "react";

type Theme = "dark" | "light";

export const ThemeButton = () => {
  const originalTheme = localStorage.theme ?? "dark";

  const [theme, setTheme] = useState(originalTheme ?? "dark");

  // const toggleDarkMode = function () {
  //   const mode = darkMode
  //     ? (localStorage.theme = "dark")
  //     : (localStorage.theme = "light");
  //   setDarkMode(mode);
  // };

  // useEffect(() => {
  //   setDarkMode(localStorage.theme || "dark");
  // }, []);

  const onToggle = (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    const theme: Theme = checked ? "dark" : "light";
    setTheme(theme);
    localStorage.theme = theme;
    window.location.reload();
  };

  return (
    <div className="flex items-end mb-5">
      <label htmlFor="toggleB" className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            id="toggleB"
            className="sr-only"
            checked={originalTheme === "dark"}
            onChange={(e) => onToggle(e)}
          />
          <div className="block w-20 h-9 rounded-full border-2 border-blue-400"></div>
          <div className="dot absolute left-1 top-1 bg-white dark:bg-black w-7 h-7 rounded-full transition text-center border-2 border-blue-400">
            <p className="align-middle">{theme === "dark" ? "🌙" : "🌞"}</p>
          </div>
        </div>
        <div className="ml-3 text-gray-700 font-medium"></div>
      </label>
    </div>
  );
};
