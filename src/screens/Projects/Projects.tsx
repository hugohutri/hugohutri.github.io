import { FC } from "react";
import styled from "styled-components";
import { Card } from "./components/Card";
import { ProjectGrid } from "./components/ProjectGrid";

interface ProjectsProps {}

const ProjectsContainer = styled.div`
  height: 100vh;
`;

const Projects: FC<ProjectsProps> = () => {
  return (
    <ProjectsContainer className="p-10">
      <h1 className="font-light text-blue-500 lg:text-7xl md:text-6xl text-5xl mb-5">
        My Projects
      </h1>
      <ProjectGrid />
    </ProjectsContainer>
  );
};

export default Projects;
