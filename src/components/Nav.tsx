import { FC } from "react";
import { ThemeButton } from "./ThemeButton";

export const Nav = () => {
  return (
    <div className="fixed top-0 z-50 ">
      <ul
        className="fixed w-full dark:bg-neutral-900 bg-white text-white flex justify-center p-5 z-100 border-b-2 
      border-blue-400 dark:border-blue-300 transition-colors duration-1000 shadow-md shadow-blue-400/20"
      >
        <div className="container flex px-4 ">
          <NavItem>Home</NavItem>
          <NavItem>Projects</NavItem>
          <NavItem>About</NavItem>

          <li className="mr-0 ml-auto">
            <ThemeButton />
          </li>
        </div>
      </ul>
    </div>
  );
};
const NavItem: FC<{}> = (props) => {
  return (
    <li className="mr-6 flex flex-col justify-center">
      <a
        className="hover:text-blue-400 top-1/2 hover:underline text-blue-500 dark:text-blue-300 text-xl font-semibold transition-colors duration-1000"
        href="#a"
      >
        {props.children}
      </a>
    </li>
  );
};
