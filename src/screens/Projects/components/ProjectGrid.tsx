import styled from "styled-components";
import { PROJECT_LIST } from "../project-list";
import { Card } from "./Card";

const CardGridContainer = styled.div.attrs({
  className: "grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-5 ",
})``;

export const ProjectGrid = () => {
  return (
    <CardGridContainer>
      {PROJECT_LIST.map((project) => (
        <Card {...project} />
      ))}
    </CardGridContainer>
  );
};
