export interface Project {
  title: string;
  description: string;
  skills: string[];
  year?: number;
  link?: string;
}

export const PROJECT_LIST: Project[] = [
  {
    title: "My Portfolio",
    description:
      "Portfolio website made using React, TypeScript and Styled Components. I used focused on making the site responsive and keeping it simple. I also learned more about CI/CD and how to use Github Actions to automate testing and deploying.",
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
  },
  {
    title: "Genetic Algorithm and Neural Networks",
    description:
      "Multi-model neural network trained with genetic algorithm to classify 3D numbers written into air. This project was made as a course project with two other students. The task was to implement the classifier using Matlab, without any high-level functions.",
    link: "https://github.com/hugohutri/digits-3d",
    year: 2021,
    skills: ["Matlab"],
  },
  {
    title: "Picatso - Party Game",
    description:
      "A party game with React, JavaScript and Materialize styles. This was one of my earliest React projects and it taught a lot of about AJAX, responsive web design and React. This project was part of React Code Camp organized by Visma Consulting",
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
  },
  {
    title: "PlanetFix - Game for FGJ",
    description:
      'PlanetFix was a Unity game made in 48 hours during FGJ (Finnish Game Jam). Our game was about "fixing the planet" and saving it from Covid by placing huge domes on top of cities. This project was made with my friend.',
    link: "https://github.com/hugohutri/Planetfix",
    year: 2020,
    skills: ["C#", "Unity"],
  },
  {
    title: "PlanetFix - Game for FGJ",
    description:
      'PlanetFix was a Unity game made in 48 hours during FGJ (Finnish Game Jam). Our game was about "fixing the planet" and saving it from Covid by placing huge domes on top of cities.',
    link: "https://github.com/hugohutri/Planetfix",
    year: 2020,
    skills: ["C#", "Unity"],
  },
  {
    title: "Ray Tracer",
    description:
      "Simple ray tracer made with C++ without any high-level libraries or rendering engines. The program controlled individual pixels and performed calculated paths for light rays and produces the final image by following the Phong reflection model. The final result was optimized for multithreading.",
    link: "https://github.com/hugohutri/Planetfix",
    year: 2019,
    skills: ["C++"],
  },
  {
    title: "Ray Tracer",
    description:
      "Simple ray tracer made with C++ without any high-level libraries or rendering engines. The program controlled individual pixels and performed calculated paths for light rays and produces the final image by following the Phong reflection model.",
    link: "https://github.com/hugohutri/Planetfix",
    year: 2019,
    skills: ["C++"],
  },
  {
    title: "Minecraft plugins",
    description:
      "Many, many, many Minecraft plugins and features made with TypeScript. I learned A LOT of typescript with these features, which were made for fun. I wrote more than 10000 lines of TypeScript and dozens of features. I also led a group of 5-8 people when developing these features.",
    skills: ["TypeScript", "Pixel Art", "Linux", "JSON"],
    year: 2021,
  },
  {
    title: "Discord and Telegram Chat Bots",
    description:
      "Multiple (5+) chatbots for Discord and Telegram. These bots ranged from Github automation to meme generation with face recognition. These were mostly for making life easier and add fun ways try different topics.",
    link: "https://github.com/hugohutri/Planetfix",
    skills: ["Python", ",TypeScript"],
  },
  {
    title: "Bluetooth Visualization",
    description:
      "My Bachelor's degree was about visualizating the amount of people nearby. I user Bluetooth sensor, Python, Linux and Typescript to create immersive visualization about nearby Bluetooth devices.",
    skills: ["Python", "Bluetooth", "Linux", "Typescript"],
    year: 2021,
  },
];
