import { CodeAlt } from "@styled-icons/boxicons-regular";
import styled from "styled-components";

const Icon = styled(CodeAlt)`
  color: white;
`;

const StyledLinkButton = styled.a.attrs({
  className:
    "inline-flex p-2 transition-colors duration-200 bg-blue-400 rounded-full dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-300",
})``;

export const LinkButton = ({ href }: { href: string }) => (
  <StyledLinkButton href={href} target="_blank">
    <Icon className="w-6 h-6" />
  </StyledLinkButton>
);
