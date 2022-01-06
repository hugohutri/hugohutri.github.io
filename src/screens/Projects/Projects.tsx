import { FC } from "react";
import styled from "styled-components";

interface ProjectsProps {}

const ProjectsContainer = styled.div`
  height: 100vh;
`;

const Projects: FC<ProjectsProps> = () => {
  return <ProjectsContainer>Projectspage!!!</ProjectsContainer>;
};

export default Projects;
