import { Moon, Sun } from "@styled-icons/boxicons-regular";
import styled from "styled-components";
import useTheme from "../../../hooks/useTheme";

const DarkIcon = styled(Moon)`
  color: white;
`;
const LightIcon = styled(Sun)`
  color: white;
`;

const SwitchDot = styled.div.attrs({
  className:
    "dot absolute left-1 top-1 bg-blue-400 w-7 h-7 rounded-full transition text-center border-2 border-blue-400",
})``;

const SwitchBackground = styled.div.attrs({
  className: "block w-20 h-9 rounded-full border-2 border-blue-400",
})``;

const SwitchContainer = styled.div.attrs({
  className: "flex items-end mb-5",
})``;

const StyledLabel = styled.label.attrs({
  className: "flex items-center cursor-pointer",
})``;

export const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <SwitchContainer>
      <StyledLabel htmlFor="themeSwitch">
        <div className="relative">
          <input
            type="checkbox"
            id="themeSwitch"
            className="sr-only"
            checked={theme === "dark"}
            onChange={toggleTheme}
          />
          <SwitchBackground />
          <SwitchDot>
            {theme === "dark" ? <DarkIcon /> : <LightIcon />}
          </SwitchDot>
        </div>
      </StyledLabel>
    </SwitchContainer>
  );
};
