import { Moon, Sun } from "@styled-icons/boxicons-regular";
import styled from "styled-components";
import useTheme from "../../../hooks/useTheme";

const DarkIcon = styled(Moon)`
  color: white;
`;
const LightIcon = styled(Sun)`
  color: white;
`;

export const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  const onToggle = () => {
    toggleTheme();
  };

  return (
    <div className="flex items-end mb-5">
      <label htmlFor="toggleB" className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            id="toggleB"
            className="sr-only"
            checked={theme === "dark"}
            onChange={() => onToggle()}
          />
          <div className="block w-20 h-9 rounded-full border-2 border-blue-400"></div>
          <div className="dot absolute left-1 top-1 bg-blue-400 w-7 h-7 rounded-full transition text-center border-2 border-blue-400">
            {theme === "dark" ? <DarkIcon /> : <LightIcon />}
          </div>
        </div>
        <div className="ml-3 text-gray-700 font-medium"></div>
      </label>
    </div>
  );
};
