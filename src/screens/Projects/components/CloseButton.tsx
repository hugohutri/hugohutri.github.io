import { X } from "@styled-icons/boxicons-regular";
import styled from "styled-components";

const StyledCloseButton = styled.button.attrs({
  className:
    "absolute top-5 right-5 inline-flex p-2 text-blue-500 capitalize transition-colors duration-200 bg-blue-400 rounded-full dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-300",
})``;

const Icon = styled(X)`
  color: white;
`;

export const CloseButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <StyledCloseButton onClick={onClick}>
      <Icon className="w-6 h-6" />
    </StyledCloseButton>
  );
};
