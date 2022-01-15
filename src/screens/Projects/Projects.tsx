import { FC } from "react";
import { Header } from "./components/Header";
import { ProjectGrid } from "./components/ProjectGrid";

const Projects: FC = () => {
  return (
    <>
      <div className="flex justify-between">
        <Header />
      </div>
      <ProjectGrid />
    </>
  );
};

export default Projects;
