import { Moon, Sun } from "@styled-icons/boxicons-regular";
import styled from "styled-components";
import { useTheme } from "../../../hooks/useTheme";

const DarkIcon = styled(Moon)`
  color: white;
`;
const LightIcon = styled(Sun)`
  color: white;
`;

const SwitchDot = styled.div.attrs({
  className:
    "dot absolute left-1 top-1 bg-blue-400 dark:bg-blue-400 w-7 h-7 rounded-full transition text-center p-0.5",
})``;

const SwitchBackground = styled.div.attrs({
  className:
    "block w-20 h-9 rounded-full border-2 border-blue-400 dark:border-blue-300",
})``;

const SwitchContainer = styled.div.attrs({
  className: "flex items-end scale-75 md:scale-100",
})``;

const StyledLabel = styled.label.attrs({
  className: "flex items-center cursor-pointer",
  htmlFor: "themeSwitch",
})``;

const StyledInput = styled.input.attrs({
  type: "checkbox",
  id: "themeSwitch",
  className: "sr-only",
})``;

/**
 * A switch to toggle dark and light themes
 */
export const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <SwitchContainer>
      <StyledLabel>
        <div className="relative">
          <StyledInput checked={theme === "dark"} onChange={toggleTheme} />
          <SwitchBackground />
          <SwitchDot>
            {theme === "dark" ? <DarkIcon /> : <LightIcon />}
          </SwitchDot>
        </div>
      </StyledLabel>
    </SwitchContainer>
  );
};
