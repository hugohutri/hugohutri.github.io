import { FC } from "react";
import { Header } from "../../components/Header";
import { ProjectGrid } from "./components/ProjectGrid";

const Projects: FC = () => {
  return (
    <>
      <Header>Projects</Header>
      <ProjectGrid />
    </>
  );
};

export default Projects;
