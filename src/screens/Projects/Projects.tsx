import { FC } from "react";
import styled from "styled-components";
import { Header } from "./components/Header";
import { ProjectGrid } from "./components/ProjectGrid";
import { ThemeButton } from "./components/ThemeButton";

interface ProjectsProps {}

const ProjectsContainer = styled.div``;

const Projects: FC<ProjectsProps> = () => {
  return (
    <ProjectsContainer>
      <div className="flex justify-between">
        <Header />
        <ThemeButton />
      </div>
      <ProjectGrid />
    </ProjectsContainer>
  );
};

export default Projects;
