import { FC } from "react";
import { Header } from "../../components/Header";
import { ProjectGrid } from "./components/ProjectGrid";

const Projects: FC = () => {
  return (
    <section id="projects">
      <div className="grid justify-items-center">
        <Header>Projects</Header>
        <ProjectGrid />
      </div>
    </section>
  );
};

export default Projects;
