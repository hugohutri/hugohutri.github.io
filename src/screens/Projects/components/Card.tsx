/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from "styled-components";
import { Project } from "../project-list";
import { LinkButton } from "./LinkButton";
import { ProjectIcon } from "./ProjectIcon";

const CardTitle = styled.h1.attrs({
  className: "text-2xl font-semibold text-gray-700 capitalize dark:text-white ",
})``;

const CardText = styled.p.attrs({
  className: "text-gray-500 dark:text-gray-200 font-semibold",
})``;

const StyledCard = styled.div.attrs({
  className:
    "p-8 border-2 border-blue-400 dark:border-blue-300 rounded-xl flex flex-col ",
})``;

const CardTop = styled.div.attrs({
  className: "flex flex-col space-y-3",
})``;

const CardBottom = styled.div.attrs({
  className: "mt-auto  pt-3",
})``;

export const Card = (props: Project) => {
  const { title, description, link } = props;
  return (
    <StyledCard>
      <CardTop>
        <ProjectIcon />
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
      </CardTop>
      <CardBottom>
        <div>{link && <LinkButton href={link} />}</div>
      </CardBottom>
    </StyledCard>
  );
};
