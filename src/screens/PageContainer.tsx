import styled from "styled-components";
import { Nav } from "./Nav/Nav";
import { Home } from "./Home/Home";
import Projects from "./Projects/Projects";
import { About } from "./About/About";
import { Background } from "../components/Background";

const Container = styled.div.attrs({
  className: "container mx-auto md:pt-48 pt-20 pb-10 px-4 h-full",
})``;

const PageContainer = () => {
  return (
    <>
      <Nav />
      <Background />
      <Container>
        <Home />
        <Projects />
        <About />
      </Container>
    </>
  );
};

export default PageContainer;
