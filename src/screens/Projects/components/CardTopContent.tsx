import { Project, Year } from "../../../assets/project-list";
import { Text } from "../../../components/Text";
import { ProjectIcon } from "./ProjectIcon";
import { Skills } from "./Skills";
import { Link } from "../../../components/Link";
import styled from "styled-components";

const CardTitle = styled.h1.attrs({
  className: "text-2xl font-semibold text-gray-700 capitalize dark:text-white ",
})``;

const YearText = styled.p.attrs({
  className:
    "text-gray-500 dark:text-gray-200 font-semibold mt-auto align-text-bottom",
})``;

const Row = styled.div.attrs({
  className: "flex flex-row space-x-3",
})``;

export const CardTopContent = (props: Project) => {
  const { icon, year, link, title, skills, description } = props;
  return (
    <>
      <Row>
        <ProjectIcon icon={icon} />
        <YearText>{yearToString(year)}</YearText>
      </Row>
      <CardTitle>{title}</CardTitle>
      <Skills skills={skills} />
      <Text>
        {description} {link && <Link href={link}>{link}</Link>}
      </Text>
    </>
  );
};

const yearToString = (year: Year) => {
  if (typeof year === "number") return `${year}`;
  return `${year.from}  -  ${year?.to ?? ""}`;
};
