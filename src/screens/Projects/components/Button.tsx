import styled from "styled-components";
import { StyledIcon } from "../../../assets/project-list";

const StyledButton = styled.button.attrs({
  className:
    "inline-flex p-2 transition-colors duration-200 bg-blue-400 hover:bg-blue-600 rounded-full dark:bg-blue-500 hover:dark:bg-blue-800 shadow-lg shadow-blue-600/50",
})``;

const Label = styled.p.attrs({
  className:
    "text-white  mt-0.5 ml-2 mr-1 font-semibold text-sm hidden sm:block",
})``;

interface ButtonProps {
  onClick: () => void;
  icon: StyledIcon;
  label?: string;
}

export const Button = ({ onClick, icon, label }: ButtonProps) => {
  const Icon = styled(icon)`
    color: white;
  `;
  return (
    <StyledButton onClick={onClick}>
      <Icon className="w-6 h-6 " />
      {label && <Label>{label}</Label>}
    </StyledButton>
  );
};
