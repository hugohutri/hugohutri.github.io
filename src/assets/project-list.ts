import * as Icon from "@styled-icons/boxicons-regular";

export type StyledIcon = typeof Icon.File;

interface TimeSpan {
  from: number;
  to?: number;
}
export type Year = number | TimeSpan;

export interface Project {
  icon: StyledIcon;
  title: string;
  description: string;
  skills: string[];
  year: Year;
  link?: string;
  images?: string[];
}

export const PROJECT_LIST: Project[] = [
  {
    title: "My Portfolio",
    icon: Icon.News,
    description:
      "Portfolio website made using React, TypeScript and Styled Components. I focused on making the site responsive and keeping it simple. I also learned more about CI/CD and how to use Github Actions to automate testing and deploying.",
    link: "https://github.com/hugohutri/hugohutri.github.io",
    year: 2022,
    skills: [
      "React",
      "TypeScript",
      "Styled Components",
      "CSS",
      "HTML",
      "CI/CD",
    ],
    images: ["portfolio.jpg"],
  },
  {
    title: "Genetic Algorithm and Neural Networks",
    icon: Icon.Brain,
    description:
      "A multi-model neural network trained with genetic algorithm to classify 3D numbers written into the air. This project was made as a course project with two other students. The task was to implement the classifier using Matlab, without any high-level functions.",
    link: "https://github.com/hugohutri/digits-3d",
    year: 2021,
    skills: ["Matlab", "Git"],
    images: ["digits-3d.jpg"],
  },
  {
    title: "This website",
    icon: Icon.BookContent,
    description:
      "This website was made for displaying my projects, and it was made using React, TypeScript, Tailwind CSS, and Styled Components. I tried to create a modern website with minimalistic design and Tailwind CSS was a good choice for that.",
    link: "https://github.com/hugohutri/projects",
    year: 2022,
    skills: [
      "React",
      "TypeScript",
      "Styled Components",
      "Tailwind",
      "CSS",
      "HTML",
    ],
    images: ["projects.jpg"],
  },
  {
    title: "Visma Projects",
    icon: Icon.Briefcase,
    description:
      "I have been working at Visma for almost two years as a software consultant. Projects have been ranging from React and React Native to Python, but my main focus has been on React + TypeScript",
    skills: [
      "Git",
      "React",
      "React Native",
      "Bluetooth",
      "Linux",
      "TypeScript",
      "Node.js",
      "Express.js",
      "JavaScript",
    ],
    year: { from: 2020 },
  },
  {
    title: "Picatso - Party Game",
    icon: Icon.Desktop,
    description:
      "A party game with React, JavaScript and Materialize styles. This was one of my earliest React projects and it taught me a lot about AJAX, responsive web design, and React. This project was part of React Code Camp organized by Visma Consulting",
    link: "https://github.com/hugohutri/picatso",
    year: 2020,
    skills: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "AJAX",
      "Materialize",
      "Express.js",
      "Node.js",
    ],
    images: ["picatso1.jpg"],
  },
  {
    title: "Ray Tracer",
    icon: Icon.Sun,
    description:
      "Simple ray tracer made with C++ without any high-level libraries or rendering engines. The program controlled individual pixels and performed calculated paths for light rays and produces the final image by following the Phong reflection model. The final result was optimized for multithreading.",
    link: "https://github.com/hugohutri/ray-tracer",
    year: 2019,
    skills: ["C++"],
    images: ["raytracer.jpg"],
  },
  {
    title: "Minecraft plugins",
    icon: Icon.CodeCurly,
    description:
      "Dozens of Minecraft plugins and features made with TypeScript. I learned A LOT of typescript with these features, which were made for fun. I wrote more than 10000 lines of TypeScript and I also led a group of 5-8 people when developing these features.",
    skills: ["TypeScript", "Pixel Art", "Linux", "JSON"],
    year: { from: 2019, to: 2021 },
    images: ["minecraft.jpg"],
  },
  {
    title: "Discord and Telegram Chat Bots",
    icon: Icon.Bot,
    description:
      "Multiple (5+) chatbots for Discord and Telegram. These bots ranged from Github automation to meme generation with face recognition. These were mostly for making life easier and adding fun ways to try different topics.",
    skills: ["Python", "TypeScript"],
    year: { from: 2020 },
    images: ["bot.jpg"],
  },
  {
    title: "Bluetooth Visualization",
    icon: Icon.Bluetooth,
    description:
      "My Bachelor's degree was about visualizing the number of people nearby. I used a Bluetooth sensor, Python, Linux, and Typescript to create immersive visualization about nearby Bluetooth devices.",
    skills: ["Python", "Bluetooth", "Linux", "Typescript"],
    year: 2021,
    images: ["bt-sensor.jpg"],
  },
  {
    title: "PlanetFix - Game for FGJ",
    icon: Icon.Game,
    description:
      'PlanetFix was a Unity game made in 48 hours during FGJ (Finnish Game Jam). Our game was about "fixing the planet" and saving it from Covid by placing huge domes on top of cities.',
    link: "https://github.com/hugohutri/Planetfix",
    year: 2020,
    skills: ["C#", "Unity"],
    images: ["planetfix.jpg"],
  },
  {
    title: "Terminal Chess",
    icon: Icon.Terminal,
    description:
      "Graphical Chess application that can be run from the commandline. It was made using Python and it can run on Linux terminals with rgb color support.",
    link: "https://github.com/hugohutri/terminal-chess",
    year: 2020,
    skills: ["Python", "Linux"],
    images: ["terminal-chess.jpg"],
  },
];
