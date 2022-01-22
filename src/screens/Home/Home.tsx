import { FC } from "react";
import styled from "styled-components";
import ProfilePicture from "./components/ProfilePicture";
import { HomeText } from "./components/HomeText";
import { ScrollDownButton } from "./components/ScrollDownButton";
import { CenteredGrid } from "../../components/CenteredGrid";

const Name = styled.h1.attrs({
  className:
    "font-light text-blue-500 dark:text-blue-300 lg:text-9xl text-[15vw] mt-20 transition-colors duration-1000 text-center",
})``;

const HomeSection = styled.section.attrs({
  id: "home",
  className: "min-h-screen md:mb-0 mb-20",
})``;

export const Home: FC = () => {
  return (
    <HomeSection>
      <CenteredGrid>
        <Name>Hugo Hutri</Name>
        <ProfilePicture />
        <HomeText />
        <ScrollDownButton />
      </CenteredGrid>
    </HomeSection>
  );
};
