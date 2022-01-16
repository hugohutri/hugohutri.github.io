import { FC } from "react";
import styled from "styled-components";
import ProfilePicture from "./components/ProfilePicture";
import { HomeText } from "./components/HomeText";

const Name = styled.h1.attrs({
  className:
    "font-light text-blue-500 dark:text-blue-300 lg:text-9xl text-[15vw] mt-20 transition-colors duration-1000 text-center",
})``;

export const Home: FC = () => {
  return (
    <section id="home" className="min-h-screen md:mb-0 mb-20">
      <Name>Hugo Hutri</Name>
      <ProfilePicture />
      <HomeText />
    </section>
  );
};
