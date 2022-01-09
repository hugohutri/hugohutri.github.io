import styled from "styled-components";
import { StyledIcon } from "../../../assets/project-list";

const StyledButton = styled.button.attrs({
  className:
    "inline-flex p-2 transition-colors duration-200 bg-blue-400 rounded-full dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-300",
})``;

interface ButtonProps {
  onClick: () => void;
  icon: StyledIcon;
}

export const Button = ({ onClick, icon }: ButtonProps) => {
  const Icon = styled(icon)`
    color: white;
  `;
  return (
    <StyledButton onClick={onClick}>
      <Icon className="w-6 h-6" />
    </StyledButton>
  );
};
