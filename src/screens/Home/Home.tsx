import { FC } from "react";
import styled from "styled-components";
import { Text } from "../../components/Text";

const Name = styled.h1.attrs({
  className:
    "font-light text-blue-500 dark:text-blue-300 lg:text-9xl text-[15vw] my-20 transition-colors duration-1000 text-center",
})``;

export const Home: FC = () => {
  return (
    <div className="h-[100vh]">
      <Name>Hugo Hutri</Name>
      <div className="lg:w-5/12 md:w-8/12 w-10/12 text-justify mx-auto text-2xl">
        <Text>
          Hi! I am Hugo, and I am a software developer from Finland. Most of the
          time I do frontend magic with React and Typescript, but I like
          data-analysis and machine learning too.
          <br />
          <br />I am always open for new challenges, projects and problems and
          feel free to reach out via LinkedIn etc. You can see my projects down
          below, and you can follow me on Github if you find those projects
          interesting!
        </Text>
      </div>
    </div>
  );
};
