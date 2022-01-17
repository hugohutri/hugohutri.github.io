import { FC } from "react";
import { Link } from "react-scroll";
import { ThemeButton } from "./components/ThemeButton";

export const Nav = () => {
  return (
    <div className="fixed top-0 z-50 ">
      <ul
        className="fixed w-full dark:bg-neutral-900 bg-white text-white flex justify-center p-5 z-100 border-b-2 
      border-blue-400 dark:border-blue-300 transition-colors duration-1000 shadow-md shadow-blue-400/20"
      >
        <div className="container flex px-4 ">
          <NavItem to="home" label="Home" />
          <NavItem to="projects" label="Projects" />
          <NavItem to="about" label="About" />

          <li className="mr-0 ml-auto">
            <ThemeButton />
          </li>
        </div>
      </ul>
    </div>
  );
};

const NavItem: FC<{ to: string; label: string }> = (props) => {
  return (
    <li className="sm:mr-6 mr-3 flex flex-col justify-center">
      <Link
        className="hover:text-blue-400 top-1/2 hover:underline text-blue-500 dark:text-blue-300 sm:text-xl text-md font-semibold transition-colors duration-1000 cursor-pointer"
        to={props.to}
        spy={true}
        smooth={true}
        offset={-150}
      >
        {props.label}
      </Link>
    </li>
  );
};
