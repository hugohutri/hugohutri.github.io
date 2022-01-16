import { FC } from "react";
import { Header } from "../../components/Header";
import { ProjectGrid } from "./components/ProjectGrid";

const Projects: FC = () => {
  return (
    <section id="projects">
      <Header>Projects</Header>
      <ProjectGrid />
    </section>
  );
};

export default Projects;
