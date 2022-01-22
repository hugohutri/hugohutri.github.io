import { FC } from "react";
import styled from "styled-components";
import { CenteredGrid } from "../../components/CenteredGrid";
import { Header } from "../../components/Header";
import { AboutText } from "./components/AboutText";
import SocialMedia from "./components/SocialMedia";

const AboutSection = styled.section.attrs({
  className: "min-h-screen md:mb-0 mb-20 mt-28",
  id: "about",
})``;

export const About: FC = () => {
  return (
    <AboutSection>
      <CenteredGrid>
        <Header>About</Header>
        <AboutText />
        <SocialMedia />
      </CenteredGrid>
    </AboutSection>
  );
};
