import { FC } from "react";
import { Header } from "./components/Header";
import { ProjectGrid } from "./components/ProjectGrid";
import { ThemeButton } from "./components/ThemeButton";

const Projects: FC = () => {
  return (
    <>
      <div className="flex justify-between">
        <Header />
        <ThemeButton />
      </div>
      <ProjectGrid />
    </>
  );
};

export default Projects;
