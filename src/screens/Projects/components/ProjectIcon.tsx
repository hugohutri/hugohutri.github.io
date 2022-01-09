import styled from "styled-components";
import { StyledIcon } from "../project-list";

export const ProjectIcon = ({ icon }: { icon: StyledIcon }) => {
  const StyledIcon = styled(icon).attrs({
    className: "inline-block text-blue-500 dark:text-blue-400 w-8 h-8",
  })``;
  return <StyledIcon />;
};
