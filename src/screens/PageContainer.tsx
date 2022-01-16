import styled from "styled-components";
import { Nav } from "./Nav/Nav";
import { Home } from "./Home/Home";
import Projects from "./Projects/Projects";

const Background = styled.div.attrs({
  className:
    "w-screen h-screen bg-white dark:bg-neutral-900 fixed transition-colors duration-1000 -z-10",
})``;

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
      </Container>
    </>
  );
};

export default PageContainer;
