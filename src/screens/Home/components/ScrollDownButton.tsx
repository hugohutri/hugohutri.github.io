import { scroller } from "react-scroll";

export const ScrollDownButton = () => {
  return (
    <svg
      className="w-24 h-24 text-neutral-500 dark:text-white scale-400 mt-5 cursor-pointer hidden lg:block animate-pulse"
      data-darkreader-inline-stroke=""
      fill="none"
      stroke="currentColor" // style="--darkreader-inline-stroke:currentColor;"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      onClick={scrollToProjects()}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19 9l-7 7-7-7"
      ></path>
    </svg>
  );
};

function scrollToProjects() {
  return () =>
    scroller.scrollTo("projects", {
      offset: -150,
      spy: true,
      smooth: true,
    });
}
