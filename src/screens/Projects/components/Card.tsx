/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from "styled-components";
import { Project } from "../../../assets/project-list";
import { LinkButton } from "./LinkButton";
import { ProjectIcon } from "./ProjectIcon";

const CardTitle = styled.h1.attrs({
  className: "text-2xl font-semibold text-gray-700 capitalize dark:text-white ",
})``;

const CardText = styled.p.attrs({
  className: "text-gray-500 dark:text-gray-200 font-semibold",
})``;

const YearText = styled.p.attrs({
  className: "text-gray-500 dark:text-gray-200 font-semibold mt-auto",
})`
  vertical-align: text-bottom;
`;

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

const Row = styled.div.attrs({
  className: "flex flex-row space-x-3",
})``;

export const Card = (props: Project) => {
  const { title, description, link, icon, year } = props;

  const yearString =
    typeof year === "number"
      ? `${year}`
      : `${year?.from}  -  ${year?.to ?? ""}`;

  return (
    <StyledCard>
      <CardTop>
        <Row>
          <ProjectIcon icon={icon} />
          <YearText>{yearString}</YearText>
        </Row>
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
      </CardTop>
      <CardBottom>{link && <LinkButton href={link} />}</CardBottom>
    </StyledCard>
  );
};
