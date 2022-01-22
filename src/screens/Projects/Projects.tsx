import { FC } from "react";
import { CenteredGrid } from "../../components/CenteredGrid";
import { Header } from "../../components/Header";
import { ProjectGrid } from "./components/ProjectGrid";

const Projects: FC = () => {
  return (
    <section id="projects">
      <CenteredGrid>
        <Header>Projects</Header>
        <ProjectGrid />
      </CenteredGrid>
    </section>
  );
};

export default Projects;
