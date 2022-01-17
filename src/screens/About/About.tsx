import { FC } from "react";
import styled from "styled-components";
import { Header } from "../../components/Header";
import { AboutText } from "./components/AboutText";
import SocialMedia from "./components/SocialMedia";

const Section = styled.section.attrs({
  className: "min-h-screen md:mb-0 mb-20 mt-28",
  id: "about",
})``;

export const About: FC = () => {
  return (
    <Section>
      <div className="grid justify-items-center">
        <Header>About</Header>
        <AboutText />
        <SocialMedia />
      </div>
    </Section>
  );
};
